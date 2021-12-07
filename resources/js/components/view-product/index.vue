<template>
  <v-container>
    <div v-if="!paidFor">
       <v-row justify="center">
           <v-col cols="8" xs="12">
               <v-card>
                   <v-card-title v-if="product.name.length != 0" class="justify-content-center">
                       <h1 class="">{{product.name}} - <b class="text-success">${{ product.price }}</b></h1>
                   </v-card-title>
                   <v-card-text class="text-center">
                       <div class="row justify-content-center">
                           <v-img :src="product.image" max-height="350" max-width="350"></v-img>
                           <h5>{{ product.description }}</h5>
                       </div>
                   </v-card-text>                       
               </v-card>
                <div ref="paypal"></div>
           </v-col>
       </v-row>    

    </div>

    <div v-if="paidFor">
      <h1>Noice, you bought a beautiful {{product.name}}</h1>
    </div>
    
  </v-container>
</template>

<script>
export default {
  name: "Checkout",

  data: function() {
    return {
      loaded: false,
      paidFor: false,
      isValid: true,
      product: {
        name: "",  
        price: "",
        description: "",
        image: ""
      },
      form:{
            item_id: "",
            paypal_order_id: "",
            payer_name: "",
            email: "",
            billing_address: "",
            subtotal: "",
            order_string: "",
      },
    };
  },
  methods: {
    read: function() {
        axios.get('/api/items/' + this.$route.params.id).then((data) => {
            this.product = data.data;
            console.log(this.product);  //load the product information and used in this component
        }).catch((err) => {
            console.log(err);
        })
    },
    setLoaded: function() { //function of PayPal API
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.name,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => { //function of PayPal API when purchase is success
            const order = await actions.order.capture();

            this.form.item_id = this.$route.params.id; //portion of code where the order object is being transferred to the form for saving to local DB
            this.form.paypal_order_id = order.id;
            this.form.payer_name = order.payer.name.given_name +' '+ order.payer.name.surname;
            this.form.email = order.payer.email_address;
            this.form.billing_address = order.purchase_units[0].shipping.address.address_line_1 + ','+
                            order.purchase_units[0].shipping.address.admin_area_2 + ','+
                           order.purchase_units[0].shipping.address.admin_area_1 + ','+
                           order.purchase_units[0].shipping.address.country_code + ','+
                           order.purchase_units[0].shipping.address.postal_code;
            this.form.subtotal = order.purchase_units[0].amount.value +' '+ order.purchase_units[0].amount.currency_code
            this.form.order_string = JSON.stringify(order);  
            this.paidFor = true;
            

            axios.post('/api/orders', this.form).then(() => { //this will post the form to the backend and DB
                this.form.item_id = null;
                this.form.order_string = null;
            }).catch((err) => {cconsole.log(err);})
            console.log(order);
          },
          onError: err => { //function of PayPal API when there is an error
            console.log(err);
            window.location.reload();
          }
        })
        .render(this.$refs.paypal); //render the component of PayPal to the refs in the template
    }
  },
  mounted: function() {
    const script = document.createElement("script"); //mount PayPal script
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ASqr1LAJQXq7DI7T3JMQvyYaK3EM4mMSM6PZZd7-dQw0VYlOF2Bbg9UJCNA7tnU-1tSlBtLpCQUm0LNN";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    this.read();
  },
};
</script>