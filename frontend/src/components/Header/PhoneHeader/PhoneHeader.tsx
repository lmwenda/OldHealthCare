import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './PhoneHeader.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import PhoneMenu from '../../PhoneMenu/PhoneMenu';

function PhoneHeader() {
    const [ toggleBar, setToggleBar ] = React.useState<boolean>(false);

    const toggleBarHandler = () => {
        if(toggleBar){
            setToggleBar(false);
        }else{
            setToggleBar(true);
        }
    }

    return (
        <nav className="phoneHeader">
            <Link to="/" className="phoneHeader___title" style={{ color: '#303030', textDecoration: 'none' }}>
                <h1>HealthCare</h1>
            </Link>

            <IconButton className="phoneHeader___button" onClick={toggleBarHandler}>
                <MenuIcon />
            </IconButton>


            <div className="phoneHeader___menu">

                {
                    toggleBar ? (
                        <div>
                            <PhoneMenu />
                        </div>
                    ) : null
                }

            </div>
        </nav>
    )
}

export default PhoneHeader;
