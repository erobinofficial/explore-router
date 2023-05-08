import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/Home/Home";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import Main from "./assets/layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "contact", element: <Contact></Contact> }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
