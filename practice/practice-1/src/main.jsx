import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Api from './api.jsx' 
import Useeffect from './Useeffect.jsx' 
import ImageGallery from './ImageGallery.jsx' 


createRoot(document.getElementById('root')).render(
<>  
  <ImageGallery/>
  <Api/>
    <Useeffect/>
    <App />
</>
)
