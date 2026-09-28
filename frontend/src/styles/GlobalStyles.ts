import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* Variables (migrated from variables.css) */
:root {
  --color-primary: #27bcdd;
  --color-primary-dark: #1a9ab8;
  --color-primary-light: #45cce8;
  --color-primary-muted: rgba(39, 188, 221, 0.08);

  --color-black: #082652;
  --color-gray-900: #082652;
  --color-gray-800: #0d3a7a;
  --color-gray-700: #1a4d99;
  --color-gray-600: #5a5a5a;
  --color-gray-500: #7a7a7a;
  --color-gray-400: #9e9e9e;
  --color-gray-300: #c4c4c4;
  --color-gray-200: #e0e0e0;
  --color-gray-100: #f2f2f2;
  --color-gray-50: #f8f8f8;
  --color-white: #ffffff;

  --color-metal: #8a8a8a;
  --color-metal-light: #b0b0b0;

  --surface-bg: #f4f4f5;
  --surface-card: #ffffff;
  --surface-header: #082652;
  --surface-input: #ffffff;
  --surface-table-header: #082652;
  --surface-table-stripe: #f9f9f9;

  --border-color: #e0e0e0;
  --border-color-focus: #27bcdd;
  --border-radius-sm: 4px;
  --border-radius: 8px;
  --border-radius-lg: 12px;

  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.10);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);

  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.9375rem;
  --text-lg: 1.0625rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  --transition: 150ms ease;
}

/* Global styles (migrated from global.css) */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-gray-900);
  background-color: var(--surface-bg);
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-gray-100);
}
::-webkit-scrollbar-thumb {
  background: var(--color-gray-300);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-400);
}

:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

input,
textarea,
select,
button {
  font-family: inherit;
  font-size: inherit;
}

@media print {
  body > #root {
    display: none !important;
  }

  #printable-os {
    display: block !important;
  }

  @page {
    size: A4;
    margin: 15mm 15mm 20mm 15mm;
  }
}
`;

export default GlobalStyles;
