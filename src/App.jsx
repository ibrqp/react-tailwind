import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Sket from "./components/Sket";
import ContactMe from "./components/ContactMe";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Navbar page={page} setPage={setPage} />

      {page === "Home" && <Home />}
      {page === "About Me" && <AboutMe />}
      {page === "Sketches" && <Sket />}
      {page === "Contact" && <ContactMe />}
    </>
  );
}

export default App;
