import { useQuery } from '@apollo/client';
import React, { useRef } from 'react';
import {
	ImageBackground,
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import CardComponent from '../../../components/common/card';
import LoadingButton from '../../../components/common/loadingButton';
import RenderListComponent from '../../../components/common/renderList';
import { FETCH_SERIE_BY_ID } from '../../../queries';

const TvShowDetailsScreen = (props) => {
	const carouselRef = useRef(null);
	const renderItem = (itemData) => (
		<RenderListComponent onPress={() => {}}>
			<Image
				source={{ uri: itemData.item.poster.medium }}
				style={styles.carouselImage}
			/>
			<Text style={styles.carouselText}>{itemData.item.name}</Text>
		</RenderListComponent>
	);
	const serieId = props.navigation.getParam('serieId');
	const serieName = props.navigation.getParam('serieName');
	const { error, loading, data } = useQuery(FETCH_SERIE_BY_ID, {
		variables: { id: serieId },
	});
	if (loading) return <LoadingButton loading={loading} />;
	// if (error) return <View><Text>ERRor: {error}</Text></View>
	// console.log('TvShowDetailsScreen ===>', serieId, data);
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.imageBackgroundStyle}
			source={{ uri: data.shows[0].poster.huge }}
		>
			<View style={styles.cardContainer}>
				<Card>
					<View style={styles.tst}>
						<Card.Cover
							style={styles.cardImage}
							source={{ uri: data.shows[0].poster.large }}
						/>
					</View>
					<Card.Content>
						<Paragraph>{data.shows[0].overview}</Paragraph>
						<Paragraph>{data.shows[0].status}</Paragraph>
					</Card.Content>
				</Card>
			</View>
			<View style={styles.flatlistContainer}>
				<FlatList
					style={styles.flatlistStyle}
					horizontal
					data={data.shows[0].seasons}
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
	tst: {
		width: '100%',
		height: 230,
	},
	flatlistContainer: {
		width: '100%',
		justifyContent: 'center',
		height: 350,
		paddingTop: 0,
	},
	flatlistStyle: {
		// flex:1,
		overflow: 'visible',
	},
	cardImage: {
		width: '100%',
		height: 300,
		resizeMode: 'stretch',
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
