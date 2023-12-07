import { createTheme } from '@mui/material/styles';

import '@fontsource/poppins';
import '@fontsource-variable/work-sans';

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
        main: '#A888C7'
      }
    }),
    yellow: theme.palette.augmentColor({
      color: {
        main: '#FFD884'
      }
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: '#78CEE9'
      }
    })
  }
});

theme = createTheme(theme, {
  palette: {
    primary: theme.palette.purple,
    secondary: theme.palette.yellow,
    action: {
      selected: theme.palette.purple.dark,
      selectedOpacity: 0.5
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Work Sans Variable',
          svg: {
            text: {
              fontFamily: 'Poppins'
            }
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Work Sans Variable'
        },
        headerTitle: {
          fontFamily: 'Poppins',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'white'
        },
        headerSubtitle: {
          fontFamily: 'Poppins',
          fontSize: '1rem',
          color: 'white'
        },
        sectionedHeaderSuptitle: {
          fontFamily: 'Poppins',
          fontWeight: 'bold'
        },
        sectionedHeaderTitle: {
          fontFamily: 'Poppins',
          fontSize: '3rem'
        },
        sectionedHeaderText: {
          fontFamily: 'Poppins'
        },
        infoPanelATitle: {
          fontFamily: 'Poppins',
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '0.2rem 0'
        },
        infoPanelASubtitle: {
          fontFamily: 'Poppins',
          fontSize: '1rem',
          padding: '1rem 0'
        },
        // Unlike with infoPanelA, there is no actual reusable component called
        // infoPanelB; it's just what I'm calling the various similarly-styled
        // purple-header panels used in the treatments/services page.
        infoPanelBTitle: {
          fontFamily: 'Poppins',
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '0.2rem 0',
          color: theme.palette.purple.main
        },
        infoPanelBBody: {
          fontFamily: 'Work Sans Variable'
        },
        cardGridCardTitle: {
          fontFamily: 'Poppins',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '1rem 0'
        },
        cardGridCardText: {
          fontFamily: 'Work Sans Variable',
          fontSize: '1rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Work Sans Variable',
          textTransform: 'none'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          fontFamily: 'Work Sans Variable',
          // Mimicking the style of MUI Tabs.
          '@media (min-width: 0px)': {
            // To keep the active tab indicator flush to the toolbar's bottom border,
            // override the min-height values for all @media min-width rules;
            // instead let the MuiButtons determine spacing.
            minHeight: '0px',
            paddingRight: '0px'
          },
          alignItems: 'stretch', // Make buttons fill vertical space
          '& .MuiButton-root': {
            color: 'gray',
            borderRadius: '0',
            padding: '0.7em 1.2em',
            '&.active': {
              color: theme.palette.purple.main,
              borderBottom: 'solid',
              borderWidth: '0.2em',
              borderColor: theme.palette.purple.main
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.purple.main
        }
      }
    }
  }
});
