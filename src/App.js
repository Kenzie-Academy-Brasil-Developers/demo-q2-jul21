import { ToastContainer } from "react-toastify";
import "./app.css";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";

function App() {
  return [
    <Routes />,
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />,
  ];
}
export default App;
