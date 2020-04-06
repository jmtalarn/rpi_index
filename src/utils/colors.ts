type ColorsType = { primary: string[]; secondary: string[] };

const colors: ColorsType = {
    primary: ['#061b2b', '#00c1de', '#f7b334'],
    secondary: ['#BECD00', '#45AE79', '#4458A0', '#A15095', '#E53D44', '#E20028'],
};

export default colors;

export const PlainColorsArray = Object.entries(colors).reduce((acc, [, values]): any => [...acc, ...values], []);
