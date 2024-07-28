import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import styled from "styled-components";
const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};
	// min-w-96 mx-auto
	return (
		<FormContainer >
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-900 res'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300 back'>
					Sign Up <span className='text-purple-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter Full Name'
							className='w-full input input-bordered  h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter User Name'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox className='gtn' onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
 
					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
		</FormContainer>
	);
};
export default SignUp;







const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
//   gap: 1rem;
  align-items: center;
//   background-color: red;
h1 {
  color: white;
  text-transform: uppercase;
}


	form {
		display: flex;
		flex-direction: column;
		padding: 1em;
	}

	input {
		background-color: transparent;
		padding: 1rem;
		border: 0.1rem solid #4e0eff;
		border-radius: 0.4rem;
		color: white;
		font-size: 1rem;
		&:focus {
		  border: 0.1rem solid #997af0;
		  outline: none;
		}
	  }

	  button {
		background-color: #4e0eff;
		color: white;
		padding: 0 1rem;
		border: none;
		font-weight: bold;
		cursor: pointer;
		border-radius: 0.4rem;
		font-size: 1rem;
		text-transform: uppercase;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s;
		&:hover {
		  background-color: #4e0eff;
		  transform: scale(1.10);
		}
	  }

	  span {
		// color: white;
		text-transform: uppercase;
		//   color: #4e0eff;
		  text-decoration: none;
		  font-weight: bold;
	  }

	  @media only screen and (max-device-width: 768px) {
		
		.res{
			height: 100vh;
            width: 100vw;
		}
	  }
`;