<script>
  import { fade } from "svelte/transition";
  import ShopItem from "../../components/ShopItem.svelte";

</script>


<img class="kategorie" src="imgs/shop.png" alt="shop-logo" in:fade={{delay: 100}}/>

<main class="row" in:fade={{delay: 300}}>

    <ShopItem title="VIP" desc="VIP rank na měsíc, odemkne spoustu příkazů a odmění tě prefixem VIP" price="79 CZK" />
    <ShopItem title="Kosmeticky balíček" desc="Přidá 1x Kosmetický klíč " price="49 CZK" />

</main>