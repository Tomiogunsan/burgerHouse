import HeaderCartButton from './HeaderCartButton';
import {Fragment} from 'react';
import BurgerImage from '../../assets/BurgerImage.jpg'
import classes from './Header.module.css'

const Header = (props) => {
        return(
            <Fragment>
                <header className={classes.header}>
                    
                <h1>Burger House</h1>
                     <nav>
                         <ul>
                         <li>
                      <HeaderCartButton onClick={props.onShowCart}/>
                    </li>
                    </ul>
                    </nav>
                      </header>
                <div className={classes['main-image']}>
                    <img src={BurgerImage} alt='A burger!' />
                </div>
               
            </Fragment>
        ) 
};

export default Header;