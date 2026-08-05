import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8">
            <Navigation />
            <HeaderActions />
          </div>
        </div>
      </Container>
    </header>
  );
}