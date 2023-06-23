<script context="module" lang="ts">
    // @ts-nocheck
    // @ts-nocheck
    
    
     </script>
     
    
     <script lang="ts">
        
       
        import type course from "../interface/course";   
        import "@fontsource/montserrat"
        import "@fontsource/kreon"
 
        import Paginate from "./Paginate.svelte";
        import AsideComponent from "./AsideComponent.svelte";
    import removeDuplicate from "../functions/RemoveDuplicate";
        
        interface dataResp {
           courses: course[] 
        }
          
        export let data:dataResp 

        $: departement = 0
        $: nom = ""
        $: date = ""
        $: selected = [] as string[]
        $: filteredCourses = data.courses.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())   
       
        
       
        function setSelected(e:any){
          if (!selected.includes(e.target.value) && e.target.value !== "") {
            selected = [...selected, e.target.value]
          }
          console.log(selected)
        }
    
        function deleteFromSelect(str:string){
            if(selected.includes(str)){
                let index = selected.indexOf(str)
                 selected.splice(index, 1)
                 selected = selected
            }
        }

        function setParam(e){
            e.preventDefault()
            if (e.target.name === "dep") {
                departement = parseInt(e.target.value)
                filterCourses(selected)
                
            }
            if (e.target.name === "nom") {
                nom = e.target.value
                filterCourses(selected)
            }
            if (e.target.name === "date"){
                date = e.target.value
                filterCourses(selected)
            }
        }
          
      // suprimer les dates qui sont passées 
      
        function filterCourses(selected:string[]){
            filteredCourses = data.courses.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            console.log("triggered")

            if (selected.includes("nom")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.nom.toLocaleLowerCase().includes(nom.toLowerCase())))
            }
    
            if (selected.includes("dep")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.departement === departement))
            }  
    
            if (selected.includes("date")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.date === date))
            }
            
        }

       

       
      
     </script>
     
    <style>
     
     
   
     .media{
        flex-direction: row;
     }

     @media screen and (max-width: 900px ){
          
        .media{ 
            flex-direction: column;
            box-sizing: border-box;
            gap: 5%
        }


     }

     

    </style>
    
        <div class="flex min-h-screen media"> 
            <AsideComponent setParam={setParam} deleteFromSelect={deleteFromSelect} selected={selected? selected : []} setSelected={setSelected}/>
            <main class="flex-1 media flex flex-col justify-between">
            
                 {#if true}
                     
                     <Paginate courses={filteredCourses}></Paginate>
                  
                 {/if}
                 
             
              </main>
              
        </div>
       
     
    