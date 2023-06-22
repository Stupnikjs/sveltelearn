<script>

    import "@fontsource/montserrat"   
    export let date
</script>


<style>
    .montserrat{
        font-family: "Montserrat", sans-serif;
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

<div class=" flex justify-center items-center h-10 text-center font-black text-indigo-400 montserrat w-44 mx-auto ml-5 media ">
    {date.toLocaleDateString()}
</div>