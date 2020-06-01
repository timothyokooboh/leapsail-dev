<template>
  <div>
    <v-app-bar app flat color="white">

      <v-toolbar-title class="mt-2">
        <img src="logo.png" alt="Company logo" id="logo">
      </v-toolbar-title> 

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <v-icon class="mx-5" v-on="on">mdi-bell-ring</v-icon>
        </template>
        <span>Notifications icon</span>
      </v-tooltip>

      <div class="caption status-text">Status: online</div>
  
      <div id="online-icon" class="ml-2"></div>

      <div class="account-icon-container mx-3">
        <v-icon large color="#7A00D1">mdi-account-circle</v-icon>
      </div>

      <v-tooltip bottom>
        <template v-slot:activator="{on}">
          <img src="verticalmenu.svg" alt="Vertical menu icon" v-on="on">
        </template>
        <span>Vertical menu</span>
      </v-tooltip>

    </v-app-bar>

  </diV>
</template>

<style scoped>

  #logo {
    width: 60px;
    object-fit: cover;
  }
  #online-icon {
    width: 10px;
    height: 10px;
    background-color: #00D154;
    border-radius: 50%;
  }
  .account-icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #7A00D1;
  }

</style>