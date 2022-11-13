import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog.jsx';
import Categories from './components/Categories/Categories';
import Collections from './components/Collections/Collections';
import Test from './components/Collections/Test';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';

function App() {

const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children:[
     {
      path:'home',
      element:<Home></Home>
     },
     {
      path:'shop',
      element:<Shop></Shop>
     },
     {
      path:'collections',
      element:<Collections></Collections>,     
      
     },
     {
      path:'categories',
      element:<Categories></Categories>,
      children:[
        {
          path: '/categories/test',
          element:<Test></Test>
        }
      ]
    },
    {
      path:'blog',
      element:<Blog></Blog>,
    }

    ]
  }

])


  return (
    <div className='text-center'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
