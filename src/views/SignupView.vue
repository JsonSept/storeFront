<template>
  <div class="container">
    <form @submit.prevent="register" class="form">
      <label>First Name:</label>
      <input type="firstname" v-model="firstname" class="input" required />

      <label>Last Name:</label>
      <input type="lastname" v-model="lastname" class="input" required />

      <label>Email:</label>
      <input type="email" v-model="email" class="input" required />

      <label>Password:</label>
      <input type="password" v-model="password" class="input" required />

      <button type="submit" class="button" @click="register">Register</button>
    </form>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
    };
  },
  methods: {
    async register() {
     console.log(this.$data)
     this.$store.dispatch('login',this.$data)
    },
    async login() {
      
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.label {
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}
</style>
