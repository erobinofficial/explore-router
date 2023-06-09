import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/Home/Home";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import Main from "./assets/layout/Main";
import NotFoundPage from "./assets/components/NotFoundPage/NotFoundPage";
import FriendDetails from "./assets/components/FriendDetails/FriendDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Home></Home>,
        },
        { path: "about", element: <About></About> },
        { path: "contact", element: <Contact></Contact> },
      ],
    },
    { path: "*", element: <NotFoundPage></NotFoundPage> },
    { path: "/friend/:FriendDetails" ,loader: async({params})=>{
      // console.log(params.FriendDetails);
      return fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendDetails}`)
    }, element: <FriendDetails></FriendDetails>},
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
