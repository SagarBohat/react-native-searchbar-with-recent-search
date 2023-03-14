import React, { useEffect } from "react";
import { Keyboard } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import SearchPageUI from "../components/SearchPageUI";
import { setRecentSearchResult, setSeletedProduct } from "../redux/actions/commonAction";
import { routeKeys } from "../utilities/RouteKeys";

const SearchPage = (props) => {
    const { navigation, route } = props
    const { DETAIL_PAGE } = routeKeys

    const { allProducts = [], recentResultsInstance, recentSearchResultArr = [] } = useSelector(state => state.commonReducer)
    const dispatch = useDispatch()

    const handleOnPressItem = (item) => {
        Keyboard.dismiss()
        dispatch(setSeletedProduct(item))
        navigation.navigate(DETAIL_PAGE)
    }

    const handleRemoveItemFromRecentSearch = (key = '') => {
        recentResultsInstance.removeItem(key)
        dispatch(setRecentSearchResult(recentResultsInstance.data))
    }


    return (
        <SearchPageUI
            allProducts={allProducts}
            recentSearchedItems={recentSearchResultArr}
            handleOnPressItem={handleOnPressItem}
            handleRemoveItem={handleRemoveItemFromRecentSearch}
            {...props}
        />
    )

}

export default SearchPage