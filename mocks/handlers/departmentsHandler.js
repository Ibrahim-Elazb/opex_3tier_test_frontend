import { BACKEND_URL } from "../../src/utils/links";
import { departments } from "./dummy-data/departments"
import { rest } from 'msw'

export const departmentsHandler = [rest.get(`${BACKEND_URL}/api/departments`, async (req, res, ctx) =>{
    res(ctx.status(200),
        ctx.json({
            status: 200,
            data: departments
        }))
})];
