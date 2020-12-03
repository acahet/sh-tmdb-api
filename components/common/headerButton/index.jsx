import React from 'react';
import {
	HeaderButton,
	HeaderButtons,
	Item,
} from 'react-navigation-header-buttons';

import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../../../constants/Colors';

const ButtonComponent = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={MaterialIcons}
			iconSize={23}
			color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
		/>
	);
};
const HeaderButtonComponent = (props) => (
	<HeaderButtons HeaderButtonComponent={ButtonComponent}>
		<Item
			title={props.title}
			iconName={props.iconName}
			onPress={props.onPress}
		/>
	</HeaderButtons>
);
export default HeaderButtonComponent;
