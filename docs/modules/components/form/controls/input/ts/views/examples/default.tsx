import React from 'react';
import { Input } from 'pragmate-ui/form';
import { UIExample } from 'pragmate-ui-docs/utils';

export function DefaultExamples() {
	return (
		<UIExample>
			<h5>Unstyled input</h5>
			This variant creates a basic input field without any default styling.
			<Input variant='unstyled' type='text' name='unstyled' label='Unstyled input' />
			<h5>Defaults</h5>
			The default variant is used to create a standard input field with default styling.
			<Input type='text' variant='floating' name='placeholder' icon='user' placeholder='With placeholder' />
			<Input type='text' required name='label' variant='floating' label='Input with label' />
			<Input type='date' name='date' label='Input label' />
			<h5>Floating Label</h5>
			This variant includes a floating label that animates as the user interacts with the input field.
			<Input variant='floating' type='text' name='floating' label='Floating label' value="" />
			<Input variant='floating' type='date' name='floating-date' label='Floating label' value="" />

		</UIExample>
	);
}
