import { defineCustomElements } from "@ionic/pwa-elements/loader";
import App from "./App.svelte";
import "./app.pcss";

defineCustomElements(window);

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
