import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Error from "@pages/Error";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback/PageSuspenseFallback";
// layouts
const MainLayout = lazy(() => import("@layouts/main/mainLayout"));
// pages
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Cart = lazy(() => import("@pages/Cart"));
const Register = lazy(() => import("@pages/Register"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<LottieHandler type="loading" message="loading please wait.."/>}><MainLayout /></Suspense> ,
    errorElement:<Error /> ,
    children: [
      {
        index: true,
        element:<PageSuspenseFallback><Home /></PageSuspenseFallback> ,
      },
      {
        path: "cart",
        element: <PageSuspenseFallback><Cart /></PageSuspenseFallback>,
      },
     
      {
        path: "wishlist",
        element:<PageSuspenseFallback><Wishlist /></PageSuspenseFallback> ,
      },
      {
        path: "categories",
        element:<PageSuspenseFallback><Categories /></PageSuspenseFallback> ,
      },
      {
        path: "categories/products/:prefix",
        element:<PageSuspenseFallback><Products /></PageSuspenseFallback> ,
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
        element:<PageSuspenseFallback><AboutUs /></PageSuspenseFallback> ,
      },
      {
        path: "login",
        element:<PageSuspenseFallback><Login /></PageSuspenseFallback> ,
      },
      {
        path: "register",
        element:<PageSuspenseFallback><Register /></PageSuspenseFallback> ,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;