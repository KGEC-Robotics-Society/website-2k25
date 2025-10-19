"use client";

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
	const [query, setQuery] = useState('')
	const currentRef = useRef<HTMLDivElement>(null)
	const pastRef = useRef<HTMLDivElement>(null)
	const currentAutoRef = useRef<NodeJS.Timeout | null>(null)
	const pastAutoRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const startCurrent = () => {
			currentAutoRef.current = setInterval(() => {
				if (!currentRef.current) return
				const { scrollLeft, scrollWidth, clientWidth } = currentRef.current
				const max = scrollWidth - clientWidth
				if (scrollLeft >= max) currentRef.current.scrollTo({ left: 0, behavior: 'smooth' })
				else currentRef.current.scrollBy({ left: 360, behavior: 'smooth' })
			}, 1800)
		}
		const stopCurrent = () => { if (currentAutoRef.current) { clearInterval(currentAutoRef.current); currentAutoRef.current = null } }

		const startPast = () => {
			pastAutoRef.current = setInterval(() => {
				if (!pastRef.current) return
				const { scrollLeft, scrollWidth, clientWidth } = pastRef.current
				const max = scrollWidth - clientWidth
				if (scrollLeft >= max) pastRef.current.scrollTo({ left: 0, behavior: 'smooth' })
				else pastRef.current.scrollBy({ left: 360, behavior: 'smooth' })
			}, 2200)
		}
		const stopPast = () => { if (pastAutoRef.current) { clearInterval(pastAutoRef.current); pastAutoRef.current = null } }

		startCurrent()
		startPast()

		const elCurrent = currentRef.current
		if (elCurrent) {
			elCurrent.addEventListener('mouseenter', stopCurrent)
			elCurrent.addEventListener('mouseleave', startCurrent)
		}
		const elPast = pastRef.current
		if (elPast) {
			elPast.addEventListener('mouseenter', stopPast)
			elPast.addEventListener('mouseleave', startPast)
		}

		return () => {
			stopCurrent();
			stopPast();
			if (elCurrent) { elCurrent.removeEventListener('mouseenter', stopCurrent); elCurrent.removeEventListener('mouseleave', startCurrent) }
			if (elPast) { elPast.removeEventListener('mouseenter', stopPast); elPast.removeEventListener('mouseleave', startPast) }
		}
	}, [])
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<div className="flex items-end justify-between gap-4">
					<h2 className="robotics-font text-3xl text-slate-900">Projects</h2>
					<input 
						value={query} 
						onChange={e=>setQuery(e.target.value)} 
						placeholder="Search projects" 
						className="px-4 py-2 rounded-lg bg-white border-2 border-blue-200 focus:border-green-400 outline-none transition-all duration-300" 
					/>
				</div>
				{/* Current Projects horizontal slider */}
				<div className="mt-16">
					<h3 className="robotics-font text-2xl text-slate-900 mb-6">Current Projects</h3>
					<div className="relative">
						<button onClick={()=>currentRef.current?.scrollBy({left:-360, behavior:'smooth'})} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border-2 border-purple-300 rounded-full shadow-md">&#8249;</button>
						<button onClick={()=>currentRef.current?.scrollBy({left:360, behavior:'smooth'})} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border-2 border-green-300 rounded-full shadow-md">&#8250;</button>
						<div ref={currentRef} className="flex gap-6 overflow-x-auto slider-container pb-2">
							{Array.from({length:8}).map((_,i)=> (
								<div key={i} className="shrink-0 w-80 bg-white border-2 border-purple-200 rounded-xl shadow-lg p-6 hover:border-green-400 transition-all duration-300">
									<div className={`h-40 bg-gradient-to-br ${i % 3 === 0 ? 'from-purple-100 to-purple-200' : i % 3 === 1 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'} rounded-lg`} />
									<div className="mt-4 font-semibold text-slate-900 robotics-font">Current Project {i+1}</div>
									<div className="text-sm text-slate-600 mt-1">Status &#8226; Year</div>
									<div className="text-xs text-slate-600 mt-2">Team: Alice, Bob, Carol</div>
									<div className="text-xs text-slate-600">Mentor: Prof. X</div>
									<button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
										View Details
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Past Projects horizontal slider */}
				<section className="mt-16">
					<h3 className="robotics-font text-2xl text-slate-900 mb-6">Past Projects</h3>
					<div className="relative">
						<button onClick={()=>pastRef.current?.scrollBy({left:-360, behavior:'smooth'})} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border-2 border-purple-300 rounded-full shadow-md">&#8249;</button>
						<button onClick={()=>pastRef.current?.scrollBy({left:360, behavior:'smooth'})} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border-2 border-green-300 rounded-full shadow-md">&#8250;</button>
						<div ref={pastRef} className="flex gap-6 overflow-x-auto slider-container pb-2">
							{Array.from({length:12}).map((_,i)=> (
								<div key={i} className="shrink-0 w-80 bg-white border-2 border-purple-200 rounded-xl shadow-lg p-4 hover:border-green-400 transition-all duration-300">
									<div className={`h-36 bg-gradient-to-br ${i % 3 === 0 ? 'from-purple-100 to-purple-200' : i % 3 === 1 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'} rounded-lg`} />
									<div className="mt-4 font-semibold text-slate-900 robotics-font">Past Project {i+1}</div>
									<div className="text-sm text-slate-600 mt-1">Status &#8226; Year</div>
									<div className="text-xs text-slate-600 mt-2">Team: Alice, Bob, Carol</div>
									<div className="text-xs text-slate-600">Mentor: Prof. Y</div>
									<button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
										View Details
									</button>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
