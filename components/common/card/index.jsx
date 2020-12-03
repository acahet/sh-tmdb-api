import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import fonts from '../../../constants/Fonts';

const CardComponent = (props) => {
	return (
		<View style={styles.card}>
			<Card
				onLongPress={props.onLongPress}
				style={props.style}
			>
				{props.displayCardTitle && (
					<Card.Title
						style={styles.cardTitle}
						title={props.cardTitle}
					/>
				)}
				{props.displayList && (
					<React.Fragment>
						<Card.Cover source={{ uri: props.source }} />
						<Card.Content
							style={{ ...styles.cover, ...props.style }}
						>
							<Title>{props.title}</Title>
							<View style={styles.textSectionTop}>
								<Paragraph>
									Status: {props.showStatus}
								</Paragraph>
								<Paragraph>
									Seasons: {props.showSeasonCount}
								</Paragraph>
								{props.children}
							</View>
						</Card.Content>
					</React.Fragment>
				)}
				{props.seriesView && (
					<React.Fragment>
						<Card style={props.styleCardCover}>
							<Card.Cover
								style={props.styleCardCoverImage}
								source={{ uri: props.source }}
							/>
						</Card>
					</React.Fragment>
				)}
			</Card>
		</View>
	);
};

export default CardComponent;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 5,
		height: 300,
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 6,
		padding: 3,
	},
	cover: {},
	cardTitle: {
		fontFamily: fonts.primary_bold,
	},
	textSectionTop: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	textSectionBottom: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	imageContainer: {
		flex: 1,
		marginTop: 0,
	},
	image: {
		top: 0,
		width: '100%',
		height: 400,
		resizeMode: 'cover',
	},
});

//display list:
// <View style={styles.textSectionBottom}>
// 							<Paragraph>
// 								Popularity: {props.showPopularity}
// 							</Paragraph>
// 							<Paragraph>Votes: {props.showVotes}</Paragraph>
// 						</View>
// card details for seriesview

// <Card.Content>
// 					<Paragraph>{props.overview}</Paragraph>
// 					<Paragraph>{props.status}</Paragraph>
// 				</Card.Content>
