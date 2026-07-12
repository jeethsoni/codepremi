import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <WhyUs />
      <Clients />
      <Research />
    </main>
  );
}
