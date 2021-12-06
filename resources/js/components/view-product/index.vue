<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col>
                <v-card>
                    <v-card-title class="text-center">
                        View Product Component {{product_details.name}} 
                    </v-card-title>
                    <v-card-text>
                        {{product_details.description}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            product_details: {}
        }),
        methods: {
            read(){
                axios.get('/api/items/' + this.$route.params.id).then((data) => {
                    this.product_details = data.data;
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
