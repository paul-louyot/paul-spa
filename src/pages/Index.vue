<template>
  <Layout class="index-layout">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div>
      <g-image class="my-picture" alt="Example image" src="~/mypicture.png" width="135" />
    </div>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/paul-louyot/paul-louyot.github.io" target="_blank" rel="noopener">GitHub</a>
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
