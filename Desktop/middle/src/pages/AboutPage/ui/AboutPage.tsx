import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t, i18n } = useTranslation('about-page');

    return <div>{t("About")}</div>
}

export default AboutPage;