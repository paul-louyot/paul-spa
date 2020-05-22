<template>
  <Layout>
    <div>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        class="flex"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="3G4AZADX3M4RQ" />
        <input type="hidden" name="currency_code" value="EUR" />
        <button class="btn btn-blue mx-auto" title="Donate via PayPal">
          Donate via Paypal
        </button>
      </form>
      <button
        class="btn btn-blue block mx-auto mt-4"
        title="Donate via PayPal"
        id="checkout-button-price_HJcrAmvC4ehVRc"
        role="link"
        v-on:click="stripeCheckout"
      >
        Buy me a gift
      </button>
      <!-- style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em" -->
      <div id="error-message"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Donate'
  },
  mounted(){
    let stripeScript = document.createElement('script')
    stripeScript.setAttribute('src', 'https://js.stripe.com/v3') // add via package?
    document.head.appendChild(stripeScript)
  },
  methods: {
    stripeCheckout(){
      var stripe = Stripe('pk_live_zyjRggYsW6IoKI4JFarJ7q6T00GDKX53dC');
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_HJcrAmvC4ehVRc', quantity: 1}],
        mode: 'payment',
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, https://stripe.com/docs/payments/checkout/fulfillment
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
</style>
