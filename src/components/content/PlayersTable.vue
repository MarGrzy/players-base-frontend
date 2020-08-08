<template>
  <div>
    <v-container fluid>
      <v-card rounded>
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Position</th>
              <th class="text-left">Team</th>
              <th class="text-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="player in players" :key="player.playerName">
              <td>{{ player.playerName }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.team.teamName }}</td>
              <td class="text-center">
                <v-btn icon class="mx-0">
                  <v-icon color="teal">mdi-account-edit-outline</v-icon>
                </v-btn>
                <v-btn icon class="mx-0">
                  <v-icon color="red darken-3">mdi-trash-can-outline</v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-container fluid>
          <v-row no-gutters align="start">
            <v-col xs="3" sm="3" md="3" align-self="center">
              <v-btn
                  color="primary"
                  :to="{name: 'add-player'}"
              >
                Add Player
              </v-btn>
            </v-col>
            <v-card max-width="400px">
              <v-container fluid>
              <v-row no-gutters>
                <v-col xs="4" sm="4" md="4" align-self="end">
                  <v-select
                      :items="findBy"
                      :hint="`Find By`"
                      persistent-hint
                      label="Find By"
                      solo
                      dense
                  ></v-select>
                </v-col>
                <v-col xs="1" sm="1" md="1">
                </v-col>
                <v-col xs="6" sm="6" md="6">
                  <v-text-field
                      label="Finder"
                      placeholder="Type first letters to find"
                  ></v-text-field>
                </v-col>
              </v-row>
              </v-container>
            </v-card>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import {mapState} from "vuex";

export default {
  name: "PlayersTable",
  mounted() {
    if (this.player && this.sortParams) {
      this.$store.dispatch("getPlayers",
          {
            playerName: this.player.playerName,
            position: this.player.position,
            team: this.player.team,
            perPage: this.sortParams.perPage,
            page: this.sortParams.page,
            sortBy: this.sortParams.sortBy,
            direction: this.sortParams.direction
          })
    }
  },
  computed: {
    ...mapState({
      player: state => state.data.player,
      sortParams: state => state.data.sortParams,
      headers: state => state.data.headers,
      players: state => state.data.players,
      findBy: state => state.data.findBy
    }),
  },
}
</script>

<style scoped>

</style>