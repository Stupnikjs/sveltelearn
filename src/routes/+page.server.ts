import type { PageServerLoad,  } from "./$types";



export const load: PageServerLoad = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/all`,{
                    method:'GET',               
        });

        const courses = await response.json();
            
        return {courses} ;
         
};