<template>
    <div class="alert alert-danger" role="alert">
        {{ error }}
    </div>
</template>

<script >
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Error',
        props:['error']
    })
</script>