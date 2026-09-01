import styled from "styled-components";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.metrics.spacing.sm};
`;

const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.display};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.metrics.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }
`;

const Description = styled.p`
  max-width: 720px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
  return (
    <Wrapper>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default PageHeader;
