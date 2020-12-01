import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GlobalStyles from '../../../constants/GlobalStyles';

const TvShowsScreen = (props) => {
	return (
		<View style={GlobalStyles.mainViewScreen}>
			<Text>TvShows</Text>
			<Button
				title="Go to tvshow details"
				onPress={() => {
					props.navigation.navigate({ routeName: 'TvShowsDetails' });
				}}
			/>
		</View>
	);
};

export default TvShowsScreen;

const styles = StyleSheet.create({});
