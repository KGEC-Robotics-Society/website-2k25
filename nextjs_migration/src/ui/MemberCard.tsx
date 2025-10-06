import { motion } from 'framer-motion'

type SocialLinks = {
	linkedin?: string
	email?: string
	facebook?: string
}

interface MemberCardProps {
	name: string
	role?: string
	domain?: string
	imageUrl?: string
	socials?: SocialLinks
}

export default function MemberCard({ name, role, domain, imageUrl, socials }: MemberCardProps) {
	return (
		<motion.div
			whileHover={{ y: -6, scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			className="relative overflow-hidden rounded-2xl border-2 border-purple-200 bg-white shadow-lg"
		>
			<div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-sky-100 blur-2xl" />
			<div className="p-5">
				<div className="h-36 w-full rounded-xl bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 flex items-center justify-center border border-purple-200">
					{imageUrl ? (
						<img src={imageUrl} alt={name} className="h-full w-full object-cover rounded-xl" />
					) : (
						<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-300 via-blue-300 to-green-300" />
					)}
				</div>
				<div className="mt-4 text-center">
					<div className="font-semibold text-slate-900 robotics-font">{name}</div>
					{role ? <div className="text-sm text-slate-600 title-font">{role}</div> : null}
					{domain ? <div className="text-sm text-purple-700 mt-1 title-font">{domain}</div> : null}
				</div>
				<div className="mt-4 flex items-center justify-center gap-3">
					<a aria-label="Email" href={socials?.email ? `mailto:${socials.email}` : '#'} className="text-slate-500 hover:text-purple-700 transition-colors">
						<MailIcon />
					</a>
					<a aria-label="LinkedIn" href={socials?.linkedin ?? '#'} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
						<LinkedInIcon />
					</a>
					<a aria-label="Facebook" href={socials?.facebook ?? '#'} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
						<FacebookIcon />
					</a>
				</div>
			</div>
		</motion.div>
	)
}

function LinkedInIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.1H12.66C13.3 8.92 14.86 7.68 17.12 7.68C21.76 7.68 22.5 10.76 22.5 14.72V24H17.5V15.92C17.5 13.98 17.46 11.5 14.86 11.5C12.22 11.5 11.82 13.62 11.82 15.78V24H6.82V8H8Z" />
		</svg>
	)
}

function MailIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
		</svg>
	)
}

function FacebookIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.9 10 21.8V15H7V12H10V9.8C10 6.8 11.79 5.2 14.5 5.2C15.3 5.2 16.3 5.3 17.1 5.4V8H15.6C14.2 8 14 8.7 14 9.6V12H17L16.5 15H14V21.95C19 21.45 22 17.3 22 12Z" />
		</svg>
	)
}
