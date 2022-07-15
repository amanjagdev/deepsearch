import { createContext, useContext, useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext({
	token: null,
	user: null,
	login: () => {},
	register: () => {},
	logout: () => {},
	updateUser: () => {},
	isAuth: false,
	errors: null,
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [errors, setErrors] = useState(null);
	
	const router = useRouter();

	useEffect(() => {
		if (window) {
			const token = window.localStorage.getItem("token");
			const user = window.localStorage.getItem("user");
			if (token && user) {
				setToken(token);
				setUser(JSON.parse(user));
			}
		}
	}, []);

	const login = ({ email, password }) => {
		if (
			email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ===
			null
		) {
			setErrors("Invalid Email");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return false;
		}
		if (password === "") {
			setErrors("Password is required");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return false;
		}

		Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
			email,
			password,
		})
			.then((res) => res.data.data)
			.then((res) => {
				const { password, ...newUser } = res.user;
				setUser(newUser);
				setToken(res.token);
				localStorage.setItem("token", res.token);
				localStorage.setItem("user", JSON.stringify(newUser));
				router.push("/dashboard");
			})
			.catch((err) => {
				setErrors(
					err.response?.data?.message ||
						"Incorrect User ID Or passsord"
				);
			})
			.finally(() =>
				setTimeout(() => {
					setErrors(null);
				}, 3000)
			);
	};

	const register = ({ name, email, password, confirmPassword }) => {
		if (name === "") {
			setErrors("Name is required");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return;
		}
		if (
			email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ===
			null
		) {
			setErrors("Invalid Email");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return;
		}
		if (password === "") {
			setErrors("Password is required");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return;
		}
		if (confirmPassword === "") {
			setErrors("Confirm Password is required");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return;
		}
		if (password !== confirmPassword) {
			setErrors("Confirm Password doesn't match the password");
			setTimeout(() => {
				setErrors(null);
			}, 3000);
			return;
		}

		Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
			email,
			password,
			name,
		})
			.then((res) => res.data.data)
			.then((res) => {
				if (res) {
					return true;
				} else {
					setErrors(
						err.response?.data?.message ||
							"Something went wrong. Please try again later"
					);
				}
			})
			.catch((err) => {
				setErrors(
					err.response?.data?.message ||
						"Something went wrong. Please try again later"
				);
			})
			.finally(() =>
				setTimeout(() => {
					setErrors(null);
				}, 3000)
			);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	const updateUser = (user) => {
		setUser(user);
		localStorage.setItem("user", JSON.stringify(user));
	};

	return (
		<UserContext.Provider
			value={{
				token,
				user,
				login,
				isAuth: !!user,
				logout,
				errors,
				updateUser,
				register,
			}}>
			{children}
		</UserContext.Provider>
	);
};
