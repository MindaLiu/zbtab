<template>
    <div class="container">
        
    </div>
</template>

<script>
import staffList from './StaffList'
export default {
    data() {
        return {
            filters: {
                key: [],
                value: []            
            },
            selectedFilter: ''
        }
    },
    components: {
        staffList
    }
}
</script>

<style>

</style>
