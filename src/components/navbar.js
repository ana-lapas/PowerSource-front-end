import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

export function NavBar() {
    const navigate = useNavigate()
    return (
        <>
            <TopBar>
                <div onClick={() => navigate('/')}>
                    PowerSource
                </div>
                <MenuHeader>
                    <div onClick={() => navigate('/create/product')}>
                        Vender Energia
                    </div>
                    <div onClick={() => navigate('/products')}>
                        Comprar energia
                    </div>
                </MenuHeader>
            </TopBar>
        </>
    )
}
const TopBar = styled.div`
    display: flex;
    height: 10vh;
    width: 100vw;
    flex-direction: row;
    background-color: #FDE400;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 40px;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0%;
`;

const MenuHeader = styled.div`
    display: flex;
    height: 10vh;
    width: 100vw;
    flex-direction: row;
    color: #ffffff;
    font-family: 'Expletus Sans', cursive;
    font-size: 20px;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0%;
`
