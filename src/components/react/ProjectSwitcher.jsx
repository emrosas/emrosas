import { useState } from 'react'
import SwitcherArrows from './SwitcherArrows'
import projectsData from '../../data/projectsData'

function ProjectSwitcher() {
	const [selectedProject, setSelectedProject] = useState(0)

	const handlePrevious = () => {
		document.querySelector('#card').classList.add('opacity-0', 'translate-y-4')
		setTimeout(() => {
      setSelectedProject((selectedProject - 1 + projectsData.length) % projectsData.length)
		}, 300)
		setTimeout(() => {
			document.querySelector('#card').classList.remove('opacity-0', 'translate-y-4')
		}, 400)
	}

	const handleNext = () => {
		document.querySelector('#card').classList.add('opacity-0', 'translate-y-4')
		setTimeout(() => {
			setSelectedProject((selectedProject + 1) % projectsData.length)
		}, 300)
		setTimeout(() => {
			document.querySelector('#card').classList.remove('opacity-0', 'translate-y-4')
		}, 400)
	}

	return (
		<>
			<div className="flex-grow px-4 py-[18px] transition-all duration-300" id="card">
				<div className="overflow-clip rounded-lg">
					<img
						src={projectsData[selectedProject].image.src}
						alt={projectsData[selectedProject].image.alt}
						className="aspect-video object-cover transition-all duration-500 ease-out group-hover:scale-105"
					/>
				</div>
				<div className="my-4 flex flex-col gap-1">
					<h3 className="text-3xl font-medium">{projectsData[selectedProject].title}</h3>
					<p className="text-sm font-light text-light-1 opacity-50">
						{projectsData[selectedProject].description}
					</p>
				</div>
				<div className="flex items-center gap-2">
					{projectsData[selectedProject].technologies.map((technology, index) => (
						<span
							key={index}
							className="rounded-full border border-dashed border-light-1 border-opacity-50 px-4 py-1 text-xs font-light"
						>
							{technology}
						</span>
					))}
				</div>
			</div>
			<SwitcherArrows onClickPrevious={handlePrevious} onClickNext={handleNext} />
		</>
	)
}

export default ProjectSwitcher
