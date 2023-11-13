import { createRequire } from 'module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require('../movies.json')
