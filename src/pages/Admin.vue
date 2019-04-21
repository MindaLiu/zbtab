<template>
    <div>
        <staffinfoForm v-bind:staff="s1"></staffinfoForm>
    </div>
</template>

<script>
import navbar from '../components/Navbar'
import staffinfoForm from '../components/StaffinfoForm'

export default {
    data () {
        return {
            s1: {
                name: 'test'
            }
        }
    },
    components: {
        navbar,
        staffinfoForm
    }
}
</script>

<style>

</style>
