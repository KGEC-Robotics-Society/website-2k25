import { motion } from 'framer-motion'

export default function Admin() {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<h2 className="text-3xl font-semibold text-slate-900">Admin Panel</h2>
				<p className="mt-4 text-slate-600">Role-based access and CRUD management for the KGEC Robotics Society.</p>
				<div className="mt-8 grid md:grid-cols-3 gap-6">
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 hover:border-green-400 transition-all duration-300"
					>
						<div className="font-semibold text-slate-900 text-lg">Projects Management</div>
						<p className="mt-2 text-sm text-slate-600">Manage ongoing and completed projects</p>
						<button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
							Add Project
						</button>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 hover:border-green-400 transition-all duration-300"
					>
						<div className="font-semibold text-slate-900 text-lg">Events Management</div>
						<p className="mt-2 text-sm text-slate-600">Organize hackathons, workshops, and competitions</p>
						<button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
							Add Event
						</button>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 hover:border-green-400 transition-all duration-300"
					>
						<div className="font-semibold text-slate-900 text-lg">Team Management</div>
						<p className="mt-2 text-sm text-slate-600">Update team members and their roles</p>
						<button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
							Add Member
						</button>
					</motion.div>
				</div>

				{/* Quick Stats */}
				<section className="mt-12">
					<h3 className="text-xl font-semibold text-slate-800 mb-6">Quick Stats</h3>
					<div className="grid md:grid-cols-4 gap-6">
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="bg-white border-2 border-blue-200 rounded-xl p-4 text-center hover:border-green-400 transition-all duration-300"
						>
							<div className="text-2xl font-bold text-blue-600">12</div>
							<div className="text-sm text-slate-600">Active Projects</div>
						</motion.div>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="bg-white border-2 border-green-200 rounded-xl p-4 text-center hover:border-blue-400 transition-all duration-300"
						>
							<div className="text-2xl font-bold text-green-600">8</div>
							<div className="text-sm text-slate-600">Upcoming Events</div>
						</motion.div>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="bg-white border-2 border-blue-200 rounded-xl p-4 text-center hover:border-green-400 transition-all duration-300"
						>
							<div className="text-2xl font-bold text-blue-600">23:47</div>
							<div className="text-sm text-slate-600">Next Event (Hours)</div>
						</motion.div>
						<motion.div 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="bg-white border-2 border-green-200 rounded-xl p-4 text-center hover:border-blue-400 transition-all duration-300"
						>
							<div className="text-2xl font-bold text-green-600">45</div>
							<div className="text-sm text-slate-600">Total Members</div>
						</motion.div>
					</div>
				</section>
			</div>
		</div>
	)
}
