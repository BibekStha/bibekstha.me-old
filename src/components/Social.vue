<template>
  <v-flex xs3 offset-xs3>
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="scale-transition"
        origin="center center"
      >
        <template v-slot:activator="{ on }">
          <a v-link="" v-on="on">
            <img
              src="../assets/networking.svg"
              alt="Grad Certificate Logo"
              width="30px"
              height="auto"
            />
            <span class="section_heading">Let's Connect</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat floating class="d-flex">
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout>
              <v-flex>
                <v-list>
                  <v-icon blue--text>gmail</v-icon>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      courses: [
        {
          title: "Web Development",
          description: "Ontario Graduate Certificate",
          at: "Humber College",
          location: "Toronto, ON, Canada",
          start: "September, 2018",
          end: "August, 2019"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
body {
  font-size: 20px;
}
.theme--light.v-toolbar {
  background-color: white;
}
a span {
  text-decoration: underline;
  text-decoration-color: magenta;
}
</style>
