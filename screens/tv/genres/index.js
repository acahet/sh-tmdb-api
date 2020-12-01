import { useQuery } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CardComponent from '../../../components/common/card';
import GlobalStyles from '../../../constants/GlobalStyles';
import { TV_GENRES } from '../../../queries';

const renderGridItem = (data) => {
	return <CardComponent title={data.item.name} />;
};

const GenreDetailsScreen = (props) => {
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
	return (
		<FlatList data={tvGenres} renderItem={renderGridItem} numColumns={2} />
	);
};

export default GenreDetailsScreen;

const styles = StyleSheet.create({});
