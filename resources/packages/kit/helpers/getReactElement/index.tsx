import { Children, ReactElement, Ref, RefAttributes } from 'react';

export function getReactElement(element: ReactElement): ReactElement & { ref?: Ref<HTMLElement> } {
  return Children.only(/(string|number)/.test(typeof element) ? <span>{element}</span> : element);
}
