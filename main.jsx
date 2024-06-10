import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";


// import pages and bootstrap
import AboutUs from "./pages/AboutUs.jsx";
import Archives from "./pages/Archives.jsx";
import Auditions from "./pages/Auditions.jsx";
import Home from "./pages/Home.jsx";
import Tickets from "./pages/Tickets.jsx";
import ErrorPage from "./pages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// create the router structure

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/tickets',
        element: <Tickets />
      },
      {
        path: '/auditions',
        element: <Auditions />
      },
      {
        path: '/archives',
        element: <Archives />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ]
  }

])

// render the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}/>
)
