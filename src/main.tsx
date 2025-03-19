import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { RootLayout } from "./layout/RootLayout.tsx"; 
import { UserAcess } from "./routes/userAcess/userAcess.tsx";
import { NewProduct } from "./routes/newProduct/newProduct.tsx";
import Cart from "./routes/cart/cart.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // O contexto agora envolve todas as rotas
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <UserAcess /> },
      { path: "/new-product", element: <NewProduct /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);