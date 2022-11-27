import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Capsules from "../pages/capsules/capsules";
import Cores from "../pages/cores/cores";
import Dragons from "../pages/dragons/dragons";
import Histories from "../pages/histories/histories";
import Home from "../pages/home/home";
import Landpads from "../pages/landpads/landpads";
import Launches from "../pages/launches/launches";
import Missions from "../pages/missions/missions";
import Payloads from "../pages/payloads/payloads";
import Rockets from "../pages/rockets/rockets";
import Ships from "../pages/ships/ships";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/capsules",
    element: <Capsules />,
  },
  {
    path: "/cores",
    element: <Cores />,
  },
  {
    path: "/dragons",
    element: <Dragons />,
  },
  {
    path: "/histories",
    element: <Histories />,
  },
  {
    path: "/landpads",
    element: <Landpads />,
  },
  {
    path: "/launches",
    element: <Launches />,
  },
  {
    path: "/missions",
    element: <Missions />,
  },
  {
    path: "/payloads",
    element: <Payloads />,
  },
  {
    path: "rockets",
    element: <Rockets />,
  },
  {
    path: "ships",
    element: <Ships />,
  },
]);

export { router };
