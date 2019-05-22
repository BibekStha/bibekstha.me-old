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
          <span class="section_heading"> Contact Me</span>
        </a>
      </template>
      <v-card>
        <v-card-title class="d-flex align-center">
          <span class="headline cyan--text" id="form_headline"
            >Contact Form</span
          >
        </v-card-title>
        <v-card-text>
          <form
            action="https://script.google.com/macros/s/AKfycbyx_uAB09z-TvBCutie6r7Cy1f2dVRWwz2I1V7F/exec"
            method="post"
            class="gform"
            id="contact_form"
          >
            <div>
              <label for="name">Name:</label>
              <input
                id="name"
                name="name"
                placeholder="What your Mom calls you"
              />
            </div>

            <div>
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="10"
                placeholder="Tell me what's on your mind..."
              ></textarea>
            </div>

            <div>
              <label for="email">Email Address:</label>
              <input
                id="email"
                name="email"
                type="email"
                value=""
                required
                placeholder="example@email.com"
              />
              <span class="email-invalid" style="display:none">
                Must be a valid email address</span
              >
            </div>
            <div id="submit_button">
              <button
                type="submit"
                class="button-success pure-button button-xlarge"
                @click="handleFormSubmit"
              >
                <i class="fa fa-paper-plane"></i>&nbsp;Send
              </button>
            </div>
          </form>

          <div style="display:none" id="thankyou_message">
            <!-- You can customize the thankyou message by editing the code below -->
            <span
              ><em>Thank you</em> for contacting!<br />I will get back to you
              soon!
            </span>
          </div>
        </v-card-text>
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
    validEmail: function(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    },

    validateHuman: function(honeypot) {
      if (honeypot) {
        //if hidden form filled up
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    },

    handleFormSubmit: function(event) {
      // handles form submit without any jquery
      event.preventDefault(); // we are submitting via xhr below
      // var form = event.target;
      var form = document.forms["contact_form"];
      var data = this.getFormData(form); // get the values submitted in the form

      /* OPTION: Remove this comment to enable SPAM prevention, see README.md
            if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
              return false;
            }
            */
      console.log(data.email);
      if (!data.email || !this.validEmail(data.email)) {
        // if email is not valid show error
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        this.disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          form.reset();
          var formElements = form.querySelector(".form-elements");
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = document.getElementById("thankyou_message");
          if (thankYouMessage) {
            form.style.display = "none";
            document.getElementById("form_headline").style.display = "none";
            thankYouMessage.style.display = "block";
          }
          return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data)
          .map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");
        xhr.send(encoded);
      }
    },

    // get all data in form and return object
    getFormData: function(form) {
      var elements = form.elements;
      var fields = Object.keys(elements)
        .filter(function(k) {
          return elements[k].name !== "honeypot";
        })
        .map(function(k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

      var formData = {};
      fields.forEach(function(name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      console.log(formData);
      return formData;
    },

    loaded: function() {
      console.log("Contact form submission handler loaded successfully.");
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", this.handleFormSubmit, false);
      }
    },
    // document.addEventListener("DOMContentLoaded", loaded, false);

    disableAllButtons: function(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
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

#contact_form {
  font-size: 20px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-bottom: 10px;
  white-space: pre;
}

#contact_form > div {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  padding-top: 10px;
}

#contact_form > button {
  padding-top: 30px;
  margin-left: -15%;
}

#contact_form input,
#contact_form textarea {
  border: 1px solid lightgray;
  width: 80%;
  padding: 5px 10px;
  margin-top: 5px;
  font-size: 18px;
}

#thankyou_message {
  // margin-left: -15%;
  padding: 50px 0 70px;
  font-weight: 300;
  font-size: 24px;
}

#submit_button {
  margin-left: -15%;
  width: inherit;
  display: flex !important;
  align-items: center !important;
}

#submit_button > button {
  padding: 5px 20px;
  border: 1px solid lightgray;
  border-radius: 3px;
}

#submit_button > button:hover {
  border: 1px solid #00bcd4;
  background-color: lightcyan;
}
</style>
