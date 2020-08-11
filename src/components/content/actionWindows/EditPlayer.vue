<template>
  <v-container fluid>
    <v-card rounded max-width="400px">
      <v-card-title>
        <span class="headline">Edit Player</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-col>
              <v-flex sm12 md12>
                <v-text-field v-model="player.playerName" label="Name"></v-text-field>
              </v-flex>
              <v-flex sm12 md12>
                <v-select
                    :items="positions"
                    v-model="player.position"
                    label="Position"
                ></v-select>
              </v-flex>
              <v-flex sm12 md12>
                <template v-if="player.team">
                <v-select
                    :items="teams"
                    item-text="teamName"
                    item-value="id"
                    v-model="player.team.id"
                    label="Team"
                ></v-select>
                </template>
              </v-flex>
            </v-col>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark color="primary" @click.native="close">Cancel</v-btn>
        <v-btn dark color="primary" @click.native="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "EditPlayer",
  computed: {
    ...mapState({
      dialogs: state => state.data.dialogs,
      players: state => state.data.players,
      teams: state => state.data.teams,
      positions: state => state.data.positions,
    }),
    player() {
        return this.players.find(p => p.id === this.$route.params.id) || {};
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('updatePlayer', {
        id: this.player.id,
        playerName: this.player.playerName,
        position: this.player.position,
        team: this.player.team
      })
      this.dialogs.dialogEdit = false;
      this.$router.go(-1)
    },
    close() {
      this.$router.go(-1)
      this.dialogs.dialogEdit = false;
    }
  },
}
</script>

<style scoped>

</style>