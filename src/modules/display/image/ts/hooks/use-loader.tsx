import React from 'react';

export /*bundle*/ function useLoader(src) {
	const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');

	React.useEffect(() => {
		if (!src) {
			// setStatus('error');
			return;
		}

		const img = new globalThis.Image();
		const onLoad = () => setStatus('ready');
		const onError = () => setStatus('error');

		img.addEventListener('load', onLoad);
		img.addEventListener('error', onError);
		img.src = src;

		return () => {
			img.removeEventListener('load', onLoad);
			img.removeEventListener('error', onError);
		};
	}, [src]);

	return { status };
}
