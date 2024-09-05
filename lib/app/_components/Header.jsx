import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../components/ui/logo.jsx'
const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },

        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },

        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        },
    ]
    return (
        <div className='flex items-start justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
               <div className='pb-9 '> <Logo /></div>

                <ul className='text-secondary md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path}>
                        <li key={index} className='hover:text-primary
                        cursor-pointer hover:scale-105 
                        tarsition-all ease-in-out pb-9'>{item.name}</li>
                        </Link>
                        ))
                    }
                </ul>
            </div >
            <Button>Book Now</Button>
        </div>
    )
}

export default Header