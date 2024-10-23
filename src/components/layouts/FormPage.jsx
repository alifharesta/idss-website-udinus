import "./NavbarAdmin.jsx"
import { Outlet } from 'react-router-dom'
import NavbarAdmin from "./NavbarAdmin.jsx"

export default function FormPage() {
  return (
    <div className="mx-auto">
    <Outlet />  
    </div> 
  )
}
