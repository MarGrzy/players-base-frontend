<template>
  <v-container fluid>
    <v-card rounded max-width="400px">
      <v-card-title>
        <span class="headline">New Player</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-col>
            <v-flex sm12 md12>
              <v-text-field v-model="newPlayer.playerName" label="Name"></v-text-field>
            </v-flex>
            <v-flex sm12 md12>
              <v-select
                  :items="positions"
                  v-model="newPlayer.position"
                  label="Position"
              ></v-select>
            </v-flex>
            <v-flex sm12 md12>
              <v-select
                  :items="teams"
                  item-text="teamName"
                  item-value="id"
                  v-model="newPlayer.team.id"
                  label="Team"
              ></v-select>
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
  name: "AddPlayer",
  computed: {
    ...mapState({
      dialogs: state => state.data.dialogs,
      newPlayer: state => state.data.newPlayer,
      teams: state => state.data.teams,
      positions: state => state.data.positions,
    })
  },
  methods: {
    async save() {
        await this.$store.dispatch('addPlayer', {
          id: this.newPlayer.id,
          playerName: this.newPlayer.playerName,
          position: this.newPlayer.position,
          team: this.newPlayer.team
        })
      this.dialogs.dialogAdd = false;
      this.$router.go(-1);
    },
    close() {
      this.dialogs.dialogAdd = false;
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped>

</style>