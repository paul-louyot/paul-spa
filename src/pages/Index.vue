<template>
  <Layout class="index-layout">
    <div>
      <g-image class="mx-auto" alt="Example image" src="~/mypicture.png" width="200" />
    </div>
    <div class="pt-4 ">
      <a href="/projects" class="btn btn-blue block mx-auto hover:translate-y-1">
        Browse my projects
      </a>
      <a href="/check-this-out" class="btn btn-blue block mx-auto mt-2">
        Check this out
      </a>
      <a href="/donate" class="btn btn-blue block mx-auto mt-2">
        Donate
      </a>
    </div>
    <p class="home-links">
      Built with
      <a href="https://gridsome.org/" target="_blank" rel="noopener">Gridsome</a>
      +
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind</a>
      <!-- <a href="https://github.com/paul-louyot/paul-louyot.github.io" target="_blank" rel="noopener">Repo</a> -->
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links {
  position: absolute;
  bottom: 0;
}

.index-layout {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

</style>

<style scoped>
.btn {
  width: fit-content;
}
</style>
