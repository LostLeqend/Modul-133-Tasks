import {
    Application, Router
} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
    .get("/foo", async (context) => {
        context.response.body = await Deno.readTextFile("Index.html");
    })
    .get("/endpoint", context => send(context, "Index.html"))
    .get("/eins", (context) => {
        context.response.body = "zwei";
    });

app.use(router.routes());
app.listen({
    port: 8000
});

console.log("http://localhost:8000/");