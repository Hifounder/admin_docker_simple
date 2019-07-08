<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>會員註冊</h3>
        <p>姓</p>
        <input type="text" v-model="user.firstName">
        <p>名</p>
        <input type="text" v-model="user.lastName">
        <p>信箱</p>
        <input type="text" v-model="user.email">
        <p>帳號</p>
        <input type="text" v-model="user.account_number">
        <p>密碼</p>
        <input type="text" v-model="user.password_number">
        <br>
        <br>
        <button @click="admin_register">會員註冊</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                account_number: "",
                password_number: ""
            }
        };
    },
    props: {
        msg: String
    },
    methods: {
        admin_register() {
          let { firstName , lastName , email, account_number, password_number } = this.user
            this.axios({
                method: "post",
                url: "http://localhost:3000/api/user/signUp",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    account_number: account_number,
                    password_number: password_number
                }
            }).then(res => {
                console.log(res);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
