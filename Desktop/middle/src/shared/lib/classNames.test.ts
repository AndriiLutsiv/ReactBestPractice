import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods true', () => {
        const expected = 'someClass hovered active';
        expect(classNames('someClass', { 'hovered': true, 'active': true })).toBe(expected);
    });

    test('with false mods', () => {
        const expected = 'someClass active';
        expect(classNames('someClass', { 'hovered': false, 'active': true })).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass active';
        expect(classNames('someClass', { 'hovered': undefined, 'active': true })).toBe(expected);
    });
});