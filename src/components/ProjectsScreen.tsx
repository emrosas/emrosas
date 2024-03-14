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
	currentProject.set(projects[0])

	const handleNext = () => {
		const currentProjectName = (currentProject.get() as Project).name
		const currentIndex = projects.findIndex((project) => project.name === currentProjectName)
		if (currentIndex === projects.length - 1) return
		currentProject.set(projects[currentIndex + 1])
	}
	const handlePrevious = () => {
		const currentProjectName = (currentProject.get() as Project).name
		const currentIndex = projects.findIndex((project) => project.name === currentProjectName)
		if (currentIndex === 0) return
		currentProject.set(projects[currentIndex - 1])
	}

	return (
		<main className="grid grid-cols-2 p-page">
			<div className="flex flex-col justify-center gap-20">
				<header className="mt-auto flex flex-col gap-2">
					<h2 className="font-display text-5xl font-semibold">
						Recent <span className="text-brand-1">Projects</span>
					</h2>
					<p className="max-w-[45ch] text-xl font-light text-light-2">
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
					<button
						onClick={handlePrevious}
						className="relative flex items-center overflow-clip rounded-lg border border-brand-1 bg-gradient-to-br from-brand-2 to-brand-1 px-4 py-2 transition duration-300 ease-out hover:-translate-y-[0.15rem]"
					>
						Previous
					</button>
					<button
						onClick={handleNext}
						className="relative flex items-center overflow-clip rounded-lg border border-brand-1 bg-gradient-to-br from-brand-2 to-brand-1 px-4 py-2 transition duration-300 ease-out hover:-translate-y-[0.15rem]"
					>
						Next
					</button>
				</div>
			</div>
			<ProjectCard />
		</main>
	)
}
