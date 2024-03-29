<template>
  <div>
    <form action="" v-on:submit.prevent="handleSubmit">
      <div>
        <input
          type="text"
          placeholder="First name"
          v-model.trim="fristName.value"
          id="fristName"
          name="fristName"
          v-on:blur="clearValidate('fristName')"
          v-bind:class="[{ invalid: !fristName.isValid }, formControl]"
        />
        <p v-if="!fristName.isValid" class="error">form fristName is empty</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Last name"
          v-model.trim="lastName.value"
          id="lastName"
          name="lastName"
          v-on:blur="clearValidate('lastName')"
          v-bind:class="[{ invalid: !lastName.isValid }, formControl]"
        />
        <p v-if="!lastName.isValid" class="error">form lastName is empty</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          v-model.trim="email.value"
          id="email"
          name="email"
          v-on:blur="clearValidate('email')"
          v-bind:class="[{ invalid: !email.isValid }, formControl]"
        />
        <p v-if="!email.isValid" class="error">form email is not valid</p>
      </div>
      <button type="submit" class="button">Submit Form</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class FormSubmit extends Vue {
  [input: string]: any; //define key of object, key can be string, value can be any
  fristName: ValidateValue = {
    isValid: true,
    value: "",
  };
  lastName: ValidateValue = {
    isValid: true,
    value: "",
  };
  email: ValidateValue = {
    isValid: true,
    value: "",
  };
  formSubmit: boolean = true;
  formControl: string = "formControl";

  clearValidate(input: string) {
    this[input].isValid = true;
  }

  checkValidate() {
    if (this.fristName.value === "") {
      this.fristName.isValid = false;
      this.formSubmit = false;
    }

    if (this.lastName.value === "") {
      this.lastName.isValid = false;
      this.formSubmit = false;
    }

    if (!this.email.value.includes("@") || this.email.value === "") {
      this.email.isValid = false;
      this.formSubmit = false;
    }
  }

  handleSubmit() {
    this.checkValidate();
    if (this.formSubmit) return;

    const formData = {
      fristName: this.fristName.value,
      lastName: this.lastName.value,
      email: this.email.value,
    };
    console.log("form data", formData);
  }
}

interface ValidateValue {
  isValid: boolean;
  value: string;
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  margin: 4px 0 16px 0;
}

.invalid {
  border: 1px solid red;
}

.formControl {
  padding: 8px 12px;
  margin-bottom: 8px;
}

.button {
  width: 100%;
  padding: 8px 12px;
}
</style>
