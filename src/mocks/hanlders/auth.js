import { rest } from 'msw'

const authUrl = 'https://cognito-idp.us-east-1.amazonaws.com/'


const auth = [
    rest.post(authUrl, (req, res, ctx) => {
        // return req.passthrough()

        // fail on any request with a username or OTP of 'BAD'
        if (req?.body?.AuthParameters?.USERNAME?.toLowerCase() === 'bad' ||
            req?.body?.Username.toLowerCase() === 'bad' ||
            req?.body?.ConfirmationCode.toLowerCase() === 'bad') return res(ctx.status(403))

        // Login Request
        if (req?.body?.AuthFlow) return res(ctx.status(200))
        // User Registration
        if (req?.body?.ValidationData) return res(ctx.status(200))
        // OTP Validation
        if (req?.body?.ConfirmationCode) return res(ctx.status(200))
        return res(ctx.status(400))
    })
]

export default auth