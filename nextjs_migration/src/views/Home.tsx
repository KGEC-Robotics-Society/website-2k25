import { useRef, useEffect, useState } from 'react'

// Component to split text into individual letters for animation
const AnimatedText = ({ text, className }: { text: string; className: string }) => {
	return (
		<span className={`button-letters ${className}`}>
			{text.split('').map((letter, index) => (
				<span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
			))}
		</span>
	)
}

// Simplified mouse effects - only binary code and inner dot
const MouseEffects = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [binaryParticles, setBinaryParticles] = useState<Array<{ 
		id: number; 
		x: number; 
		y: number; 
		content: string;
	}>>([])

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
			
			// Create binary code particles (0s and 1s)
			if (Math.random() < 0.6) {
				const binaryContent = Math.random() < 0.5 ? '0' : '1'
				const newParticle = {
					id: Date.now() + Math.random(),
					x: e.clientX + (Math.random() - 0.5) * 40,
					y: e.clientY + (Math.random() - 0.5) * 40,
					content: binaryContent
				}
				setBinaryParticles(prev => [...prev.slice(-20), newParticle])
			}
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	useEffect(() => {
		const timer = setInterval(() => {
			setBinaryParticles(prev => prev.slice(1))
		}, 2000)
		return () => clearInterval(timer)
	}, [])

	return (
		<>
			{/* Main cursor - only inner dot */}
			<div 
				className="tech-cursor"
				style={{ left: mousePosition.x, top: mousePosition.y }}
			>
				<div className="cursor-core"></div>
			</div>

			{/* Binary code particles */}
			{binaryParticles.map(particle => (
				<div
					key={particle.id}
					className="binary-particle"
					style={{ left: particle.x, top: particle.y }}
				>
					{particle.content}
				</div>
			))}
		</>
	)
}

const sampleEvents = [
	{ title: 'Robotics Hackathon 2024', type: 'Hackathon', date: '2024-03-15', status: 'upcoming' },
	{ title: 'AI Workshop Series', type: 'Workshop', date: '2024-01-20', status: 'completed' },
	{ title: 'Robotics Competition', type: 'Competition', date: '2024-05-10', status: 'upcoming' },
	{ title: 'Tech Expo', type: 'Competition', date: '2024-08-25', status: 'upcoming' },
	{ title: 'Innovation Summit', type: 'Other', date: '2024-10-05', status: 'upcoming' },
	{ title: 'Annual Meet', type: 'Other', date: '2024-12-15', status: 'upcoming' },
	{ title: 'Drone Challenge', type: 'Competition', date: '2024-06-15', status: 'upcoming' },
	{ title: 'Automation Workshop', type: 'Workshop', date: '2024-04-22', status: 'upcoming' },
]

export default function Home() {
	const sliderRef = useRef<HTMLDivElement>(null)
	const autoScrollRef = useRef<number | null>(null)

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' })
		}
	}

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' })
		}
	}

	// ...existing code (rest of Home.tsx)...
	return null // placeholder
}
