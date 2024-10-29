import React, { MouseEvent, forwardRef } from 'react';
import tippy from 'tippy.js';
import { routing } from '@beyond-js/kernel/routing';
import { Icon } from './icon';
import { RippleEffect } from 'pragmate-ui/ripple';
import { IIconButtonProps, IIconProps } from './types';
import { getAttributes } from './icons/html-attributes';

export /*bundle*/ const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((props: IIconButtonProps, ref) => {
	const { icon, onClick, viewBox, disabled, name, value, id, title, children, href, target } = props;

	const buttonRef: IIconButtonProps['ref'] = React.useRef(null);
	const rippleRef = React.useRef(null);
	React.useEffect(() => {
		const ripple = new RippleEffect();

		const icon = buttonRef.current?.querySelector('svg');
		ripple.addRippleEffect(rippleRef.current);
		// ripple.addRippleEffect(icon);

		if (title) {
			tippy(buttonRef.current, {
				content: title,
			});
		}
	}, [title]);

	const onClickButton = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
		event.stopPropagation();
		event.preventDefault();
		if (onClick && typeof onClick === 'function') {
			onClick(event);
			return;
		}

		if (href) {
			if (target === '_blank') {
				globalThis.open(href, target);
				return;
			}
			routing.pushState(href);
		}
	};

	let { className, type, variant = 'default' } = props;
	type = !!type ? type : 'button';
	className = className ? ` pui-icon-button ${className}` : 'pui-icon-button';
	className += variant ? ` btn-${variant}` : '';

	const attrs: IIconButtonProps = Object.assign({}, props);
	const attrsToDelete = ['icon', 'type', 'title', 'viewBox', 'className', 'bordered'];
	attrsToDelete.forEach(attr => {
		delete attrs[attr];
	});
	const iconAttributes: IIconProps = { ...attrs };

	if (typeof icon === 'string') {
		iconAttributes.icon = icon;
	} else if (icon && typeof icon === 'object') {
		iconAttributes.icon = icon.icon; // Assuming you want to use the path from IPuiIcon as the icon string
		if (icon.viewBox) iconAttributes.viewBox = icon.viewBox;
	}

	if (viewBox) iconAttributes.viewBox = viewBox;

	title ? (attrs['data-tippy-content'] = title) : null;

	const buttonAttrs = getAttributes(attrs);

	const handleIconClick = (event: MouseEvent<SVGSVGElement>): void => {
		event.stopPropagation();
		if (buttonRef.current) {
			buttonRef.current.click();
		}
	};

	return (
		<button
			id={id}
			type={type}
			ref={buttonRef}
			name={name}
			value={value}
			disabled={disabled}
			className={className}
			onClick={onClickButton}
			{...buttonAttrs}
		>
			<span ref={rippleRef} className="pui-icon-button-mask"></span>
			<Icon {...iconAttributes} onClick={handleIconClick} />
			{children}
		</button>
	);
});
