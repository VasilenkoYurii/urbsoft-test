import { Toaster } from "react-hot-toast";

import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { Marketable } from "./Marketable/Marketable";
import { Subscription } from "./Subscription/Subscription";
import { Footer } from "./Footer/Footer";
import { ContactsSection } from "./ContactsSection/ContactsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marketable />
        <Subscription />
        <ContactsSection />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
