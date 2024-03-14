import { useEffect } from 'react'
import { currentProject } from '../store'
import ProjectCard from './ProjectCard'
import ProjectListItem from './ProjectListItem'

export interface Project {
	name: string
	description: string
	date: Date
}

interface ProjectScreenProps {
	projects: Project[]
}
export default function ProjectsScreen({ projects }: ProjectScreenProps) {
	console.log('Projects Screen Rendered!')
	currentProject.set(projects[0])

	return (
		<main className="grid grid-cols-2 p-page">
			<div className="flex flex-col justify-center gap-20">
				<header className="mt-auto flex flex-col gap-2">
					<h2 className="font-display text-5xl font-semibold">
						Recent <span className="text-brand-1">Projects</span>
					</h2>
					<p className="max-w-prose text-xl font-light text-light-2">
						Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac
						iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra
						at maecenas egestas facilisis.
					</p>
				</header>
				<ul className="flex flex-wrap gap-8">
					{projects.map((project: Project) => (
						<ProjectListItem project={project} key={project.name} />
					))}
				</ul>
				<div className="mt-auto flex gap-4">
					{/* <Link text="Previous" href="/projects" mode="secondary" /> */}
					{/* <Link text="Next" href="/projects" mode="secondary" /> */}
				</div>
			</div>
			<ProjectCard />
		</main>
	)
}
