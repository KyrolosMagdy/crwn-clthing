import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price })=> {
	/*because stripe deals with money in cents USD currency looks like egyptian 2ersh*/
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_jOY6RSrKWYxIzhWCu0YLn2e900KfhgcaiJ' ;
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout 
			label=" Pay Now "
			name="Crwn Clothing"
			billingAddress
			shippingAdress
			image= 'http://svgshare.com/i/CUz.svg'
			description= {`Your total is ${price}`}
			amount = {priceForStripe}
			panelLabel = 'Pay Now'
			token = {onToken}
			stripeKey = { publishableKey }
		/>
	);
};

export default StripeCheckoutButton ;