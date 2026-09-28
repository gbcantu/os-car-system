import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--surface-card);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1.5px solid var(--border-color);
  background-color: var(--color-gray-50);

  @media (max-width: 600px) {
    padding: var(--space-3) var(--space-4);
    gap: var(--space-2);
  }
`;

export const SectionTitle = styled.h2`
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: var(--space-2);

  svg {
    color: var(--color-primary);
  }
`;

/* ── Desktop: tabela normal ── */
export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 500px;
  font-size: var(--text-sm);

  thead tr {
    background-color: var(--surface-table-header);
    color: var(--color-white);
  }

  thead th {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    font-weight: 600;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  thead th.right {
    text-align: right;
  }

  tbody tr {
    border-bottom: 1px solid var(--border-color);
    transition: background-color var(--transition);
  }

  tbody tr:nth-child(even) {
    background-color: var(--surface-table-stripe);
  }

  tbody tr:hover {
    background-color: var(--color-primary-muted);
  }

  tbody td {
    padding: var(--space-2) var(--space-4);
    vertical-align: middle;
  }

  tbody td.right {
    text-align: right;
  }
`;

/* ── Mobile: lista de cards ── */
export const MobileList = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
  }
`;

/* Alterna entre as duas cores do sistema */
const CARD_COLORS = [
  '#27bcdd', /* primário — itens ímpares */
  '#082652', /* azul marinho — itens pares */
];

export const MobileCard = styled.div<{ $index: number }>`
  border: 1.5px solid var(--border-color);
  border-left: 4px solid ${({ $index }) => CARD_COLORS[$index % CARD_COLORS.length]};
  border-radius: var(--border-radius);
  background: var(--surface-input);
  overflow: hidden;
`;

export const MobileCardHeader = styled.div<{ $index: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-3);
  background-color: ${({ $index }) => CARD_COLORS[$index % CARD_COLORS.length]}18;
  border-bottom: 1px solid ${({ $index }) => CARD_COLORS[$index % CARD_COLORS.length]}33;
`;

export const MobileCardIndex = styled.span<{ $index: number }>`
  font-size: var(--text-xs);
  font-weight: 700;
  color: ${({ $index }) => CARD_COLORS[$index % CARD_COLORS.length]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const MobileCardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2) var(--space-3);
  padding: var(--space-3);
`;

export const MobileCardField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MobileCardFieldFull = styled(MobileCardField)`
  grid-column: span 2;
`;

export const MobileCardLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const MobileCardTotal = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  background-color: var(--color-primary-muted);
  border-top: 1px solid var(--border-color);
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-primary);
  font-family: var(--font-mono);
`;

/* ── Inputs compartilhados ── */
export const CellInput = styled.input<{ $hasError?: boolean; $textAlign?: 'left' | 'right' }>`
  height: 34px;
  padding: 0 var(--space-2);
  border: 1.5px solid ${props => (props.$hasError ? '#e74c3c' : 'var(--border-color)')};
  border-radius: var(--border-radius-sm);
  background-color: var(--surface-input);
  color: var(--color-gray-900);
  width: 100%;
  transition: border-color var(--transition);
  font-size: var(--text-sm);
  text-align: ${props => (props.$textAlign === 'right' ? 'right' : 'left')};

  &:focus {
    outline: none;
    border-color: var(--border-color-focus);
    box-shadow: 0 0 0 2px var(--color-primary-muted);
  }
`;

export const CellSelect = styled.select`
  appearance: none;
  cursor: pointer;
  width: 100%;
  height: 34px;
  padding: 0 var(--space-2);
  border: 1.5px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background-color: var(--surface-input);
  color: var(--color-gray-900);
  font-size: var(--text-sm);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%235a5a5a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  transition: border-color var(--transition);

  &:focus {
    outline: none;
    border-color: var(--border-color-focus);
    box-shadow: 0 0 0 2px var(--color-primary-muted);
  }
`;

export const TotalCell = styled.span`
  font-weight: 600;
  color: var(--color-gray-900);
  font-family: var(--font-mono);
  white-space: nowrap;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: var(--space-10);
  color: var(--color-gray-400);
  font-size: var(--text-sm);

  svg {
    margin-bottom: var(--space-3);
    color: var(--color-gray-300);
  }
`;

export const TotalsBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--space-8);
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-gray-50);
  border-top: 1.5px solid var(--border-color);

  @media (max-width: 600px) {
    gap: var(--space-4);
    padding: var(--space-3) var(--space-4);
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const TotalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

export const TotalLabel = styled.span<{ $em?: boolean }>`
  font-size: var(--text-xs);
  color: ${props => (props.$em ? 'var(--color-primary)' : 'var(--color-gray-500)')};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    display: inline;
    margin-right: 4px;
  }
`;

export const TotalValue = styled.span<{ $em?: boolean }>`
  font-size: ${props => (props.$em ? 'var(--text-xl)' : 'var(--text-base)')};
  font-weight: 600;
  color: ${props => (props.$em ? 'var(--color-primary)' : 'var(--color-gray-900)')};
  font-family: var(--font-mono);
`;

export const ErrorMsg = styled.div`
  padding: var(--space-2) var(--space-6);
  font-size: var(--text-xs);
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.05);
  border-top: 1px solid rgba(231, 76, 60, 0.2);
`;

export default Section;

export const HeaderCell = styled.th<{ $width?: string; $align?: 'left' | 'right' }>`
  width: ${props => props.$width ?? 'auto'};
  text-align: ${props => (props.$align === 'right' ? 'right' : 'left')};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #c0392b;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: background var(--transition);

  &:hover {
    background-color: rgba(192, 57, 43, 0.08);
  }
`;
