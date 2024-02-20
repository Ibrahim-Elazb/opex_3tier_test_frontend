import { rest } from 'msw'
import { employees } from './dummy-data/employees';

export const employeesHandler = [rest.get(`${process.env.BACKEND_URL}/api/employees`, async (req, res, ctx) => {
    return res(ctx.status(200),
        ctx.json({
            status: 200,
            data: employees
        }))
})]