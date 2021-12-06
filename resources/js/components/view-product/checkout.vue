<template>
    <v-dialog v-model="purchaseDiag" max-width="600px" persistent>
        <template v-slot:activator="{ on, attrs }">
                <v-btn 
                class="float-right mt-2"
                color="#000"
                dark
                @click="viewItem"
                v-bind="attrs"
                v-on="on"
                >
                Buy Now
                </v-btn>
        </template>
        <v-card>
            <v-toolbar color="#000" dark>
                <span class="headline">Checkout Item</span>
                <v-spacer></v-spacer>
                <v-btn text @click="closeDiag"><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-form
                ref="form"
                v-model="isValid"
                lazy-validation>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" xs="12">
                                <v-text-field
                                    v-model="form.name"
                                    :counter="100"
                                    label="Your Name*"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" xs="12">
                                <v-text-field
                                    v-model="form.address"
                                    :counter="100"
                                    label="Address*"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" xs="12">
                                <v-text-field
                                    v-model="form.city"
                                    :counter="30"
                                    label="City*"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" xs="12">
                                <v-text-field
                                    v-model="form.state"
                                    :counter="20"
                                    label="State*"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" xs="12">
                                <v-text-field
                                    v-model="form.zip"
                                    :counter="6"
                                    label="ZIP Code*"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6" xs="12">
                                <v-text-field
                                    v-model="form.phone"
                                    label="Phone Number*"
                                    type="number"
                                    color="#000"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#FFD700">
                        <v-icon>mdi-paypal</v-icon>
                        Pay With PayPal
                    </v-btn>
                </v-card-actions>
            </v-form>     
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        form:{
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
        },
        purchaseDiag: false,
        isValid: true,
    }),
    methods:{
        viewItem(){
            this.purchaseDiag = true;
        },
        closeDiag() {
            this.purchaseDiag = false;
            this.$refs.form.reset();
        }
    },
    mounted() {
        
    }
}
</script>