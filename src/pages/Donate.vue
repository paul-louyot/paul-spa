<template>
  <Layout>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="3G4AZADX3M4RQ" />
      <input type="hidden" name="currency_code" value="EUR" />
      <input class="btn-donate" type="image" src="https://www.paypalobjects.com/en_US/FR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_FR/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>

<style>
.btn-donate {
  margin: 0 auto;
  display: block;
}
</style>
