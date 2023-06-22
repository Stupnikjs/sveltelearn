<script context="module" lang="ts">
    // @ts-nocheck
    // @ts-nocheck
    
    
     </script>
     
    
     <script lang="ts">
        
       
        import type course from "../interface/course";
        import type selectedObj from "../interface/selected";
       
        import "@fontsource/montserrat"
        import "@fontsource/kreon"
 
        import Paginate from "./Paginate.svelte";
        import AsideComponent from "./AsideComponent.svelte";
        
        interface dataResp {
           courses: course[] 
        }
          
        export let data:dataResp 


        $: selected = [] as string[]
        $: filteredCourses = data.courses.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())   
       
        
       
        function setSelected(e:any){
          if (!selected.includes(e.target.value) && e.target.value !== "") {
            selected = [...selected, e.target.value]
          }
          console.log(selected)
        }
    
        /*   
    
        function filterCourses(selected:string[]){
            filteredCourses = data.courses

            if (selected.includes("nom")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.nom.toLocaleLowerCase().includes(nom.toLowerCase())))
            }
    
            if (selected.includes("departement")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.departement === departement))
            }  
    
            if (selected.includes("date")){
                filteredCourses = removeDuplicate(filteredCourses.filter((c:course) => c.date === date))
            }
            
        }*/

       

        let props = {
             
            setSelected: setSelected, 
            selected: selected? selected : [], 
            
        }
      
     </script>
     
    <style>
     .kreon{
        font-family: "Kreon", sans-serif;
     }
   
     @media screen and (min-width: 900px ){


        .media{
            margin: 0; 
           

        }
      }
     @media screen and (max-width: 900px ){
          
         

     }

     

    </style>
    
        <div class="flex"> 
            <AsideComponent {...props}/>
            <main class="flex-1 media flex flex-col justify-between">
            
                 {#if true}
                     
                     <Paginate courses={filteredCourses}></Paginate>
                  
                 {/if}
                 
             
              </main>
              
        </div>
       
     
    