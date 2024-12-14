import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import 'kit/styles.scss';
import 'types';

import { Logo, LogoProps } from 'kit';

const Play = () => {
  const [size, setSize] = useState<LogoProps['size']>('default');

  return (
    <>
      <Logo style={{ fontSize: 320 }} size={size}>
        Waat
      </Logo>

      <button onClick={() => setSize(value => (value === 'default' ? 'small' : 'default'))}>toggle size</button>
    </>
  );
};

const root = createRoot(document.getElementById('react') as HTMLElement);

root.render(<Play />);
