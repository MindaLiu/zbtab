<template>
    <navbar :page="page"></navbar>
</template>

<script>
import idb from '../idb'

import Navbar from '../components/Navbar'
import ZbInfo from '../components/ZbInfo'
import Modal from '../components/Modal'
import StaffList from '../components/StaffList'

export default {
    data: function() {
        return {
            page: {
                title: '值班信息',
                goto: '/admin',
                button: 'fas fa-2x fa-address-book'
            }
        }
    },
    components: {
        Navbar
    }
}
</script>

<style>

</style>
