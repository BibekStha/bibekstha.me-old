<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Get Together </span>
        <small>[ Group ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs5>
            <a href="http://dotastats.ga" target="_blank">
              <img
                src="../../assets/gettogether.gif"
                alt=""
                srcset=""
                class="project_gifs"
              />
            </a>
          </v-flex>

          <v-flex xs7 project_detail>
            We redesigned a hospital website from group up and created content
            management system for the admins and hospital staffs to manage
            website content. It was built on ASP.NET Core 2.0.
            <br /><br />
            Among three features I built, donation feature is the one I'm proud
            of. I implemented the feature with PayPal API using the official sdk
            provided by their team. Even though it was official sdk, I had to
            debug the code in several steps to make the program work which
            involved considerable amount of my time. In the end, it all worked
            out.
            <br /><br />
            I also worked as repository admin and front end developer for the
            website.
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "sensenhumber"
};
</script>

<style></style>
