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

    
</style>

<svelte:head>
      <title>cours le rouquin </title>
      <meta name="description" content="calendrier des courses à pied">
</svelte:head>
<div class="back flex flex-col min-h-screen box-border">
      <Header></Header>
      <div class="flex">
         <CoursePage data={data}></CoursePage>
      </div> 
      <Footer></Footer>

</div>
 
