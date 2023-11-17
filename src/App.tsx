/* eslint-disable @typescript-eslint/no-unused-vars */

import { Typography } from "@mui/material";
import { BookListContainer } from "./components/BookListContainer";

export const App = () => {
	return (
		<>
			<Typography variant="h2" component="h2" data-test="heading">
				Bookish
			</Typography>
			<div data-test="book-list">
				<BookListContainer></BookListContainer>
			</div>
		</>
	);
};
