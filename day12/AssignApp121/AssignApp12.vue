<template>
  <!-- AssignApp12.vue -->
  Day12 Assignment Vue js
  by RazmanR
  AssignApp12.vue
  <br />
  <br />

  <div class="form-group">

    <div class="row col-md-5 ml-auto " id="row">

      <label for=""> COUNT {{ count }}
      </label>
      <label for=""> MESSAGE {{ messageCount }} </label>


    </div>

    <div class="row"  id="row">

      <button type="submit" v-on:click="handleClickInc" class="btn btn-primary">Increment</button>
      <button type="submit" v-on:click="handleClickDec" class="btn btn-primary">Decrement</button>
    </div>

  </div>

  <br />
</template>
    
<script>

export default {
  name: "AssignApp12",

  //public local
  data() {

    return {
      count: 0,
      messageCount: "(MESSAGE_COUNT) "
    }

  },
  methods: {
    handleClickInc() {
      //  ("this button is clicked");
      this.count++;
      this.messageCount = "COUNT GOES UP!";

    },
    handleClickDec() {
      //  ("this button is clicked");
      this.count--;
      this.messageCount = "COUNT GOES DOWN!";

    },
  }

}

</script>



<style>  button {
    background-color: blue;

  }

  #row {
    background-color: lightgrey;

  }
</style>