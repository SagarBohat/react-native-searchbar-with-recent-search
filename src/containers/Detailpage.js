import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailPageUI from '../components/DetailPageUI'
import { setRecentSearchResult } from "../redux/actions/commonAction";

const DetailPage = (props) => {
    const { navigation, route } = props
    const { selectedProduct = {}, recentResultsInstance } = useSelector(state => state.commonReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        navigation.setOptions({
            headerTitle: selectedProduct.name
        })
        setTimeout(() => {
            recentResultsInstance.setItem(selectedProduct.id, selectedProduct.name)
            dispatch(setRecentSearchResult(recentResultsInstance.data))
        }, 300)

    }, [])
    return (
        <DetailPageUI
            selectedProduct={selectedProduct}
            {...props} />
    )
}

export default DetailPage