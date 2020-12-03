import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import GenreDetailsScreen from '../screens/tv/genres';
import ShowsByCategory from '../screens/tv/showsByCategory';
import TvShowDetailsScreen from '../screens/tv/tvShowDetails';

import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/favorites';
import FilterScreen from '../screens/filters';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor:
			Platform.OS === 'android' ? Colors.primaryColor : Colors.whiteColor,
	},
	headerTintColor:
		Platform.OS === 'android' ? Colors.whiteColor : Colors.primaryColor,
};

const MainNavigator = createStackNavigator(
	{
		Genres: { screen: GenreDetailsScreen },
		TvShows: { screen: ShowsByCategory },
		TvShowsDetails: { screen: TvShowDetailsScreen },
	},
	{
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const FavoritesStackNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		TvShowsDetails: TvShowDetailsScreen,
	},
	{
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const tabScreenConfig = {
	Genres: {
		screen: MainNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				const { focused } = tabInfo;
				return (
					<MaterialIcons
						name="movie"
						size={25}
						color={
							focused ? Colors.whiteColor : Colors.primaryColor
						}
					/>
				);
			},
		},
	},
	Favorites: {
		screen: FavoritesStackNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				const { focused } = tabInfo;
				let iconName = focused ? 'favorite' : 'favorite-border';
				return (
					<MaterialIcons
						name={iconName}
						size={25}
						color={focused ? Colors.whiteColor : tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.secondaryColor,
		},
	},
};

const FavoritesTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: Colors.primaryColor,
				shifting: true,
		  })
		: createBottomTabNavigator(
				tabScreenConfig,
				{
					tabBarOptions: {
						activeTintColor: Colors.secondaryColor,
					},
				},
				{
					tabBarOptions: {
						activeTintColor: Colors.secondaryColor,
					},
				}
		  );


const FiltersNavigator = createStackNavigator({
	Filters: FilterScreen,
});
const MainDrawerNavigator = createDrawerNavigator({
	TVFavorites: FavoritesTabNavigator,
	Filters: FiltersNavigator,
});
export default createAppContainer(MainDrawerNavigator);
