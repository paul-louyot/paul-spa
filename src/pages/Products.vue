<template>
  <Layout>
    <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
    <button
      style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
      id="checkout-button-price_HJcwWJMJpHIfaB"
      role="link"
      v-on:click="stripeCheckout"
    >
      Buy me a gift
    </button>

    <div id="error-message"></div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  },
  mounted(){
    let stripeScript = document.createElement('script')
    stripeScript.setAttribute('src', 'https://js.stripe.com/v3')
    document.head.appendChild(stripeScript)
  },
  methods: {
    stripeCheckout(){
      var stripe = Stripe('pk_test_9W3GGjFHap69qzDUpaW8KzWS00quAVnesK');
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_HJcwWJMJpHIfaB', quantity: 1}],
        mode: 'payment',
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://paul-louyot.github.io/success',
        cancelUrl: 'https://paul-louyot.github.io/canceled',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    }
  }
}
</script>

<style>
.btn-donate {
  margin: 0 auto;
  display: block;
}
</style>
