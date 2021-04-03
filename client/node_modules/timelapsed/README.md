# timelapsed
Timelapsed is a NodeJs module that makes it easy to support fuzzy timestamps (e.g. "4 minutes ago" or "yesterday")

## usage
```javascript
const TimeLapsed = require('timelapsed');

TimeLapsed.fromTimestamp('1514811522125');

TimeLapsed.fromDateString('2017-11-07 15:58:42.125836');
```

#### methods available
for *timestamps* eg "1514811522125" *string*
>use `TimeLapsed.fromTimestamp()`

for *datestrings* eg "2019-01-02T21:00:00.000Z" *string*
>use `TimeLapsed.fromDateString()`

#### required parameters
**timestamp** *string* eg "1514811522125"
>when using `TimeLapsed.fromTimestamp(timestamp)`

**datestring** *string* eg "2019-01-02T21:00:00.000Z"
>when using `TimeLapsed.fromDateString(datestring)`

#### optional parameters with default values
**notation** `(default = 'lng')` *string*
- *twitter*
    >"n", "m", "h", "d", "w"
    ```javascript
    TimeLapsed.fromTimestamp(1514811522125, notation="twitter");
    TimeLapsed.fromDateString('2019-01-02T21:00:00.000Z', notation='twitter');
    ```
- *mid*
    >"now", "min", "mins", "hr", "hrs", "dy", "dys", "wk", "wks"
    ```javascript
    TimeLapsed.fromTimestamp(1514811522125, notation="mid");
    TimeLapsed.fromDateString('2019-01-02T21:00:00.000Z', notation='mid');
    ```
- *lng*
    >"just now", "minute ago", "minutes ago", "hour ago", "hours ago", "yesterday", "days ago", "week ago", "weeks ago".
    ```javascript
    TimeLapsed.fromTimestamp(1514811522125, notation="lng");
    TimeLapsed.fromDateString('2019-01-02T21:00:00.000Z', notation='lng');
    ```

**unsafe** `(dafault = true)` *boolean*
- will **Throw an Error** if parameter set to **true** and the **timestamp** or **datestring** provided is **invalid**.
    ```javascript
    TimeLapsed.fromTimestamp('cf1529385554545xfgg', notation="twitter", unsafe=true);

    Result:
    Error: Bad timestamp
    at Function.fromTimestamp...

    TimeLapsed.fromDateString('xsdsd2017-11-07 15:58:42.125836', notation="lng", unsafe=true);

    Result:
    Error: Bad datestring
    at Function.fromDateString...
    ```
- will return **'N/A'** *string* if parameter set to **false** and the **timestamp** or **datestring** provided is **invalid**.

    ```javascript
    TimeLapsed.fromTimestamp('1529385554545xfgg', notation="twitter", unsafe=false);

    Result:
    'N/A'

    TimeLapsed.fromDateString('xsdsd2017-11-07 15:58:42.125836', notation="lng", unsafe=false);

    Result:
    'N/A'
    ```