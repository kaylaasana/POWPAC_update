import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
// import "./App.css";

// create App component
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
