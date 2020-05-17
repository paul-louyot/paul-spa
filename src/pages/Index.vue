<template>
  <Layout class="index-layout">
    <div>
      <g-image class="my-picture" alt="Example image" src="~/mypicture.png" width="200" />
    </div>
    <a href="/projects">
      Browse my projects
    </a>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Built with Gridsome</a>
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

.home-links a {
  margin-right: 1rem;
}

.index-layout {
  height: 100vh;
  position: relative;
  background-color: #F1F1F1;
}

.my-picture {
  margin: 0 auto 0;
  display: block;
}
</style>
