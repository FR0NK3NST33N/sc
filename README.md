# Stock Comparator

![example workflow](https://github.com/FR0NK3NST33N/sc/actions/workflows/build.yml/badge.svg)

### Future Improvements

- Continue to improve testing
  - Get better at testing in general and write better tests
  - Cover Autocomplete
  - Cover Layout
  - Cover successful responses from `useAlphaVantage`
- Remove `any`'s
  - Autocomplete
- Add some time series charts
  - Expanded rows in list view?
  - Expanded card?
  - Modals?
- Add view to local storage
- Think about ways to cache as much as possible for API Limit reasons

# Known bug with Alphavantage

`function=OVERVIEW` with a symbol param featuring a `.` will return an empty result

### Running

```
> npm run dev
```

### Build

```
> npm run build
```

### Lint

```
> npm run lint
```

### Test

```
> npm run test
```

### Packages

- Vite
- Chakra, react-select, react-icons
- Jest, Testing-Library, MSW, ESLint
