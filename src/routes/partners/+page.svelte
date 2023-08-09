<script>

  import { fade } from "svelte/transition";

</script>


<main class="rules">

<h1 in:fade={{delay: 100}}>Partneři</h1>

<p in:fade={{delay: 120}}>
    Máš zájem o partnera? Vytvoř si ticket na <a target="_blank" href="https://discord.com/invite/QbQmRhFGeD">discord serveru</a> a domluvíme se.
</p>


<h3 in:fade={{delay: 400}}>Naši partneři</h3>
<p class="line-container" in:fade={{delay: 400}}>
    <span class="line"></span>
</p>

</main>

<style>

    p {
        margin-top: 1rem;
        margin-bottom: 1.25rem;
    }

    h3 {
        margin-top: 2rem;
    }

    .line-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .line {
        padding-left: .25rem;
        margin-bottom: .3rem;
    }

</style>