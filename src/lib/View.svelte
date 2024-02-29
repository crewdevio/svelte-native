<script lang="ts">
  import { navigate } from "svelte-routing";
  import {
    Block,
    BlockTitle,
    Navbar,
    NavbarBackLink,
    Page,
  } from "konsta/svelte";
</script>

<Page>
  <Navbar title="Other View">
    <svelte:fragment slot="left">
      <NavbarBackLink onClick={() => navigate("/")} />
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Other view</BlockTitle>

  <Block strong inset class="space-y-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit magni
      a sit hic possimus ab unde voluptatum nisi labore, minus sint quas
      blanditiis totam molestiae culpa corrupti corporis nemo?
    </p>
  </Block>
</Page>
