# OS Car System

Aplicativo desktop para criação e emissão de Ordens de Serviço voltado para o setor automotivo. A interface foi construída com React, TypeScript e Electron, com suporte a pré-visualização e exportação de PDF.

## Sobre o projeto

O OS Car System permite:

- cadastrar dados do cliente e do veículo;
- incluir itens de produto e serviço;
- calcular valores automaticamente;
- gerar uma Ordem de Serviço pronta para impressão ou download em PDF.

## Tecnologias utilizadas

- React 19
- TypeScript 5.8
- Vite 7
- Electron 42
- Electron Builder 26
- React Hook Form
- Zod
- Styled Components
- Lucide React
- html2canvas
- jsPDF

## Estrutura do projeto

- frontend/src/components: componentes visuais da interface
- frontend/src/pages: páginas principais da aplicação
- frontend/src/services: validações e regras de negócio
- frontend/src/utils: utilidades de formatação e geração de PDF
- frontend/electron: processo principal do Electron

## Requisitos

- Node.js 20 ou superior
- npm

## Como executar localmente

1. Entre na pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o aplicativo:
   ```bash
   npm run start
   ```

Esse comando inicia simultaneamente o Vite e o Electron.

## Scripts disponíveis

No diretório frontend, você pode usar:

- `npm run dev` para abrir a aplicação em modo desenvolvimento web
- `npm run start` para rodar o app com Electron
- `npm run build` para gerar a build web
- `npm run dist` para criar o instalador desktop

## Build desktop

Para gerar a versão instalável do aplicativo:

```bash
npm run dist
```

O instalador será gerado na pasta frontend/dist-electron.

