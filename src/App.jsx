import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="outlet">
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
