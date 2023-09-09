import { createContext, useState } from "react";

export const AuthContext = createContext({
	token: "",
	isAuth: false,
	authenticate: () => {},
	logout: () => {}
});

const AuthContextprovider = ({ children }) => {
	const [authToken, setAuthToken] = useState();

	const authenticate = (token) => {
		setAuthToken(token);
	};

	const logout = () => {
		setAuthToken(null);
	};

	const value = {
		token: authToken,
		isAuth: !!authToken,
		authenticate: authenticate,
		logout: logout
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};
export default AuthContextprovider;
