<template>
  <v-container grid-list-md text-xs-center pb-5>
    <v-layout column wrap>
      <v-flex xs12>
        <span class="project_heading">Get Together </span>
        <small>[ Group ]</small>
        <v-layout row wrap pt-2>
          <v-flex xs5>
            <a href="http://get-together.gq" target="_blank">
              <img
                src="../../assets/gettogether.gif"
                alt=""
                srcset=""
                class="project_gifs"
              />
            </a>
          </v-flex>

          <v-flex xs7 project_detail>
            We wanted to create something where people can come together and help each other for events/parties. 
            So we ended up with a party planning application where users, the organizers, 
            would manage their events/parties at one place and their guests can interact as well.
            <br /><br />
            I primarily worked on user and event management functionality, and carpool functionality. Users can register and login to create 
            new events and add their descriptions. Once the event is created, users can invite their guests 
            and we will send them an invite through email. Users can also create to-do list, food list and drink list. 
            They can create polls if they want their guests' opinions, a fund pool where they can raise fund, 
            depending on the event.
            <br /><br />
            Guests can also communicate with each other to plan for carpool to reach the venue.
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
