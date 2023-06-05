<script lang="ts">
import type course from "../interface/course";
import "@fontsource/montserrat"
import "@fontsource/fira-mono"
export let course:course 

</script>

<div class="flex items-center bg-gradient-to-b from-pink-50 to-pink-100 box-border m-2">
    <a class="flex items-center  m-10  montserrat relative h-full" href={course.link}>
        <span class=" mr-10 justify-center  py-4 bg-blue-100 w-2/3 text-center fira">{course.nom}</span>
        <span class="whitespace-nowrap montserrat">{course.lieu}</span>
        
        <span class="ml-5 bg-gray-50 h-6 rounded px-2  montserrat">{course.departement}</span>
    </a>
    <span class="flex flex-col bg-indigo-50  bshad">
        {#if course.distance } 
                {#each course.distance as dist }
                    <span class="mx-1">{dist}</span>   
                {/each}
        {/if}
    </span>
</div>

<style>
    .fira{
        font-family: 'Fira Mono', monospace;
    }
    .montserrat{
        font-family: "Monserrat", sans-serif;
    }
    .bshad{
        box-shadow: 0.1rem 0.1rem 0.2rem .07rem rgb(199, 199, 199);
    }


</style>