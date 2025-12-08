import Hero from "@/components/hero";
import Navbar from "@/components/ui/header";
import Menu from "@/components/CoffeeMenu";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <Menu />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
