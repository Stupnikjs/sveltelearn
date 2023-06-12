<script>

    import "@fontsource/montserrat"   
    export let date
</script>


<style>
    .montserrat{
        font-family: "Montserrat", sans-serif;
    }
    .opac{
          background-color: rgba(83, 125, 187, 0.5);
          border:  3px solid blue ;
          color: black;    
    }
</style>

<div class=" flex justify-center items-center h-10 text-center font-black text-indigo-400 montserrat w-1/3 text-3xl opac">
    {date.toLocaleDateString()}
</div>