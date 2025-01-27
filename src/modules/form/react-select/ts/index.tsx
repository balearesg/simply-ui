import React from 'react';

import { useStyles } from './use-styles';
import { MobileSelect } from './mobile-select';

/**
 * The component is deprecated is 'select' component instead.
 * @deprecated
 * @param props
 * @returns
 */
export /*bundle*/
function ReactSelect(props) {
	let properties = { ...props };
	let { name } = props;
	const { ref } = useStyles();
	delete properties.onChange;

	return <MobileSelect {...props} />;
}
