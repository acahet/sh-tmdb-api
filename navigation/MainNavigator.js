import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import GenreDetailsScreen from '../screens/tv/genres/index'
import TvShowsScreen from '../screens/tv/tvShows/index'
import TvShowDetailsScreen from '../screens/tv/tvShowDetails/index'


const MainNavigator = createStackNavigator({
	Genres: { screen: GenreDetailsScreen },
	TvShows: { screen: TvShowsScreen },
	TvShowsDetails: { screen: TvShowDetailsScreen },
});

export default createAppContainer(MainNavigator);