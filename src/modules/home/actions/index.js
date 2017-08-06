import {
  HOME_INFO,
} from './types'

function sendInfo(payload) {
  return {
    type: HOME_INFO,
    payload,
  }
}

export function fetchInfo() {
  console.log('fetch info')
  const payload = 'cheguei direto da action'
  return {
    type: HOME_INFO,
    payload,
  }
}

export function fetchInfo2() {
  console.log('fetch info 22')
  return dispatch => dispatch(sendInfo('cheguei direto da actions'))
}
