import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='bg-yellow-300'>
    <ul className='flex list-none gap-2'>
        <li>
            <Link href="/dashboard" className='px-4 py-2 inline-block'>HOme</Link>
        </li>
        <li><Link href="/dashboard/profile" className='px-4 py-2 inline-block'>Profle</Link></li>
        <li>
            <Link href="/dashboard/contact" className='px-4 py-2 inline-block'>Contact</Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar