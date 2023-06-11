<script lang="ts">
  


import SliceArrayByN from "../functions/SliceArrByN";
import RemoveDuplicate from "../functions/RemoveDuplicate";
import CourseComponent from "./CourseComponent.svelte";
import type course from "../interface/course";
import DateComponent from "./DateComponent.svelte";

export let courses: course[]


$: currentPageIndex = 0; 
$: courses2D = SliceArrayByN(courses, 30)
$: dates = RemoveDuplicate(courses2D[currentPageIndex].map((el:course) => {return new Date(el.date)}));


function setCurrentPage(e, index:number){
    
    currentPageIndex = index
}

</script>

<style>
      .kreon{
        font-family: "Kreon", sans-serif;
     }
   
</style>


<div class="flex flex-col">
    
        {#each dates as date }
                <DateComponent date={date}></DateComponent>
                <div class="flex flex-wrap">
                    {#each courses2D[currentPageIndex].filter((course) => new Date(course.date).toString() === date.toString()) as course }
                    <CourseComponent course={course}></CourseComponent>
                {/each}
                </div>
               
        {/each }
        
    <div class="mx-auto my-5">
        {#each courses2D as course1d,index }
            <button class="px-2 bg-blue-100 border border-black border-1 kreon" on:click={e=> setCurrentPage(e, index)}>{index + 1}</button>
        {/each}
    </div>
</div>