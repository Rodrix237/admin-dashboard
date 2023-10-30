import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
