import { useStore } from '@nanostores/react'
import { currentProject } from '../store'

import type { Project } from './ProjectsScreen'

export default function ProjectCard() {
	const $currentProject = useStore(currentProject)
	let displayedProject: Project = currentProject.get() as Project

	return (
		<article className="drop-shadow-brand-1 flex flex-col gap-8 rounded-2xl border border-light-1 border-opacity-15 bg-dark-1 bg-opacity-50 p-8 backdrop-blur-sm">
			<div className="h-3/5 w-full rounded-lg bg-dark-2"></div>
			<div className="flex flex-col gap-2">
				<h3 className="font-display text-3xl font-medium">{displayedProject.name}</h3>
				<p className="font-light text-light-2">{displayedProject.description}</p>
				<ul className="mt-4 flex flex-wrap items-center gap-2">
					<li className="rounded-full border border-light-1 border-opacity-15 bg-light-1  bg-opacity-5 px-4 py-1 text-xs backdrop-blur-sm">
						UX/UI Design
					</li>
					<li className="rounded-full border border-light-1 border-opacity-15 bg-light-1  bg-opacity-5 px-4 py-1 text-xs backdrop-blur-sm">
						Development
					</li>
					<li className="rounded-full border border-light-1 border-opacity-15 bg-light-1 bg-opacity-5 px-4 py-1  text-xs backdrop-blur-sm">
						SEO
					</li>
					<li className="rounded-full border border-light-1 border-opacity-15 bg-light-1 bg-opacity-5 px-4 py-1  text-xs backdrop-blur-sm">
						Commercial
					</li>
				</ul>
			</div>
			<div className="ml-auto flex items-center gap-4">
				<a href="/projects" className="font-display font-medium">
					Code
				</a>
				<a href="/projects" className="font-display font-medium">
					Live Site
				</a>
			</div>
		</article>
	)
}
