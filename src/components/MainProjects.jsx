import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import mainProjectsData from '../data/mainProjectsData'

register()

export const MainProjects = () => {
	// const swiperElRef = useRef(null)

	// useEffect(() => {
	// 	// listen for Swiper events using addEventListener
	// 	swiperElRef.current.addEventListener('swiperprogress', (e) => {
	// 		const [swiper, progress] = e.detail
	// 		console.log(progress)
	// 	})

	// 	swiperElRef.current.addEventListener('swiperslidechange', (e) => {
	// 		console.log('slide changed')
	// 	})
	// }, [])

	return (
		<swiper-container
			class="dashed h-5/6"
			// ref={swiperElRef}
			slides-per-view="auto"
			space-between="32"
			navigation="true"
			pagination="true"
			centered-slides="true"
			mousewheel-force-to-axis="true"
			keyboard-enabled="true"
		>
			{mainProjectsData.map((project, index) => {
				return (
					<swiper-slide
						key={index}
						class="flex w-10/12 flex-col justify-end border border-light-1 bg-dark-2"
					>
						<div className="flex items-end justify-between gap-16 px-[var(--page-padding)] py-6">
							<div className="flex max-w-prose flex-col items-start">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<a
									href={project.link}
									target="_blank"
									className="mt-4 rounded-full bg-light-1 px-4 py-2 font-display font-medium text-dark-1"
								>
									View Project
								</a>
							</div>
							<ul className="flex gap-2">
								{project.technologies.map((tech, index) => {
									return (
										<li
											key={index}
											className="rounded-full border border-light-1 bg-dark-1 bg-opacity-10 px-3 py-1 backdrop-blur-sm"
										>
											{tech}
										</li>
									)
								})}
							</ul>
						</div>
					</swiper-slide>
				)
			})}
		</swiper-container>
	)
}
