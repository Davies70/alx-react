import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
    test('returns a number', () => {
        expect(typeof getFullYear()).toBe('number');
    });

    test('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('is pure', () => {
        const year1 = getFullYear();
        const year2 = getFullYear();
        expect(year1).toBe(year2);
    });

    test('does not throw an errow', () => {
        expect(() => getFullYear).not.toThrow();
    });

});

describe('getFooterCopy', () => {
    test('returns a string if argument is true', () => {
        expect(typeof getFooterCopy(true)).toBe('string');
    });

    test('returns a string if argument is false', () => {
        expect(typeof getFooterCopy(false)).toBe('string');
    });

    test('returns footer copy on true', () => {
        const footer = 'Holberton School';
        expect(getFooterCopy(true)).toBe(footer);
    });

    test('returns footer copy on false', () => {
        const footer = 'Holberton School main dashboard';
        expect(getFooterCopy(false)).toBe(footer);
    });
});

describe('getLatestNotifications', () => {
    test('returns a string', () => {
        expect(typeof getLatestNotification()).toBe('string');
    });

    test('returns the latest notifications', () => {
        const notifications = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(notifications);
    });

    test('does not throw an error', () => {
        expect(() => getLatestNotification()).not.toThrow();
    });

    test('does not return a number', () => {
        expect(typeof getLatestNotification()).not.toBe('number');
    });
});

