<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-secondary">
      <form class="form-inline">
        <router-link to="/">
        <button class="btn btn-lg btn-outline-info" type="button">Fill out the Form</button>
        </router-link>
      </form>
    </nav>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "Navigation"
};
</script>