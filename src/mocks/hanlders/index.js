import auth from './auth'
import passthrough from './passthrough'

export const handlers = [
    ...passthrough,
    ...auth
]