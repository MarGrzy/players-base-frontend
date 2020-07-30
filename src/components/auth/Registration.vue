<template>
  <div id="app">
    <v-card>
      <v-card-title>Signup Form</v-card-title>
      <v-card-text>
        <v-form v-model="isValid">
          <v-text-field
              label="Username"
              v-model="username"
              :rules="[
                  v => !!v || 'Username is required!',
                  v => (v && v.length >= 3) || 'Username must have at least 3 characters',
                  v => /([A-Z][a-z]*)/.test(v) || 'Username must start with uppercase character']"
              error-count="3"
              required></v-text-field>
          <v-text-field
              label="Password"
              v-model="password"
              type="password"
              :rules="[
                  v => !!v || 'Password is required!',
                  v => (v && v.length >= 5) || 'Password must have at least 5 characters',
                  v => /(?=.*\d)/.test(v) || 'Password must have at least one number']"
              error-count="3"
              required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="primary"
            :disabled="!isValid"
        >Signup</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
name: "Registration",
  data: () => ({
    username: null,
    password: null,
    isValid: true
  })
}
</script>

<style scoped>

</style>