import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.styles.scss';

class Signup extends React.Component{
	constructor(){
		super();
		this.state={
			displayName: '',
			email: '', 
			password: '',
			confirmPassword: ''
		}
	};

	handleSubmit = async event => {
		event.preventDefault();

		const signUpStart = this.props;
		const {displayName, password, confirmPassword, email} = this.state;


		if(password !== confirmPassword){
			alert(`Passowrds don't match`);
			return;
		}

		signUpStart({ email, password, displayName });
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({[name]: value})
	};

	render(){
		const {displayName, password, confirmPassword, email} = this.state;
		return(
			<div className='sign-up'> 
				<h2 className='title'> I don't have an account </h2>
				<span> Sign up with your email and password </span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}> 
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>

					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Passowrd'
						required
					/>

					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'> SIGN UP </CustomButton>
				</form>

			</div>

		)
	}
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Signup) ;