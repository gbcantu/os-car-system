import logo from "@/assets/logo.png";
import {
  HeaderRoot,
  LogoSection,
  LogoImg,
  LogoFallback,
  Divider,
  CompanyName,
  CompanyTagline,
} from './Header.styles';

export function Header() {
  return (
    <HeaderRoot>
      <LogoSection>
        <LogoImg
          src={logo}
          alt="OS Car System"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <LogoFallback style={{ display: "none" }}>OS</LogoFallback>
        <Divider />
        <div>
          <CompanyName>OS Car System</CompanyName>
          <CompanyTagline>Ordem de Serviço</CompanyTagline>
        </div>
      </LogoSection>
    </HeaderRoot>
  );
}