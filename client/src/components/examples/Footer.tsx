import Footer from "../Footer";
import { ThemeProvider } from "../ThemeProvider";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen flex items-end">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
