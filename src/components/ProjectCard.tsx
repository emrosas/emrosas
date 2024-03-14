import { useStore } from '@nanostores/react'
import { currentProject } from '../store'

import type { Project } from './ProjectsScreen'

export default function ProjectCard() {
	const $currentProject = useStore(currentProject)
	let displayedProject: Project = currentProject.get() as Project

	return (
		<article className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-light-1 border-opacity-15 bg-dark-1 bg-opacity-50 p-page text-center backdrop-blur-sm">
			<h3 className="font-display text-3xl">{displayedProject.name}</h3>
			<p>{displayedProject.description}</p>
		</article>
	)
}
