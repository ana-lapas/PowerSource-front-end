import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

export function NavBar(){
    const navigate = useNavigate()
    return(
        <>
        <TopBar onClick={() => navigate('/')}>
            PowerSource
        </TopBar>
        </>
    )
}
const TopBar = styled.div`
    display: flex;
    height: 10vh;
    width: 100vw;
    background-color: #FDE400;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0%;
`;
