import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
// layouts
const MainLayout = lazy(() => import("@layouts/main/mainLayout"));
// pages
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Error = lazy(() => import("@pages/Error"));
const Cart = lazy(() => import("@pages/Cart"));
const Register = lazy(() => import("@pages/Register"));
const Wishlist = lazy(() => import("@pages/Wishlist"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback="Loading Please wait"><MainLayout /></Suspense> ,
    errorElement:<Suspense fallback="Loading Please wait"><Error /></Suspense> ,
    children: [
      {
        index: true,
        element:<Suspense fallback="Loading Please wait"><Home /></Suspense> ,
      },
      {
        path: "cart",
        element: <Suspense fallback="Loading Please wait"><Cart /></Suspense>,
      },
      {
        path: "wishlist",
        element:<Suspense fallback="Loading Please wait"><Wishlist /></Suspense> ,
      },
      {
        path: "categories",
        element:<Suspense fallback="Loading Please wait"><Categories /></Suspense> ,
      },
      {
        path: "categories/products/:prefix",
        element:<Suspense fallback="Loading Please wait"><Products /></Suspense> ,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element:<Suspense fallback="Loading Please wait"><AboutUs /></Suspense> ,
      },
      {
        path: "login",
        element:<Suspense fallback="Loading Please wait"><Login /></Suspense> ,
      },
      {
        path: "register",
        element:<Suspense fallback="Loading Please wait"><Register /></Suspense> ,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;