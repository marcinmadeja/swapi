import mainTheme from 'constants/theme';

export const styles = {
  activeItem: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 6,
      height: '100%',
      background: mainTheme.palette.primary.main,
    },
    '& svg': {
      color: mainTheme.palette.primary.main,
    },
  },
};
