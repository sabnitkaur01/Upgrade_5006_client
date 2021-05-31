<template>
  <div class="outdoor">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in Outdoor" :key="index">
        <card-template :item="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";

export default {
  name: "Outdoor",
  components: { CardLoader, CardTemplate },
  data() {
    return {
      Outdoor: [],
      loading: false
    };
  },
  methods: {
    

    getOutdoor() {
      this.loading = true;
      axios
        .get(`http://localhost:3000/outdoor`)
        .then(response => {
          this.loading = false;
          this.Outdoor = response.data.data;
        })
        .catch(error => {
          console.log(error);
          errorToaster(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    }
  },
  created() {
    this.getOutdoor();
  }
};
</script>

<style>
.outdoor {
  margin-bottom: 10px;
}
</style>
