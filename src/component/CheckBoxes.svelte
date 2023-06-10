<script lang="ts">

    export let setSelected:Function
</script>

<style>
    .kreon{
       font-family: "Kreon",sans-serif;
    }
   
</style>

<div class="flex flex-wrap justify-center gap-5 bg-indigo-200 w-2/3 p-4 border border-blue-400 border-4 mx-auto my-5 kreon">
            
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