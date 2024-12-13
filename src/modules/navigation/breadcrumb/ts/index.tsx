import React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { IProps } from './types';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { v4 as uuid } from 'uuid';
import { Item } from './item';

export /* bundle */ function BreadCrumb({ items, separator = '/', className, children, ...props }: IProps) {
	const [currentRouting, setCurrentRouting] = React.useState(routing.uri.pathname);
	useBinder([routing], () => setCurrentRouting(routing.uri.pathname));
	const total = items.length;
	const breadcrumbOutput = items.map(([label, link, onClick], index) => (
		
		<Item
			key={uuid()}
			total={total}
			onClick={onClick}
			index={index}
			separator={separator}
			link={link}
			label={label}
			last={total === index + 1}
			currentRouting={currentRouting}
		/>
	));

	let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;

	return (
		<div className={cls} {...props}>
			{breadcrumbOutput.length > 0 && <ul className='pui-breadcrumb'>{breadcrumbOutput}</ul>}
			{children && <div>{children}</div>}
		</div>
	);
}
