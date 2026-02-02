import styled from 'styled-components';



export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const SuccessMessage = styled.p`
    color: #22C55E;
    font-size: 14px;
    font-weight: 600;
    margin: 10px 0;
    padding: 12px;
    background-color: #DCFCE7;
    border-radius: 8px;
    border-left: 4px solid #22C55E;
`

export const ErrorMessageBox = styled.p`
    color: #EF4444;
    font-size: 14px;
    font-weight: 600;
    margin: 10px 0;
    padding: 12px;
    background-color: #FEE2E2;
    border-radius: 8px;
    border-left: 4px solid #EF4444;
`

export const InfoBox = styled.div`
    background-color: #E0F2FE;
    border-left: 4px solid #0EA5E9;
    padding: 12px;
    margin: 10px 0;
    border-radius: 8px;
`

export const InfoTitle = styled.h3`
    color: #0EA5E9;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`

export const InfoText = styled.p`
    color: #475569;
    font-size: 12px;
    margin: 4px 0;
`

export const Form = styled.form`
    width: 100%;
`

