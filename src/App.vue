<template>
  <div id="app" class="container-fluid">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light" id="nav">
        <img alt="logo" src="./assets/logo.png" width="50px" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Products" class="nav-link"
                >All Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/handtools" class="nav-link"
                >Handtools</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/outdoor" class="nav-link"
                >Outdoor</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/gear" class="nav-link"
                >Gear & Storage</router-link
              >
            </li>            
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="fa fa-shopping-cart mr-1">
                  <span class="ml-1">{{ this.cartProducts.length }}</span>
                </i>
              </router-link>
            </li>
            
          </ul>
        </div>
      </nav>
      <router-view />
    </main>
    
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      cartValue: 0,
    };
  },
  computed: mapState(["cartProducts"]),
  methods: {
    //load cart items from local storage
    ...mapMutations(["SET_CART_PRODUCTS"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-cart"));

      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },

        
  },
  created() {
    this.getLocalProducts();   
  },
};
</script>


<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
#nav {
  padding: 15px;
  background-color: #fdbc16;
  color: #000000 !important;
}
#nav ul li a {
  color: #000000!important;
  }
html {
  position: relative;
  min-height: 100%;
}

* a {
  color: #42b983;
}

* .fa {
  font-size: 18px;
}
</style>
