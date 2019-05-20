<template>
  <v-flex xs2 offset-xs1>
    <v-dialog
      v-model="dialog"
      hide-overlay
      transition="scale-transition"
      origin="center center"
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <a v-on="on">
          <img
            src="../assets/contact.svg"
            alt="Grad Certificate Logo"
            width="30px"
            height="auto"
          />
          <span class="section_heading">Contact Me</span>
        </a>
      </template>
      <v-card>
        <v-card-title class="d-flex align-center">
          <span class="headline cyan--text">Contact Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-xl>
            <v-layout wrap>
              <v-flex xs6>
                <v-text-field
                  label="Full name"
                  v-model="fullname"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  label="Email address"
                  v-model="sender"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Subject"
                  v-model="subject"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  label="Message"
                  v-model="body"
                  required
                ></v-textarea>
              </v-flex>
              <span class="pl-3" id="required_info"
                >All fields are required</span
              >
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="cyan darken-1" flat @click="dialog = false"
            >Cancel</v-btn
          >
          <v-btn color="cyan darken-1" flat @click="sendemail"
            >Send email</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      fullname: "",
      sender: "",
      subject: "",
      body: ""
    };
  },
  methods: {
    sendemail: function() {}
  }
};
</script>

<style lang="scss">
.primary--text {
  color: #00bcd4 !important;
}
input {
  font-family: "Roboto", sans-serif;
}
#required_info {
  font-size: 16px;
  font-weight: 300;
}
</style>
