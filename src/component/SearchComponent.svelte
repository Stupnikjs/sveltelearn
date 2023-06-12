<script lang="ts">

import CheckBoxes from "./CheckBoxes.svelte";
import type selectedObj from "../interface/selected";

export let setSearchOver:Function
export let resetFiltered:Function
export let setParam:Function
export let filterCourses: Function
export let setSelected:Function
export let selected:selectedObj

</script>

<style>

.kreon{
    font-family: "Kreon",sans-serif;
}

</style>

<div class=" w-full h-screen mx-auto p-2 my-5 media-select">
    <CheckBoxes setSelected={setSelected}></CheckBoxes>
    <div class="bg-indigo-300 mx-auto flex flex-col m-5 w-2/3 kreon media-select">

        {#if selected.departement !== "notselected"}
            <fieldset class="grid grid-cols-2 p-4 media-select">
                <label for="dep" > Departement </label>
                <input type="number" name="dep" on:change={e => setParam(e)}>
            </fieldset>
            
         {/if}
        {#if selected.nom !== "notselected" }
            <fieldset class="grid grid-cols-2 p-4">
                <label for="nom"> Nom </label>
                <input name="nom" type="text" on:change={e => setParam(e)}>
            </fieldset>
       
         {/if}
        {#if selected.date !== "notselected"}
            <fieldset class="grid grid-cols-2 p-4">
                <label for="date"> Date </label>
                <input name="date" type="date" on:change={e => setParam(e)}>
            </fieldset>
          
        {/if}
        
    </div>
    <div class="kreon">
        {#if Object.entries(selected).some(e => e[1] === "empty" || e[1] === "selected")}
        <fieldset>
            <button class="bg-red-200 py-2 mx-auto w-1/2 flex justify-center m-5 " on:click={e => resetFiltered()}> Reinitialiser </button>
            <button class="bg-indigo-200 mx-auto w-1/2 flex justify-center m-5 py-2 kreon" type="submit" value="Valider" on:click={e => {filterCourses(selected); setSearchOver() }} >Valider</button>
        </fieldset>
        
        {/if}

    </div>
  
</div>