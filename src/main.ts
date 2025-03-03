import { app } from "@kalena/framework";
import { homeRoute } from "@pages/Home.tsx";
import { endepunktRoute } from "@pages/Endepunkt.tsx";

// const clientId = Deno.env.get("CLIENT_ID");
// console.log(clientId);

const myApp = app({
  routes: [
    homeRoute,
    endepunktRoute,
  ],
});

Deno.serve({
  port: 4000,
  hostname: "127.0.0.1",
}, myApp.fetch);
