<script lang="ts">
    
    interface dataResp {
       ip: string 
    }

     export let data:dataResp
     
</script>

<div>
    {data.ip}
    
</div>