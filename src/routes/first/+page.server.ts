import type { PageServerLoad,  } from "./$types";



export const load: PageServerLoad = async () => {
   
        const response =await fetch('http://localhost:8080/all',{
                    method:'GET',               
        });

        const data = await response.json();

        return { data };
         
};