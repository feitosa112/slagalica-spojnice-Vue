<template>
    <a href="" class="btn btn-primary mt-5" @click="reload">Igraj ponovo</a>
</template>

<script>
export default {
    methods : {
        reload(){
                location.reload()
            }
    }
}
</script>