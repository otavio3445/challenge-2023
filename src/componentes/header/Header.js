import React from 'react';
import './Header.scss';
import { AiFillHome } from 'react-icons/ai'

const Header = ({ rota }) => {
    return (
        <div className='header-main'>
            <div className='homeButton'>
                <AiFillHome color='#fff' size='35px' />
            </div>
            <img alt='logo' width='45px' src={require('../../assets/logo-ey-black.png')} />
        </div>
    )
}

export default Header