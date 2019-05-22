<template>
  <v-flex sm3 xs12 offset-sm3 offset-xs0>
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        hide-overlay
        transition="scale-transition"
        origin="center center"
      >
        <template v-slot:activator="{ on }">
          <a v-on="on">
            <img
              src="../assets/networking.svg"
              alt="Grad Certificate Logo"
              width="30px"
              height="auto"
            />
            <span class="section_heading"> Let's Connect</span>
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
                <v-list id="social_icons">
                  <a
                    href="https://www.linkedin.com/in/bibekmanshrestha/"
                    target="_blank"
                  >
                    <v-icon size="60px" color="blue darken-3"
                      >fab fa-linkedin</v-icon
                    >
                  </a>
                  <a href="https://github.com/BibekStha" target="_blank">
                    <v-icon size="60px" color="blue darken-3"
                      >fab fa-github-square</v-icon
                    >
                  </a>
                  <!-- <a href="https://twitter.com/bbekstha" target="_blank">
                    <v-icon size="60px" color="blue darken-3">fab fa-twitter-square</v-icon>
                  </a> -->
                  <a href="mailto:contact@bibekstha.me" target="_blank">
                    <v-icon size="60px" color="blue darken-3"
                      >fas fa-envelope-square</v-icon
                    >
                  </a>
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
#social_icons i {
  padding: 0 20px;
}
#social_icons {
  padding-bottom: 60px;
}
</style>
