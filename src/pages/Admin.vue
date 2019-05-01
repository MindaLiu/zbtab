<template>
    <div>
        <navbar :page="page"></navbar>
    </div>
</template>

<script>
import idb from '../idb'

import Navbar from '../components/Navbar'
import StaffLib from '../components/StaffLib'
import Modal from '../components/Modal'
import StaffInfo from '../components/StaffInfo'

export default {
    data: function (){
        return {
            page: {
                title: '人员管理',
                goto: '/',
                button: 'fas fa-2x fa-home'
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
