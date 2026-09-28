import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

export const Label = styled.label`
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-gray-700);
`;

export const SelectField = styled.select`
  height: 38px;
  padding: 0 var(--space-3);
  border: 1.5px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background-color: var(--surface-input);
  color: var(--Color-gray-900);
  cursor: pointer;
  transition: border-color var(--transition), box-shadow var(--transition);
  width: 100%;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a5a5a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  padding-right: var(--space-8);

  &:focus {
    outline: none;
    border-color: var(--border-color-focus);
    box-shadow: 0 0 0 3px var(--color-primary-muted);
  }
`;

export default SelectField;
