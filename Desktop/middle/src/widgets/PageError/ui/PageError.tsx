import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t, i18n } = useTranslation('error-page');

    const refreshPage = () => {
        location.reload();
    };
    return <div className={classNames(cls.PageError, {}, [className])} >
        <p>{t('PageError')}</p>
        <Button
            theme={ThemeButton.CLEAR}
            onClick={refreshPage}
            className={cls.refreshButton}
        >
            {t('RefreshPage')}
        </Button>
    </div>;
};
