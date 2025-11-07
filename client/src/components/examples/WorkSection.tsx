import WorkSection from "../WorkSection";
import { ThemeProvider } from "../ThemeProvider";

export default function WorkSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <WorkSection />
      </div>
    </ThemeProvider>
  );
}
