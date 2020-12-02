import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
let TouchaleCmp = TouchableOpacity;
if (Platform.OS === 'android' && Platform.Version >= 21) {
	TouchaleCmp = TouchableNativeFeedback;
}

const RenderListComponent = (props) => {
	return (
		<TouchaleCmp style={props.style} onPress={props.onPress}>
			{props.children}
		</TouchaleCmp>
	);
};

export default RenderListComponent;
