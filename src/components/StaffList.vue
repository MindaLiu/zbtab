<template>
    <div class="columns">
        <div class="column is-2" :key="staff.id"
        v-for="staff in staffList">
        <div class="card" >
            <div class="card-image">
                <figure class="image is-128x128">
                    <img class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <h2 class="title">{{staff.name}}</h2>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['staffList'],
}
</script>

<style>

</style>
