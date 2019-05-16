<template>
  <v-container fill-height>
    <v-layout id="intro_typed" column justify-center>
      <vue-typed-js :strings="['Hi there']" :showCursor="false">
        <span class="typing"></span>
      </vue-typed-js>
      <vue-typed-js
        :strings="['^1200This is Bibek Shrestha']"
        :showCursor="false"
      >
        <span class="typing"></span>
      </vue-typed-js>
      <vue-typed-js
        :strings="['^3400Full Stack Web Developer']"
        :showCursor="false"
      >
        <span class="typing"></span>
      </vue-typed-js>
      <vue-typed-js
        :strings="['^5000Click on my picture to know more about me']"
        :showCursor="false"
        @onComplete="showArrow"
      >
        <small class="typing"></small>
      </vue-typed-js>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  props: {
    // msg: String
  },
  methods: {
    showArrow: function() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#intro_typed {
  font-size: 36px;
  /* margin-top: 35vh;
  margin-left: 35vw; */
  font-family: handlee, cursive;
}
</style>
