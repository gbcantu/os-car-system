# OS Car System

Desktop application for creating and issuing Service Orders aimed at the automotive sector. The interface was built with React, TypeScript, and Electron, with support for preview and PDF export.

## About the project

OS Car System allows you to:

- register customer and vehicle data;
- include product and service items;
- calculate values automatically;
- generate a Service Order ready for printing or PDF download.

## Technologies used

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

## Project structure

- frontend/src/components: visual interface components
- frontend/src/pages: main application pages
- frontend/src/services: validations and business rules
- frontend/src/utils: formatting and PDF generation utilities
- frontend/electron: Electron main process

## Requirements

- Node.js 20 or higher
- npm

## How to run locally

1. Enter the frontend folder:
   ```bash
   cd frontend
