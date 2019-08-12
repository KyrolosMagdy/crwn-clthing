import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price })=> {
	/*because stripe deals with money in cents USD currency looks like egyptian 2ersh*/
	const priceForStripe = price * 100;

	const publishableKey = 'pk_test_y1emjBvEE5eVyR3VYucoogpe00sQJBgfv3' ;


	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(res => {
			alert('Payment Successful')
		}).catch( error => {
			console.log('Payment error: ', JSON.parse(error));
			alert('there was an issuse with your payment. please make sure to use the provided credit card')
		})
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