import React from 'react';
import { ChangeEvent, useRef, useState, MutableRefObject } from 'react';
import type { IProps, PropsState } from './type';
import { InputContext } from './context';
import { Label } from './components/label';
import { internalProps } from './internal-props';

export /*bundle*/
function Input(props: IProps): JSX.Element {
	const input: MutableRefObject<HTMLInputElement> = useRef(null);

	const {
		value,
		errorMessage,
		floating,
		hasError,
		disabled,
		icon,
		className,
		password,
		required,
		loading,
		children,
		id,
		name,
		placeholder,
	} = props;

	const [state, setState] = useState<PropsState>({
		value: value ?? '',
		errorMessage: errorMessage ?? 'Formato incorrecto',
		lengthMessage: 'Cantidad máxima: ',
		emptyMessage: 'Este campo es requerido',
		type: props.type ?? 'text',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		setState({
			...state,
			_hasError: false,
			value: event.target.value,
		});
	};

	let properties: IProps = { ...props };

	let cls = `pui-input${className ? ` ${className}` : ''}`;
	cls += icon || loading || password || required ? ' has-icon' : '';
	cls += disabled ? ' pui-input--disabled' : '';
	cls += hasError ? ' pui-input--error' : '';
	cls += floating ? ' pui-input--floating--label' : '';

	internalProps.forEach(prop => delete properties[prop]);
	//
	const listValue = { state, props, setState, input };
	const isValue = typeof value !== 'undefined' ? value : state.value;
	return (
		<InputContext.Provider value={listValue}>
			<div className={cls}>
				<input
					ref={input}
					{...properties}
					name={name}
					onChange={handleChange}
					type={state.type}
					value={isValue}
					placeholder={placeholder ?? ' '}
					id={id ?? name}
				/>
				<Label />
			</div>
		</InputContext.Provider>
	);
}
