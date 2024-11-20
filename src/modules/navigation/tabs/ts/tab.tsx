import React from 'react';
import { useTabsContext } from './context';
import { IProps, ITabProps } from './definitions';

export /*bundle */ function Tab(props: ITabProps) {
	const { children, index, disabled, className, name } = props;
	const { activeTab, setActiveTab, onChange } = useTabsContext();
	let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
	if (className) cls += ' ' + className;
	const onClick = event => {
		//todo: this event must be removed
		if (onChange) onChange(event, index);
		setActiveTab(index);
	};
	const attrs: { onClick?: (event) => void } = {};

	if (!disabled) attrs.onClick = onClick;

	return (
		<div className={cls} {...attrs} data-name={name} data-index={index}>
			{children}
		</div>
	);
}
