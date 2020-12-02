import { useQuery } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CardComponent from '../../../components/common/card';
import { SERIES } from '../../../queries';

const ShowsByCategory = (props) => {
	const genreId = props.navigation.getParam('genreId');

	const renderItems = (data) => {
		return (
			<TouchableOpacity onPress={() => {}}>
				<CardComponent
					key={data.item.id}
					title={data.item.name}
					source={data.item.backdrop.medium}
					paragraph={data.item.overview}
				></CardComponent>
			</TouchableOpacity>
		);
	};

	const { loading, data } = useQuery(SERIES);
	if (loading)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	console.log(data.popularTV);
	const filteredByGenre = data.popularTV
		.filter((popular) => {
			return popular.genres.some(
				(filterByGenre) => filterByGenre.id === genreId
			);
		})
		.map((results) => results);

	return <FlatList data={filteredByGenre} renderItem={renderItems} />;
};
ShowsByCategory.navigationOptions = (navigationData) => {
	const genreName = navigationData.navigation.getParam('genreTitle');
	return {
		headerTitle: genreName,
	};
};
export default ShowsByCategory;

const styles = StyleSheet.create({});
