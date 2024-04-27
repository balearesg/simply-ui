import React, { SVGAttributes, Ref } from 'react';
import { PRAGMATE_ICONS } from './icons';
import { IIconProps, PuiIcon } from './types';
import { IconImg } from './image';

export /*bundle*/
const Icon = (props: IIconProps): JSX.Element => {
	let { src, icon, className, name } = props;
	const iconsList: PuiIcon = PRAGMATE_ICONS;

	if (src) return <IconImg src={src} {...props} />;
	if (!icon) return <div key='preload' />;

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
		},
	);

	props.title ? (properties['data-tippy-content'] = props.title) : null;
	delete properties.icon;

	props['data-item'] ? (properties['data-item'] = props['data-item']) : null;

	return (
		<svg {...properties}>
			<g dangerouslySetInnerHTML={{ __html: icon }} />
		</svg>
	);
};
