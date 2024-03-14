import { departments } from "./dummy-data/departments"
import { rest } from 'msw'

export const departmentsHandler = [rest.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/departments`, async (req, res, ctx) =>{
    res(ctx.status(200),
        ctx.json({
            status: 200,
            data: departments
        }))
})];
