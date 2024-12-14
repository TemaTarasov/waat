import { forwardRef, ParamHTMLAttributes } from 'react';

import classnames from 'classnames';

export interface Props extends ParamHTMLAttributes<HTMLParagraphElement> {
  size?: 'default' | 'small';
}

export const Logo = forwardRef<HTMLParagraphElement, Props>(
  ({ size = 'default', children, className, ...props }, ref) => (
    <p {...props} ref={ref} className={classnames('w-logo', className)} data-size={size}>
      {children}
    </p>
  )
);
