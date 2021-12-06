<template>
    <v-container fluid>
        <div v-if="loading" style="height: calc(100vh - 250px);">
            <v-row class="fill-height" align-content="center" justify="center">
                <v-col class="subtitle-1 text-center" cols="12">
                    Please wait...
                </v-col>
                <v-col cols="6">
                    <v-progress-linear
                        color="black"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
        </div>
        <div v-else>
            <v-row justify="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title class="justify-content-center">
                        <h1>{{product_details.name}}</h1>
                    </v-card-title>
                    <v-img :src="product_details.image" max-height="350" max-width="350" class="mx-auto"></v-img>
                    <v-card-text class="text-center">
                        <h5>{{product_details.description}}</h5>
                        <h5>Price is at <b class="text-success">${{product_details.price}}</b></h5>
                    </v-card-text>
                    <v-card-actions class="justify-content-center">
                        <purchase />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        </div>  
    </v-container>
</template>

<script>
    import purchase from "./checkout.vue"
    export default {
        components:{
            purchase
        },
        data: () => ({
            product_details: {},
            loading: true,
        }),
        methods: {
            read(){
                axios.get('/api/items/' + this.$route.params.id).then((data) => {
                    this.product_details = data.data;
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        mounted() {
            this.read();
        }
    }
</script>
