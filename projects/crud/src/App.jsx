import React from "react"
import Movies from "./Movies"
import { MovieProvider } from "./MovieContext.jsx"

const App = () => {
	return (
		<MovieProvider>
				<Movies />
		</MovieProvider>
	)
}

export default App