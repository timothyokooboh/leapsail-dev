<template>
  <div>
    <v-footer>
      <div class="footer-grid-container">

        <div>
          <img src="whitelogo.png" alt="Company logo" id="company-logo">
        </div>

        <div class="footer-routes">
          <div  v-for="(item, index) in footerRoutes" :key="index">
            {{item}} 
            <span style="padding:0px 20px" class="font-weight-thin"> &vert; </span>
          </div>
          <div>Leapsail &copy; Copyright 2020</div>
        </div>

        <div class="icons-container">
          <v-icon class="mx-3 white--text">mdi-instagram</v-icon>
          <v-icon class="mx-3 white--text">mdi-twitter</v-icon>
          <v-icon class="mx-3 white--text">mdi-facebook</v-icon>
          <v-icon class="mx-3 white--text">mdi-linkedin</v-icon>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerRoutes: ['Terms & Condition', 'Career', 'Privacy Policy']
    }
  }
}
</script>

<style scoped>
  .footer-grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 50px;
    justify-content: space-around;
    align-content: center;
    background-color: #242424;
    color: #fff;
    min-height: 212px;
    width: 100%;
    
  }
  .footer-routes{
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 10px;
    margin-top: 20px;
  }
  .icons-container {
    margin-top: 20px;
  }
 
  @media (max-width: 1600px) {
    .footer-grid-container {
      column-gap: 20px;
    }
  }
  @media (max-width: 1600px) {
    .footer-grid-container {
      grid-template-columns: auto;
      row-gap: 20px;
      justify-content: center;
      align-content: center;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .footer-routes {
      grid-row: 3 / span 4;
    }
    .footer-routes div{
      padding: 10px
    }
  }
  @media(max-width: 754px) {
    .footer-routes {
      grid-template-columns: auto;
      
    }
  }
</style>