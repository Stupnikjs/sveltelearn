<script context="module" lang="ts">
// @ts-nocheck
// @ts-nocheck



    
 </script>
 

 <script lang="ts">

    import CourseComponent from "../../component/CourseComponent.svelte";
    import DateComponent from "../../component/DateComponent.svelte";
    import type course from "../../interface/course";
    import "@fontsource/montserrat"

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

    export let dates = data.data.map((el:course) => {return new Date(el.date)})

    $: filter = ""; 

    

    function getInputValue(e){
        e.preventDefault()
        let intputVal = e.target.value 
        filter = intputVal
    }


 </script>
 
<style>
 .montserrat{
    font-family: "Montserrat",sans-serif;
 }

</style>

 <main>

    <div class="montserrat justify-center flex  items-center mx-auto flex-col my-20">
        <h1 class="p-5 text">
            Rechercher une course 
        </h1>
        <fieldset class="flex-col flex w-1 border border-black">
            <label for="">filter by name, by departement, by date  </label>
            <input type="text" class="bg-blue-50 border border-gray-200 border-2" on:change={e => getInputValue(e)}>
        </fieldset>


    </div>
    
 
   <div>
    {#if data}

    {#each removeDuplicate(dates) as date }
    <div>
        <DateComponent date={date}></DateComponent>
        <div class="grid grid-cols-3 bg-gray-200 m-10">
            {#each removeDuplicate(data.data.filter( el => new Date(el.date).toString() === date.toString()).filter( el => el.nom.includes(filter))) as course}
            <CourseComponent course={course}></CourseComponent>
            {/each}
        </div>
       
     
    </div>
        {/each } 
    {/if}
   </div>
   

 

 </main>