<script>


    import "@fontsource/montserrat"   
    export let date
</script>


<style>
    .montserrat{
        font-family: "Montserrat", sans-serif;
    }
</style>

<div class=" flex justify-center items-center h-10 text-center bg-pink-50 font-black text-indigo-400 montserrat w-1/3 ">
    {date.toLocaleDateString()}
</div>