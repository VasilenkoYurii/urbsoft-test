import { Toaster } from "react-hot-toast";

import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { Marketable } from "./Marketable/Marketable";
import { Subscription } from "./Subscription/Subscription";
import { ContactsSection } from "./ContactsSection/ContactsSection";
import { Parnters } from "./Parnters/Partners";
import { Footer } from "./Footer/Footer";

import { Slider } from "./Slider/Slider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marketable />
        <Subscription />
        <ContactsSection />
        <Parnters />
        <Slider />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
