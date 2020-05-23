<template>
  <Layout>
    <h1>Life abroad</h1>
      <p class="my-2">
        <a
          href="https://www.google.com/maps/d/drive?state=%7B%22ids%22%3A%5B%221QwbJLPZxJFHC6lun0ZkGH7dgzHdnGT3m%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22116070659054577666496%22%7D&usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Explore in detail
        </a>
      </p>
      <div class="px-4">
        <div class="map-container relative mx-auto">
          <g-image
            src="~/spinner.gif"
            width="300"
            class="absolute"
          />
          <iframe
            class="map-abroad absolute z-10"
            src="https://www.google.com/maps/d/u/0/embed?mid=1QwbJLPZxJFHC6lun0ZkGH7dgzHdnGT3m"
            height="480"
          />
        </div>
      </div>
    <h1>Find me here</h1>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/paul-louyot"
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://github.com/paul-louyot"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
      </li>
    </ul>
    <p class="mt-4">
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
    title: 'About'
  }
}
</script>

<style scoped>
.map-abroad {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.map-container {
  height: 480px;
  max-width: 640px;
}
</style>
