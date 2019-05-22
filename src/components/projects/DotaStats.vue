<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">DotaStats </span>
        <small>[ Individual ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs5>
            <a href="http://dotastats.ga" target="_blank">
              <img
                src="../../assets/dotastats.gif"
                alt=""
                srcset=""
                class="project_gifs"
              />
            </a>
          </v-flex>

          <v-flex xs7 project_detail>
            This website is about Dota 2 game, the game I'm big fan of. Visitors
            can come to this website and look at real time different stats of
            the game like top players and teams. Users can login using Steam id
            to get details about their own performance in the game.
            <br /><br />
            In future, they can also view details of major tournaments. I have
            plans to add machine learning to help users understand their
            statistics and know ways to improve their game.
            <br /><br />
            I used Laravel framework for this website and utilized few APIs like
            Steam API and OpenDota API and some other useful libraries.
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "dotastats"
};
</script>

<style></style>
