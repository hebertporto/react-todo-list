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
  return dispatch => dispatch(sendInfo('cheguei direto da actions'))
}

export function fetchInfo2() {
  return dispatch => dispatch(sendInfo('cheguei direto da actions'))
}
