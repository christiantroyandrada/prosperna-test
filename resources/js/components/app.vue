<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="black"
            dark
        >   
            <v-btn @click="route('/')" text>
                <h1 style="font-family: 'Segoe UI';" class="mt-1">The</h1>&nbsp;&nbsp;
                <h2 class="mt-2 ml-n2">Market</h2>
            </v-btn>   
            <v-spacer></v-spacer>
        </v-app-bar>    <!-- The title bar -->
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer class="justify-content-center">
            <p class="font-weight-bold">Test site by Christian Troy Andrada.  Let us prosper together!</p>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        methods:{
            route(route) {
                this.$router.push(route).catch(() => {});
            },
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
