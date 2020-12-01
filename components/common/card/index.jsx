import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const CardComponent = ({ title, children }) => {
	return (
		<Card style={styles.card}>
			<Card.Title title={title} />
			{children}
		</Card>
	);
};

export default CardComponent;

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});
