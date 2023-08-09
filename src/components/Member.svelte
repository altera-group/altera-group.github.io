
<script>
    export let nick;
    export let rank;
    export let uuid;
    export let instagram;
    export let tiktok;
    export let website;
    export let github;
</script>

<main class="a_karta">
    <h3 class="header_karta2">{nick}</h3>
    <img src="imgs/ranks/{rank}.png" alt="rank" id="rankimg">

    <div class="body_karta">
        <img src="https://visage.surgeplay.com/full/512/{uuid}" id="ateamimg" alt="skin">
    </div>
        
    <div class="socky">
        {#if instagram}            
            <button class="instagram" onclick=" window.open('https://www.instagram.com/{instagram}/','_blank')">
            <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
        </button> 
        {/if}

        {#if tiktok}     
            <button class="tiktok" onclick=" window.open('https://www.tiktok.com/@{tiktok}','_blank')">
                <i class="fa-brands fa-tiktok fa-2xl" style="color: #ffffff;"></i>
            </button> 
        {/if}

        {#if website}
            <button class="website" onclick=" window.open('{website}','_blank')">
            <i class="fa-solid fa-earth-europe fa-2xl" style="color: #ffffff;"></i></button>
        {/if}

        {#if github}
            <button class="github" onclick=" window.open('https://github.com/{github}','_blank')">
            <i class="fa-brands fa-github fa-2xl" style="color: #ffffff;"></i></button>
        {/if}
    </div>

</main>

<style>


</style>