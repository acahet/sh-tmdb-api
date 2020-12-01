import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import MainNavigator from './navigation/MainNavigator.js';

const client = new ApolloClient({
	uri: 'https://tmdb-api.saeris.io/.netlify/functions/tmdb-api',
	cache: new InMemoryCache(),
});

enableScreens();

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(error) => console.log(error)}
			/>
		);
	}
	return (
		<ApolloProvider client={client}>
			<MainNavigator />
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
