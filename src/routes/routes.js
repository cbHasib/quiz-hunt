import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import SingleBlog from "../components/Blog/SingleBlog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Question from "../components/Question/Question";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        loader: async () => fetch("/blog.json"),
        element: <Blog></Blog>,
      },
      {
        path: "/blog/post/:postSlug",
        loader: async ({ params }) => {
          return fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => data.find((blog) => blog.slug === params.postSlug))
            .catch((error) => console.log(error));
        },
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/statistics",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Question></Question>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
