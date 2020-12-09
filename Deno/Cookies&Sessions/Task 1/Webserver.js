import {
    Application,
    Router
} from "https://deno.land/x/oak@v6.3.2/mod.ts";

const router = new Router();
const cookies = [{
    'artist': 'RJD2'
}, {
    'album': 'Deadringer'
}, {
    'song': 'Ghostwriter'
}];

router.get("/", context => {
    for (let cookie of cookies) {
        var key = Object.keys(cookie);
        var value = Object.values(cookie);

        context.cookies.set(key, value);
    };

    context.response.body = `<html><body>
    cookie has been set <a href="second">Go to other page</a>
    </body></html>`;
}).get("/second", context => {
    var listOfCookies = "";

    for (const [key, value] of context.cookies) {
        listOfCookies += `<li>${key} has been set to ${value}</li>`;
    }

    context.response.body = `<html><body><ul>
    ${listOfCookies}
    <ul></body></html>`;
})

const app = new Application();

app.use(router.routes());
app.listen({
    port: 8000
});
console.log("http://localhost:8000/");