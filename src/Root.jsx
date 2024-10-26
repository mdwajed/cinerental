import Cinelists from "./movie/Movielist";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ThemeContext } from "./contex/Provider";

const Root = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] ">
        <Sidebar />
        <Cinelists />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
