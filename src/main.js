// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  // Add meta tags
  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,JavaScript,Gridsome'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: 'K4iVHQXlRNebUHiLRWZDO6WBHnPqkNmJJGzdrH4rOrc'
  })

  head.meta.push({
    name: 'description',
    content: 'Welcome to Paul Louyot\'s personal website'
  })

  head.meta.push({
    property: 'og:title',
    content: 'Paul\'s website'
  })

  head.meta.push({
    property: 'og:description',
    content: 'Welcome to Paul Louyot\'s personal website'
  })

  head.link.push({
    rel: 'canonical',
    content: 'https://paul-louyot.github.io/'
  })

  head.link.push({
    name: 'robots',
    content: 'index, follow'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
