import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import BookList from "./components/BookList.jsx"
import BookDetails from './components/BookDetails.jsx'
import Demo from './components/Demo.jsx'
import Memo from './components/Memo.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const About = lazy(()=> import('./components/About.jsx'));
const Contact = lazy(()=> import('./components/Contact.jsx'));

//Create Router Configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <BookList />
      },
      {
        path: '/about',
        element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
      },
      {
        path: '/contact',
        element: <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>
      },
      {
        path: '/demo',
        element: <Demo />
      },
      {
        path: '/memo',
        element: <Memo />
      },
      {
        path: '/Book/:id',
        element: <BookDetails />
      }
    ],
    errorElement: <Error />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
