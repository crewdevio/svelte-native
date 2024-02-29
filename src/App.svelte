<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { ModeWatcher } from "mode-watcher";
  import { App } from "konsta/svelte";
  import Home from "$lib/Home.svelte";
  import View from "$lib/View.svelte";

  let theme: "material" | "ios" = "ios";
</script>

<ModeWatcher track />

<Router>
  <App {theme} safeAreas>
    <Route path="/">
      <Home {theme} on:theme={({ detail }) => (theme = detail)} />
    </Route>

    <Route path="/view">
      <View />
    </Route>
  </App>
</Router>
