import { IPUIProps } from 'pragmate-ui/base';

export interface TProps extends Omit<IPUIProps<TProps>, 'variant'> {
    onScrollY?: any;
    onScrollX?: any;
  };