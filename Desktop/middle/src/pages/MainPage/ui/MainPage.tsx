import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation('main-page');
    return <div>
        {t('Main')}
        <Counter />
    </div>;
};

export default MainPage;
