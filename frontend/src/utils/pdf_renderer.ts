import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function sanitizeFileName(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40) || "Cliente";
}

export function buildOsFileName(clientName: string, licensePlate: string) {
  const safeClientName = sanitizeFileName(clientName || "Cliente");
  const safeLicensePlate = sanitizeFileName(licensePlate || "SEM_PLACA");
  const uniqueNumber = `${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")}`;

  return `OS-${safeClientName}-${safeLicensePlate}-${uniqueNumber}.pdf`;
}

async function renderPdf(elementId: string): Promise<jsPDF | null> {
  const element = document.getElementById(elementId);
  if (!element) return null;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  return pdf;
}

export async function generateOSPdfPreview(elementId: string) {
  const pdf = await renderPdf(elementId);
  if (!pdf) return;

  const blob = pdf.output("blob");
  return URL.createObjectURL(blob);
}

/** Gera o blob do PDF sem fazer nada com ele — deixa o caller decidir */
export async function generateOSPdfBlob(elementId: string): Promise<Blob | null> {
  const pdf = await renderPdf(elementId);
  if (!pdf) return null;
  return pdf.output("blob");
}

/** Faz o download do blob como arquivo, permitindo escolher localização quando o navegador suportar */
export async function downloadBlob(blob: Blob, fileName: string) {
  const safeFileName = fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`;

  if (typeof window !== "undefined" && "showSaveFilePicker" in window && typeof window.showSaveFilePicker === "function") {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: safeFileName,
        types: [
          {
            description: "PDF",
            accept: {
              "application/pdf": [".pdf"],
            },
          },
        ],
      });

      const writable = await fileHandle.createWritable();
      await writable.write(blob);
      await writable.close();
      return;
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.warn("Não foi possível usar o seletor de arquivos, usando fallback de download.", error);
      } else {
        return;
      }
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = safeFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
