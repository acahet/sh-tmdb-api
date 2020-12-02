import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import GenreDetailsScreen from '../screens/tv/genres/index'
import ShowsByCategory from '../screens/tv/showsByCategory/index'
import TvShowDetailsScreen from '../screens/tv/tvShowDetails/index'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';


const MainNavigator = createStackNavigator({
	Genres: { screen: GenreDetailsScreen },
	TvShows: { screen: ShowsByCategory },
	TvShowsDetails: { screen: TvShowDetailsScreen },
},{
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor:
				Platform.OS === 'android'
					? Colors.primaryColor
					: Colors.whiteColor,
		},
		headerTintColor:
			Platform.OS === 'android'
				? Colors.whiteColor
				: Colors.primaryColor,
	},
});

export default createAppContainer(MainNavigator);