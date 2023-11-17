import pkg from "json-server";
const { create, router: _router, defaults } = pkg;
const server = create();
const router = _router("db.json");
const middlewares = defaults();

server.use((req, res, next) => {
	if (req.method === "DELETE" && req.query["_cleanup"]) {
		const db = router.db;
		db.set("books", []).write();
		res.sendStatus(204);
	} else {
		next();
	}
});

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
	console.log("JSON server is running");
});
