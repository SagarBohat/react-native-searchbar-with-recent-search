import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { DetailPage, SearchPage } from "./src/containers";
import { routeKeys } from "./src/utilities/RouteKeys";

function Routes() {
    const { SEARCH_PAGE, DETAIL_PAGE } = routeKeys
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={SEARCH_PAGE}
                screenOptions={{ headerTitleAlign: 'center', headerBackTitle: ' ' }} >
                <Stack.Screen name={SEARCH_PAGE} component={SearchPage} />
                <Stack.Screen name={DETAIL_PAGE} component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}


export default Routes




