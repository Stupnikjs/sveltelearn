<script context="module" lang="ts">
// @ts-nocheck
// @ts-nocheck



    
 </script>
 

 <script lang="ts">
    
    import CoursePage from "../component/CoursePage.svelte";
    import Header from "../component/Header.svelte";
  
    import Footer from "../component/Footer.svelte";
    import type course from "../interface/course";
    import "@fontsource/montserrat"
   
    interface dataResp {
       courses: course[] 
    }

    export let data:dataResp 
 </script>
 
<style>

.back {
  background-image: url("../img/favicon.png") ;
  min-height: 100vh;  

}

    
</style>

<div class="back flex flex-col min-h-screen">
   <Header></Header>
   <div class="flex">
      <CoursePage data={data}></CoursePage>
   </div> 
   <Footer></Footer>

</div>
 
