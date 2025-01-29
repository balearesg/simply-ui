import React from 'react';
import { ImageContext } from './context';
import { Error } from './error';
import { useLoader } from './hooks/use-loader';
import { Img } from './img';
import { IContext, IProps } from './interfaces';
import { Sources } from './sources';

export /*bundle*/
function Image(props: IProps = {}): JSX.Element {
	const { className, onClick, children, sizeLoading } = props;

	const { status } = useLoader(props.src);

	let cls: string = `pui-image ${className ? ` ${className}` : ''}`;

	if (status === 'loading') cls += ' pui-image-preload';
	if (status === 'error') cls += ' pui-image-error';
	const properties: IProps = { ...props, className: cls, onClick };
	['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(
		prop => delete properties[prop]
	);

	const value: IContext = {
		...props,
		src: props.src,
		status,
	};
	const styles: React.CSSProperties = {};
	if (
		status !== 'ready' &&
		!!sizeLoading &&
		typeof sizeLoading === 'object' &&
		sizeLoading.height &&
		sizeLoading.width
	) {
		styles.height = sizeLoading.height;
		styles.width = sizeLoading.width;
	}

	const Content = status === 'error' ? Error : Img;
	return (
		<ImageContext.Provider value={value}>
			<picture {...properties} style={styles} data-src={props.src}>
				<Sources />
				<Content {...properties} />
				{children}
			</picture>
		</ImageContext.Provider>
	);
}
