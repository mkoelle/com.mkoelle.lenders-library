import { rest } from 'msw'


const auth = [
    rest.get('*.png', (req, _res, _ctx) => req.passthrough()),
    rest.get('*.webmanifest', (req, _res, _ctx) => req.passthrough()),
    rest.get('*.json', (req, _res, _ctx) => req.passthrough()),
    rest.get('*.hot-update.js', (req, _res, _ctx) => req.passthrough())
]

export default auth