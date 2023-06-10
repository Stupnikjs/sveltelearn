<script context="module" lang="ts">
// @ts-nocheck
// @ts-nocheck



    
 </script>
 

 <script lang="ts">
    

    import CoursePage from "../component/CoursePage.svelte";
     import Header from "../component/Header.svelte";
    import type course from "../interface/course";
    import "@fontsource/montserrat"
    
	
	

    interface dataResp {
       courses: course[] 
    }


    export let data:dataResp 
 </script>
 
<style>


</style>

<div>
    <Header></Header>
    <CoursePage data={data}></CoursePage>
</div>
 
