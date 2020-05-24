<template>
  <Layout class="index-layout sm:h-screen">
    <div>
      <g-image class="mx-auto" alt="Example image" src="~/mypicture.png" width="200" />
    </div>
    <div class="text-center text-xl mt-6 text-blue-400 font-semibold">
      Welcome to Paul's website
    </div>
    <div class="pt-4 ">
      <a href="/projects" class="btn btn-blue block mx-auto">
        Browse my projects
      </a>
      <a href="/check-this-out" class="btn btn-blue block mx-auto mt-2">
        Check this out
      </a>
      <a href="/donate" class="btn btn-blue block mx-auto mt-2">
        Donate
      </a>
    </div>
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
.index-layout {
  min-height: 570px;
}
</style>

<style scoped>
.btn {
  width: fit-content;
}
</style>
