import { motion } from 'framer-motion'

const timelineMonths = [
	{ month: 'January', color: 'blue' },
	{ month: 'March', color: 'green' },
	{ month: 'May', color: 'blue' },
	{ month: 'August', color: 'green' },
	{ month: 'October', color: 'blue' },
	{ month: 'December', color: 'green' },
]

const sampleEvents = [
	{ title: 'Robotics Hackathon 2024', type: 'Hackathon', date: '2024-03-15', status: 'upcoming' },
	{ title: 'AI Workshop Series', type: 'Workshop', date: '2024-01-20', status: 'completed' },
	{ title: 'Robotics Competition', type: 'Competition', date: '2024-05-10', status: 'upcoming' },
	{ title: 'Tech Expo', type: 'Competition', date: '2024-08-25', status: 'upcoming' },
	{ title: 'Innovation Summit', type: 'Other', date: '2024-10-05', status: 'upcoming' },
	{ title: 'Annual Meet', type: 'Other', date: '2024-12-15', status: 'upcoming' },
]

export default function Events() {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<h2 className="robotics-font text-3xl text-slate-900">Events</h2>
				<p className="mt-4 text-slate-600">Discover hackathons, workshops, competitions, and more.</p>

				{/* Horizontal Timeline */}
				<section className="mt-12">
					<h3 className="text-xl font-semibold text-slate-800 mb-8">Event Timeline</h3>
					<div className="relative">
						<div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-full" />
						<div className="grid grid-cols-6 gap-4">
							{timelineMonths.map((item, index) => (
								<motion.div
									key={item.month}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="relative"
								>
									<div className={`w-4 h-4 mx-auto bg-${item.color === 'blue' ? 'blue' : 'green'}-500 rounded-full border-4 border-white shadow-lg z-10`} />
									<div className="mt-4 text-center">
										<div className={`text-sm font-medium text-${item.color === 'blue' ? 'blue' : 'green'}-700`}>
											{item.month}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Event Gallery Carousel */}
				<section className="mt-16">
					<h3 className="text-xl font-semibold text-slate-800 mb-8">Event Gallery</h3>
					<div className="relative overflow-hidden">
						<motion.div
							animate={{ x: [0, -100, 0] }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
							className="flex gap-6"
						>
							{Array.from({ length: 12 }).map((_, i) => (
								<motion.div
									key={i}
									className="shrink-0 w-80 bg-white border-2 border-blue-200 rounded-xl shadow-lg overflow-hidden hover:border-green-400 transition-all duration-300"
								>
									<div className={`h-48 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'}`} />
									<div className="p-4">
										<div className="font-semibold text-slate-900">Sample Event {i + 1}</div>
										<div className="text-sm text-slate-600 mt-1">Date 02 Type</div>
										<button className="mt-3 w-full text-sm py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
											View Details
										</button>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Static Event Grid */}
				<section className="mt-16">
					<h3 className="text-xl font-semibold text-slate-800 mb-8">Featured Events</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{sampleEvents.map((event, i) => (
							<motion.div
								key={event.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="bg-white border-2 border-blue-200 rounded-xl shadow-lg overflow-hidden hover:border-green-400 transition-all duration-300"
							>
								<div className={`h-48 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'}`} />
								<div className="p-4">
									<div className="font-semibold text-slate-900">{event.title}</div>
									<div className="text-sm text-slate-600 mt-1">{event.date} 02 {event.type}</div>
									<div className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
										{event.status}
									</div>
									<button className="mt-4 w-full text-sm py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
										View Details
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
