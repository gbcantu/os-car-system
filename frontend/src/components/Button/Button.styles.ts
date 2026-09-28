import styled from 'styled-components';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

export const StyledButton = styled.button<{
  $variant?: Variant;
  $size?: Size;
}>
`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: var(--text-sm);
  cursor: pointer;
  transition: background-color var(--transition), box-shadow var(--transition),
    transform var(--transition);
  white-space: nowrap;
  user-select: none;

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Variants */
  ${props =>
    props.$variant === 'primary' &&
    `
    background-color: var(--color-primary);
    color: var(--color-white);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-dark);
      box-shadow: var(--shadow-md);
    }
  `}

  ${props =>
    props.$variant === 'secondary' &&
    `
    background-color: var(--color-gray-200);
    color: var(--color-gray-800);

    &:hover:not(:disabled) {
      background-color: var(--color-gray-300);
    }
  `}

  ${props =>
    props.$variant === 'ghost' &&
    `
    background-color: transparent;
    color: var(--color-primary);
    border: 1.5px solid var(--color-primary);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-muted);
    }
  `}

  ${props =>
    props.$variant === 'danger' &&
    `
    background-color: transparent;
    color: #c0392b;
    border: 1.5px solid #c0392b;

    &:hover:not(:disabled) {
      background-color: rgba(192, 57, 43, 0.08);
    }
  `}

  /* Sizes */
  ${props =>
    props.$size === 'sm' &&
    `
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
  `}

  ${props =>
    props.$size === 'lg' &&
    `
    padding: var(--space-3) var(--space-8);
    font-size: var(--text-base);
  `}
`;

export default StyledButton;
