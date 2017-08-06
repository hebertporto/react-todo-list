import { HOME_INFO } from '../actions/types'
import { getInfo } from './reducers'

const initialState = {
  info: 'Não Atualizada',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HOME_INFO:
      return getInfo(state, action)
    default: return state
  }
}
