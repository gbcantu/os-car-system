import styled from 'styled-components';

export const HeaderRoot = styled.header`
  background-color: var(--surface-header);
  color: var(--color-white);
  padding: var(--space-1) var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  box-shadow: var(--shadow-lg);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 0;

  @media (max-width: 600px) {
    padding: var(--space-2) var(--space-4);
    gap: var(--space-3);
    justify-content: center;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`;

export const LogoImg = styled.img`
  max-height: 120px;
  max-width: 280px;
  width: auto;
  height: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    max-height: 72px;
    max-width: 180px;
  }
`;

export const LogoFallback = styled.div`
  width: 56px;
  height: 56px;
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--color-white);
  flex-shrink: 0;
`;

export const Divider = styled.div`
  width: 1px;
  height: 48px;
  background-color: var(--color-gray-700);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CompanyName = styled.div`
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.3px;

  @media (max-width: 600px) {
    font-size: var(--text-base);
  }
`;

export const CompanyTagline = styled.div`
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 2px;
`;

export const CompanyInfo = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  justify-content: flex-end;
  font-size: var(--text-sm);
  color: var(--color-gray-300);

  svg {
    color: var(--color-primary);
    flex-shrink: 0;
  }
`;

export default HeaderRoot;
