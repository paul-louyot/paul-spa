<template>
  <Layout class="index-layout">
    <div>
      <g-image class="my-picture" alt="Example image" src="~/mypicture.png" width="200" />
    </div>
    <p>
      <a href="/projects">
        Browse my projects
      </a>
      </br>
      <a href="/check-this-out">
        Check this out
      </a>
      </br>
      <a href="/donate">
        Donate
      </a>
    </p>
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
  position: relative;
  background-color: #F1F1F1;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.my-picture {
  margin: 0 auto 0;
  display: block;
}
</style>
