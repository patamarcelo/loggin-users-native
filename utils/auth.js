import axios from "axios";

const API_KEY = "AIzaSyDG14-qLROHEnZko3nUK_U901RyOr0eFeU";
export const createUser = async (email, password) => {
	const response = await axios.post(
		"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
			API_KEY,
		{
			email: email,
			password: password,
			returnSecureToken: true
		}
	);
	const token = response.data.idToken;
	return token;
};

export const loginUser = async (email, password) => {
	const response = await axios.post(
		"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
			API_KEY,
		{
			email: email,
			password: password,
			returnSecureToken: true
		}
	);

	const token = response.data.idToken;
	return token;
};
