import { useStore } from '@nanostores/react'
import { currentProject } from '../store'
import type { Project } from './ProjectsScreen'

export default function ProjectListItem({ project }: { project: Project }) {
	console.log('Project List Item Rendered!')

	const handleClick = () => {
		currentProject.set(project)
	}

	return (
		<li
			onClick={handleClick}
			className="cursor-pointer text-light-2 transition-all duration-150 hover:-translate-y-[0.10rem] hover:text-light-1"
		>
			<h4>{project.name}</h4>
		</li>
	)
}
