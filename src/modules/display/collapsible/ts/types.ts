import { IPUIProps } from 'pragmate-ui/base';
export interface IAccordionItem extends IPUIProps {
	disabled?: boolean;
	title?: string;
	index?: number;
}

export interface IAccordionContext {
	onChange?: (event: any) => void;
	opened?: number;
	setOpened?: (opened: number) => void;
}

export interface ICollapsibleHeader {
	children: React.ReactNode;
	className?: string;
	toggleTitle?: boolean;
}

export interface IContainerProps {
	children: React.ReactNode;
	className?: string;
	toggleable: boolean;
	open?: boolean;
	onToggle?: (open: boolean) => void;
	data?: any;
}
