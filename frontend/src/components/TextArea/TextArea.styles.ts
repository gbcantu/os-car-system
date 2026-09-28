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

export const TextAreaField = styled.textarea`
  padding: var(--space-2) var(--space-3);
  border: 1.5px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background-color: var(--surface-input);
  color: var(--color-gray-900);
  resize: vertical;
  min-height: 80px;
  font-family: var(--font-sans);
  transition: border-color var(--transition), box-shadow var(--transition);
  width: 100%;

  &:focus {
    outline: none;
    border-color: var(--border-color-focus);
    box-shadow: 0 0 0 3px var(--color-primary-muted);
  }

  &::placeholder {
    color: var(--color-gray-400);
  }
`;

export default TextAreaField;
