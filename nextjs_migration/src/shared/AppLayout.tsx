import { Outlet } from 'react-router-dom'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'

export default function AppLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-brand-bg">
			<Navbar />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
