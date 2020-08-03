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
        <v-card-title class="text-md-h5 white--text">Sign-up Form</v-card-title>
      </v-img>
      <v-card-text class="grey--text text--darken-1">Explore more features of application! Sign up and enjoy USER mode!
        <v-form v-model="isValid">
          <v-text-field
              prepend-icon="mdi-account"
              label="Username"
              v-model="username"
              :rules="[
                  v => !!v || 'Username is required!',
                  v => (v && v.length >= 3) || 'Username must have at least 3 characters.',
                  v => /(^[A-Z][a-z]*)/.test(v) || 'Username must start with uppercase character.']"
              error-count="3"
              required></v-text-field>
          <v-text-field
              prepend-icon="mdi-lock"
              label="Password"
              v-model="password"
              type="password"
              :rules="[
                  v => !!v || 'Username is required!',
                  v => (v && v.length >= 5) || 'Password must have at least 5 characters.',
                  v => /(?=.*\d)/.test(v) || 'Password must have at least one number.']"
              error-count="3"
              required></v-text-field>
        </v-form>
      <v-alert
          :value="userExists"
          type="error"
          dense
          text
          dismissible
      >This user already exists, try a different set of data.
      </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="primary"
            :disabled="!isValid"
            @click="register"
        >Sign Up
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    userExists: false,
    username: "",
    password: "",
    isValid: true
  }),
  methods: {
    register() {
      this.$store.dispatch('register', {
        username: this.username,
        password: this.password
      })
          .catch(error => {
            this.userExists = true;
          })
    }
  },
}
</script>

<style scoped>

</style>