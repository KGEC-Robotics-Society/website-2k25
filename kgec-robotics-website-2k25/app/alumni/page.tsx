import { motion } from 'framer-motion'

type AlumniItem = { name: string; role?: string }

const years: { year: number; people: AlumniItem[] }[] = [
	{ year: 2025, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2025 - ${i+1}` })) },
	{ year: 2024, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2024 - ${i+1}` })) },
	{ year: 2023, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2023 - ${i+1}` })) },
	{ year: 2022, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2022 - ${i+1}` })) },
	{ year: 2021, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2021 - ${i+1}` })) },
	{ year: 2020, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2020 - ${i+1}` })) },
]

export default function Alumni() {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<h1 className="robotics-font text-3xl md:text-4xl text-slate-900 text-center">
					<span className="gradient-text">ALUMNI</span>
				</h1>
				<p className="text-center text-slate-600 mt-2">Graduating classes from 2020 to 2025</p>

				<div className="mt-12 space-y-12">
					{years.map((group, idx) => (
						<section key={group.year}>
							<div className="flex items-center gap-4">
								<h2 className="robotics-font text-2xl text-slate-800">Batch {group.year}</h2>
								<div className="h-[2px] flex-1 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 rounded-full" />
							</div>
							<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
								{group.people.map((p, i) => (
									<motion.div
										key={p.name}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: (idx * 0.1) + (i * 0.05) }}
										whileHover={{ y: -6, scale: 1.02 }}
										className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-lg hover:border-green-400 transition-all duration-300"
									>
										<div className="h-36 w-full rounded-lg bg-gradient-to-br from-purple-100 via-blue-100 to-green-100" />
									<div className="mt-3 font-semibold text-slate-900 robotics-font text-center">{p.name}</div>
									<div className="text-sm text-slate-600 title-font text-center">{p.role ?? 'Alumni'}</div>
									<div className="mt-4 flex items-center justify-center gap-3">
											<a aria-label="Email" href="#" className="text-slate-500 hover:text-purple-700 transition-colors">
												<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" /></svg>
											</a>
											<a aria-label="LinkedIn" href="#" className="text-slate-500 hover:text-blue-700 transition-colors">
												<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.1H12.66C13.3 8.92 14.86 7.68 17.12 7.68C21.76 7.68 22.5 10.76 22.5 14.72V24H17.5V15.92C17.5 13.98 17.46 11.5 14.86 11.5C12.22 11.5 11.82 13.62 11.82 15.78V24H6.82V8H8Z" /></svg>
											</a>
											<a aria-label="Facebook" href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
												<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.9 10 21.8V15H7V12H10V9.8C10 6.8 11.79 5.2 14.5 5.2C15.3 5.2 16.3 5.3 17.1 5.4V8H15.6C14.2 8 14 8.7 14 9.6V12H17L16.5 15H14V21.95C19 21.45 22 17.3 22 12Z" /></svg>
											</a>
										</div>
									</motion.div>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	)
}
