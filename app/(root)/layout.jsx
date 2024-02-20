import React from 'react'
import Sidebar from '@/components/shared/navbar/Sidebar'
import MobileNav from '@/components/shared/navbar/MobileNav'

const Layout = ({children}) => {
  return (
    <main className="root">
    <Sidebar />
     <MobileNav /> 

    <div className="root-container">
      <div className="wrapper">
        {children}
      </div>
    </div>
    
    {/* <Toaster /> */}
  </main>
  )
}

export default Layout

{/* 
  <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      
      <Toaster />
    </main>
*/}