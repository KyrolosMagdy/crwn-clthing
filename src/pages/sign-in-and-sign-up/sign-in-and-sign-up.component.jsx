import React from 'react' ;

import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.coponents';

import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUP = () => (
	<div className='sign-in-and-sign-up'> 
		<SignIn />
		<Signup />
	</div>
)

export default SignInAndSignUP ;