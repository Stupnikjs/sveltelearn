<script lang="ts">

    export let setSelected:Function
</script>

<style>
    .kreon{
       font-family: "Kreon",sans-serif;
    }
   

    @media (width < 1000px){
            .media-select{
                width: max-content;
                padding: 0;
            }

     }
</style>

<div class="h-1/5 flex flex-wrap flex-col justify-center items-center gap-5 bg-indigo-200 w-1/3 p-2 border border-blue-400 border-4 mx-auto my-5 kreon media-select">
    <p> Je recherche une course par </p> 
    <div class="flex flex-col">
        <fieldset class="flex items-center gap-2">
            <label class="flex-1" for="nom"> Nom </label>
            <input type="checkbox"  name="nom" on:change={e => { setSelected(e)}}>
        </fieldset>
        <fieldset  class="flex items-center gap-2">
            <label for="dep">Departement</label>
            <input type="checkbox" name="dep" on:change={e => { setSelected(e)}}>
        </fieldset>
        <fieldset  class="flex items-center gap-2">
            <label class="flex-1" for="dep">Date</label>
            <input type="checkbox" name="date" on:change={e => { setSelected(e)}}>
        </fieldset>
    </div>  
    
   
   
</div>