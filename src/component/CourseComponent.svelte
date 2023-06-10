<script lang="ts">
import type course from "../interface/course";
import "@fontsource/montserrat"
import "@fontsource/fira-mono"
export let course:course 

</script>
<a class="flex flex-col items-center  m-5  montserrat bg-blue-50  min-h-full min-w-33 relative p-2" href={course.link}>
   
       
        <div class="flex justify-center items-center">
            <span class="whitespace-nowrap kreon font-black">{course.lieu}</span>
            <span class="ml-5 bg-gray-50 h-6 rounded px-3 fira font-black kreon -top-5 -right-5 absolute">{course.departement}</span>
        </div>
        <span class="flex items-center justify-center min-h bg-blue-100 w-2/3 text-center kreon ">{course.nom}</span>
        
        
        
  
    <span class="flex   bg-black text-white ">
        {#if course.distance } 
                {#each course.distance as dist }
                    <span class="mx-1">{dist}</span>   
                {/each}
        {/if}
    </span>
</a>

<style>
    .fira{
        font-family: 'Fira Mono', monospace;
    }
    .kreon{
        font-family: "Kreon", sans-serif;
    }
    .min-w-33{
       width: 18%;
    }
    .min-h{
        min-height: 5rem;
    }
    


</style>