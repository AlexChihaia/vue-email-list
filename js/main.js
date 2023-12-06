'use strict';

const { createApp } = Vue;
createApp({
    data() {
        return {
            apiCalls: 10,
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        }
    },
    created() {

        for (let i = 0; i < this.apiCalls; i++) {
            axios.get(this.apiUrl).then((response) => {
                this.emails.push(response.data.response);
            })

        }

    },
}).mount('#app');