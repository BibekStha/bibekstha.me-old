<template>
  <v-layout class="home" row full_height id="home">
    <v-layout xs12 sm6 align-end ma-0 home-block order-sm1 order-xs1 id="home_img">
      <v-flex fsz>
        <router-link to="/about">
          <img
            alt="Bibek's headshot"
            src="../assets/Bibek.png"
            id="headshot_img"
          />
        </router-link>
      </v-flex>
    </v-layout>
    <v-flex pa-1 xs12 sm6 home-block order-sm2 order-xs1 id="home_intro">
      <Intro v-if="intro_status" @click="hideIntro" />
    </v-flex>
    <v-layout id="intro_info">
      <span>Click my picture to skip</span>
    </v-layout>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  data: function() {
    return {
      intro_status: true
    };
  },
  components: {
    Intro
  }
};
</script>

<style lang="scss">
.full_height {
  height: 100vh;
}
.fsz {
  font-size: 0;
}
#headshot_img {
  max-height: 90vh;
}
#intro_info {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #00b8d4;
  font-family: "Handlee", cursive;
}

@media screen and (max-width: 620px) {
  .home#home {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #home_intro {
    order: 1;
    width: 100vw;
    flex-grow: 1;
  }

  #home_img {
    order: 2;
    width: 100vw;
    flex-grow: 0;
  }
  #headshot_img {
    width: 80%;
    height: auto;
  }

  #intro_info {
    display: none;
  }
}
</style>
