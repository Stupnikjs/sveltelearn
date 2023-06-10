<script>
    import Image from "../img/running.jpg"
</script>

<header class="noborderbox">
    <nav class="w-full bg-yellow-50 h-10">
        <ul class="w-full flex items-center h-full justify-around kreon">
            <li>Calendrier</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
    </nav>
    <div class="relative flex justify-center items-center">
        <img src={Image} alt="runner" class="h-56 object-cover w-full media-h">
        <h1 class="absolute z-10 text-white kreon text-5xl text-red-400 media media-text"> Trouvez un nouveau Challenge </h1>
    </div>
    
</header>

<style>
    .kreon{
       font-family: "Kreon",sans-serif;
    }
   
    @media (width < 900px) {
            .noborderbox{
                box-sizing: content-box;
                
            }
            .media-h{
                height: 10vh;
               
            }
           .media-text{
            font-size: 1rem;
           }
   
    }
</style>