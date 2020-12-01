import { useQuery } from '@apollo/client';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import CardComponent from '../../../components/common/card';
import GlobalStyles from '../../../constants/GlobalStyles';
import { TV_GENRES } from '../../../queries';

const GenreDetailsScreen = (props) => {
	const renderGridItem = (data) => {
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					props.navigation.navigate({ routeName: 'TvShows' });
				}}
			>
				<CardComponent title={data.item.name} />
			</TouchableOpacity>
		);
	};
	const ACTIONS_GENRE = '10759';
	const COMEDY_GENRE = '35';
	const CRIME_GENRE = '80';
	const DRAMA_GENRE = '18';
	const MYSTERY_GENRE = '9648';
	const SCI_FI_FANTASY_GENRE = '10765';
	const { error, data, loading } = useQuery(TV_GENRES);
	if (loading)
		return (
			<View style={GlobalStyles.mainViewScreen}>
				<Text>Loading...</Text>
			</View>
		);
	if (error)
		return (
			<View style={GlobalStyles.mainViewScreen}>
				<Text>ERROR</Text>
			</View>
		);
	console.log(data.tvGenres);
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
	return (
		<FlatList data={genres} renderItem={renderGridItem} />
	);
};

export default GenreDetailsScreen;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});
