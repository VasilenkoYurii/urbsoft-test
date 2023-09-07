import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
