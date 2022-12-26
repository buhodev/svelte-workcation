<script>
  import SiteHeader from '$lib/SiteHeader.svelte'
  import SearchFilters from '$lib/SearchFilters.svelte'
  import PropertyCard from '$lib/PropertyCard.svelte'
  
  export let data
</script>

<svelte:head>
  <title>Workcation</title>
</svelte:head>

<div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
  <SiteHeader class="xl:flex-shrink-0"/>
  <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
    <SearchFilters/>
    <main class="py-6 xl:flex-1 xl:overflow-x-hidden">
      {#each data.locations as location, i}
        <div class:mt-6="{ i > 0}">
          <div class="px-4 xl:px-8">
            <h3 class="text-gray-900 text-xl">{ location.title }</h3>
            <p class="text-gray-600">{ location.description }</p>
          </div>
          <div class="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
            <div class="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
              {#each location.properties as property, i}  
                <div class="{ i > 0 ? 'mt-10 sm:ml-4' : "" } sm:mt-0 sm:w-80 sm:flex-shrink-0">
                  <PropertyCard {property}/>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </main>
  </div>
</div>