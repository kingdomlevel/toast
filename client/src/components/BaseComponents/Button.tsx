import styled from 'styled-components';

interface ButtonProps {
    rounded?: boolean;
    bgColour?: string;
    height?: string;
    width?: string;
    disabledBgColor?: string;
    hoverBgColor?: string;
    margin?: string;
    fontWeight?: string; 
    color?: string;
    border?: string;
    borderRadius?: string;
}

export const Button = styled.button<ButtonProps>`
    background: ${props => (props.bgColour ? props.bgColour : '#06d6a0')};
    color: ${props => (props.color ? props.color : '#118ab2')};
    padding: 0.5em 1.25em;
    font-size: inherit;
    border: ${props => props.border || 'none'};
    border-radius: ${props => (props.rounded ? '50px' : '0px')};
    cursor: pointer;
    width: ${props => props.width  || ''};
    height: ${props => props.height || ''};
    margin: ${props => props.margin || ''};
    font-weight: ${props => props.fontWeight || ''};

    &:hover {
        background: ${props => ( props.hoverBgColor ? props.hoverBgColor : props.bgColour ? props.bgColour : '#118ab2')};
    }

    &:disabled {
        background: ${props => props.disabledBgColor || 'grey'};
    }
`;

export default Button;