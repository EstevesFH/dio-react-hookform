import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    font-weight: 600;
    font-size: 16px;

    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        opacity: 0.8;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        background-color: #D1D5DB;
        border-color: #D1D5DB;
        cursor: not-allowed;
        opacity: 0.6;
    }
`