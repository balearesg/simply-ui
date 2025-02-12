import React, { SyntheticEvent } from 'react';
import { useImageContext } from '../context';
import { IconButton } from 'pragmate-ui/icons';

export function Error() {
	const { src, onError } = useImageContext();
	console.log(2);
	const onClickError = (event: SyntheticEvent<Element, Event>): void => {
		event.stopPropagation();
		if (onError && typeof onError === 'function') onError(event);
	};
	return (
		<div data-src={src} className="pui_image__error-container pui-image-error">
			{onError && <IconButton onClick={onClickError} icon="refresh" />}
		</div>
	);
}
