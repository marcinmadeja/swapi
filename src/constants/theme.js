import { createMuiTheme } from 'material-ui/styles';
import blueGrey from 'material-ui/colors/blueGrey';
import yellow from 'material-ui/colors/yellow';

const templateStandard = {
  palette: {
    primary: blueGrey,
    secondary: yellow,
    borderColor: '#e6ecf5',
    background: {
      default: '#EDF2F6',
    },
  },
  borderRadius: '5px',
};

const mainTheme = createMuiTheme(templateStandard);

export const gutter = '15px';
export const containerWidth = '1300px';

export default mainTheme;
