import react, { useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View, TextInput, FlatList, Platform, StyleSheet } from 'react-native';
import { products } from "../utilities/DummyData";
import TimeIcon from '../assets/images/svg/clock.svg'
import CrossWitCircleIcon from '../assets/images/svg/cross_wit_circle.svg'
import { useDispatch, useSelector } from "react-redux";
import { setSearchedText, setSearchList } from "../redux/actions/commonAction";
import SearchIcon from '../assets/images/svg/search.svg'
import CrossIcon from '../assets/images/svg/cross.svg'
import ArrowUpRightIcon from '../assets/images/svg/arrow_up_right.svg'
import { globalStyle } from "../utilities/globalStyle";

const { shadowStyle } = globalStyle


const SearchPageUI = ({ handleRemoveItem, recentSearchedItems = [], allProducts = [], navigation, route, handleOnPressItem, ...props }) => {
    const { showSearchList = false, searchText = '' } = useSelector(state => state.commonReducer)
    const dispatch = useDispatch()

    const {
        recentSearchedItemsContainerStyle = {},
        recentSearchedItemsTextStyle = {},
        headerSearchContainerStyle = {},
        headerSearchIconContainerStyle = {},
        recentSearchesTextStyle = {},
        recentSearchedItemsTextContainerStyle = {},
    } = styles

    useEffect(() => {
        navigation.setOptions({
            header: (props) => (_renderHeader()),
            headerStyle: { backgroundColor: 'black' }
        })
        if (allProducts.length === 0 && showSearchList) {
            dispatch(setSearchList(false))
        }
    }, [navigation, searchText])


    const _renderRecentSearcheItem = (item,) => {
        const _handleRemoveItem = () => handleRemoveItem(item.id)
        return (
            <View style={recentSearchedItemsContainerStyle} >
                <View style={{ paddingLeft: 10 }}  >
                    <TimeIcon width={18} height={18} />
                </View>
                <View style={recentSearchedItemsTextContainerStyle} >
                    <Text style={recentSearchedItemsTextStyle} >{item.name}</Text>
                </View>
                <TouchableWithoutFeedback onPress={_handleRemoveItem} >
                    <View style={{ paddingHorizontal: 10, alignSelf: 'center' }}  >
                        <CrossWitCircleIcon width={18} height={18} />
                    </View>
                </TouchableWithoutFeedback>

            </View>


        )
    }

    const _renderHeader = () => (
        <View style={{ backgroundColor: 'black', }} >
            <View style={headerSearchContainerStyle} >
                <View style={headerSearchIconContainerStyle} >
                    <SearchIcon width={20} height={20} />
                </View>
                <TextInput
                    placeholder="Search your product ( at least 2 characters)"
                    placeholderTextColor={'grey'}
                    value={searchText}
                    onChangeText={_handleOnChangeText}
                    style={{ flex: 0.8, backgroundColor: 'white', color: 'black' }}
                    onFocus={_handleOnFocus}

                />
                <TouchableWithoutFeedback onPress={_handleCrossBtn} >
                    <View style={headerSearchIconContainerStyle} >
                        <CrossIcon width={20} height={20} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )

    const _handleOnFocus = () => dispatch(setSearchList(true))


    const _handleOnChangeText = (value) => dispatch(setSearchedText(value))


    const _handleCrossBtn = () => dispatch(setSearchedText(''))



    return (
        <KeyboardAvoidingView style={{ flex: 1, }} behavior='padding'  >
            <SearchFilterList
                data={allProducts}
                onPressItem={handleOnPressItem}
                searchText={searchText}
            />
            <View style={{ marginHorizontal: 20 }} >
                <Text style={recentSearchesTextStyle} >Recent Searches</Text>
                {
                    recentSearchedItems.map((item, key,) => {
                        return (_renderRecentSearcheItem(item))
                    })
                }
            </View>
        </KeyboardAvoidingView>

    )
}



const SearchFilterList = ({
    data = [],
    onPressItem = () => { },
    searchText = '',
    ...props }) => {

    const {
        flatListViewStyle = {},
        flatListRenderItemContainerStyle = {},
        flatListRenderItemTextStyle = {}
    } = styles

    const _renderItem = ({ item, index }) => {
        const { id = null, name = '' } = item

        const _handleSelectedItem = () => onPressItem(item)

        if (!searchText) {
            return null
        }

        if (searchText.length >= 2 && name.toUpperCase().includes(searchText.toUpperCase().trim().replace(/\s/g, ""))) {
            return <TouchableWithoutFeedback key={id} onPress={_handleSelectedItem} >
                <View style={flatListRenderItemContainerStyle} >
                    <Text style={flatListRenderItemTextStyle} >{`${name}`}</Text>
                    <View>
                        <ArrowUpRightIcon width={18} height={18} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        }
    }

    return (
        (searchText !== '') ? <View style={flatListViewStyle} >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
            />
        </View >
            : null
    )
}



export default react.memo(SearchPageUI)




const styles = StyleSheet.create({
    recentSearchedItemsContainerStyle: {
        flexDirection: "row",
        paddingVertical: 12,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        ...shadowStyle,

    },
    recentSearchedItemsTextContainerStyle: { marginLeft: 10, alignSelf: "flex-start" },
    headerSearchContainerStyle: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 8,
        height: 45,
        ...shadowStyle,
    },
    headerSearchIconContainerStyle: { flex: 0.1, alignItems: 'center', justifyContent: 'center', },
    recentSearchesTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 10,
    },
    recentSearchedItemsTextStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'grey'
    },
    flatListViewStyle: {
        width: '95%',
        // height: '50%',
        position: 'absolute',
        zIndex: 999,
        alignSelf: 'center',
        ...shadowStyle
    },
    flatListRenderItemContainerStyle: {
        padding: 20,
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1.0
    },
    flatListRenderItemTextStyle: {
        paddingHorizontal: 20,
        fontSize: 14,
        fontWeight: '400',
        color: 'grey'
    }
})