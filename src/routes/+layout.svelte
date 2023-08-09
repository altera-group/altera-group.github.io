<script>
  import NavigationBar from "../components/NavigationBar.svelte";
  import { page } from '$app/stores';

  let screenHeight;
	let screenWidth;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

{#if screenHeight < 700 && screenWidth < 600 && $page.url.pathname == "/"}
  <NavigationBar />
{:else if screenHeight < 700 && screenWidth < 600}
<a href="/">〱 Home</a>
<slot></slot>
{/if}

{#if screenHeight > 700 && screenWidth > 600}
   <main class="wrapper">
    <NavigationBar />

      <main class="content">
          <slot></slot>
      </main>
  </main>
{/if}

<style>

  a {
    font-size: 20px;
    margin: 1rem;
    margin-bottom: 2rem;
  }
</style>
