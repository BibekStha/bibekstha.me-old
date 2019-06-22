<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Rock Paper Scissors Lizard Spock </span>
        <small>[ Individual ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs5>
            <a href="https://bibek-rpsls.herokuapp.com" target="_blank">
              <img
                src="../../assets/rpsls.gif"
                alt=""
                srcset=""
                class="project_gifs"
              />
            </a>
          </v-flex>

          <v-flex xs7 project_detail>
            This project makes use of websockets and socket.io library. 
            This game is a modified version of popular game 'Rock Paper Scissors'. 
            This game was created by Sam Kass and later popularized by a TV show The Big Bang Theory.
            <br /><br />
            Users can create game rooms. Each room can handle two players at a time.
            <br /><br />
            It is a simple application with few programming logic to handle players and their actions. 
            It can be scaled to make a better application later.
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
