import React from 'react';
import { useImageContext } from './context';

export function Img() {
	const { src, setState, state, alt, status } = useImageContext();

	if (status === 'loading') return <div className="pui-image-loading" />;
	if (status === 'error') return <div className="pui-image-error">{alt}</div>;

	return <img src={src} />;
}
