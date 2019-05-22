<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Erudition Journal </span>
        <small>[ Individual ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs7 project_detail>
            This is a task given to build a project which we are passionate
            about. I chose to create a free online journal website which I want
            to make a full fledged working web application in the future.
            <br /><br />
            Publishers can publish their publications on the website. Visitors
            can view those publications for free. In future, the review process
            will be done by peers or, in other words, visitors of the website
            will review the publications.
            <br /><br />
            It was built using ASP.NET MVC 5. Since it was built in less than a
            week, it lacks many features like user management and proper admin
            functionalities.
          </v-flex>

          <v-flex xs5>
            <a href="http://dotastats.ga" target="_blank">
              <img
                src="../../assets/erudition.gif"
                alt=""
                srcset=""
                class="project_gifs"
              />
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Erudition"
};
</script>

<style></style>
