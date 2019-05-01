<template>
    <div class="columns is-multiline">
        <div class="column is-narrow" :key="staff.id"
        v-for="staff in staffList">
        <div class="card staff" >
            <div class="card-image">
                <figure class="image is-128x128">
                    <img class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <h4 class="title is-4">{{staff.name}}</h4>
            </div>
        </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    props: ['staffList'],
}
</script>

<style>
.staff{
    width: 148px;
    height: 240px;
    padding: 10px;
    cursor: pointer;

}
.staff::before{
    background-image: -webkit-gradient(linear,right top,left top,from(#ff8a00),to(#da1b60));
    background-image: linear-gradient(to left,#ff8a00,#da1b60);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
}
.staff:hover {
    background-color: #eeeeeee0;
}
</style>
