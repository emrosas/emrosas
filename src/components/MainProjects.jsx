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
			class="h-[125vh]"
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
						class="dashed-vertical flex h-full w-10/12 flex-col justify-center"
					>
						<div className="dashed relative flex h-4/6 items-end overflow-clip border border-light-1 bg-dark-2">
							<div className=" relative z-20 flex flex-grow items-end justify-between gap-16 bg-gradient-to-t from-dark-1 to-transparent px-[var(--page-padding)] pb-6 pt-12">
								<div className="flex max-w-prose flex-shrink flex-col items-start">
									<h3>{project.title}</h3>
									<p className="text-light-1">{project.description}</p>
									<div className="flex items-end gap-4">
										<a
											href={project.links.project}
											target="_blank"
											className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-light-1 px-4 py-2 font-display font-medium text-dark-1 transition-all hover:px-6 hover:outline"
										>
											View Project
											<img src="/images/info.svg" alt="Information Symbol" />
										</a>
										{project.links.code && (
											<a
												href={project.links.code}
												className="italic text-light-2 underline transition-all hover:-translate-y-1 hover:text-light-1"
											>
												Source Code
											</a>
										)}
									</div>
								</div>
								<ul className="flex flex-wrap justify-end gap-2">
									{project.technologies.map((tech, index) => {
										return (
											<li
												key={index}
												className="flex-shrink-0 rounded-full border border-light-1 bg-dark-1 bg-opacity-10 px-3 py-1 backdrop-blur-sm"
											>
												{tech}
											</li>
										)
									})}
								</ul>
							</div>
							<img
								src={project.image.src}
								alt={project.image.alt}
								className="absolute inset-0 z-10 h-full w-full object-cover object-center"
							/>
						</div>
					</swiper-slide>
				)
			})}
		</swiper-container>
	)
}
