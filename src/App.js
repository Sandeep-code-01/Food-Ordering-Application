import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import './index.css'; // Tailwind import
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, setReactRouterFutureFlags } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// ✅ Opt-in to React Router v7 future flags to silence warnings
setReactRouterFutureFlags({
  v7_startTransition: true,
  v7_relativeSplatPath: true
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: "sandeep kumar" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

        {/* Fixed Header */}
        <Header />

        {/* Routed content */}
        <div className="pt-24 pb-10 px-4 max-w-7xl mx-auto transition-opacity duration-500 ease-in opacity-100">
          <Outlet />
        </div>

      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <h1 className="text-xl font-semibold text-gray-500">Loading...</h1>
            </div>
          }>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <h1 className="text-xl font-semibold text-gray-500">Loading...</h1>
            </div>
          }>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
