import React, { ReactElement, ReactNode, Children, cloneElement, isValidElement } from 'react';
import { DraggableList } from './draggable';
import { IListItem, IListProps } from './types';
import { ItemList } from './item';
import { DraggableItem } from './item/dragable';

export /*bundle*/ function List<T extends IListItem<any, any>>({
	items,
	children,
	control,
	empty,
	...props
}: Partial<IListProps<T>>): ReactElement {
	const {
		className,
		index = 'id',
		specs,
		draggable,
		childrenPosition = 'top',
		as = 'ul',
		// @deprecated
		container = 'ul',
	} = props;
	const Container = as || container;

	const onTop = childrenPosition === 'top';
	const ItemControl = draggable ? DraggableItem : ItemList;

	if (draggable) return <DraggableList items={items} {...props} />;

	if (!Array.isArray(items)) {
		console.warn(
			'Invalid "items" prop: Expected an array. Please review the component usage and ensure the "items" prop is correctly passed as an array.'
		);
		return null;
	}

	if (control) {
		// console.warn(
		// 	'The "control" prop is deprecated and will be removed in future versions. Please use children to define the item components.',
		// );
	}

	if (items.length === 0 && empty) {
		const Control = empty;
		return <Control />;
	}

	const renderItems = control
		? items.map((item, idx) => {
				return <ItemControl index={index} key={idx} specs={specs} control={control} item={item} idx={idx} />;
		  })
		: items.map((item, idx) =>
				Children.map(children, child =>
					isValidElement(child)
						? cloneElement(child as React.ReactElement<any>, { key: idx, index, specs, item, idx })
						: child
				)
		  );

	const top = onTop && children ? children : null;
	const bottom = !onTop && children ? children : null;

	return (
		<Container className={className}>
			{top}
			{renderItems}
			{bottom}
		</Container>
	);
}
