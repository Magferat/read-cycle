import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";

// Auth
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);