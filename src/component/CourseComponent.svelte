<script lang="ts">
import type course from "../interface/course";
import "@fontsource/montserrat"
import "@fontsource/fira-mono"
export let course:course 

</script>
<a class=" flex flex-col items-center  m-3  montserrat relative p-2 course rounded w-52" href={course.link}>
   
        <div class="flex justify-around items-center ">
            <span class="whitespace-nowrap voltaire font-black text-white text-xl">{course.lieu}</span>
            <span class="ml-1 bg-gray-50 rounded px-2 fira font-black kreon  text-xl">{course.departement}</span>
        </div>
        <span class=" p-2 m-2 flex items-center justify-center  bg-blue-100 w-3/4 h-3/4 text-center kreon overflow-hidden">{course.nom}</span>
        
        <div class="kreon mt-2">
            {#if course.distance } 
                    {#each course.distance as dist }
                        <span class="mx-1 cache">{dist}</span>   
                    {/each}
            {/if}
        </div>
</a>

<style>
    .fira{
        font-family: 'Fira Mono', monospace;
    }
    .kreon{
        font-family: "Kreon", sans-serif;
    }
  
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }

    .course{
        background-color: rgb(17, 37, 30);
        height: 20vh;
    }
 
    .course:hover > span{
        background-color: rgb(102, 146, 185);
    }

    .cache {
        visibility: hidden;
        transition: all .5s;
        background-color: transparent;
    }

    .course:hover  .cache {
        visibility: visible;

    }



    @media screen and (max-width: 1000px ){
        
        
        .course{
            margin: 5% auto ;
        }
    }


</style>