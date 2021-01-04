<template>
    <v-footer padless color="blue-grey darken-3"
              dark style="margin-top: 50px">
        <v-col
                class="text-center"
                cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Arkadia</strong>
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>

</style>
