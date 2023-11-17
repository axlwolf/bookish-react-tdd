/* eslint-disable @typescript-eslint/no-unused-vars */
import BookList from "./BookList";
import { useBooks } from "../hooks/useBooks";

export const BookListContainer = () => {
	const { loading, error, books } = useBooks();
	return <BookList books={books}></BookList>;
};
