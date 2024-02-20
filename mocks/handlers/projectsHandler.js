import { rest } from 'msw'
import { projects } from './dummy-data/projects';

export const projectsHandler = [rest.get(`${process.env.BACKEND_URL}/api/projects`, async(req, res, ctx) => {
    return res(ctx.status(200),
        ctx.json({
            status: 200,
            data: projects
        }))
})]