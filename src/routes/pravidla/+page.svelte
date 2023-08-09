<script>
    import { fade } from "svelte/transition";
</script>

<main class="rules">
    <div in:fade>
        <h1>Úvod</h1>
    
        <p in:fade={{delay: 100}}>
            Pokud dojde k porušení níže uvedených pravidel, hráč bude zaslouženě potrestán.
            Falšování důkazů je banovatelné. Poslední slovo při porušení pravidel má vždy vedení. Hráč má právo při podezření na typ, délku a důvod trestu podat odvolání.
        </p>
    
        <p in:fade={{delay: 100}}>
            Hráč napojením na server souhlasí s pravidly AlteraCraft, popřípadě Discord serveru Altera. Vedení si vyhrazuje právo na jakékoliv změny bez udání důvodu. Neznalost se neomlouvá a bude trestána.
        </p>
    
        <h1 in:fade={{delay: 400}}>Altera</h1>
    
        <p class="line-container" in:fade={{delay: 400}}>
            <span class="line">1) Je přísně zakázáno jakýmkoli způsobem obcházet trest.</span>
            <span class="line">2) Je přísně zakázáno navádění hráčů k porušování pravidel.</span>
            <span class="line">3) Hráč je při nalezení jákékoliv chyby povinen chybu nahlásit odpovědným členům Altera Teamu a nesmí ji zneužívat.</span>
            <span class="line">4) Hráč je povinen při zjištění porušování pravidel (či zákonů) jiným hráčem, tuto věc nahlásit a doložit patřičné důkazy.</span>
            <span class="line">5) Je zakázáno znepříjemňování zážitku ostatním uživatelům.</span>
            <span class="line">6) Posílání reklamy bez předchozí domluvy je po celé Alteře zakázáno.</span>
            <span class="line">7) Hráč je povinen uposlechnout výzvám člena Altera Teamu.</span>
            <span class="line">8) Je přísně zakázáno používat modifikovaný client (Meteor, Wurst, LabyMod,...) (vyjímka official clientu)</span>
            <span class="line">9) Zakázáné jsou také griefing, chunk bany, autoclicker, krádeže modelů, textur a staveb.</span>
            <span class="line">10) Pokud hráč při obchodu s jiným hráčem utrpí újmu na majetku, má právo po předložení důkazů na jejich vrácení.</span>
        </p>
            
            
        <h1 in:fade={{delay: 800}}>Obchod</h1>
    
        <p class="line-container" in:fade={{delay: 800}}>
            <span class="line">1) Server není povinen uhradit částku za produkty v obchodě. </span>
            <span class="line">2) Veškeré itemy, skiny jsou vázané na váš nick, nejsme povinni je přesunout na nový nick.</span>
            <span class="line">
                3) Veškeré problémy s výdejem itemů řešte s někým z Altera Teamu, po předložení důkazů vám je předáme.
            </span>
        </p>
    </div>
        
</main>

<style>
    h1 {
        margin: 0;
        padding: 0;
        margin-bottom: .7rem;
    }
    p {
        margin-bottom: 1.25rem;
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