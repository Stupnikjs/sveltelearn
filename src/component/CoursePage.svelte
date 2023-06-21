<script context="module" lang="ts">
    // @ts-nocheck
    // @ts-nocheck
    
    
    
        
     </script>
     
    
     <script lang="ts">
        
    
    
        import CheckBoxes from "../component/CheckBoxes.svelte";
        import CourseComponent from "../component/CourseComponent.svelte";
        import DateComponent from "../component/DateComponent.svelte";
     
        import type course from "../interface/course";
        import type selectedObj from "../interface/selected";
        import removeDuplicate from "../functions/RemoveDuplicate";
        import "@fontsource/montserrat"
        import "@fontsource/kreon"
        import Footer from "./Footer.svelte";
        import Paginate from "./Paginate.svelte";
        import SearchComponent from "./SearchComponent.svelte";
        
    
        interface dataResp {
           courses: course[] 
        }
    
            
     
       
       
        
       
        export let data:dataResp 
          
        


        $: selected = {
            nom : "notselected", 
            departement : "notselected", 
            date : "notselected", 
        } as selectedObj; 

        $: searchOver = false; 
        $: date = ""; 
        $: nom = ""; 
        $: departement = 0; 
        $: filteredCourses = data.courses.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())   
       
        
       
        function setSelected(e:any){
           
           if(e.target.value === "dep"){
            selected = {
                nom : selected.nom,
                date: selected.date, 
                departement: "selected"
            }
           }
           if(e.target.value === "nom"){
            selected = {
                nom: "selected", 
                date: selected.date, 
                departement: selected.departement
            }
           }
           if(e.target.value === "date"){
            selected = {
                nom: selected.nom,
                date: "selected" ,
                departement: selected.departement
            }
           }
           
         
        }
    
        function setParam(e){
            
            switch (e.target.name){
                case "dep": {
                    departement = parseInt(e.target.value)
                  
                    break
                }
                case "nom": {
                    nom = e.target.value
                  
                    break
                }
                
                case "date": {
                    date = e.target.value 
                
                    break 
                }
                }
           
            }
    
        function setSearchOver(){
            searchOver = true
        }    
        function filterCourses(selected:selectedObj){
            filteredCourses = data.courses

            console.log(selected)
            if (selected.nom === "selected" ){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.nom.toLocaleLowerCase().includes(nom.toLowerCase())))
            }
    
            if (selected.departement === "selected" ){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.departement === departement))
            }
            
    
            if (selected.date === "selected" ){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.date === date))
            }
            
            searchOver = true
            
        }

        
        function resetFiltered(){
            selected = {
                nom: "notselected", 
                date: "notselected", 
                departement: "notselected",
            }
            date = "";
            nom = ""; 
            departement = 0; 
            filteredCourses = data.courses
        }
    
      
     </script>
     
    <style>
     .kreon{
        font-family: "Kreon", sans-serif;
     }
   
     @media screen and (min-width: 900px ){


        .media{
            margin: 0 20%; 
           

        }
      }
     @media screen and (max-width: 900px ){
          
         

     }

    </style>
    
   
        <main class="flex-1 media flex flex-col justify-between">
            
           {#if !searchOver}
                <SearchComponent 
                setSelected={setSelected}
                selected={selected}
                setParam={setParam}
                filterCourses={filterCourses}
                resetFiltered={resetFiltered}
                setSearchOver={setSearchOver}

                ></SearchComponent>
           {/if}

            {#if searchOver}
                <div class="flex">
                    <button on:click={e => { searchOver = false }} class="bg-black text-white kreon rounded py-3 w-1/3 m-auto my-5 text-xl"> Nouvelle recherche </button>
                </div>
                <Paginate courses={filteredCourses}></Paginate>
            {/if}
            
            <Footer></Footer>
         </main>
   
     
    