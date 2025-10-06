export default function Footer() {
	return (
		<footer className="border-t-2 border-blue-200 bg-white/95 backdrop-blur-md">
			<div className="max-w-7xl mx-auto px-4 py-10 text-sm text-slate-600">
				<div className="text-center">© {new Date().getFullYear()} KGEC Robotics Society. All rights reserved.</div>
				<div className="text-center mt-2 text-xs">
					Contact us: robotics@kgec.edu.in
				</div>
			</div>
		</footer>
	)
}
