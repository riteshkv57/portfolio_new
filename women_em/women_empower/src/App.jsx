import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Upheader from './components/Upheader.jsx';
import Login from './components/Login.jsx';
import Bfoot from './components/Bfoot.jsx';
import Home from './components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Chatbot from './components/Chatbot.jsx';
import Signup from './components/emer.jsx';
import './App.css'

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element: <><Upheader /><Header /><Home /><Banner /><Footer /><Bfoot /><Chatbot /></>
  },
  {
    path:"/login",
    element: <><Login /></>
  },
  {
    path:"/contactus",
    element: <><Upheader /><Header /><Footer /><Bfoot /><Chatbot /></>
  },
])






  return (
    <>
    {/* <Upheader />
      <Header />
      <Login />
      <Footer />
      <Bfoot /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
