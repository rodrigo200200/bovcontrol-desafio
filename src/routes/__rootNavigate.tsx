import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "../util/RootNavigation";

// Imports Home do App
import Home from "../pages/home";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator
				screenOptions={{ headerShown: false, gestureEnabled: false }}
			>
				{/* Tela Home */}
				<Stack.Screen name="Home" component={Home} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
