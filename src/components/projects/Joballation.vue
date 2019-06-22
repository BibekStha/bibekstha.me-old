<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Joballation </span>
        <small>[ Group ]</small>
        <v-layout row wrap pt-2>

          <v-flex xs7 project_detail>
            As soon-to-be graduates ourselves, our team wanted a application which could help use 
            manage our job applications. We did have a template on excel sheets. We wanted to make that 
            an online web application and so we did.
            <br><br>
            Users can keep track of all the job applications from all different websites. 
            You can change the status of the application, add some more descriptions. 
            You can also compare one or more applications to help you choose what you prefer.
            Users can manually make one or more applications their favourite which will appear 
            at the top of the list.
            <br><br>
            I worked on almost all of the back-end part of the project, managed git repositories and deployed it online.
          </v-flex>

          <v-flex xs5>
            <a href="http://joballation.gq" target="_blank">
              <img src="../../assets/joballation.gif" alt="" srcset="" class="project_gifs">
            </a>
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
