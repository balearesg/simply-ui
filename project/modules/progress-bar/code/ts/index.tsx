import React from 'react';
import type { IProps } from './types';
export /* bundle */ function ProgressBar(props: IProps) {
	const { currentValue, maxValue = 100, variant = 'primary', label } = props;

	const percentage = (currentValue / maxValue) * 100;

	const cls = variant ? `progress-bar__progress ${variant}` : 'progress-bar__progress';
	return (
		<div className="pui-progress-bar">
			<span className={cls} style={{ width: `${percentage}%` }}>
				{currentValue}%
			</span>
		</div>
	);
}
