import React from 'react';
import { PRAGMATE_ICONS } from './icons';
import { IIconProps, PuiIcon } from './types';

export /*bundle*/
const Icon = (props: IIconProps): JSX.Element => {
	let { icon, className, name } = props;
	const iconsList: PuiIcon = PRAGMATE_ICONS;

	if (!icon) return <div key="preload" />;

	let viewBox: string = '0 0 24 24';
	name = name ? name : typeof icon === 'string' ? icon : icon.icon;

	if (iconsList.hasOwnProperty(name)) icon = iconsList[name];

	if (typeof icon === 'object') {
		viewBox = icon.viewBox ? icon.viewBox : viewBox;
		icon = icon.icon;
	}

	const properties: IIconProps = Object.assign(
		{ ...props },
		{
			viewBox: props.viewBox ? props.viewBox : viewBox,
			className: !className ? 'pui-icon' : `pui-icon ${className}`,
		}
	);

	props.title ? (properties['data-tippy-content'] = props.title) : null;
	delete properties.icon;

	props['data-item'] ? (properties['data-item'] = props['data-item']) : null;

	return (
		<svg {...properties} data-icon-name={name}>
			<g dangerouslySetInnerHTML={{ __html: icon }} />
		</svg>
	);
};
