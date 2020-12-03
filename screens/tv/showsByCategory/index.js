import { useQuery } from '@apollo/client';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LoadingButton from '../../../components/common/loadingButton';

import CardComponent from '../../../components/common/card';
import RenderListComponent from '../../../components/common/renderList';
import { FETCH_POPULAR_SERIES } from '../../../queries';

const ShowsByCategory = (props) => {
	const genreId = props.navigation.getParam('genreId');

	const renderItems = (data) => {
		return (
			<RenderListComponent
				style={styles.list}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'TvShowsDetails',
						params: {
							serieId: data.item.id,
							serieName: data.item.name,
						},
					});
				}}
			>
				<CardComponent
					displayList
					key={data.item.id}
					title={data.item.name}
					source={data.item.backdrop.medium}
					showStatus={data.item.status}
					showSeasonCount={data.item.seasonCount}
					showPopularity={data.item.popularity}
					showVotes={data.item.votes}
				></CardComponent>
			</RenderListComponent>
		);
	};

	const { loading, data } = useQuery(FETCH_POPULAR_SERIES);
	if (loading) return <LoadingButton loading={loading} />;
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

const styles = StyleSheet.create({
	list: {
		width: '100%',
	},
});
