<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Portfolio </span>
        <small>[ Current website ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs5>
            <img src="../../assets/portfolio.gif" alt="" srcset="" class="project_gifs">
          </v-flex>

          <v-flex xs7 project_detail>
            This website is built from ground up using VueJs and templating library Vuetify. It also uses some other
            libraries for rapid prototyping.
            <br><br>
            I have used vue-cli to create the project and webpack to bundle the website from vuejs framework to plain
            html, css and javascript.
            <br><br>

          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "sensenhumber"
  }
</script>

<style>
</style>