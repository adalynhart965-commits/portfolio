import ServicesSection from "../ServicesSection";
import { ThemeProvider } from "../ThemeProvider";

export default function ServicesSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <ServicesSection />
      </div>
    </ThemeProvider>
  );
}
