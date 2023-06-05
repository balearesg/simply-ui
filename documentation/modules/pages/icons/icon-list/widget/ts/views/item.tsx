import React from 'react';
import { Icon } from 'simply-ui/icons';
import { toast } from 'simply-ui/toast';

export function Item(props): JSX.Element {
	const { icon } = props;
	function copy() {
		navigator.clipboard.writeText(icon);
		toast.success('Name copied');
	}
	return (
		<button onClick={copy} className={`content-icon ${icon}`}>
			<Icon icon={icon} />
			<span>{icon}</span>
		</button>
	);
}
