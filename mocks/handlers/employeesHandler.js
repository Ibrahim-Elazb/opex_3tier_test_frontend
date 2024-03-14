import { rest } from 'msw'
import { employees } from './dummy-data/employees';
import { BACKEND_URL } from '../../src/utils/links';

export const employeesHandler = [rest.get(`${BACKEND_URL}/api/employees`, async (req, res, ctx) => {
    return res(ctx.status(200),
        ctx.json({
            status: 200,
            data: employees
        }))
})]