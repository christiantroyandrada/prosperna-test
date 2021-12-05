<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="black"
            dark
        >
            <h1 style="font-family: Segoe Script;">The</h1>&nbsp;&nbsp;
            <h2 @click="route('/')">Market</h2>
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
