import type { MotionProps } from 'framer-motion';
import React, { HTMLAttributes, AnimationEventHandler } from 'react';

type ConflictingProps = 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration';
export type Julio = 'dev';
type HTMLMotionProps<T> = Omit<HTMLAttributes<T>, ConflictingProps> &
	MotionProps & {
		onAnimationStart?: AnimationEventHandler<T>;
		onAnimationEnd?: AnimationEventHandler<T>;
		onAnimationIteration?: AnimationEventHandler<T>;
	};

export /*bundle*/ interface IPUIProps<T = unknown> extends HTMLMotionProps<T> {
	/**
	 * @deprecated
	 */
	type?: string;
	title?: string;
	children?: React.ReactNode;
	variant?: PuiVariant;
	className?: string;
	as?: string;
}

export /*bundle*/ type PuiVariant =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'success'
	| 'info'
	| 'error'
	| 'warning'
	| 'default';
