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
        </div>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [],
            loading: true,
        }),
        methods:{
            read(){
                axios.get('/api/items').then((data) => {
                    this.items = data.data;
                    this.loading = false;
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
