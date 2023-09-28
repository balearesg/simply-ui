import React, {
	Ref,
	InputHTMLAttributes,
	ChangeEvent,
	forwardRef,
	RefAttributes,
	useState,
	SyntheticEvent,
	HTMLAttributes,
} from 'react';

interface props extends InputHTMLAttributes<HTMLInputElement> {
	className?: HTMLAttributes<HTMLDivElement>['className'];
	onClick?: (e: SyntheticEvent<HTMLDivElement, Event>) => void;
}
export /*bundle*/ const Switch: React.FC<props & RefAttributes<HTMLInputElement>> = forwardRef(
	(props: props, ref: Ref<HTMLInputElement>): JSX.Element => {
		const { value, checked, required, name, disabled, className, onChange, onClick } = props;
		const [state, setState] = useState({ checked: !!checked });
		const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
			setState({ checked: !checked });
			console.log(100, event.target.checked, onChange);
			onChange && onChange(event);
		};
		// const handleClick = event => {
		// 	onClick && onClick(event);
		// };
		let cls: string = `pragmate-element-switch ${className ? className : ''}`;
		cls += disabled ? ' disabled' : '';
		const properties = Object.assign({}, props);

		['className', 'disabled', 'checked', 'name', 'required', 'onChange', 'onClick', 'value'].forEach(prop => {
			delete properties[prop];
		});

		console.log(200, checked, state.checked);
		return (
			<span className={cls} {...properties}>
				<label className='switch'>
					<input
						ref={ref}
						type='checkbox'
						required={required}
						name={name}
						value={value}
						checked={checked !== undefined ? checked : state.checked}
						disabled={disabled}
						onChange={handleChange}
						placeholder={name}
					/>
					<span className='slider' />
				</label>
			</span>
		);
	}
);
