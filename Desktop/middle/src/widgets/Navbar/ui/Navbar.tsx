import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    //functions that are passed as props must always be wrapped in useCallback because the component is rerendered whenever props/state is changed
    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('sign-in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, reprehenderit?
            </Modal>
        </div>
    );
};
