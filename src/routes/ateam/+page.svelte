<script>
  import { fade } from "svelte/transition";
  import Member from "../../components/Member.svelte";
</script>


<img class="kategorie" src="imgs/team.png" alt="a-team" in:fade={{delay: 100}}/>

<main class="row" in:fade={{delay: 300}}>
    <Member nick="Suchys" rank="owner" uuid="1c8860357b7d4db9a221946109c01c8c" instagram="suchyholajf" tiktok="suchyholajf" />
    <Member nick="jara155" rank="dev" uuid="0a737aee1a6e4d8e985c86b30927c5d6" instagram="jajaa.dart" website="https://jaroslav-matejka.cz/" github="jara155" />
    <Member nick="PraguePirateCZ" rank="owner" uuid="8667ba71b85a4004af54457a9734eed7" instagram="prague_pirate" tiktok="pirateprague_pirate" />
    <Member nick="Bibovic" rank="helper" uuid="01a13f1c2ad944e6b0915e51923864b4" instagram="bibovic1" />
    <Member nick="prochy_20" rank="helper" uuid="d53fb2c8d84341b1888a717cd59bf6d1" instagram="prochy_20" />
    <Member nick="crafer_sk" rank="helper" uuid="8667ba71b85a4004af54457a9734eed7" />
    <Member nick="xbatcz" rank="builder" uuid="fe8583cbc0a04ac4bd3655fd3d5ac5cc" website="https://xbatovec.com/" />
    <Member nick="Torrynka" rank="builder" uuid="8667ba71b85a4004af54457a9734eed7" />
</main>