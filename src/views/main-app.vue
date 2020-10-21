<template>
    <div class="main-container">
        <h1>Hello Sender</h1>
        <div class="container">
            <input type="text" v-model="num" class="phone-input input-field" placeholder="Enter phone number" />
            <textarea
                name="body"
                v-model="txt"
                class="text-input input-field"
                placeholder="Enter message body"
            ></textarea>
            <button class="link-btn" @click="openLink()">Send Message</button>
            <div class="error-msg">{{ error }}</div>
        </div>
    </div>
</template>

<script>
import { phoneService } from '../services/phoneService.js';
export default {
    name: 'main-app',
    data() {
        return {
            num: '',
            txt: '',
            link: '',
            error: '',
        };
    },
    computed: {
        phoneNum() {
            return `https://api.whatsapp.com/send?phone=${this.num}&text=${this.formatedTxt}&source=&data=&app_absent=`;
        },
        formatedTxt() {
            return this.txt.replaceAll(/\n/g, '%0D%0A');
        },
    },
    methods: {
        openLink() {
            this.txt = phoneService.formatTxt(this.txt);
            var isValid = phoneService.validateNumber(this.num);
            if (!isValid) return (this.error = 'The number is invalid');
            this.num = phoneService.formatNumber(this.num);
            window.open(this.phoneNum, '_blank');
        },
    },
    watch: {
        txt() {
            // console.log('v', v);
        },
    },
};
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
.main-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2em;
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }

    .input-field {
        color: #5b5f62;
        font-size: 1.2em;
        font-family: inherit;
        width: 300px;
        border: none;
        border-bottom: 2px solid lightgray;
        outline: none;
    }

    .phone-input {
        height: 30px;
        margin-bottom: 10px;
    }
    .text-input {
        height: 80px;
        resize: vertical;
        white-space: pre-wrap;
    }

    .link-btn {
        background-color: #01e675;
        color: aliceblue;
        font-size: inherit;
        border: 1px solid lightgray;
        margin: 10px;
        border-radius: 5px;
        font-weight: 500;
        letter-spacing: 0.02em;
        padding: 10px 17px;
        white-space: nowrap;
    }
    .link-btn:hover {
        cursor: pointer;
        background-color: #00d66b;
    }
    .error-msg {
        color: orangered;
    }
}
</style>
