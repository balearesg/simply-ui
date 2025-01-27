import React from 'react';

export interface ISelect {
	title: string;
	value: string | number;
	onChange: (Event) => void;
	placeholder: string;
	options: { value: string | number; label: string }[];
	isDisabled?: boolean;
	disabled?: boolean;
}

export function MobileSelect({ options, ...props }: ISelect) {
	const output = options.map(({ value, label }, index) => (
		<option title={label} key={`${value}-${index}`} value={value}>
			{label}
		</option>
	));
	const attrs = { ...props };

	if (props.isDisabled) attrs.disabled = true;
	['isDisabled', 'defaultOption', 'key'].forEach(item => delete attrs[item]);

	return (
		<div className="pui-mobile-select__container">
			<select title="select" {...attrs} className="pui-mobile-select">
				{props.placeholder && <option value="">{props.placeholder}</option>}
				{output}
			</select>
		</div>
	);
}
