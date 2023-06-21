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
          border:  3px solid rgb(6, 41, 4) ;
          color: black;    
    }

    .media{
        font-size: 1.4rem;
    }

    @media screen and (max-width: 1000px ){
        
        
        .media{
            font-size: 1rem;
        }
    }

</style>

<div class=" flex justify-center items-center h-10 text-center font-black text-indigo-400 montserrat w-1/4 mx-auto ml-5 rounded media opac skew-y-2">
    {date.toLocaleDateString()}
</div>