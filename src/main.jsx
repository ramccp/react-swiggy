import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Cart from './components/Cart.jsx'
import RestaurantContainer from './components/RestaurantContainer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RestaurantInfo from './components/RestaurantInfo.jsx'

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<RestaurantContainer/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantInfo/>
            }
        ]
    },
    
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
)
