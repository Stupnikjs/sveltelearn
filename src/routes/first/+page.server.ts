import type { PageServerLoad,  } from "./$types";



export const load: PageServerLoad = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/all`,{
                    method:'GET',               
        });

        const data = await response.json();
         const props = { data }       
        return props ;
         
};