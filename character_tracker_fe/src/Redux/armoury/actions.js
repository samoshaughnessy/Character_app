import axios from 'axios'

export const GET_ARMOURY = 'GET_ARMOURY'

export function getArmoury (everything) {
  return {
    type: GET_ARMOURY,
    payload: everything
  }
}

export const getArmouryThunk = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury`)
      .then(response => {
        console.log(('Get Armoury Thunk:', response))
        dispatch(getArmoury(response.data))
      })
  }
}
