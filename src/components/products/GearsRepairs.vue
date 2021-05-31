<template>
  <div class="gear-repair">
    <div class="row">
      <card-loader :loopCount="4" v-if="loading"/>
      <div class="col-md-3" v-for="(item, index) in GearRepair" :key="index">
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
  name: "GearRepair",
  components: { CardLoader, CardTemplate },
  data() {
    return {
      GearRepair: [],
      loading: false
    };
  },
  methods: {
    

    getGearRepair() {
      this.loading = true;
      axios
        .get(`http://localhost:3000/gear`)
        .then(response => {
          this.loading = false;
          this.GearRepair = response.data.data;
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
    this.getGearRepair();
  }
};
</script>

<style>
.gear-repair {
  margin-bottom: 10px;
}
</style>
