import { useStore } from '@nanostores/react'
import { counter } from '../store'

export default function ProjectCard() {
	// read the store value with the `useStore` hook
	const $counter = useStore(counter)
	// write to the imported store using `.set`
	return (
		<div>
			<h2>{counter.get()}</h2>
			<button className="bg-brand-2 px-4 py-2" onClick={() => counter.set(counter.get() + 1)}>
				Increment Count
			</button>
		</div>
	)
}
