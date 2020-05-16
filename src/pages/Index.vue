<template>
  <Layout class="index-with-bg">
    <div class="bg-container">

    </div>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div>
    <g-image alt="Example image" src="~/mypicture.png" width="135" />
    </div>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.index-with-bg {
  height: 100vh;
  position: relative;
}

.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-image: url(~@/bannerlaptop.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
