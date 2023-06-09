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
    type paramType= string | number

    export let data:dataResp 
      
    export let dates = data.courses ? data.courses.map((el:course) => {return new Date(el.date)}): []

    $: selected = ""; 
    $: date = ""; 
    $: nom = ""; 
    $: departement = 0; 
    $: filteredCourse = data.courses.filterByDate().filterByNom().filterByDepartement();   
     
   
   
    function setSelected(e:any){
        selected = e.target.value
        
    }

    function setParam(e){
        switch (e.target.name){
            case "dep": departement = parseInt(e.target.value)
            case "nom": nom = e.target.value
            case "date" date = e.target.value 
            
            }
        }

    function filterCourses<T>(selected:string){
       
        
        switch(selected ){
            case "nom": return data.courses.filter( el => (el.nom.toLowerCase().includes(nom.toLowerCase()) ))  
            case "departement": return data.courses.filter( el => el.departement === departement )
            case "date": return data.courses.filter(el => el.date === date.toLocaleDateString().split("/").reverse().join("-"))
            default: return data.courses
        }
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
        <div>
            Rechercher Courses par 
            <select value="nom" on:change={e => { setSelected(e)}}>
                <option value="departement">departement</option>
                <option value="nom">nom</option>
                <option value="date">date</option>
            </select>

            <div>
                {#if selected === "departement"}
                    <label for="dep"> Selection le departement </label>
                    <input type="number" name="dep" on:change={e => setParam(e)}>
                {:else if selected === "nom"}
                    <label for="nom"> Selectione le nom </label>
                    <input name="nom" type="text" on:change={e => setParam(e)}>
                {:else if selected === "date"}
                    <label for="date">Selectione la date </label>
                    <input name="date" type="date" on:change={e => setParam(e)}>
                
                {/if}

            </div>
        </div>

        
       
    
        <div>
            {#if data}
        
            {#each removeDuplicate(dates) as date }
            <div>
                <DateComponent date={date}></DateComponent>

                <div class="flex m-10 flex-wrap ">
                   
                    {#each removeDuplicate(filteredCourse.filter(el => new Date(el.date).toString() === date.toString())) as course}
                        <CourseComponent course={course}></CourseComponent>
                    {/each}
                    
             
        
                </div>
               
             
            </div>
                {/each } 
            {/if}
           </div>

     </main>
</div>
 
