import React from 'react';
import { useCollapsibleContext } from './context';
import { IPUIProps } from 'pragmate-ui/base';

export /*bundle */ function CollapsibleContent({ className, children }: IPUIProps) {
	const { open, toggleable } = useCollapsibleContext();
	const cls = `collapsible__content${className ? ` ${className}` : ''} ${
		open ? ' collapsible__content--opened' : ''
	}`;

	if (!toggleable) return null;

	return <section className={cls}>{children}</section>;
}
