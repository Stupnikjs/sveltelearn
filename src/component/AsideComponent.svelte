
<script lang="ts">
    import "@fontsource/voltaire"
    export let setParam:Function;
    export let setSelected:Function;  
    export let selected:string[];  
    export let deleteFromSelect:Function;      

    
</script>

<style>

    .voltaire{
        font-family: "Voltaire", sans-serif;
    }

    .media{
            width: 20rem;
            height: 100%;
    }

    @media screen and (max-width: 900px ){
          
         .media {
            width: 100vw;
            height: 15%;
         }

    }
   

</style>

<aside class="h-full bg-blue-50 voltaire media">  
   
    <div class="w-full  p-2  bg-gray-200">
    
        <select name="filter" class=" flex justify-center bg-blue-200 w-full kreon" id="searchFilter" on:change={e => setSelected(e)}>
            <option value=""  selected>choisissez votre filtre</option>
            <option value="nom">nom</option>
            <option value="dep">département</option>
            <option value="date">date</option>
        </select> 
        {#if selected && selected.length > 0}
        <div class="flex flex-col items-center">
            {#each  selected as filter }
            <div>
                <p class="w-2/3 text-xl m-1">{filter}<button  id={filter} on:click={e => { deleteFromSelect(filter)}}><i class="fa-solid fa-xmark" ></i></button></p>
                <input type={filter === "dep" ? "number": "string"} name={filter} on:input={e => {setParam(e)}}>
            </div>
              
            {/each}
        </div>
       
        
    {/if}
    </div>
    
    
</aside>