import "./App.css";
import { Layout } from "./components/layout/Layout.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "./components/Routes/Routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
    </Layout>
  );
}

export default App;
