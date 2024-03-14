import { rest } from 'msw'
import { projects } from './dummy-data/projects';
import { BACKEND_URL } from '../../src/utils/links';

export const projectsHandler = [rest.get(`${BACKEND_URL}/api/projects`, async(req, res, ctx) => {
    return res(ctx.status(200),
        ctx.json({
            status: 200,
            data: projects
        }))
})]