import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBoard = (user, boardData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/boards',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      board: {
        moves: boardData
      }
    }
  })
}

export const oneBoard = (user, boardId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/boards/' + boardId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteBoard = (user, boardId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/boards/' + boardId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
