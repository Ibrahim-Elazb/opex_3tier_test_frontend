import { setupServer } from 'msw/node'
import { projectsHandler } from './handlers/projectsHandler'
import { departmentsHandler } from './handlers/departmentsHandler'
import { employeesHandler } from './handlers/employeesHandler'

export const server = setupServer(...projectsHandler, ...departmentsHandler, ...employeesHandler)