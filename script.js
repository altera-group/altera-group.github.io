const toggleButton = document.getElementsByClassName('toggle')[0]
const navbarLinks = document.getElementsByClassName('nav')[0]
const ipButton = document.getElementsByClassName('ipcont')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('hide')
  toggleButton.classList.toggle('toggle_anim')
})
ipButton.addEventListener('click', () => {
  ipcopy()
})





function ipcopy() {
  // Copy the text inside the text field
 navigator.clipboard.writeText("play.alteracraft.eu");
 alert("IP adresa serveru byla zkopírována");
} 





//fetch mc
var url = "https://api.minetools.eu/ping/185.137.94.42/25617";
 
 $.getJSON(url, function(r) {
     //data is the JSON string
  if(r.error){
     $('#iptext').html('<b1>Server Offline</b1>');
    return false;
  } 
 var pl = '';
   $('#iptext').html('Online: '+r.players.online);

     
 });


//fetchdis

 var url2 = "https://discord.com/api/guilds/426690734129938434/widget.json";
 $.getJSON(url2, function(d) {
     //data is the JSON string
  if(d.error){
     $('#rest2').html('Server Offline');
    return false;
  } 
 var pld = '';
   $('#rest2').html('<h2>DISCORD:</h2> <b>Uživatelé online: '+d.members.length) +'</b>';

     
 });