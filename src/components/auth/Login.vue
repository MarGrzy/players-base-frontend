<template>
  <div id="app">
    <v-card>
      <v-img
          height="60px"
          src="https://cdn.pixabay.com/photo/2014/07/11/17/03/basketball-390008_960_720.jpg"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
        <v-card-title class="text-md-h5 white--text">Login Form</v-card-title>
      </v-img>
      <v-card-text class="grey--text text--darken-1">Explore more features of application! Log in and enjoy USER mode!
        <v-form v-model="isValid">
          <v-text-field
              prepend-icon="mdi-account"
              label="Username"
              v-model="username"
              :rules="[v => !!v || 'Username is required!']"
              required></v-text-field>
          <v-text-field
              prepend-icon="mdi-lock"
              label="Password"
              v-model="password"
              type="password"
              :rules="[v => !!v || 'Password is required!']"
              required></v-text-field>
        </v-form>
        <v-alert
            :value="wrongCredentials"
            type="error"
            dense
            text
            dismissible
        >
          {{ loginError }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="primary"
            :disabled="!isValid"
            @click="login"
        >Log In
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    username: "",
    password: "",
    isValid: true,
    wrongCredentials: false,
    loginError: ""
  }),
  methods: {
    async login() {
      let loginProcess = await this.$store.dispatch("login",
          {username: this.username, password: this.password})
      if (loginProcess.error) {
        this.wrongCredentials = true
        this.loginError = loginProcess.error
      }
    }
  }
}
;
</script>