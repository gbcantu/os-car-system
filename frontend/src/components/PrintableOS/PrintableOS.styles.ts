import styled from 'styled-components';

export const PrintWrapper = styled.div`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 12mm 14mm;
  box-sizing: border-box;

  background: #fff;
  color: #1a1a1a;

  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 9pt;
  line-height: 1.4;

  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;

  @media screen {
    position: absolute;
    left: -9999px;
    top: 0;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding-bottom: 8px;
  margin-bottom: 6px;
  border-bottom: 2px solid #1a1a1a;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const LogoImg = styled.img`
  width: 8rem;
  height: 7rem;
  object-fit: contain;
`;

export const CompanyName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.1;
`;

export const CompanyTagline = styled.div`
  margin-top: 2px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #555;
`;

export const CompanyAddress = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #333;
  line-height: 1.5;
`;

export const CompanyInfo = styled.div`
  text-align: right;
  line-height: 1.6;
  color: #333;
`;

export const OsTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 6px;
  background: #d0d0d0;
  border: 1px solid #aaa;
  font-size: 10pt;
  font-weight: 700;
  color: #1a1a1a;
`;

export const OsTitleCenter = styled.div`
  text-align: center;
  font-size: 9pt;
`;

export const OsTitleRight = styled.div`
  text-align: right;
  font-size: 9pt;
  font-weight: 400;
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-bottom: 0;
  border: 1px solid #aaa;
  border-bottom: none;
`;

export const MetaBox = styled.div`
  padding: 4px 6px;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  background: #fff;
  &:last-child { border-right: none; }
`;

export const MetaLabel = styled.span`
  display: block;
  font-size: 7.5pt;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1px;
`;

export const MetaValue = styled.span`
  font-size: 9pt;
  font-weight: 400;
  color: #1a1a1a;
`;

export const Section = styled.div`
  margin-bottom: 0;
  border: 1px solid #aaa;
  border-top: none;
  break-inside: avoid;
  page-break-inside: avoid;
`;

export const SectionTitle = styled.div`
  padding: 4px 8px;
  margin-bottom: 0;
  background: #c8c8c8;
  font-size: 9pt;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #1a1a1a;
  border-bottom: 1px solid #aaa;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
`;

export const InfoItem = styled.div`
  padding: 4px 6px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: #fff;
  &:last-child { border-right: none; }
`;

export const InfoItemWide = styled(InfoItem)`
  grid-column: span 2;
`;

export const InfoLabel = styled.span`
  display: block;
  font-size: 7.5pt;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1px;
`;

export const InfoValue = styled.span`
  font-size: 9pt;
  color: #1a1a1a;
  word-break: break-word;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  font-size: 9pt;

  thead { background: #e8e8e8; }

  th { padding: 5px 6px; font-size: 8.5pt; font-weight: 700; text-align: left; color: #1a1a1a; border: 1px solid #aaa; }
  td { padding: 4px 6px; color: #1a1a1a; border: 1px solid #ddd; vertical-align: middle; }
`;

export const Right = styled.div`text-align: right;`;
export const Center = styled.div`text-align: center;`;

export const TypeBadge = styled.span`
  display: inline-block;
  padding: 1px 6px;
  border-radius: 2px;
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TypeBadgeServico = styled(TypeBadge)`
  background: #f0f0f0;
  color: #333;
  border: 1px solid #bbb;
`;

export const TypeBadgeProduto = styled(TypeBadge)`
  background: #f0f0f0;
  color: #555;
  border: 1px solid #bbb;
`;

export const TotalsSection = styled.div<{ hasDiscount?: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasDiscount }) => (hasDiscount ? "1fr 1fr" : "1fr")};
  gap: 0;
  border: 1px solid #aaa;
  border-top: none;
`;

export const TotalBox = styled.div`
  padding: 6px 10px;
  text-align: center;
  border-right: 1px solid #aaa;
  background: #fff;
  &:last-child { border-right: none; }
`;

export const TotalBoxLabel = styled.span`
  display: block;
  font-size: 8pt;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2px;
`;

export const TotalBoxValue = styled.span`
  font-size: 10pt;
  font-weight: 700;
  color: #1a1a1a;
`;

export const Observations = styled.div`
  min-height: 40px;
  padding: 6px 8px;
  background: #fff;
  border: 1px solid #aaa;
  border-top: none;
  color: #1a1a1a;
  font-size: 9pt;
  line-height: 1.6;
`;

export const Footer = styled.div`
  margin-top: 8px;
`;

export default PrintWrapper;
