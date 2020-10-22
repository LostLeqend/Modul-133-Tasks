import {
    serve
} from "https://deno.land/std@0.74.0/http/server.ts";

const s = serve({
    port: 8000
});
console.log("http://localhost:8000/");

for await (const req of s) {
    const indexFile = await Deno.open("Index.html")
    const exampleSiteFile = await Deno.open("ExampleSite.html")

    if (req.url == "/bar") {
        req.respond({
            body: indexFile
        });
    }

    if (req.url == "/foo") {
        req.respond({
            body: exampleSiteFile
        });
    }

}