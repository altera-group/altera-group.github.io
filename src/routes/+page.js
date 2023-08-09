
import { playerCount } from "../lib/stores/server-info";

export const load = async ({ fetch }) => {
    const updateServerInfo = async () => {
        await fetch('https://api.minetools.eu/ping/185.137.94.42/25617')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
            playerCount.set(data["players"]["online"]);
            
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
        console.log("updated server info");
    }

    updateServerInfo();
    setInterval(async () => {
        updateServerInfo();
    }, 60000);
    
    
}