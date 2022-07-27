import { rest } from 'msw'

const baseUrl = 'http://localhost:3030'


const auth = [
    rest.get(`${baseUrl}/lendables`, (req, res, ctx) => {
        return res(ctx.status(400))
    })
]

export default auth