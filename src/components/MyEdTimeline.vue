<template>
  <v-flex xs2 offset-xs2>
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
            src="../assets/temperature.svg"
            alt="Degree Logo"
            width="30px"
            height="auto"
          />
          <span class="section_heading">My Degrees</span>
        </a>
      </template>
      <v-card>
        <v-toolbar flat floating fixed>
          <v-btn icon light @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-layout>
            <v-flex>
              <v-list>
                <h1 class="font-weight-thin section_title">
                  Education History
                </h1>
                <v-flex px-5>
                  <Timeline
                    :timeline-items="dataTimeline"
                    :message-when-no-items="messageWhenNoItems"
                    :unique-year="true"
                    order="desc"
                    class="px-5"
                  />
                </v-flex>
              </v-list>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import Timeline from "timeline-vuejs";

export default {
  data() {
    return {
      dialog: false,
      messageWhenNoItems: "There are no items",
      dataTimeline: [
        {
          from: new Date(2018, 8),
          title:
            '<span class="ed_description">Humber College | Toronto, ON, Canada | One year course with co-op</span>',
          description:
            '<span class="ed_title">Web Development - Ontario Graduate Certificate</span>'
        },
        {
          from: new Date(2011, 7),
          title:
            '<span class="ed_description">Jawaharlal Nehru Technological University | Kakinada, AP, India | Two years course</span>',
          description:
            '<span class="ed_title">High Voltage Engineering - Master of Technology</span>'
        },
        {
          from: new Date(2006, 7),
          title:
            '<span class="ed_description">Kathmandu University | Dhulikhel, Bagmati, Nepal | Four years course</span>',
          description:
            '<span class="ed_title">Electrical Engineering - Bachelor of Engineering</span>'
        }
      ]
    };
  },
  components: {
    Timeline
  }
};
</script>

<style lang="scss">
.theme--light.v-toolbar {
  background-color: white;
}
a span {
  text-decoration: underline;
  text-decoration-color: magenta;
}
.timeline {
  max-width: inherit !important;
}
.month-item,
.year {
  font-weight: 100;
  text-transform: capitalize !important;
}
.wrapper-timeline {
  color: #0288d1;
}
.ed_description {
  color: #0277bd;
  font-size: 20px;
  font-weight: 400;
}
.ed_title {
  color: #01579b;
  font-size: 28px;
}
.dot {
  background-color: #01579b !important;
}
</style>
