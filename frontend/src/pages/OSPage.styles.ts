import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--surface-bg);
`;

export const Content = styled.div`
  flex: 1;
  padding: var(--space-6) var(--space-8);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);

  @media (max-width: 900px) {
    padding: var(--space-4);
  }

  @media (max-width: 600px) {
    padding: var(--space-3);
    gap: var(--space-3);
  }
`;

export const OrderMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface-card);
  border-radius: var(--border-radius-lg);
  padding: var(--space-4) var(--space-6);
  box-shadow: var(--shadow-sm);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
  }
`;

export const OrderMetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);

  @media (max-width: 600px) {
    gap: var(--space-3);
  }
`;

export const OrderBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const OrderBadgeLabel = styled.span`
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const OrderBadgeValue = styled.span`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary);
  font-family: var(--font-mono);
`;

export const MetaDivider = styled.div`
  width: 1px;
  height: 40px;
  background-color: var(--border-color);
`;

export const Card = styled.div`
  background-color: var(--surface-card);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: var(--space-4) var(--space-6);
  border-bottom: 1.5px solid var(--border-color);
  background-color: var(--color-gray-50);
`;

export const CardTitle = styled.h2`
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  gap: var(--space-2);

  svg { color: var(--color-primary); }
`;

export const CardBody = styled.div<{ columns?: string }>`
  padding: var(--space-6);
  display: grid;
  grid-template-columns: ${({ columns }) => columns ?? "1fr"};
  gap: var(--space-4);

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: var(--space-3) var(--space-4);
    gap: var(--space-3);
  }
`;

export const MetaDateWrapper = styled.div`
  max-width: 220px;

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MetaInfoText = styled.span`
  font-size: var(--text-xs);
  color: var(--color-gray-400);
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const Span2 = styled.div`
  grid-column: span 2;

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) 0 var(--space-6);

  @media (max-width: 600px) {
    flex-direction: column;
    padding: var(--space-3) 0 var(--space-4);

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const FormError = styled.div`
  background-color: rgba(231, 76, 60, 0.08);
  border: 1px solid rgba(231, 76, 60, 0.3);
  border-radius: var(--border-radius);
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-sm);
  color: #c0392b;
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
`;

export default Page;
