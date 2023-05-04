import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppDispatch } from "@redux/instance";
import { fetchHeadphones } from "@redux/headphones";
import { Home, Cart } from "@pages";
import { Layout } from "@components";
import { ROUTES } from "@utils";

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchHeadphones());
	}, [])

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.CART} element={<Cart />} />
			</Route>
		</Routes>
	)
}

export default App
