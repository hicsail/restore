import { createTheme } from '@mui/material/styles';

// Compose theme in several steps so we can
//   (1) use augmentColor, and
//   (2) style components using named colors.
export let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    // Since we have a tricolor palette, and MUI's default palette system is bicolor,
    // let's use named custom colors instead of adding a custom 'tertiary' to the built-in
    // 'primary'/'secondary'. This will avoid surprises down the line when changing props
    // on MUI components (for example, a developer might try to change indicatorColor
    // or textColor on MUI <Tabs> from 'secondary' to 'tertiary', which will not work).
    // ...However, to avoid having to override color on every component, we set
    // primary and secondary to refer to these named colors (see below).
    purple: theme.palette.augmentColor({
      color: {
        main: '#A888C7',
      },
    }),
    yellow: theme.palette.augmentColor({
      color: {
        main: '#FFD884',
      },
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: '#78CEE9',
      },
    }),
    black: theme.palette.augmentColor({
      color: {
        main: '#000000',
      },
    }),
  },
});

theme = createTheme(theme, {
  palette: {
    primary: theme.palette.purple,
    secondary: theme.palette.yellow,
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: 'purple',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black.light',
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
  },
});

