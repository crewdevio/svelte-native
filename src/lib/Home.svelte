<script lang="ts">
  import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem,
    Radio,
    Toggle,
  } from "konsta/svelte";
  import { toggleMode, mode } from "mode-watcher";
  import { createEventDispatcher } from "svelte";
  import { Link } from "svelte-routing";

  export let theme: "ios" | "material";

  const dispatch = createEventDispatcher<{ theme: "ios" | "material" }>();
</script>

<Page>
  <Navbar title="Svelte Native" large transparent centerTitle />
  <BlockTitle>Theme</BlockTitle>

  <List strong inset>
    <ListItem label title="iOS Theme">
      <Radio
        onChange={() => dispatch("theme", "ios")}
        checked={theme === "ios"}
        component="div"
        slot="media"
      />
    </ListItem>

    <ListItem label title="Material Theme">
      <Radio
        onChange={() => dispatch("theme", "material")}
        checked={theme === "material"}
        component="div"
        slot="media"
      />
    </ListItem>
  </List>

  <List strong inset>
    <ListItem title="Dark Mode" label>
      <Toggle
        onChange={() => toggleMode()}
        checked={$mode === "dark"}
        component="div"
        slot="after"
      />
    </ListItem>
  </List>

  <List strong inset>
    <Link to="/view">
      <ListItem title="Navigate" label link />
    </Link>
  </List>
</Page>
