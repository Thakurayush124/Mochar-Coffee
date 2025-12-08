import Hero from "@/components/hero";
import Navbar from "@/components/ui/header";
import Menu from "@/components/CoffeeMenu";
import Footer from "@/components/ui/Footer";
import WhiteSpace from "@/components/ui/whiteSpace";
import CatchUs from "@/components/catch-us";

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
        <WhiteSpace />
      </section>

      <section>
        <Menu />
      </section>

      <section>
        <CatchUs />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
