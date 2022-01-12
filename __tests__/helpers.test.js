const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-01-12 1:50:00');

    expect(format_date(date)).toBe('1/12/2022');
});

test('format_plural() returns correctly pluralized word', () => {
    expect(format_plural("Tiger", 2)).toBe("Tigers");
    expect(format_plural("Lion", 1)).toBe("Lion");
});

test('makes a better url', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});