<template>
    <p>Contact List</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ContactList',
    methods: {
        ...mapActions([
            'getContacts'
        ])
    },
    created() {
        this.getContacts();
    }
}
</script>
