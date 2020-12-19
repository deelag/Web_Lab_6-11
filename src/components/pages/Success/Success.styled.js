import styled from 'styled-components'

export const SuccessContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
    
    h1{
        color: #254e58;
        font-size: 2.8em;
        margin-bottom: 20px;
    }

    p{
        color: #254e58;
        font-size: 1.4em;
    }
    p:nth-child(even){
        margin-bottom: 30px;
   }
`