import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md border-b border-purple-200/30 bg-white/80 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 shadow-lg" />
					<span className="font-semibold text-slate-900">KGEC Robotics Society</span>
				</Link>
				
				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<NavLink to="/" end className={({isActive})=>isActive?"text-purple-600 font-medium":"text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Home</NavLink>
					<NavLink to="/team" className={({isActive})=>isActive?"text-blue-600 font-medium":"text-slate-600 hover:text-blue-600 transition-colors duration-300"}>Team</NavLink>
					<NavLink to="/projects" className={({isActive})=>isActive?"text-green-600 font-medium":"text-slate-600 hover:text-green-600 transition-colors duration-300"}>Projects</NavLink>
					<NavLink to="/events" className={({isActive})=>isActive?"text-purple-600 font-medium":"text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Events</NavLink>
					<NavLink to="/faculty" className={({isActive})=>isActive?"text-purple-600 font-medium":"text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Faculty</NavLink>
					<NavLink to="/alumni" className={({isActive})=>isActive?"text-blue-600 font-medium":"text-slate-600 hover:text-blue-600 transition-colors duration-300"}>Alumni</NavLink>
					<NavLink to="/admin" className={({isActive})=>isActive?"text-green-600 font-medium":"text-slate-600 hover:text-green-600 transition-colors duration-300"}>Admin</NavLink>
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
						<NavLink to="/" end onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-purple-600 font-medium":"block py-2 text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Home</NavLink>
						<NavLink to="/team" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-blue-600 font-medium":"block py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"}>Team</NavLink>
						<NavLink to="/projects" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-green-600 font-medium":"block py-2 text-slate-600 hover:text-green-600 transition-colors duration-300"}>Projects</NavLink>
						<NavLink to="/events" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-purple-600 font-medium":"block py-2 text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Events</NavLink>
						<NavLink to="/faculty" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-purple-600 font-medium":"block py-2 text-slate-600 hover:text-purple-600 transition-colors duration-300"}>Faculty</NavLink>
						<NavLink to="/alumni" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-blue-600 font-medium":"block py-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"}>Alumni</NavLink>
						<NavLink to="/admin" onClick={() => setIsMenuOpen(false)} className={({isActive})=>isActive?"block py-2 text-green-600 font-medium":"block py-2 text-slate-600 hover:text-green-600 transition-colors duration-300"}>Admin</NavLink>
					</nav>
				</div>
			)}
		</header>
	)
}
