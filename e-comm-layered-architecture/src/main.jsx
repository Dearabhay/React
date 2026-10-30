import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root')).render(
    
        <Provider store={store}>
            <AppRoutes />
            <ToastContainer/>
        </Provider>
    
)
