
<script lang="ts">
    import "@fontsource/voltaire"
    export let setSelected:Function;  
    export let selected:string[];  
     

    
</script>

<style>

    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
</style>

<aside class="h-full bg-blue-50 w-96 voltaire">  
   
    <div class="w-full h-96 p-2 media bg-gray-200">
    
        <select name="filter" class="p-2 flex justify-center bg-blue-200 w-full media kreon" id="searchFilter" on:change={e => setSelected(e)}>
            <option value=""  selected>choisissez votre filtre</option>
            <option value="nom">nom</option>
            <option value="dep">département</option>
            <option value="date">date</option>
        </select> 
    
    </div>
    {#if selected && selected.length > 0}
        <p>hello</p>
        {#each  selected as str }
            <p>{str}</p>
            
        {/each}
        
    {/if}
    <p>prout</p>
</aside>