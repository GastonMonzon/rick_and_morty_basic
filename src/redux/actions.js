import { ADD_FAV, REMOVE_FAV, ORDER, FILTER_STATUS } from "./action-types"

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character}
}
export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id}
}
export const order = (order) => {
    return { type: ORDER, payload: order }
}
export const filterStatus = (status) => {
    return { type: FILTER_STATUS, payload: status}
}

