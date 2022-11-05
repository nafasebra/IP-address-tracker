import Footer from "./components/Footer";
import Main from "./components/Main";
import { AddressProvider } from "./context/AddressContext";

function App() {
  return (
    <>
      <AddressProvider>
        <Main />
      </AddressProvider>
      <Footer />
    </>
  );
}

export default App;
