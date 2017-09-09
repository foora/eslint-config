<template>
    <div>
        <div v-if = "isShow"></div>
        <div v-else></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        };
    }
};
</script>