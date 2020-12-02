import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import TextTruncate from 'react-native-text-truncate';

const CardComponent = (props) => {
	return (
		<Card style={{ ...styles.card, ...props.style }}>
			{props.displayCardTitle ? (
				<Card.Title title={props.cardTitle} />
			) : (
				<React.Fragment>
					<Card.Cover source={{ uri: props.source }} />
					<Card.Content style={{ ...styles.cover, ...props.style }}>
						<Title>{props.title}</Title>
						<TextTruncate numberOfLines={3}>
							<Paragraph>{props.paragraph}</Paragraph>
						</TextTruncate>
					</Card.Content>
				</React.Fragment>
			)}
		</Card>
	);
};

export default CardComponent;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 15,
		height: 300,
	},
	cover: {},
});
