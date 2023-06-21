<script lang="ts">

    export let setSelected:Function
</script>

<style>
    .kreon{
       font-family: "Kreon",sans-serif;
    }
   

    @media (min-device-width < 1000px){
            .media{
                flex-direction: column;
            }
     }
</style>





    <select name="filter" class="p-2 flex justify-center bg-blue-200 w-full" id="searchFilter" on:change={e => setSelected(e)}>
        <option value=""  selected>choisissez votre filtre</option>
        <option value="nom">nom</option>
        <option value="dep">département</option>
        <option value="date">date</option>
    </select>



<!--
<div class="flex flex-wrap flex-col justify-center items-center gap-5  p-2 mx-auto  kreon">
    <p> Je recherche une course par </p> 
    <div class="flex media gap-5">
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
-->