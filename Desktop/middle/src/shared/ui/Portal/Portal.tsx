import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; //what to teleport
    targetElement?: HTMLElement; //where to teleport
}

export const Portal = (props: PortalProps) => {
    const { children, targetElement = document.body } = props;

    return createPortal(children, targetElement);
};

