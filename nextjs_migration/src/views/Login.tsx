import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-blue-50" />
			<div className="relative max-w-md mx-auto px-4 py-16">
				<motion.h2 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-3xl font-semibold text-slate-900 text-center"
				>
					Admin Login
				</motion.h2>
				<motion.form 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="mt-8 bg-white border-2 border-blue-200 rounded-xl shadow-lg p-6 space-y-4 hover:border-green-400 transition-all duration-300"
				>
					<div>
						<label className="text-sm text-slate-700 font-medium">Email</label>
						<input 
							value={email} 
							onChange={e=>setEmail(e.target.value)} 
							type="email" 
							className="mt-1 w-full px-3 py-2 rounded-lg bg-white border-2 border-blue-200 focus:border-green-400 outline-none transition-all duration-300" 
						/>
					</div>
					<div>
						<label className="text-sm text-slate-700 font-medium">Password</label>
						<input 
							value={password} 
							onChange={e=>setPassword(e.target.value)} 
							type="password" 
							className="mt-1 w-full px-3 py-2 rounded-lg bg-white border-2 border-blue-200 focus:border-green-400 outline-none transition-all duration-300" 
						/>
					</div>
					<button 
						type="button" 
						className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
					>
						Sign In
					</button>
					<div className="text-center text-sm text-slate-600">
						Access for Admins and Faculty only
					</div>
				</motion.form>
			</div>
		</div>
	)
}
