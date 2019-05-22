<template>
  <v-flex xs2 offset-xs4>
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
              src="../assets/learning.svg"
              alt="Grad Certificate Logo"
              width="30px"
              height="auto"
            />
            <span class="section_heading"> My Skills</span>
          </a>
        </template>
        <v-card>
          <v-toolbar flat fixed floating>
            <v-btn icon light @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-layout column id="skills_container">
              <h2 class="section_title">Advance Skills</h2>

              <div class="section_sub_title">Static Websites</div>
              <div class="section_list">HTML5, CSS3, Bootstrap</div>

              <div class="section_sub_title">Back End Development</div>
              <div class="section_list">PHP, MySql</div>

              <div class="section_sub_title">Front End Development</div>
              <div class="section_list">Javascript</div>

              <div class="section_sub_title">Server Management</div>
              <div class="section_list">
                Deploying web sites and applications to shared hosting, managing
                databases, working with cpanel, managing reseller hosting
              </div>

              <h2 class="section_title">Intermediate Skills</h2>
              <div class="section_sub_title">Back End Development</div>
              <div class="section_list">
                Django (Python framework), Laravel (PHP framework), ASP.NET (MVC
                and Core)
              </div>

              <div class="section_sub_title">Front End Development</div>
              <div class="section_list">
                jQuery, VueJs (Javascript framework)
              </div>

              <div class="section_sub_title">Server Management</div>
              <div class="section_list">Cloud Platform (Google and Azure)</div>

              <h2 class="section_title">Soft Skills</h2>
              <div class="section_list">
                Project Management, Technical Writing, Microsoft Office suite,
                communication, self-motivation, teamwork, problem solving, time
                management, flexibility, conflict resolution
              </div>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "AmGoodAt",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss">
#skills_container {
  padding: 5px 200px;
}
.section_title {
  padding-top: 30px;
}
.section_sub_title {
  font-size: 26px;
  padding-top: 10px;
  text-align: start;
  font-weight: 300;
  color: #0d47a1;
}
.section_list {
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  text-align: start;
  font-weight: 300;
  color: #2962ff;
}
</style>
