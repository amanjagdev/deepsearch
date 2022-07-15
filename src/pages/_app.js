import ThemeContextProvider from "../context/theme-context";
import Wrapper from "../components/Wrapper";

import "../styles/index.scss";
import { useEffect } from "react";
import { UserProvider } from "../context/auth-context";

function MyApp({ Component, pageProps }) {
	useEffect(() => {}, []);

	return (
		<ThemeContextProvider>
			<UserProvider>
				<Wrapper Component={Component} pageProps={pageProps} />
			</UserProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
