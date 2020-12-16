import {
    Application,
    Router
} from "https://deno.land/x/oak@v6.3.2/mod.ts";
import {
    Session
} from "https://deno.land/x/session@1.1.0/mod.ts";

const app = new Application();

// Session konfigurieren und starten
const session = new Session({
    framework: "oak"
});
await session.init();

// Session-Middleware der Applikation hinzufügen
app.use(session.use()(session));

const router = new Router();
router.get("/", async (context) =>{
    if(await context.state.session.get("pageCount") == undefined){
        await context.state.session.set("pageCount", 0);
    }else {
        const count = await context.state.session.get("pageCount");
        await context.state.session.set("pageCount", count + 1);
    }

    const count = await context.state.session.get("pageCount");
    context.response.body = `Visited page ${count}times`;
});

app.use(router.routes());
app.listen({
    port: 8000
});
console.log("http://localhost:8000/");