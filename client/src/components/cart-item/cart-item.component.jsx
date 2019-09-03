import React from 'react' ;

import {
	CartItemContainer,
	ImageContaine,
	ItemDetailsContainer
} from './cart-item.styles'; 

/*import './cart-item.styles.scss';*/

const CartItem = ({ item: {imageUrl, price, name, quantity }}) => (
	<CartItemContainer>
		<ImageContaine src={imageUrl} alt='item' />
		<ItemDetailsContainer> 
			<span > {name} </span>
			<span> 
				{quantity} * {price} $ 
			</span>

		</ItemDetailsContainer>
	</CartItemContainer>
);
export default React.memo(CartItem);