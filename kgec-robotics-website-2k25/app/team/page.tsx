import MemberCard from '../components/MemberCard'

const domainLeads = [
	{ name: 'Soham Dutta', domain: 'Graphics, Content & PR Team' },
	{ name: 'Anirban Mukherjee', domain: 'Core Electronics and IOT' },
	{ name: 'Arup Barai', domain: 'Core Electronics and IOT' },
	{ name: 'Anirban Roy', domain: 'AI, ML' },
	{ name: 'Deep Rudra', domain: 'AI, ML' },
	{ name: 'Debarghya Panda', domain: 'Mechatronics' },
	{ name: 'Susanta Sing', domain: 'Mechatronics' },
	{ name: 'Tanmoy_Debnath', domain: 'Mechatronics' },
]

const studentBody = [
	{ name: 'Agnidipta Basu', role: 'Joint Secretary' },
	{ name: 'Saikat Panda', role: 'Joint Secretary' },
	{ name: 'Somaraho Chaudhury', role: 'Additional Joint Secretary' },
	{ name: 'Anisha Patra', role: 'Additional Joint Secretary' },
	{ name: 'Debamrita Paul', role: 'Additional Joint Secretary' },
	{ name: 'Sayandip Paul', role: 'Additional Joint Secretary' },
]

export default function Team() {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-blue-50" />
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<h2 className="robotics-font text-3xl text-slate-900 text-center">
					<span className="gradient-text">TEAM</span>
				</h2>
				<p className="mt-2 text-slate-600 text-center">Meet our Student Body and Domain Leads.</p>

				<section className="mt-10">
					<h3 className="robotics-font text-2xl text-slate-900 text-center">Our Student Body</h3>
					<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{studentBody.map((m)=> (
							<MemberCard key={m.name} name={m.name} role={m.role} />
						))}
					</div>
				</section>

				<section className="mt-14">
					<h3 className="robotics-font text-2xl text-slate-900 text-center">Domain Leads</h3>
					<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{domainLeads.map((m)=> (
							<MemberCard key={m.name} name={m.name} domain={m.domain} />
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
