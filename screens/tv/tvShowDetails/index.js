import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';

import {
	ImageBackground,
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
} from 'react-native';
import CardComponent from '../../../components/common/card';
import HeaderButtonComponent from '../../../components/common/headerButton';
import LoadingButton from '../../../components/common/loadingButton';
import RenderListComponent from '../../../components/common/renderList';
import { FETCH_SERIE_BY_ID } from '../../../queries';

const TvShowDetailsScreen = (props) => {
	const carouselRef = useRef(null);
	const renderItem = (itemData) => (
		<RenderListComponent onPress={() => {}}>
			<Image
				source={{
					uri:
						itemData.item.poster.medium ||
						itemData.item.poster.medium,
				}}
				style={styles.carouselImage}
			/>
			<Text style={styles.carouselText}>{itemData.item.name}</Text>
		</RenderListComponent>
	);
	const serieId = props.navigation.getParam('serieId');
	const { error, loading, data } = useQuery(FETCH_SERIE_BY_ID, {
		variables: { id: serieId },
	});
	if (loading) return <LoadingButton loading={loading} />;
	// if (error) return <View><Text>ERRor: {error}</Text></View>
	console.log('TvShowDetailsScreen ===>', serieId, data.tv);
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.imageBackgroundStyle}
			source={{ uri: data.tv.poster.huge }}
		>
			<View style={styles.cardContainer}>
				<CardComponent
					seriesView
					styleCardCover={styles.cardTopContainer}
					styleCardCoverImage={styles.cardImage}
					source={data.tv.poster.large}
					// overview={data.tv.overview}
					// status={data.tv.status}
				/>
			</View>

			<View style={styles.flatlistContainer}>
				<FlatList
					ref={carouselRef}
					style={styles.flatlistStyle}
					horizontal
					data={data.tv.seasons}
					renderItem={renderItem}
				/>
			</View>
		</ImageBackground>
	);
};
TvShowDetailsScreen.navigationOptions = (navigationData) => {
	const serieName = navigationData.navigation.getParam('serieName');
	return {
		headerTitle: serieName,
		headerRight: () => (
			<HeaderButtonComponent
				title="Favorite"
				iconName="favorite-border"
				onPress={() => {
					console.log(info, "========>>")
					console.log('PRESSED');
				}}
			/>
		),
	};
};
export default TvShowDetailsScreen;

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		justifyContent: 'center',
		overflow: 'visible',
	},
	imageContainer: {
		width: '100%',
		height: 400,
	},
	imageBackgroundStyle: {
		width: '100%',
		height: '100%',
		opacity: 0.7,
	},
	cardTopContainer: {
		width: '100%',
		height: '100%',
	},
	flatlistContainer: {
		width: '100%',
		justifyContent: 'center',
		height: 350,
		paddingTop: 0,
	},
	flatlistStyle: {
		overflow: 'visible',
	},
	cardImage: {
		width: '100%',
		height: '100%',
		// resizeMode: 'cover',
		backgroundColor: 'rgba(0,0,0,0.9)',
	},
	carouselImage: {
		top: 25,
		width: 200,
		height: '90%',
		borderRadius: 10,
		resizeMode: 'contain',
		marginHorizontal: 10,
		opacity: 0.8,
	},
	carouselText: {
		paddingLeft: 14,
		color: 'white',
		position: 'absolute',
		top: 40,
		left: 5,
		fontWeight: 'bold',
	},
});
