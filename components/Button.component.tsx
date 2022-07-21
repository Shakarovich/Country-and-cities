import React from 'react';
import  styled  from 'styled-components';

const _Button_Context = styled.button`
padding:10px;
border-radius: 5px;
background-color:#65789f;
border: 1px solid white;
`

type ButtonType = 'primary'|'secondary';

interface ButtonProps{
    type:ButtonType;
    onClick:(...args: any[]) => void;
    children:any;
}


const Button_Context: React.FC<ButtonProps> = ({type, onClick, children}) => {
    return (
        <React.Fragment>
            <_Button_Context
            className={`button button--${type}`}
            onClick={onClick}>{children}</_Button_Context>
        </React.Fragment>
    );
};

export default Button_Context;