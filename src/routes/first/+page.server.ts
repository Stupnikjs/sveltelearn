import type { PageServerLoad,  } from "./$types";



export const load: PageServerLoad = async () => {
        console.log(import.meta.env.VITE_API_URL)
        const response =await fetch(`${import.meta.env.VITE_API_URL}/api/all`,{
                    method:'GET',               
        });

        const data = await response.json();

        return { data };
         
};