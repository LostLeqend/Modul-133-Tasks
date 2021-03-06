import {
    serve
} from "https://deno.land/std@0.74.0/http/server.ts";

const s = serve({
    port: 8000
});
console.log("http://localhost:8000/");

for await (const req of s) {
    const textPromise = Deno.readTextFile("Index.html");
    textPromise
        .then(text => req.respond({
            body: text
        }))
        .catch(exception => req.respond({
            status: 404
        }));
}