import React, { Dispatch, SetStateAction } from 'react';
import { ThemeType, Theme } from './Theme.model';
import { THEMES } from './Theme.config';


interface ITHEME{
    children:any
}
interface ThemeContextProps {
    direction: string;
    themeType: ThemeType;
    theme:Theme;
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

 export const ThemeContext = React.createContext<ThemeContextProps>({
    themeType:'light',
    theme: THEMES['light'],
 } as ThemeContextProps);

 const ThemeProvider: React.FC<ITHEME> = ({children}) => {

    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');
    return(
        <ThemeContext.Provider value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => React.useContext(ThemeContext);
export default ThemeProvider;
