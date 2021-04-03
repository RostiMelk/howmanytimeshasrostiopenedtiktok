const TimeLapsed = require('../index');

test('just now default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now());
  expect(duration).toBe('just now');
});

test('just now twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='twitter');
  expect(duration).toBe('n');
});

test('just now mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='mid');
  expect(duration).toBe('now');
});

test('just now long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now(), notation='lng');
  expect(duration).toBe('just now');
});

test('1 minute ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60);
  expect(duration).toBe('1 minute ago');
});

test('1 mn ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='twitter');
  expect(duration).toBe('1m');
});

test('1 min ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='mid');
  expect(duration).toBe('1min');
});

test('1 minute ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60, notation='lng');
  expect(duration).toBe('1 minute ago');
});

test('17 minutes ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 17000 * 60);
  expect(duration).toBe('17 minutes ago');
});

test('17 minutes ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 17000 * 60, notation='twitter');
  expect(duration).toBe('17m');
});

test('17 minutes ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 17000 * 60, notation='mid');
  expect(duration).toBe('17mins');
});

test('17 minutes ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 17000 * 60, notation='lng');
  expect(duration).toBe('17 minutes ago');
});

test('42 minutes ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 42000 * 60);
  expect(duration).toBe('42 minutes ago');
});

test('1 hour ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60);
  expect(duration).toBe('1 hour ago');
});


test('1 hour ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60, notation='twitter');
  expect(duration).toBe('1h');
});

test('1 hour ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60, notation='mid');
  expect(duration).toBe('1hr');
});

test('1 hour ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60, notation='lng');
  expect(duration).toBe('1 hour ago');
});

test('19 hours ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 19000 * 60 * 60);
  expect(duration).toBe('19 hours ago');
});

test('19 hours ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 19000 * 60 * 60, notation='twitter');
  expect(duration).toBe('19h');
});

test('19 hours ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 19000 * 60 * 60, notation='mid');
  expect(duration).toBe('19hrs');
});

test('19 hours ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 19000 * 60 * 60, notation='lng');
  expect(duration).toBe('19 hours ago');
});

test('1 day ago  default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24);
  expect(duration).toBe('yesterday');
});

test('1 day ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, notation='twitter');
  expect(duration).toBe('1d');
});

test('1 day ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, notation='mid');
  expect(duration).toBe('1dy');
});

test('1 day ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24, notation='lng');
  expect(duration).toBe('yesterday');
});

test('6 days ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 6000 * 60 * 60 * 24);
  expect(duration).toBe('6 days ago');
});

test('6 days ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, notation='twitter');
  expect(duration).toBe('6d');
});

test('6 days ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, notation='mid');
  expect(duration).toBe('6dys');
});

test('6 days ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 6000 * 60 * 60 * 24, notation='lng');
  expect(duration).toBe('6 days ago');
});

test('1 week ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7);
  expect(duration).toBe('1 week ago');
});

test('1 week ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, notation='twitter');
  expect(duration).toBe('1w');
});

test('1 week ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, notation='mid');
  expect(duration).toBe('1wk');
});

test('1 week ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 1000 * 60 * 60 * 24 * 7, notation='lng');
  expect(duration).toBe('1 week ago');
});

test('3 weeks ago default notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7);
  expect(duration).toBe('3 weeks ago');
});

test('3 weeks ago twitter notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, notation='twitter');
  expect(duration).toBe('3w');
});

test('3 weeks ago mid notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, notation='mid');
  expect(duration).toBe('3wks');
});

test('3 weeks ago long notation', () => {
  const duration = TimeLapsed.fromTimestamp(Date.now() - 3000 * 60 * 60 * 24 * 7, notation='lng');
  expect(duration).toBe('3 weeks ago');
});

test('will return N/A when passed invalid timestamp if unsafe is set to false', () => {
  const duration = TimeLapsed.fromTimestamp('1529385554545xfgg', notation="twitter", unsafe=false);
  expect(duration).toBe('N/A');
});

test('will return N/A when passed invalid datestring if unsafe is set to false', () => {
  const duration = TimeLapsed.fromDateString('g2017-11-07 15:58:42.125836', notation="twitter", unsafe=false);
  expect(duration).toBe('N/A');
});

test('will throw an Error when passed invalid timestamp if unsafe is set to true(default)', () => {
  expect(() => {
    TimeLapsed.fromTimestamp('1529385554545xfgg')
  }).toThrow();
});

test('will throw an Error when passed invalid timestamp if unsafe is set to true', () => {
  expect(() => {
    TimeLapsed.fromTimestamp('1529385554545xfgg', notation='mid', unsafe=true);
  }).toThrow();
});

test('will throw an Error when passed invalid timestamp if unsafe is set to true(default)', () => {
  expect(() => {
    TimeLapsed.fromDateString('g2017-11-07 15:58:42.125836');
  }).toThrow();
});

test('will throw an Error when passed invalid timestamp if unsafe is set to true', () => {
  expect(() => {
    TimeLapsed.fromDateString('g2017-11-07 15:58:42.125836', notation='lng', unsafe=true);
  }).toThrow();
});
