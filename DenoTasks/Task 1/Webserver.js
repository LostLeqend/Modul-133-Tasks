import {
    serve
} from "https://deno.land/std@0.74.0/http/server.ts";

const s = serve({
    port: 8000
});
console.log("http://localhost:8000/");
const indexFile = await Deno.open("Index.html")

for await(const req of s) 
{
    req.respond({ body: indexFile }); 
} 