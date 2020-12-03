import { useQuery } from '@apollo/client';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Platform,
	Dimensions,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import CardComponent from '../../../components/common/card';
import LoadingButton from '../../../components/common/loadingButton';
import RenderListComponent from '../../../components/common/renderList';
import Colors from '../../../constants/Colors';
import GlobalStyles from '../../../constants/GlobalStyles';
import { TV_GENRES } from '../../../queries';

let TouchaleCmp = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version >= 21) {
	TouchaleCmp = TouchableNativeFeedback;
}

const GenreDetailsScreen = (props) => {
	const renderGridItem = (data) => {
		return (
			<RenderListComponent
				style={styles.card}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'TvShows',
						params: {
							genreId: data.item.id,
							genreTitle: data.item.name,
						},
					});
				}}
			>
				<CardComponent displayCardTitle cardTitle={data.item.name} />
			</RenderListComponent>
		);
	};
	const ACTIONS_GENRE = '10759';
	const COMEDY_GENRE = '35';
	const CRIME_GENRE = '80';
	const DRAMA_GENRE = '18';
	const MYSTERY_GENRE = '9648';
	const SCI_FI_FANTASY_GENRE = '10765';
	const { error, data, loading } = useQuery(TV_GENRES);
	if (loading) return <LoadingButton loading={loading} />;
	if (error)
		return (
			<View style={GlobalStyles.mainViewScreen}>
				<Text>ERROR</Text>
			</View>
		);
	const { tvGenres } = data;
	const genres = tvGenres.filter(
		(f) =>
			f.id === ACTIONS_GENRE ||
			f.id === COMEDY_GENRE ||
			f.id === CRIME_GENRE ||
			f.id === DRAMA_GENRE ||
			f.id === MYSTERY_GENRE ||
			f.id === SCI_FI_FANTASY_GENRE
	);
	return <FlatList data={genres} renderItem={renderGridItem} />;
};
GenreDetailsScreen.navigationOptions = {
	headerTitle: 'What to Watch!',
	headerTintColor:
		Platform.OS === 'android' ? Colors.whiteColor : Colors.primaryColor,
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : null,
	},
};

export default GenreDetailsScreen;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 15,
		height: 150,
		width: Dimensions.get('window').width - 30,
	},
});
