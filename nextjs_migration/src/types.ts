export type UserRole = 'student' | 'faculty' | 'admin' | 'alumni'

export interface User {
	_id: string
	name: string
	role: UserRole
	position?: string
	year?: number
	bio?: string
	profileImage?: string
}

export interface Project {
	_id: string
	title: string
	status: 'ongoing' | 'completed'
	year: number
	description: string
	mediaUrls?: string[]
}

export interface EventItem {
	_id: string
	title: string
	type: 'hackathon' | 'workshop' | 'competition' | 'other'
	date: string
	status: 'upcoming' | 'completed' | 'cancelled'
	description: string
	registrationLink?: string
	mediaUrls?: string[]
}
