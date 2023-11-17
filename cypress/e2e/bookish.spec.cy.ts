import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
describe("Bookish App", () => {
	afterEach(() => {
		return axios
			.delete("http://localhost:8080/books?_cleanup=true")
			.catch((err) => err);
	});

	beforeEach(() => {
		const books = [
			{
				name: "Refactoring",
				id: 1,
			},
			{
				name: "Domain-driven design",
				id: 2,
			},
			{ name: "Building Microservices", id: 3 },
		];
		
		return books.map((item) =>
			axios.post("http://localhost:8080/books", item, {
				headers: { "Content-Type": "application/json" },
			})
		);
	});

	it("Visits the Bookish", () => {
		cy.visit("http://localhost:5173/");
		cy.get("h2[data-test='heading']").contains("Bookish");
	});

	it("Shows a book list", () => {
		cy.visit("http://localhost:5173/");
		cy.get("div[data-test='book-list']").should("exist");
		cy.get("div.book-item").should((books: any) => {
			expect(books).to.have.length(3);

			const titles = [...books].map(
				(book) => book.querySelector("h2").innerHTML
			);

			expect(titles).to.deep.equal([
				"Refactoring",
				"Domain-driven design",
				"Building Microservices",
			]);
		});
	});
});
