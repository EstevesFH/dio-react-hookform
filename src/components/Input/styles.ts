import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #333;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    background-color: #FFFFFF;
    transition: all 0.3s ease;

    &:focus-within {
        border-color: #9F2BB8;
        box-shadow: 0 0 0 3px rgba(129, 37, 157, 0.1);
    }
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
        color: #333;
        font-size: 14px;

        &::placeholder {
            color: #9CA3AF;
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.6;
            background-color: #F3F4F6;
        }
    }

`

export const ErrorMessage = styled.p`
    color: #EF4444;
    font-size: 12px;
    margin-top: 8px;
    margin-left: 10px;
    font-weight: 500;
`