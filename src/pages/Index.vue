<template>
  <Layout class="index-layout">
    <div>
      <g-image class="mx-auto" alt="Example image" src="~/mypicture.png" width="200" />
    </div>
    <div class="p-4">
      <a href="/projects" class="btn btn-blue">
        Browse my projects
      </a>
    </div>
    <div class="p-4">
    <a href="/check-this-out" class="btn btn-blue">
      Check this out
    </a>
    </div>
    <div class="p-4">
    <a href="/donate" class="btn btn-blue">
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
  background-color: #F1F1F1;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.btn {
  @apply font-bold py-2 px-4 rounded no-underline;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

</style>
