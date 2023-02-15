import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
	className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={cls.LanguageSwitcher}
        >
            {t('Language')}
        </Button>
    );
};
