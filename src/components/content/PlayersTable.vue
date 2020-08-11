<template>
  <main>
  <div>
    <v-container fluid>
      <v-card rounded>
        <v-dialog
            v-model="dialogs.dialogAdd"
            persistent
            max-width="400px"
        >
          <AddPlayer/>
        </v-dialog>
        <v-dialog
            v-model="dialogs.dialogEdit"
            persistent
            max-width="400px"
        >
          <EditPlayer/>
        </v-dialog>
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
            <tbody :key="componentKey">
            <tr v-for="player in players" :key="player.id">
              <td>{{ player.playerName }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.team.teamName }}</td>
              <td class="text-center">
                <v-btn
                    icon
                    class="mx-0"
                    @click="editPlayer(player.id)"
                >
                  <v-icon color="teal">mdi-account-edit-outline</v-icon>
                </v-btn>
                <v-btn
                    icon
                    class="mx-0"
                    @click="deleteChosen(player.id)"
                >
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
                  @click="dialogs.dialogAdd = true"
              >
                Add Player
              </v-btn>
            </v-col>
                <v-row no-gutters>
                  <v-col style="max-width: 13px"></v-col>
                  <v-col align-self="end" style="max-width: 120px">
                    <v-select
                        :items="findBy"
                        :hint="`Find By`"
                        persistent-hint
                        label="Find By"
                        solo
                        dense
                    ></v-select>
                  </v-col>
                  <v-col style="max-width: 20px">
                  </v-col>
                  <v-col style="max-width: 220px">
                    <v-text-field
                        label="Finder"
                        placeholder="Type first letters to find"
                    ></v-text-field>
                  </v-col>
                </v-row>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
  </main>
</template>


<script>
import {mapState} from "vuex";
import AddPlayer from "@/components/content/actionWindows/AddPlayer";
import EditPlayer from "@/components/content/actionWindows/EditPlayer";

export default {
  name: "PlayersTable",
  components: {EditPlayer, AddPlayer},
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
      componentKey: state => state.data.componentKey,
      dialogs: state => state.data.dialogs,
      player: state => state.data.player,
      sortParams: state => state.data.sortParams,
      headers: state => state.data.headers,
      players: state => state.data.players,
      findBy: state => state.data.findBy
    }),
  },
  methods: {
    async deleteChosen(id) {
      await this.$store.dispatch('deletePlayer',
          {id: id})
    },
    editPlayer(id) {
      if (id !== null) {
        this.$router.push('/player/edit')
        this.$route.params.id = id
        this.dialogs.dialogEdit = true
      }
    }
  },
}
</script>

<style scoped>

</style>