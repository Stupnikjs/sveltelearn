<script context="module" lang="ts">
// @ts-nocheck
// @ts-nocheck



    
 </script>
 


 <script lang="ts">

    import CourseComponent from "../../component/CourseComponent.svelte";
    import DateComponent from "../../component/DateComponent.svelte";
    import type course from "../../interface/course";


    interface dataResp {
       data: course[] 
    }


        
    function removeDuplicate<T>(arr:T[]){
            return arr.filter((el:T,index:number) => {
            const json = JSON.stringify(el); 
            return arr.findIndex((e) => JSON.stringify(e) === json) === index
      })
      }    

     
    

    

    export let data:dataResp 

    export let filteredData = data.data

    function filterCourses(event:Event){
        const inputValue = (event.target as HTMLInputElement).value.toLowerCase()
        const filteredData = data.data.filter((course:course) => course.nom.toLowerCase().includes(inputValue)  )
        return filteredData

    }  

    export let dates = data.data.map((el:course) => {return new Date(el.date)})


 </script>
 
 <main>

   <div>
    {#if data}

    {#each removeDuplicate(dates) as date }
    <div>
        <DateComponent date={date}></DateComponent>
        <div class="grid grid-cols-3 bg-gray-200 m-10">
            {#each removeDuplicate(filteredData.filter( el => new Date(el.date).toString() === date.toString())) as course}
            <CourseComponent course={course}></CourseComponent>
            {/each}
        </div>
       
     
    </div>
        {/each } 
    {/if}
   </div>
   

 

 </main>