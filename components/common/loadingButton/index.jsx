import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
const LoadingButton = (props) => {
	return (
		<Button
			style={styles.loading}
			mode={'contained'}
			loading={props.loading}
		>
			Loading...
		</Button>
	);
};

export default LoadingButton;

const styles = StyleSheet.create({
	loading: {
		position: 'relative',
	},
});
