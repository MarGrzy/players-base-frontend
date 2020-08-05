<template>
  <div>
    <v-simple-table height="500px">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Position</th>
          <th class="text-left">Team</th>
        </tr>
        </thead>
        <tbody>
              <tr v-for="player in players" :key="player.playerName">
                <td>{{ player.playerName }}</td>
                <td>{{ player.position }}</td>
                <td>{{ player.team.teamName }}</td>
              </tr>
        </tbody>
      </template>
    </v-simple-table>
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
      players: state => state.data.players
    }),
  }
}
</script>

<style scoped>

</style>