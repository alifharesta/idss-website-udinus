import { Outlet } from 'react-router-dom' 
import Sidebar from './Sidebar'
import NavbarAdmin from './NavbarAdmin'
import Breadcrumb from './Breadcrumb'

export default function Dashboard() {
  return (
    <>
    <Sidebar />
    <main className="md:w-full lg:w-4/5 xl:w-[1140px] xl:ml-[300px] relative z-30 grow flex-col justify-center lg:ml-[20%]">
                    <NavbarAdmin/>
                    <section className="xl:mx-[42px] mx-auto lg:mx-8 xl:py-6 lg:py-5 md:p-3 sm:p-2 space-y-6 flex-col justify-center bg-white min-h-screen">
                        <Breadcrumb/>
                        <Outlet/>
                    </section>
                </main>
    </>
  )
}
