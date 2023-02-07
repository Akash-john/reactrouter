import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Data from "./Data.js";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

//Nav Bar
export const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/data">Data</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
