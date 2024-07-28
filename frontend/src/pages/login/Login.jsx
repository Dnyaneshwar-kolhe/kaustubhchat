import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import styled from "styled-components";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
// min-w-96 mx-auto
	return (
		<FormContainer>
		<div className='flex flex-col items-center justify-center bg-gray-900'> 
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-purple-500'> ChatApp</span>
				</h1>
               
				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div >
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
		</FormContainer>
	);
};
export default Login;




const FormContainer = styled.div`
//    height:;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
//   gap: 1rem;
  align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
    // gap: 1rem;
//     justify-content: center;
//     img {
//       height: 1rem;
//     }
    h1 {
      color: white;
      text-transform: uppercase;
    }
//   }
       
    
        // border-radius: 1rem;
        // box-shadow: 0 0.188em 1.550em rgb(156, 156, 156);
        // align-items: center;

  form {
    display: flex;
    flex-direction: column;
    // gap: 0.3rem;
    // background-color: #00000076;
    border-radius: 2rem;
    padding: 1em;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
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
`;
