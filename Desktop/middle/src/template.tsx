import { classNames } from "shared/lib/classNames";
import cls from './Component.module.scss';

interface ComponentProps {
    className?: string;
}

export const Component = ({ className }: ComponentProps) => {
    return <div className={classNames(cls.component, {}, [className])}>

    </div>
}