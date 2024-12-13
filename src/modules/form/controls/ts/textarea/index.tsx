import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import { IProps, IState } from './types';
import { TextareaError } from './error';
import { TextareaCounter } from './counter';

export /*bundle*/ function Textarea(props: IProps): JSX.Element {
	const input = props.ref ?? useRef();
	const { counter, errorMessage, value = '' } = props;
	const [state, setState] = useState<IState>({ value, errorMessage });

	const checkSize = () => {
		const textarea = input.current;
		const { scrollHeight, offsetHeight } = textarea;

		// Temporarily cache the current height
		const previousHeight = textarea.style.height;

		// Avoid jumpy behavior by resetting the height only if necessary
		if (parseFloat(previousHeight) !== scrollHeight) {
			textarea.style.height = `${scrollHeight}px`;
		} else if (scrollHeight < offsetHeight) {
			// Handle shrinking carefully to avoid abrupt resizing
			const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
			const minHeight = lineHeight * 2; // Example: Minimum 2 lines height
			textarea.style.height = Math.max(scrollHeight, minHeight) + 'px';
		}
	};
	/**
	 * If the textarea is created with a value, the height needs to be checked
	 */
	React.useEffect(checkSize, [value]);
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
		setState({
			...state,
			_hasError: false,
			value: event.target.value,
		});
	};

	let properties: IProps = { ...props };
	let cls: string = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
	cls += props.disabled ? ' disabled' : '';
	cls += props.hasError ? ' error' : '';
	['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(
		prop => delete properties[prop]
	);
	const variants = {
		unstyled: 'pui-textarea--unstyled',
		floating: 'pui-textarea--floating',
	};

	if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;

	let clsLabel = '';
	if (props.required) cls += ' is-required';

	return (
		<div className={cls}>
			<textarea
				ref={input}
				{...properties}
				name={props.name}
				onChange={handleChange}
				value={value}
				placeholder={props.placeholder ?? ' '}
			/>
			{props.children}
			<TextareaError state={state} hasError={props.hasError} value={value} errorMessage={props.errorMessage} />
			{props.label && (
				<label className={clsLabel} htmlFor={props.id}>
					{props.label}
				</label>
			)}
			<TextareaCounter length={input?.current?.value.length} maxlength={props.maxLength} counter={counter} />
		</div>
	);
}
