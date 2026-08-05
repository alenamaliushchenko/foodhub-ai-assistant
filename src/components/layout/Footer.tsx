import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <p className="text-sm text-slate-500">
            © 2026 FoodHub AI Assistant
          </p>

          <p className="text-sm text-slate-500">
            Built with Next.js
          </p>
        </div>
      </Container>
    </footer>
  );
}