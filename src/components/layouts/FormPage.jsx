import "./NavbarAdmin.jsx"
import { Outlet } from 'react-router-dom'

export default function FormPage() {
  return (
    <div className="mx-auto">
    <Outlet />  
    </div> 
  )
}
