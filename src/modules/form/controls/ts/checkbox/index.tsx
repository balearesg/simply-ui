import { IPUIProps } from 'pragmate-ui/base';
import React, { MouseEvent, RefAttributes, forwardRef, useEffect, useState } from 'react';
import { IFormCheckableProps } from '../types';

export /*bundle*/ const Checkbox: React.FC<IPUIProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
	props: IFormCheckableProps,
	ref: React.Ref<HTMLInputElement>,
): JSX.Element {
	const { checked, disabled, className, onChange, label } = props;

	const handleChange = (event: React.MouseEvent<HTMLInputElement>): void => {
		event.stopPropagation();

		onChange && onChange(event);
	};
	let cls: string = `pui-checkbox ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
	const properties: IFormCheckableProps = Object.assign({}, props);

	['className', 'checked', 'name', 'onChange'].forEach((prop: string): void => {
		delete properties[prop];
	});

	const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	const name = props.name ?? 'pui-checkbox--name';
	const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;

	return (
		<div className={cls} onClick={handleChange}>
			<input
				ref={ref}
				type='checkbox'
				className='pui-checkbox--input'
				id={id}
				name={name}
				checked={checked}
				onChange={handleChange}
				{...properties}
			/>
			<label className='pui-checkbox--label' htmlFor={id}>
				<span>
					<svg viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span>{label}</span>
			</label>
		</div>
	);
});
