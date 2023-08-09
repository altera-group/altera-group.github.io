<script>
  import { fade } from "svelte/transition";
  import NewInfo from "../components/NewInfo.svelte";

    export let data;
    const { products } = data;
</script>


<main class="row" in:fade={{delay: 200}}>

    <NewInfo time="29.6.2023" title="1.20, práce a nový svět" image="new1.png" desc="
          A je to tu, webové stránky jsou konečně funkční a použitelné (v rámci možností).
                  Prozatimně žádosti o jakékoliv spolupráce, popřípadě unban prosím směřujte na náš Discord server, kde, prosíme, použíjte ticket. Děkujeme za vaši pozornost." />

</main>