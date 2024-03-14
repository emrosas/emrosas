import { useStore } from '@nanostores/react'
import { currentProject } from '../store'

export interface Project {
	project: {
		id: number
		name: string
		description: string
		date: Date
	}
}

export default function ProjectListItem({ project }: { project: Project }) {
	const $currentProject = useStore(currentProject)

	const handleClick = () => {
		currentProject.set(project.project)
		console.log(currentProject.get())
	}

	return (
		<li
			onClick={handleClick}
			key={project.project.id}
			className="cursor-pointer text-light-2 transition-all duration-150 hover:-translate-y-[0.10rem] hover:text-light-1"
		>
			<h4>{project.project.name}</h4>
		</li>
	)
}
