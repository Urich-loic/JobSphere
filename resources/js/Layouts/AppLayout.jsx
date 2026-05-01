import ApplicationLogo from '@/Components/ApplicationLogo'
import Footer from '@/Components/Footer';
import Navbar from '@/Components/NavBar';
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function AppLayout({children}) {
        const user = usePage().props.auth.user;

    
        const [showingNavigationDropdown, setShowingNavigationDropdown] =
            useState(false);
  return (
    <div className="min-h-screen">
            <Navbar/>
             <main>{children}</main>
             <Footer/>
            </div>       
  )
}
