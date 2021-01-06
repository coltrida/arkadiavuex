<template>
    <div>
        <the-header></the-header>
        <transition name="route" mode="out-in">
            <router-view></router-view>
        </transition>
        <the-footer></the-footer>
    </div>

</template>

<script>
    import TheHeader from './layout/TheHeader';
    import TheFooter from "./layout/TheFooter";
    export default {
        name: "Home",
        components: {TheFooter, TheHeader},
    }
</script>

<style scoped>
*{
    background-color: #263238
}

.route-enter-from {
    opacity: 0;
}

.route-leave-to {
    opacity: 0;
}

.route-enter-active {
    transition: all 0.4s ease-out;
}

.route-leave-active {
    transition: all 0.4s ease-in;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
}
</style>
