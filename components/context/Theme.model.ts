import {Color} from '../../models/color.models';
export type ThemeType = 'dark'| 'light';

export interface Theme {
    '--primary' : Color;
    '--secondary' : Color;
    '--background' : Color;
    '--white' : Color;
}
