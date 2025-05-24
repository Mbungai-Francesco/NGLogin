import { useState } from "react";
import type { User } from "../types";
import { loginUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [, setUser] = useState<User>();
	const [email, setEmail] = useState<string>("");
	const navigate = useNavigate();
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState(false);

	const handleLogin = () => {

		// console.log("Logging in with:", { email, password });
		loginUser(email, password).then((res) => {
      console.log(res);
      
			setUser(res);
			navigate("/home");
		}).catch((error) => {
      console.log(error);
      setError(true);
    })
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
				<h3 className="text-2xl font-bold text-center text-gray-700">
					Login to your account
				</h3>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="mt-4">
						<div>
							<label className="block text-gray-700">Email</label>
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className="mt-4">
							<label className="block text-gray-700">Password</label>
							<input
								type="password"
								placeholder="Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
            {error ? <p className="text-red-600 font-medium">Wrong credentials</p> : <></>}
						<div className="flex items-center justify-center mt-6">
							<button
								onClick={handleLogin}
                type="submit"
								className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
							>
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
