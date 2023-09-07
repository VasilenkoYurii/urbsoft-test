import { Header } from "./Header/Header";
import { Subscription } from "./Subscription/Subscription";
import { Footer } from "./Footer/Footer";
import { ContactsSection } from "./ContactsSection/ContactsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Subscription />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
