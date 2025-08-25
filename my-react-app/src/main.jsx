import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ControlledComponent from './Controlled_Components.jsx'
import UncontrolledForm from './Uncontrolled_Components.jsx'
import useEffect from './useEffect.jsx'
import UseEffect from "./useEffect.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ControlledComponent />
      <UncontrolledForm />
      <UseEffect />
  </StrictMode>,
)
