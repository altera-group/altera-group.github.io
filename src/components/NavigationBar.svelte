
<script>
    import { page } from '$app/stores';
  import { fade, fly } from 'svelte/transition';
    import { playerCount } from "../lib/stores/server-info";

    let route;

    $: route = $page.url.pathname;

    $: $playerCount;

    let screenHeight;
	let screenWidth;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

{#if screenHeight < 700 && screenWidth < 600 }

    <nav class="nav">
        <a in:fade={{delay: 100}} class="altera-logo" href="/">
            <img class="logo" alt="altera-logo" src="imgs/Logo.png">
        </a>

        <div in:fade={{delay: 200}} class="ipcont" on:click={() => navigator.clipboard.writeText("play.alteracraft.eu")}>
            <h3 id="iptext">Online: {$playerCount}</h3>
            <h3 class="ip">play.alteracraft.eu</h3>
        </div>

        <div in:fade={{delay: 300}} class="separator"></div>

        <div in:fly={{y: -20, delay: 400}} class="navbar-links">
            <ul>
                <li>
                    <a class="navigation-item" href="http://185.137.94.42:25656/" target="_blank">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-earth-europe" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Dynmapa</span>
                    </a>
                </li>

                <li>
                    <a class="navigation-item" href="https://altera-group.gitbook.io/alteracraft/" target="_blank">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-flask-vial" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">WIKI</span>
                    </a>
                </li>

                <li>
                    <a class="navigation-item" href="/shop">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-store" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Shop</span>
                    </a>
                </li>

                <li>
                    <a class="navigation-item" href="/partners">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-hashtag" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Partneři</span>
                    </a>
                </li>

                <li>
                    <a class="navigation-item" href="/pravidla">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Pravidla</span>
                    </a>
                </li>

                <li>
                    <a class="navigation-item" href="/ateam">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-users-gear" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">A-Team</span>
                    </a>
                </li>
            </ul>
        </div>

        <div in:fade={{delay: 450}} class="separator"></div>
        
        <div class="socky" in:fly={{y: -20, delay: 750}}>
            <button class="instagram" onclick=" window.open('https://www.instagram.com/alteracraft.eu/','_blank')">
                <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
            </button>
            <button class="tiktok" onclick="window.open('https://www.tiktok.com/@alteracraft', '_blank')">
                <i class="fa-brands fa-tiktok fa-2xl" style="color: #ffffff;"></i>
            </button>
            <button class="discord" onclick=" window.open('https://discord.gg/QbQmRhFGeD','_blank')">
                <i class="fa-brands fa-discord fa-2xl" style="color: #ffffff;"></i>
            </button>
        </div>

        <!-- <footer>
            <p>© AlteraCraft 2023</p> 
        </footer> -->
    
    </nav>

{:else}
    <nav class="nav">
        <a class="altera-logo" href="/">
            <img class="logo" alt="altera-logo" src="imgs/Logo.png">
        </a>
        <div class="ipcont" on:click={() => navigator.clipboard.writeText("play.alteracraft.eu")}>
            <h3 id="iptext">Online: {$playerCount}</h3>
            <h3 class="ip">play.alteracraft.eu</h3>
        </div>

        <div class="separator"></div>

        <div class="navbar-links">
            <ul>
                <li>
                    <a class:active={route === "/"} href="/">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-house" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Home</span>
                    </a>
                </li>

                <li>
                    <a href="http://185.137.94.42:25656/" target="_blank">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-earth-europe" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Dynmapa</span>
                    </a>
                </li>

                <li>
                    <a class="" href="https://altera-group.gitbook.io/alteracraft/" target="_blank">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-flask-vial" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">WIKI</span>
                    </a>
                </li>

                <li>
                    <a class:active={route === "/shop"} href="/shop">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-store" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Shop</span>
                    </a>
                </li>

                <li>
                    <a class:active={route === "/partners"} href="/partners">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-hashtag" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Partneři</span>
                    </a>
                </li>

                <li>
                    <a class:active={route === "/pravidla"} href="/pravidla">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Pravidla</span>
                    </a>
                </li>

                <li>
                    <a class:active={route === "/ateam"} href="/ateam">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-users-gear" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">A-Team</span>
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="separator"></div>

        <footer>
            <p>© AlteraCraft 2023</p> 
        </footer>
        
        <div class="socky">
            <button class="instagram" onclick=" window.open('https://www.instagram.com/alteracraft.eu/','_blank')">
                <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
            </button>
            <button class="tiktok" onclick="window.open('https://www.tiktok.com/@alteracraft', '_blank')">
                <i class="fa-brands fa-tiktok fa-2xl" style="color: #ffffff;"></i>
            </button>
            <button class="discord" onclick=" window.open('https://discord.gg/QbQmRhFGeD','_blank')">
                <i class="fa-brands fa-discord fa-2xl" style="color: #ffffff;"></i>
            </button>
        </div>
    </nav>
{/if}

<style>
    .altera-logo {
        text-align: center;
    }

    @media (max-width: 700px) {
        .nav {
            max-width: 300vh;
        }

        .logo {
            padding-top: 1.3rem;
        }

        .navbar-links {
            display: flex;
            margin-top: .7rem;
            justify-items: center;
        }

        .separator {
            margin: 0;
        }

        .socky {
            margin-top: 10px;
            margin-bottom: 0;
        }

        footer {
            position: sticky;
            top: 100%;
            margin-bottom: 10px;
        }

        .navigation-item {
            background-color: rgb(29, 29, 31);
            margin-bottom: .07rem;
            border-radius: 10px;
            width: 82%;
            margin: auto;
            margin-bottom: .25rem;
        }
    }

</style>