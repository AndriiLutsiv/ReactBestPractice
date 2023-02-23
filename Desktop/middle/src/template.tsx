import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Component.module.scss';

interface ComponentProps {
    className?: string;
}

export const Component = ({ className }: ComponentProps) => (
    <div className={classNames(cls.component, {}, [className])} />
);
