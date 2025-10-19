"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

    const NavbarItems = [
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' },
        { name: 'Projects', path: '/projects' },
        { name: 'Events', path: '/events' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Admin', path: '/admin' },
    ]

    const Router = useRouter();
    const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md border-b border-purple-200/30 bg-white/80 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<div onClick={()=>Router.push('/')} className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 shadow-lg" />
					<span className="font-semibold text-slate-900">KGEC Robotics Society</span>
				</div>
				
				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<ul className='flex gap-12 p-3'>
                        {NavbarItems.map((item) => (
                            <li key={item.name} onClick={() => Router.push(`${item.path}`)} className={`cursor-pointer ${pathname === item.path ? 'text-purple-600 font-medium' : 'text-slate-600 hover:text-purple-600'}`}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
				</nav>

				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
				>
					<svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isMenuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-200/30">
					<nav className="px-4 py-4 space-y-3">
						<ul className='flex gap-12 p-3'>
                        {NavbarItems.map((item) => (
                            <li key={item.name} onClick={() => Router.push(`${item.path}`)} className={pathname === item.path ? 'text-purple-600 font-medium' : 'text-slate-600 hover:text-purple-600 transition-colors duration-300'}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
					</nav>
				</div>
			)}
		</header>
	)
}

