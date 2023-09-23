import React from 'react';
import './Header.scss';
import { AiFillHome } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const Header = ({ rota }) => {
    const history = useHistory();
    return (
        <div className='header-main'>
            <div className='homeButton' onClick={() => {
                history.push(rota)
            }}>
                <AiFillHome color='#fff' size='35px' />
            </div>
            {/* <img alt='logo' width='45px' src={require('../../assets/logo-ey-black.png')} /> */}
        </div>
    )
}

export default Header