import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
