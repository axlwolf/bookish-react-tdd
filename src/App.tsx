import { Typography } from "@mui/material";
import type { Book } from "./types/types";
import BookList from "./components/BookList";

export const App = () => {
	const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

	return (
		<>
			<Typography variant="h2" component="h2" data-test="heading">
				Bookish
			</Typography>
			<div data-test="book-list">
				{/* <div className="book-item">
					<h2>Refactoring</h2>
				</div>
				<div className="book-item">
					<h2>Domain-driven design</h2>
				</div> */}
				{/* {books.map((book) => (
					<div className="book-item">
						<h2 className="title">{book.name}</h2>
					</div>
				))} */}
				<BookList books={books} />
			</div>
		</>
	);
};
