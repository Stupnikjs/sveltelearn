<script lang="ts">
import type course from "../interface/course";
import "@fontsource/montserrat"
import "@fontsource/fira-mono"
export let course:course 

</script>
<a class="flex flex-col items-center  m-5  montserrat bg-blue-50  min-h-full min-w-33 relative p-4 course media-container rounded h-48" href={course.link}>
   
       
        <div class="flex justify-around items-center">
            <span class="whitespace-nowrap kreon font-black">{course.lieu}</span>
            <span class="ml-1 bg-gray-50 h-6 rounded px-2 fira font-black kreon  text-xl">{course.departement}</span>
        </div>
        <span class="mt-5 flex items-center justify-center min-h bg-blue-100 w-2/3 text-center kreon ">{course.nom}</span>
        
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
    .min-w-33{
       width: 25%;
    }
    .min-h{
        min-height: 5rem;
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



    @media (width < 900px ){
        .media-container{
            min-width: 90%;
           
            
        }
        .course{
            margin: 5% auto ;
        }
    }


</style>