import { departments } from "./dummy-data/departments"
import { rest } from 'msw'

export const departmentsHandler = [rest.get(`${process.env.BACKEND_URL}/api/departments`, async (req, res, ctx) =>{
    res(ctx.status(200),
        ctx.json({
            status: 200,
            data: departments
        }))
})];
