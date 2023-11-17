/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, it } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import BookList from "../../components/BookList";

describe("BookList", () => {
	it("render books", async () => {
		const props = {
			books: [
				{ name: "Refactoring", id: 1 },
				{ name: "Domain-driven design", id: 2 },
			],
		};
		render(<BookList {...props} />);

		const headings = await screen.findAllByRole("heading");

		headings.forEach((heading, index) => {
			expect(heading.textContent).toContain(props.books[index].name);
		});
	});
});
