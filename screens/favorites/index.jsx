import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButtonComponent from '../../components/common/headerButton';
import GlobalStyles from '../../constants/GlobalStyles';

const FavoritesScreen = () => {
	return (
		<View style={GlobalStyles.mainViewScreen}>
			<Text>FavoritesScreen</Text>
		</View>
	);
};
FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
				<Item
					title="Menu"
					iconName="menu"
					iconSize={40}
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
