<template>
    <v-container fluid>
        <v-row class="align-center">
            <v-col cols="12" class="justify-content-center text-center">
                <h1>Featured Items</h1>
            </v-col>
        </v-row>
        <v-row class="align-center">
            <v-col cols="12" xs="12" sm="4" class="justify-content-center text-center"
            v-for="(item, i) in items"
            :key="i">
                <v-card>
                    <v-img :src="item.image" height="250"></v-img>
                    <v-card-title class="justify-content-center">{{item.name}}</v-card-title>
                    <v-card-text>
                        <v-row  class="mx-auto">
                           <h5 class="text-success">${{item.price}}</h5> 
                        </v-row>
                        <v-row align="center">
                            <h5>{{item.description}}</h5>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="route('/view-product/'+ item.id)">Check it out!</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [],
        }),
        methods:{
            read(){
                axios.get('/api/items').then((data) => {
                    this.items = data.data;
                    console.log(this.items);
                }).catch(
                    (error) => {
                        console.log(error);
                    }
                )
            },
            route(route) {
                this.$router.push(route).catch(() => {});
            },
        },
        mounted() {
            this.read();
            console.log('Component mounted.')
        }
    }
</script>
