import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./index.css";
import { UserAcess } from './routes/userAcess/userAcess.tsx';
import { NewProduct } from './routes/newProduct/newProduct.tsx';
import Cart from './routes/cart/cart.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
  },
  {
    path: "/acess",
    element:   <UserAcess />,
  },
  {
    path: "/new-product",
    element:   <NewProduct />,
  },
  {
    path: "/cart",
    element:   <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
