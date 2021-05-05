import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactElement;
}

export default function Modal({ children }: Props): React.ReactElement {
  const elRef = useRef<any>(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot?.appendChild(elRef.current);

    return () => {
      modalRoot?.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}
