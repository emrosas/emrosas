import { db, Project } from 'astro:db'

// https://astro.build/db/seed
export default async function () {
	await db.insert(Project).values([
		{
			name: 'La Postreria 77',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2022-01-30')
		},
		{
			name: 'The Wrap Co.',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2024-03-20')
		},
		{
			name: 'La Pasteleria de La Postreria 77',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2024-03-20')
		},
		{
			name: 'Herrmat',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2024-03-20')
		},
		{
			name: 'Party Game Companion',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2024-03-20')
		},
		{
			name: 'Jammming',
			description:
				'Lorem ipsum dolor sit amet consectetur. Risus cras netus pellentesque convallis ac iaculis lectus dictum. Mi dolor donec ac tellus orci tristique. Scelerisque ac viverra at maecenas egestas facilisis. Ultricies vitae sed dolor sit ac. Ut lectus quis et ligula tempus tellus venenatis aliquet eget. Aliquet enim accumsan volutpat ut molestie at massa.',
			date: new Date('2024-03-20')
		}
	])
}
