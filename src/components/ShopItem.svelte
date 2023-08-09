<script>
    export let title;
    export let desc;
    export let price;
    export let url;
</script>

<main class="karta">

    <h2 class="header_karta">{title}</h2>

    <p>
        {desc}
    </p>

    <footer>
        {price}
        <button class="shop_but" onclick=" window.open('https://alteracraft.craftingstore.net/package/1110727','_blank')">Zakoupit</button>
    </footer>

</main>

<style>

    h2 {
        margin: 0;
    }

    p {
        margin-block: 1.25rem;
        text-align: center;
        margin-inline: .1rem;
    }

    footer {
        position: sticky;
        top: 100%;
        margin-bottom: 11px;
        font-weight: bold;
    }

    button {
        margin-left: 10px;
    }

</style>