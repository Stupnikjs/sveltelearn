import type { PageServerLoad,  } from "./$types";



export const load: PageServerLoad = async () => {
    
         
        let resp = await fetch("https://checkip.amazonaws.com/")
        let ip = await resp.text()
        
       
        return { ip };
         
};