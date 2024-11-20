import React from 'react';
import { useCollapsibleContext } from './context';
import { IconButton } from 'pragmate-ui/icons';
import type { ICollapsibleHeader } from './types';

export /*bundle */ function CollapsibleHeader({
	children,
	className,
	toggleTitle = true,
}: ICollapsibleHeader): JSX.Element {
	const { setOpen, onToggle, open, toggleable } = useCollapsibleContext();

	const onClick = async () => {
		if (!onToggle) {
			setOpen(!open);
			return;
		}

		if (await onToggle(!open)) setOpen(!open);
	};
	const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
	const clsButton = `collapsible__button circle ${open ? ' collapsible__button--opened' : ''}`;
	const attrs: { className: string; onClick?: () => void } = { className: cls };
	if (toggleTitle) {
		attrs.onClick = onClick;
	}
	return (
		<header {...attrs}>
			<div className="collapsible__header-content">{children}</div>
			{toggleable && <IconButton onClick={onClick} className={clsButton} icon={'left'} />}
		</header>
	);
}
