<template>
  <v-container class="about" full_height id="about">
    <v-layout column fill-height>
      <!-- <v-flex shrink mb-2>
        <p class="font-weight-light">Bibek Shrestha</p>
      </v-flex> -->
      <v-layout column justify-center id="about-section">
        <v-layout id="center-img-container" class="order-xs-1">
          <!-- <img src="../assets/Bibek.png" id="center-img"> -->
          <v-flex id="center_name_container">
            <v-layout
              align-center
              justify-center
              row
              fill-height
              class="font-weight-light"
              id="center_name"
              >Bibek Shrestha</v-layout
            >
          </v-flex>
        </v-layout>
        <v-layout row justify-center align-center order-xs-2>
          <webdev></webdev>
        </v-layout>
        <v-layout row align-center>
          <myedtime></myedtime>
          <AmGoodAt></AmGoodAt>
        </v-layout>
        <v-layout row align-center>
          <contact-me></contact-me>
          <resume></resume>
        </v-layout>
        <v-layout row align-center>
          <social></social>
          <projects></projects>
        </v-layout>
      </v-layout>
      <v-flex shrink>
        <v-flex xs3>
          <v-layout id="ps">
            <v-layout>P.S. I'm obsessed with BLUE!!!</v-layout>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Webdev from "../components/WebDev.vue";
import Social from "../components/Social.vue";
import Myedtime from "../components/MyEdTimeline.vue";
import ContactMe from "../components/ContactMe.vue";
import AmGoodAt from "../components/AmGoodAt.vue";
import Projects from "../components/Projects.vue";
import Resume from "../components/Resume.vue";

export default {
  name: "home",
  components: {
    Webdev,
    Social,
    Myedtime,
    ContactMe,
    AmGoodAt,
    Projects,
    Resume
  }
};
</script>

<style lang="scss">
.about {
  font-size: 2rem;
}
#center-img-container {
  position: absolute;
  align-self: center;
  border-radius: 50%;
  border: 1px solid #64b5f6;
  max-width: 250px;
  max-height: 250px;
  width: 250px;
  height: 250px;
}
#center_name_container {
  height: inherit;
  width: inherit;
}
#center_name {
  width: inherit;
  height: inherit;
  font-family: "Handlee", cursive;
  color: #42a5f5;
}
.v-card__text {
  padding: 0;
}
#ps {
  font-family: "Just Me Again Down Here", cursive;
  font-size: 20px;
  color: #42a5f5;
}
.v-dialog__content--active {
  background-color: rgba(0, 0, 0, 0.75);
}
a {
  cursor: pointer;
  text-decoration: none;
}
span.section_heading,
span.section_heading:focus,
span.section_heading:visited {
  color: #2962ff;
  text-decoration: none;
}

span.section_heading:hover {
  color: #0d47a1;
  // font-weight: 400;
}
.section_heading {
  font-weight: 300;
}
.section_title {
  font-weight: 300;
  font-size: 32px;
  color: #0a3880;
}

@media screen and (max-width: 620px) {
  #about-section {
    display: flex;
    flex-direction: column;
  }

  #center-img-container {
    border: none;
    border-radius: 0;
    font-size: 1.2em;
    position: absolute;
    top: 30px;
    // right: 0;
    max-height: 20px;
    max-width: inherit;
    width: 100%;
    height: 20px;
    padding-bottom: 30px;

  }
  #about-section>div {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  #webdev {
    padding-top: 100px;
    height: 10px;
  }
}
</style>
