<script context="module" lang="ts">
// @ts-nocheck
// @ts-nocheck



    
 </script>
 

 <script lang="ts">
    


    import CourseComponent from "../component/CourseComponent.svelte";
    import DateComponent from "../component/DateComponent.svelte";
    import type course from "../interface/course";
    import "@fontsource/montserrat"

    interface dataResp {
       courses: course[] 
    }

        
    function removeDuplicate<T>(arr:T[]){
            if (arr.length === 0) return [];  
            return arr.filter((el:T,index:number) => {
            const json = JSON.stringify(el); 
            return arr.findIndex((e) => JSON.stringify(e) === json) === index
      })
      }  
   
    type options = {
        [key: string] : boolean
    }

    export let data:dataResp 
      
    export let dates = data.courses ? data.courses.map((el:course) => {return new Date(el.date)}): []

    $: selected = {
        nom : false, 
        departement : false, 
        date : false, 
    }; 

    $: date = ""; 
    $: nom = ""; 
    $: departement = 0; 
    $: filteredCourses = data.courses      
   
   
    function setSelected(e:any){
       
       if(e.target.name === "dep"){
        selected = {
            nom : selected.nom,
            date: selected.date, 
            departement: e.target.checked
        }
       }
       if(e.target.name === "nom"){
        selected = {
            nom: e.target.checked,
            date: selected.date, 
            departement: selected.departement
        }
       }
       if(e.target.name === "date"){
        selected = {
            nom: selected.nom,
            date: e.target.checked,
            departement: selected.departement
        }
       }
       
     
    }

    function setParam(e){
        switch (e.target.name){
            case "dep": departement = parseInt(e.target.value)
            case "nom": nom = e.target.value
            case "date": date = e.target.value 
            
            }
       
        }

    function filterCourses(selected:options){
        if (selected.nom){
            filteredCourses = filteredCourses.filter((c:course) => c.nom.includes(date))
        }

        if (selected.departement){
            filteredCourses = filteredCourses.filter((c:course) => c.departement === departement)
        }
        

        if (selected.date){
            filteredCourses = filteredCourses.filter((c:course) => c.date === date)
        }
        

    }
    function resetFiltered(){
        selected = {
            nom:false, 
            date: false, 
            departement: false,
        }
        filteredCourses = data.courses
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

        <div class="bg-red-50 w-1/2 mx-auto p-2 my-5">
            <div class="flex flex-wrap justify-center gap-5 bg-indigo-200 w-2/3 p-4 border border-blue-400 border-4 mx-auto my-5 montserrat">
            
                <fieldset>
                    <label for="nom"> Nom </label>
                    <input type="checkbox"  name="nom" on:change={e => { setSelected(e)}}>
                </fieldset>
                <fieldset>
                    <label for="dep">Departement</label>
                    <input type="checkbox" name="dep" on:change={e => { setSelected(e)}}>
                </fieldset>
                <fieldset>
                    <label for="dep">Date</label>
                    <input type="checkbox" name="date" on:change={e => { setSelected(e)}}>
                </fieldset>
               
               
            </div>
            <div class="bg-indigo-300 mx-auto flex flex-col m-5 w-1/3 montserrat">
    
                {#if selected.departement}
                    <fieldset class="grid grid-cols-2 p-4">
                        <label for="dep" > Departement </label>
                        <input type="number" name="dep" on:change={e => setParam(e)}>
                    </fieldset>
                    
                 {/if}
                {#if selected.nom}
                    <fieldset class="grid grid-cols-2 p-4">
                        <label for="nom"> Nom </label>
                        <input name="nom" type="text" on:change={e => setParam(e)}>
                    </fieldset>
               
                 {/if}
                {#if selected.date}
                    <fieldset class="grid grid-cols-2 p-4">
                        <label for="date"> Date </label>
                        <input name="date" type="date" on:change={e => setParam(e)}>
                    </fieldset>
                  
                {/if}
                
            </div>
            <div class="">
                {#if selected.date || selected.nom || selected.departement}
                <fieldset>
                    <button class="bg-red-200 py-2 mx-auto w-1/5 flex justify-center m-5 " on:click={e => resetFiltered()}> Reinitialiser </button>
                    <button class="bg-indigo-200 mx-auto w-1/5 flex justify-center m-5 py-2 montserrat" type="submit" value="Valider" on:click={e => filterCourses(selected)} >Valider</button>
                </fieldset>
                
                {/if}
       
            </div>
          
        </div>
       
    
        <div>
            {#if data}
        
            {#each removeDuplicate(dates) as date }
            <div>
                <DateComponent date={date}></DateComponent>

                <div class="flex m-10 flex-wrap ">
                   
                    {#each removeDuplicate(filteredCourses.filter(el => new Date(el.date).toString() === date.toString())) as course}
                        <CourseComponent course={course}></CourseComponent>
                    {/each}
                    
             
        
                </div>
               
             
            </div>
                {/each } 
            {/if}
           </div>

     </main>
</div>
 
