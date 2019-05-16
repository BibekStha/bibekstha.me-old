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
            <v-layout column> </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style></style>
