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

    $: nomfilter = ""; 
    $: departement = 0; 

    $:selected = "nom"; 

    function getInputValue(e){
        e.preventDefault()
        let intputVal = e.target.value 
        
        if (selected === "nom") nomfilter = intputVal
        if (selected === "departement") departement = parseInt(intputVal)
    }

    function setSelected(e){
        e.preventDefault()
        selected = e.target.value
    }


 </script>
 
<style>
 .montserrat{
    font-family: "Montserrat",sans-serif;
 }

</style>

<div>
    <header>
        <nav class="w-full bg-yellow-50 h-20">
            <ul class="w-full flex items-center h-full justify-around montserrat">
                <li>Calendrier</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    <main class="m-10">

        <div class="montserrat justify-center flex  items-center mx-auto flex-col my-20">
            <h1 class="p-5 text">
                Rechercher une course 
            </h1>
            <fieldset>
                <select name="search" id="search" class="bg-red-50 p-2 rounded my-5" on:change={ e => setSelected(e)}> 
                    <option value="departement">departement</option>
                    <option value="nom">nom</option>
                </select>

            </fieldset>
            <fieldset class="flex-col flex w-1 border border-black">
                {#if selected == "nom"}
                <input type="text" class="bg-blue-50 border border-gray-200 border-2 font-black" on:change={e => getInputValue(e)}>
                {:else}
                <input type="number" class="bg-blue-50 border border-gray-200 border-2 font-black" on:change={e => getInputValue(e)}>
                {/if}
            </fieldset>
    
    
        </div>
        
     
       <div>
        {#if data}
    
        {#each removeDuplicate(dates) as date }
        <div>
            <DateComponent date={date}></DateComponent>
            <div class="flex m-10 flex-wrap ">
                {#if selected ===  "nom"}
                    {#each removeDuplicate(data.data.filter( el => new Date(el.date).toString() === date.toString()).filter( el => el.nom.includes(nomfilter))) as course}
                    <CourseComponent course={course}></CourseComponent>
                    {/each}
                {:else} 
                    {#each removeDuplicate(data.data.filter( el => new Date(el.date).toString() === date.toString()).filter( el => el.departement === departement )) as course}
                    <CourseComponent course={course}></CourseComponent>
                    {/each}
                {/if}

            </div>
           
         
        </div>
            {/each } 
        {/if}
       </div>
       
    
     
    
     </main>
</div>
 