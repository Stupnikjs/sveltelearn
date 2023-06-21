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

<div class="">
    <div class="flex flex-col flex-wrap">
        
            {#each dates as date }
                <div class="m-2">
                    <DateComponent date={date}></DateComponent>
                    <div class="flex flex-wrap w-full">
                        {#each courses2D[currentPageIndex].filter((course) => new Date(course.date).toString() === date.toString()) as course }
                        <CourseComponent course={course}></CourseComponent>
                        {/each}
                    </div>
                </div>
                   
                
                
                
            {/each }
    </div> 
    <div class="flex justify-center">
        <div class="mx-auto my-2">
            {#each courses2D as course1d,index }
                <button class="px-2 bg-blue-100 border border-black border-1 kreon" on:click={e=> setCurrentPage(e, index)}>{index + 1}</button>
            {/each}
        </div>
    </div>   
</div>
  
