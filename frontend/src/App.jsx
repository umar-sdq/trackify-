import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUpForm from './components/SignUpForm/SignUpForm.jsx'
// import LoginForm from './components/LoginForm/LoginForm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout.jsx'
function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/settings", element: <Settings /> },
      { path: "/help", element: <Help /> },
      // { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <SignUpForm /> } 
    ]
  }
    
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
