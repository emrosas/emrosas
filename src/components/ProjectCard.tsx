import { useStore } from '@nanostores/react'
import { currentProject } from '../store'

export default function ProjectCard() {
	const $currentProject = useStore(currentProject)
	let project = currentProject.get()
	console.log(project)
	return <div>{project.name}</div>
}
