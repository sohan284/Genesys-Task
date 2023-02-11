import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Shared/Header/Header';
import Signup from './Pages/Login/Signup';
import RecoverPass from './Pages/Login/RecoverPass';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <Home></Home>
      ),
  },
  {
    path:"login",
    element:(
      <Login></Login>
    )
  },
  {
    path:"recover",
    element:(
     <RecoverPass></RecoverPass>
    )
  },
  {
    path:"signup",
    element:(
      <Signup></Signup>
    )
  }
])
  return (
    <div>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
    
    
    
     )


}

export default App;
