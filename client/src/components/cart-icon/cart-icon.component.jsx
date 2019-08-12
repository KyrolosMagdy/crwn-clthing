import React from 'react'; 

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { cartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {
	CartIconContainer,
	ShoppingIconContainer,
	ItemCountContainer 
} from './cart-icon.styles.js';

/*import './cart-icon.styles.scss';*/

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick= {toggleCartHidden} >
		<ShoppingIconContainer/> 
		<ItemCountContainer className='item-count'> {itemCount} </ItemCountContainer>
	</CartIconContainer>	
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
	itemCount: cartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);



