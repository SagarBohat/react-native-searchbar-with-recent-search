import { SET_RECENT_SEARCHED_PRODUCT, SET_SEARCHED_TEXT, SET_SELECTED_PRODUCT, TOGGLE_SEARCH_LIST } from "../actionTypes"


export const setSearchedText = (payload = '') => ({ type: SET_SEARCHED_TEXT, payload })

export const setSearchList = (payload = false) => ({ type: TOGGLE_SEARCH_LIST, payload })

export const setSeletedProduct = (payload = {}) => ({ type: SET_SELECTED_PRODUCT, payload })

export const setRecentSearchResult = (payload = new Map()) => ({ type: SET_RECENT_SEARCHED_PRODUCT, payload })
