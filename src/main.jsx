import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='elipses'>
     <div className="ellipse ellipse1"></div>
            <div className="ellipse ellipse2"></div>
     </div>
    <App className='body'/>
  </React.StrictMode>,
)
