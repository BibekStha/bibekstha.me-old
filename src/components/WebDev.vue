<template>
  <v-flex xs4 id="webdev">
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="scale-transition"
        origin="center center"
      >
        <template v-slot:activator="{ on }">
          <a v-on="on">
            <img
              src="../assets/grad-certificate.svg"
              alt="Grad Certificate Logo"
              width="30px"
              height="auto"
            />
            <span class="section_heading"> Why Web Development?</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat fixed floating>
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout column>
              <h2 class="font-weight-thin section_title">
                My journey to Web Dev
              </h2>
              <v-flex py-3>
                <p>
                  I have always been fascinated with computers from the very
                  begining since I first had the opportunity to play with one. I
                  belived that computers would help change the world and it
                  definitely has.
                </p>

                <p>
                  I was introduced to logical programming in early high school
                  with QBasic. I also had the opportunity to do some more
                  programming in my undergraduate and masters. These experiences
                  helped me foster my programming knowledge.
                </p>

                <p>
                  Due to my interest in science and technology, I started
                  writing a blog. During which time, I became more curious about
                  websites and how it was build rather than actually focusing on
                  writing the blog.
                </p>

                <p>
                  Right after I came to Canada, I had few months of spare time
                  which I spent by learning online courses on web development. I
                  felt right at home. So I decided to pursue this field and
                  joined Web Development program at Humber College which is one
                  of the best decisions I have made.
                </p>
              </v-flex>
              <!-- <v-divider></v-divider> -->
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss">
#webdev p {
  font-size: 20px;
  font-weight: 300;
  padding: 0 150px;
  line-height: 2em;
  text-align: start;
  color: #0d47a1;
}
</style>
