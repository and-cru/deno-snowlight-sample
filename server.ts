import snowlight from "https://deno.land/x/snowlight/mod.ts";

const app = snowlight();
app.use(app.json());

app.get("/", async (req, res) => {
	res.send('Hello world!');
});

app.listen({
	port: 3000
}, () => console.log("Server started! 🔥"));