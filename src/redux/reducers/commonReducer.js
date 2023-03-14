import { products } from "../../utilities/DummyData";
import { RecentUsed } from "../../utilities/RecentUsed";

const { GET_ALL_PRODUCT, SET_SEARCHED_TEXT, TOGGLE_SEARCH_LIST, SET_SELECTED_PRODUCT, SET_RECENT_SEARCHED_PRODUCT } = require("../actionTypes");


const INITIAL_STATE = {
    allProducts: products,
    searchText: '',
    showSearchList: false,
    selectedProduct: {},
    recentResultsInstance: new RecentUsed(5),
    recentSearchResultArr: []
}

export const commonReducer = (state = INITIAL_STATE, action = {},) => {

    const { type = '', payload = '' } = action || {}

    switch (type) {
        case GET_ALL_PRODUCT:
            return state

        case SET_SEARCHED_TEXT:
            return {
                ...state,
                searchText: payload
            }

        case TOGGLE_SEARCH_LIST:
            return {
                ...state,
                showSearchList: payload
            }

        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            }

        case SET_RECENT_SEARCHED_PRODUCT:
            const newArr = []

            payload.forEach((value, key) => {
                newArr.push({ id: key, name: value })
            })
            return {
                ...state,
                recentSearchResultArr: newArr.reverse(),
                searchText: ''
            }

        default:
            return state
    }

}



