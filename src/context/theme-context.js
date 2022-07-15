import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
	theme: "light",
	changeTheme: () => {},
});

const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		setTheme(localStorage.getItem("theme") || "light");
	}, [theme]);

	const changeTheme = () => {
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
