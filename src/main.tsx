import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./routes/home/Home"
import { Form } from "./routes/form/Form"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/form",
    element: <Form />,
  },
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
