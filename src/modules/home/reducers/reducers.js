export function getInfo(state, { payload }) {
  console.log('paylaod getInfo', payload)
  return { ...state, info: payload }
}

export function getHome(state, { payload }) {
  return { ...state, info: payload }
}
