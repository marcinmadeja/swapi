import { gutter, containerWidth } from 'constants/theme';

class Grid {
  constructor() {
    this.unit = 'px';
    this.screenLg = `${parseInt(containerWidth, 10)}${this.unit}`;
    this.gutter = `${parseInt(gutter, 10)}${this.unit}`;
    this.gutterRaw = this.clearUnit(this.gutter);
    this.columns = 12;

    this.allowedDirection = ['up', 'down', 'only', 'between'];

    this.settings = {
      xxl: {
        breakpoint: 1900,
        container: 1600,
        direction: 'ge',
        position: 6,
      },
      xl: {
        breakpoint: 1250,
        container: parseInt(this.screenLg, 10),
        direction: 'ge',
        position: 5,
      },
      lg: {
        breakpoint: 992,
        container: 960,
        direction: 'ge',
        position: 4,
      },
      md: {
        breakpoint: 768,
        container: 720,
        direction: 'ge',
        position: 3,
      },
      sm: {
        breakpoint: 576,
        container: 540,
        direction: 'ge',
        position: 2,
      },
      xs: {
        breakpoint: 0,
        container: 'auto',
        direction: 'ge',
        position: 1,
      },
    };

    this.getColWidth = this.getColWidth.bind(this);
    this.formatColData = this.formatColData.bind(this);
    this.getContainerWidth = this.getContainerWidth.bind(this);
    this.multiplyUnitValue = this.multiplyUnitValue.bind(this);
    this.push = this.push.bind(this);
    this.pull = this.pull.bind(this);
    this.mediaBreakpointUp = this.mediaBreakpointUp.bind(this);
    this.mediaBreakpointDown = this.mediaBreakpointDown.bind(this);
    this.mediaBreakpointBetween = this.mediaBreakpointBetween.bind(this);
  }

  multiplyUnitValue(value, multiplier) {
    const newValue = this.clearUnit(value) * multiplier;
    return newValue + this.unit;
  }

  clearUnit(value) {
    return parseFloat(value);
  }

  getContainerWidth(props) {
    if (props.fullWidth) return '';
    if (props.widthContainer) return `width: ${props.widthContainer}${this.unit}`;

    return Object.keys(this.settings)
      .map(size => {
        const item = this.settings[size];
        const type = item.direction === 'ge' ? 'min-width' : 'max-width';
        const breakpoint = item.direction === 'ge' ? item.breakpoint : (item.breakpoint - 1);
        const width = item.container === 'auto' ? item.container : item.container + this.unit;
        return `
          @media (${type}: ${breakpoint}${this.unit}) {
            max-width: ${width};
          }
        `;
      })
      .reverse();
  }

  getColWidth(props) {
    const colData = this.formatColData(props);

    return colData.map(item => {
      const colWidth = (item.colWidth / this.columns) * 100;
      const type = item.direction === 'ge' ? 'min-width' : 'max-width';
      const breakpoint = item.direction === 'ge' ? item.breakpoint : (item.breakpoint - 1);

      return `
        @media (${type}: ${breakpoint}${this.unit}) {
          max-width: ${colWidth}%;
        }
      `;
    });
  }

  formatColData(data) {
    return Object.keys(data)
      .filter(key => this.settings[key])
      .filter(key => this.isNatural(data[key]))
      .map(key => {
        const item = Object.assign({}, this.settings[key]);
        item.colWidth = data[key];
        return item;
      })
      .sort(this.sortBreakpoints);
  }

  push(props) {
    const { push } = props;
    if (!push) return null;
    const breakpointNames = Object.keys(push)
      .filter(breakpointName => this.settings[breakpointName])
      .filter(breakpointName => this.isNatural(push[breakpointName]))
      .map(breakpointName => {
        const breakpointDetails = this.settings[breakpointName];
        breakpointDetails.left = push[breakpointName];

        const breakpoint = breakpointDetails.direction === 'ge' ? breakpointDetails.breakpoint : (breakpointDetails.breakpoint - 1);
        const type = breakpointDetails.direction === 'ge' ? 'min-width' : 'max-width';
        const left = (breakpointDetails.left / this.columns) * 100;
        return `
          @media (${type}: ${breakpoint}${this.unit}) {
            left: ${left}%;
          }
        `;
      });

    return breakpointNames;
  }

  pull(props) {
    const { pull } = props;
    if (!pull) return null;
    const breakpointNames = Object.keys(pull)
      .filter(breakpointName => this.settings[breakpointName])
      .filter(breakpointName => this.isNatural(pull[breakpointName]))
      .map(breakpointName => {
        const breakpointDetails = this.settings[breakpointName];
        breakpointDetails.right = pull[breakpointName];

        const breakpoint = breakpointDetails.direction === 'ge' ? breakpointDetails.breakpoint : (breakpointDetails.breakpoint - 1);
        const type = breakpointDetails.direction === 'ge' ? 'min-width' : 'max-width';
        const right = (breakpointDetails.right / this.columns) * 100;
        return `
          @media (${type}: ${breakpoint}${this.unit}) {
            right: ${right}%;
          }
        `;
      });

    return breakpointNames;
  }

  mediaBreakpointUp(breakpointName, style) {
    const breakpointDetails = this.settings[breakpointName];
    if (!breakpointDetails) return null;
    const { breakpoint } = breakpointDetails;

    const newStyle = `
      @media (min-width: ${breakpoint}${this.unit}) { ${style} }
    `;

    return newStyle;
  }

  mediaBreakpointDown(breakpointName, style) {
    const breakpointDetails = this.settings[breakpointName];
    if (!breakpointDetails) return null;
    const { breakpoint } = breakpointDetails;

    const newStyle = `
      @media (max-width: ${breakpoint - 1}${this.unit}) { ${style} }
    `;

    return newStyle;
  }

  mediaBreakpointBetween(breakpointNameUp, breakpointNameDown, style) {
    const breakpointUpDetails = this.settings[breakpointNameUp];
    const breakpointDownDetails = this.settings[breakpointNameDown];
    if (!breakpointUpDetails || !breakpointDownDetails) return null;
    const breakpointUp = breakpointUpDetails.breakpoint;
    const breakpointDown = breakpointDownDetails.breakpoint;

    const newStyle = `
      @media (min-width: ${breakpointUp}${this.unit}) and (max-width: ${breakpointDown - 1}${this.unit}) { ${style} }
    `;

    return newStyle;
  }

  sortBreakpoints(a, b) {
    return a.position - b.position;
  }

  isNatural(number) {
    return Number.isInteger(number) && number > 0;
  }
}

const grid = new Grid();

export default grid;
