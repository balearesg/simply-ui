import React from 'react';
import {BreadCrumb} from 'pragmate-ui/breadcrumb';

export function Results() {
	const listItems: [string, string][] = [
		[`/components/breadcrumb`, 'Home'],
		[`/components/breadcrumb`, 'Library'],
		[`/components/breadcrumb`, 'Data'],
	];
	return <BreadCrumb items={listItems} />;
}
