<template>
  <v-flex xs2 offset-xs1>
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="scale-transition"
        origin="center center"
      >
        <template v-slot:activator="{ on }">
          <a v-link="" v-on="on">
            <img
              src="../assets/project.svg"
              alt="Grad Certificate Logo"
              width="30px"
              height="auto"
            />
            <span class="section_heading">My Projects</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat fixed floating>
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout column id="projects">
              <h2 class="font-weight-thin section_title">
                Projects I have worked on
              </h2>
              <portfolio></portfolio>
              <sensen-humber></sensen-humber>
              <dota-stats></dota-stats>
              <erudition></erudition>
              <get-together></get-together>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
import DotaStats from "../components/projects/DotaStats.vue";
import Erudition from "../components/projects/Erudition.vue";
import GetTogether from "../components/projects/GetTogether.vue";
import Portfolio from "../components/projects/Portfolio.vue";
import SensenHumber from "../components/projects/SensenHumber.vue";
export default {
  name: "Projects",
  components: {
    DotaStats,
    Erudition,
    GetTogether,
    Portfolio,
    SensenHumber
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
#projects {
  font-size: 18px;
  font-weight: 300;
  color: #0d47a1;
}
.project_heading {
  font-size: 24px;
}
.project_detail {
  text-align: left;
}
.project_gifs {
  width: 90%;
  margin-top: 3px;
}
</style>
