import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}
