<script context="module" lang="ts">
    // @ts-nocheck
    // @ts-nocheck
    
    
    
        
     </script>
     
    
     <script lang="ts">
        
    
    
        import CheckBoxes from "../component/CheckBoxes.svelte";
        import CourseComponent from "../component/CourseComponent.svelte";
        import DateComponent from "../component/DateComponent.svelte";
     
        import type course from "../interface/course";
        import "@fontsource/montserrat"
        import "@fontsource/kreon"
    
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
          
         


        $: selected = {
            nom : false, 
            departement : false, 
            date : false, 
        }; 
    
        $: date = ""; 
        $: nom = ""; 
        $: departement = 0; 
        $: filteredCourses = data.courses   
        $: dates = filteredCourses ? filteredCourses.map((el:course) => {return new Date(el.date)}): []   
         
       
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
     .kreon{
        font-family: "Kreon", sans-serif;
     }
    
    </style>
    
   
        <main class={"mx-20"}>
            
            <div class="bg-red-50 w-1/2 mx-auto p-2 my-5">
                <CheckBoxes setSelected={setSelected}></CheckBoxes>
                <div class="bg-indigo-300 mx-auto flex flex-col m-5 w-2/3 kreon">
        
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
                <div class="kreon">
                    {#if selected.date || selected.nom || selected.departement}
                    <fieldset>
                        <button class="bg-red-200 py-2 mx-auto w-1/2 flex justify-center m-5 " on:click={e => resetFiltered()}> Reinitialiser </button>
                        <button class="bg-indigo-200 mx-auto w-1/2 flex justify-center m-5 py-2 " type="submit" value="Valider" on:click={e => filterCourses(selected)} >Valider</button>
                    </fieldset>
                    
                    {/if}
           
                </div>
              
            </div>
           
        
            <div>
                {#if data}
            
                {#each removeDuplicate(dates) as date }
                <div>
                    <DateComponent date={date}></DateComponent>
    
                    <div class="flex my-5 flex-wrap ">
                       
                        {#each removeDuplicate(filteredCourses.filter(el => new Date(el.date).toString() === date.toString())) as course}
                            <CourseComponent course={course}></CourseComponent>
                        {/each}
                        
                 
            
                    </div>
                   
                 
                </div>
                    {/each } 
                {/if}
               </div>
    
         </main>
   
     
    