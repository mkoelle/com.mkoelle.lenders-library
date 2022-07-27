import auth from './auth'
import passthrough from './passthrough'
import lendables from './lendables'

export const handlers = [
    ...passthrough,
    ...auth,
    ...lendables
]