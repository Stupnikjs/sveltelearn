<script>
	
	$:  count = 5
	
	/**
     * @param {{ preventDefault: () => void; } | undefined} [e]
     */
	function increment(e){
		e.preventDefault()
		count += 1
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
   HELLO + {count} 

   <button on:click={e => increment(e)}>increment</button>
</section>


