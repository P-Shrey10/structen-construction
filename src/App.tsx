import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
