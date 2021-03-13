import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <div className="">
      <Header />
      <main className="py-3">
        <Container>
          <h2>Welocome to ProShop</h2>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
