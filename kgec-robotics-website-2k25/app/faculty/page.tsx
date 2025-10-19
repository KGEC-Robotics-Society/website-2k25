import { motion } from 'framer-motion'

const faculty = [
	{ name: 'Dr. Sourav Kumar Das', role: 'Principal' },
	{ name: 'Dr. Satyendra Nath Mandal', role: 'Chairman' },
	{ name: 'Dr. Sandip Nandi', role: 'Secretary' },
	{ name: 'Dr. Aritra Acharya', role: 'Treasurer' },
]

export default function Faculty() {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<h1 className="robotics-font text-3xl md:text-4xl text-slate-900 text-center">
					<span className="gradient-text">OUR FACULTY BODY</span>
				</h1>
				<p className="text-center text-slate-600 mt-2">Leaders, mentors, and advisors</p>

				<div className="mt-10 space-y-6">
					{faculty.map((f, i) => (
						<motion.div
							key={f.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							whileHover={{ y: -4, scale: 1.01 }}
							className="bg-white border-2 border-purple-200 rounded-2xl p-4 shadow-lg hover:border-green-400 transition-all duration-300 flex items-center gap-4"
						>
							<div className="h-24 w-24 rounded-xl bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 border border-purple-200" />
							<div className="flex-1">
								<div className="font-semibold text-slate-900 robotics-font">{f.name}</div>
								<div className="text-sm text-slate-600 title-font">{f.role}</div>
								<p className="text-sm text-slate-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
							</div>
							<div className="flex items-center gap-3">
								<button className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white text-xs robotics-font">VIEW PROFILE</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
