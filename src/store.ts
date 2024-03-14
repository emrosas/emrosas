import { atom } from 'nanostores'

import type { Project } from './components/ProjectListItem'

export const currentProject = atom({} as Project['project'])
