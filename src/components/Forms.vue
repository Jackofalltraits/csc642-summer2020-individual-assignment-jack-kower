<template>
  <div>
    <br />
    <h3>
      <b>
        CSC 642 Summer 2020 Individual Assignment Jack Kower
        Data survey form
      </b>
    </h3>
    <h2>
      <b>Please Fill Out the Form</b>
    </h2>
    <form>
      <div class="form-group row">
        <label for="inputName" class="col-sm-3 col-form-label">Full Name</label>
        <div class="col-sm-6">
          <input
            type="text"
            v-model="name" required
            class="form-control"
            id="inputName"
            placeholder="first and last name"
          />
        </div>
      </div>
      <p>name: {{name}}</p>
      <div class="form-group row">
        <label for="inputAddress" class="col-sm-3 col-form-label">Address</label>
        <div class="col-sm-6">
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Include street number and name, city, and state"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputZip" class="col-sm-3 col-form-label">Zip code</label>
        <div class="col-sm-1">
          <input
            v-model="zip"
            name="zip"
            type="text"
            class="form-control"
            id="inputZip"
            placeholer="must be a 5-digit zip code"
            @input="updateValue"
          />
        </div>
      </div>

      
      <div class="form-group row">
        <label for="inputDate" class="col-sm-3">What is Your Birthdate</label>
        <div class="col-sm-2">
          <v-date-picker v-model="date" />
        </div>
      </div>

      <form>
        <div class="form-row align-items-center">
          <label for="inputDegree" class="col-sm-3">Pick your educational level</label>
          <div class="col-sm-2">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose your educational level</option>
              <option value="1">High School</option>
              <option value="2">Associate's</option>
              <option value="3">Bachelor's</option>
              <option value="4">Master's</option>
              <option value="5">Ph. D</option>
            </select>
          </div>
        </div>
      </form>

      <br>
      <form>
        <div class="form-row align-items-center">
          <label for="inputDegree" class="col-sm-3">Pick your height</label>
          <div class="col-sm-2">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>how many feet</option>
              <option value="1">3</option>
              <option value="2">4</option>
              <option value="3">5</option>
              <option value="4">6</option>
              <option value="5">7</option>
            </select>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect2">
              <option selected>how many inches</option>
              <option value="1">0</option>
              <option value="2">1</option>
              <option value="3">2</option>
              <option value="4">3</option>
              <option value="5">4</option>
              <option value="6">5</option>
              <option value="7">6</option>
              <option value="8">7</option>
              <option value="9">8</option>
              <option value="10">9</option>
              <option value="11">10</option>
              <option value="0">11</option>
            </select>
          </div>
        </div>
      </form>

      <br />
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Phone #</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="phone" v-model="phone" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" v-model="email" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label">confirm Email</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputZip" class="col-sm-3 col-form-label">To Prove your not a robot, solve this problem. if a is 3 and b is 1 what is the sum of a and b?</label>
        <div class="col-sm-1">
          <input
            v-model="robot"
            name="robot"
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">I accept the terms and conditions</label>
        </div>
      </div>
      <router-link to="/results">
        <button type="submit" class="btn btn-primary">Submit</button>
      </router-link>
      <vue-recaptcha sitekey="Your key here"></vue-recaptcha>
    </form>
  </div>
</template>   

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
import calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  components: "Forms",
  data() {
    return {
      name: "",
      address: "",
      zip: "",
      Phone: "",
      email: "",
      date: new Date()
    };
  }
};
</script>

