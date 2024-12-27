import React from 'react';
import { motion } from 'framer-motion';
import { IPUIProps } from './types';

// Define the interface for the base component
interface /*bundle*/ BaseComponentProps<T = HTMLElement> extends IPUIProps<T> {
	motion?: boolean; // Flag to determine if framer-motion should be used
}

// Create the base component using a function with a constructor
export /*bundle*/ function BaseComponent<T = HTMLElement>({
	as = 'div',
	motion: useMotion = false,
	children,
	...restProps
}: BaseComponentProps<T>): JSX.Element {
	// Create the element dynamically
	const Element = useMotion ? motion[as] : as;

	return React.createElement(Element, restProps, children);
}
