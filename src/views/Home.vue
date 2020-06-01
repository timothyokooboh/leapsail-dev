<template>
  <div>

    <div class="landing-view">

      <div class="description">
        <div class="display-2 font-weight-black pb-2 text"> 
          Our pricing 
        </div> 
        <div class="display-2 font-weight-black pb-2 text">
          plan for everyone
        </div>
        <div class = "grey--text text--lighten-1 title">
          Packages are for individual only
        </div>
      </div>

      <div>
        <img src="illustration.png" alt="photograph of animated skaters" id="illustration"> 
      </div>

    </div>

    <v-container class="px-5">

      <div id="card-container">

        <v-card class="rounded-card">

          <v-layout row class="pa-5">

            <v-flex lg3 hidden-md-and-down>

              <div id="plan-features-container" >
                <div class="display-1 font-weight-black" id="plan-features">
                  Plan features
                </div>
              </div>

              <div class="features-list plans-list-container">
                <ul>
                  <li v-for="(item, index) in features" :key="index">
                    <div>{{item}}</div>
                  </li>
                </ul>
              </div>

            </v-flex>

            <v-flex class="text-center" lg3 md12 sm12 xs12>

              <v-card flat>

                <div style="color: #33DA76" id="bronze" class="display-1 font-weight-black pa-5">
                  BRONZE
                </div>

                <div class="display-2 font-weight-black pa-5" style="color: #656565">
                  &#x20A6; 500 
                </div>

                <div class = "grey--text text--lighten-1 title font-weight-light">
                  Per month
                </div>

                <v-tooltip top>
                <template v-slot:activator="{on}">
                  <div v-on="on">
                    <v-btn color="#FF6700" class="white--text btn mb-5">
                      Activate
                    </v-btn>
                </div>
                </template>
                <span>Activate Bronze Plan</span>
              </v-tooltip>
                
                <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <div class="dropdown" @click="openBronzeList" v-on="on">
                      <img src="bluedropdown.svg" alt="drop down icon">
                    </div>
                  </template>
                  <span>View plan details</span>
                </v-tooltip>

              </v-card>

              <div class="bronze-list plans-list-container" id="bronze-list">

                <ul>
                  <li v-for="(item, index) in bronze" :key="index">
                    <div class="flex-items">
                      <div hidden id="item-feature">{{item.feature}}</div>
                      <div v-if="item.image">
                        <v-avatar size="30">
                          <img :src="item.description" :alt="item.description">
                        </v-avatar>
                      </div>
                      <div v-else style="color: #33DA76; " >{{item.description}}</div>
                    </div>
                  </li>
                </ul>

              </div>

            </v-flex>

            <v-flex class="text-center" lg3 md12 sm12 xs12>

              <v-card color="#0090E8" class="pt-5 rounded-card">

                <div id="bronze" class="white--text display-1 font-weight-black">
                  SILVER
                </div>

                <div class=" white--text display-2 font-weight-black pa-5">
                  &#x20A6; 2,000 
                </div>

                <div class = "white--text text--lighten-1 title font-weight-light">
                  Per month
                </div>

                <v-tooltip top>
                  <template v-slot:activator="{on}">
                    <div v-on="on">
                      <v-btn color="#FFFFFF" class="red--text btn text--lighten-2 mb-5">
                        Activate
                      </v-btn>
                    </div>
                  </template>
                  <span>Activate Silver Plan</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <div class="dropdown" @click="openSilverList" v-on="on">
                      <img src="whitedropdown.svg" alt="drop down icon">
                    </div>
                  </template>
                  <span>View plan details</span>
                </v-tooltip>

              </v-card>

              <div class="plans-list-container silver-list" id="silver-list">

                <ul>
                  <li v-for="(item, index) in silver" :key="index">
                    <div class="flex-items">
                      <div hidden id="item-feature">{{item.feature}}</div>
                      <div v-if="item.image">
                        <v-avatar size="30">
                          <img :src="item.description" :alt="item.description">
                        </v-avatar>
                      </div>
                      <div v-else style="color: #0090E8;" >{{item.description}}</div>
                    </div>
                  </li>
                </ul>

              </div>

            </v-flex>

            <v-flex class="text-center" lg3 md12 sm12 xs12>

              <v-card flat>

                <div style="color: #7A00D1" id="bronze" class="display-1 font-weight-black pa-5">
                  GOLD
                </div>

                <div class="display-2 font-weight-black pa-5" style="color: #656565">
                  &#x20A6; 2,500 
                </div>

                <div class = "grey--text text--lighten-1 title font-weight-light">
                  Per month
                </div>

                <v-tooltip top>
                  <template v-slot:activator="{on}">
                    <div v-on="on">
                      <v-btn color="#FF6700" class="white--text btn mb-5">
                        Activate
                      </v-btn>
                    </div>
                  </template>
                  <span>Activate Gold Plan</span>
                </v-tooltip>

                 <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                    <div class="dropdown" @click="openGoldList" v-on="on">
                      <img src="purpledropdown.svg" alt="drop down icon">
                    </div>
                  </template>
                  <span>View plan details</span>
                </v-tooltip>
                
              </v-card>

              <div class='gold-list plans-list-container' id="gold-list">

                <ul hidden-md-and-down>
                  <li v-for="(item, index) in gold" :key="index">
                    <div class="flex-items">
                      <div hidden id="item-feature">{{item.feature}}</div>
                      <div v-if="item.image">
                        <v-avatar size="30">
                          <img :src="item.description" :alt="item.description">
                        </v-avatar>
                      </div>
                      <div v-else style="color: #7A00D1; line-block; min-height: 8px">{{item.description}}</div>
                    </div>
                  </li>
                </ul>

              </div>

            </v-flex>

          </v-layout>

        </v-card>

      </div>

    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        'Loan',
        'Investment',
        'Smart Travel Savings',
        'Security',
        'Bank Statement',
        'Visa',
        'Ticket',
        'Escort',
        'Eight Free Country Destination',
        'Tour Package',
        'Hotel Reservation',
        '24/7 Customer Success Expert',
        'Travel shows',
        'Event',
        'Games',
        'Gold Investor',
        'Start Up',
        'Give a Meal',
        'Cargo'
      ],

      bronze: [
        {feature: 'Loan', description: '50K-150K Naira', image: false},
        {feature: 'Investment', description: 'greencheck.svg', image: true},
        {feature: 'Smart Travel Savings', description: 'greencheck.svg', image: true},
        {feature: 'Security', description: 'greencheck.svg', image: true},
        {feature: 'Bank Statement', description: '200k - 400k Naira', image: false},
        {feature: 'Visa', description: 'greencheck.svg', image: true},
        {feature: 'Ticket', description: 'greencheck.svg', image: true},
        {feature: 'Escort', description: '', image: false},
        {feature: 'Eight Free Country Destination', description: 'Just 1', image: false},
        {feature:'Tour Package', description: 'greencheck.svg', image: true},
        {feature: 'Hotel Reservation', description: 'greencheck.svg', image: true},
        {feature: '24/7 Customer Success Expert', description: '', image: false},
        {feature: 'Travel shows', description: 'greencheck.svg', image: true},
        {feature: 'Event', description: 'greencheck.svg', image: true},
         {feature: 'Games', description: 'greencheck.svg', image: true},
        {feature: 'Gold Investor', description: '', image: false},
        {feature: 'Start Up', description: 'greencheck.svg', image: true},
        {feature: 'Give a Meal', description: 'greencheck.svg', image: true},
        {feature: 'Cargo', description: 'greencheck.svg', image: true},
      ],

      silver: [
        {feature: 'Loan', description: '50K-2M Naira', image: false},
        {feature: 'Investment', description: 'bluecheck.svg', image: true},
        {feature: 'Smart Travel Savings', description: 'bluecheck.svg', image: true},
        {feature: 'Security', description: 'bluecheck.svg', image: true},
        {feature: 'Bank Statement', description: '200k - 1M Naira', image: false},
        {feature: 'Visa', description: 'bluecheck.svg', image: true},
        {feature: 'Ticket', description: 'bluecheck.svg', image: true},
        {feature: 'Escort', description: '', image: false},
        {feature: 'Eight Free Country Destination', description: 'Just 3', image: false},
        {feature:'Tour Package', description: 'bluecheck.svg', image: true},
        {feature: 'Hotel Reservation', description: 'bluecheck.svg', image: true},
        {feature: '24/7 Customer Success Expert', description: '', image: false},
        {feature: 'Travel shows', description: 'bluecheck.svg', image: true},
        {feature: 'Event', description: 'bluecheck.svg', image: true},
        {feature: 'Games', description: 'bluecheck.svg', image: true},
        {feature: 'Gold Investor', description: 'Silver Investor', image: false},
        {feature: 'Start Up', description: '', image: false},
        {feature: 'Give a Meal', description: 'bluecheck.svg', image: true},
        {feature: 'Cargo', description: 'bluecheck.svg', image: true},
      ],

      gold: [
        {feature: 'Loan', description: '50K-4M Naira', image: false},
        {feature: 'Investment', description: 'purplecheck.svg', image: true},
        {feature: 'Smart Travel Savings', description: 'purplecheck.svg', image: true},
        {feature: 'Security', description: 'purplecheck.svg', image: true},
        {feature: 'Bank Statement', description: '200k - 1M Naira', image: false},
        {feature: 'Visa', description: 'purplecheck.svg', image: true},
        {feature: 'Ticket', description: 'purplecheck.svg', image: true},
        {feature: 'Escort', description: '', image: false},
        {feature: 'Eight Free Country Destination',  description: '', image: false},
        {feature:'Tour Package', description: 'purplecheck.svg', image: true},
        {feature: 'Hotel Reservation', description: 'purplecheck.svg', image: true},
        {feature: '24/7 Customer Success Expert', description: '', image: false},
        {feature: 'Travel shows', description: 'purplecheck.svg', image: true},
        {feature: 'Event', description: 'purplecheck.svg', image: true},
        {feature: 'Games', description: '', image: false},
        {feature: 'Gold Investor', description: 'purplecheck.svg', image: true},
        {feature: 'Start Up', description: '', image: false},
        {feature: 'Give a Meal', description: 'purplecheck.svg', image: true},
        {feature: 'Cargo', description: 'purplecheck.svg', image: true},
      ]
    }
  },

  methods: {
    openBronzeList () {
      const bronzeList = document.querySelector('#bronze-list')
      const itemFeature = document.querySelectorAll('#item-feature')
      if (bronzeList.style.display === 'block') {
        bronzeList.style.display = 'none'
      } else {
        bronzeList.style.display = 'block'
        itemFeature.forEach((item) => {
          item.style.display="block"
        })
      }
    },

    openSilverList () {
      const silverList = document.querySelector('#silver-list')
      const itemFeature = document.querySelectorAll('#item-feature')
      if (silverList.style.display === 'block') {
        silverList.style.display = 'none'
      } else {
        silverList.style.display = 'block'
        itemFeature.forEach((item) => {
          item.style.display="block"
        })
      }
    },

    openGoldList () {
      const goldList = document.querySelector('#gold-list')
      const itemFeature = document.querySelectorAll('#item-feature')
      if (goldList.style.display === 'block') {
        goldList.style.display = 'none'
      } else {
        goldList.style.display = 'block'
        itemFeature.forEach((item) => {
          item.style.display="block"
        })
      }
    }
  },

  mounted () {
    window.addEventListener('resize', () => {
      const itemFeature = document.querySelectorAll('#item-feature')
      const bronzeList = document.querySelector('#bronze-list')
      const silverList = document.querySelector('#silver-list')
      const goldList = document.querySelector('#gold-list')
      if (window.innerWidth >= 1262) {
        itemFeature.forEach((item) => {
        item.style.display="none"
        })
      } else if (window.innerWidth <= 1262) {
          itemFeature.forEach((item) => {
          item.style.display="block"
        })
        goldList.style.display="block"
        silverList.style.display="block"
        bronzeList.style.display="block"
      }
    })
  }
}
</script>

<style scoped>
  
  .landing-view {
    background-color: #fff;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 100px;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .description  {
    margin-top: 100px;
    margin-left: 100px;
    line-height: 5rem;
  }
  #illustration {
    width: 800px;
  }
  .v-btn {
    text-transform:none !important;
  }
  .btn {
    border-radius: 46px;
    padding: 0px 60px !important;
    margin-top: 40px;
  }
  #bronze {
    padding-bottom: 60px;
  }
  .rounded-card {
    border-radius: 20px !important;
    position:relative; 
    bottom:50px;
  }
  .plans-items-container {
    margin-left: 60px;
  }
  #plan-features-container {
    height: 300px;
    position: relative;
  }
  #plan-features {
    padding-bottom: 20px;
    padding-left: 40px;
    color: #656565;
    position: absolute;
    bottom: 0;
  }
  .features-list, .bronze-list, .gold-list {
    margin-top: 40px;
  }
  ul li {
    list-style-type: none;
  }
  ul li {
    padding: 15px;
  }
  #card-container {
    position:relative; 
    bottom:150px;
  }
  .dropdown {
    display: none;
    cursor: pointer;
  }
  .flex-items {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  #item-feature {
    margin-left: -20px;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-100px)
    }
    to {
      opacity: 1;
      transform: translateY(0px)
    }
  }

  @media (max-width: 1502px) {
      #illustration {
      width: 700px;
    }
  }

  @media (max-width: 1298px) {
      #illustration {
      width: 600px;
    }
  }

  @media (max-width: 1262px) {
    .plans-list-container {
      display: none;
      animation: slideIn 500ms ease-out forwards;
    }
    .dropdown {
      display: block;
    }
    .rounded-card {
      bottom: 0px;
    }
  }

  @media (max-width: 1158px) {
      #illustration {
      width: 550px;
    }
  }

  @media (max-width: 1130px) {
    #card-container {
      bottom: 70px;
    }
  }

  @media (max-width: 1063px) {
    .landing-view {
      grid-template-columns: auto;
      row-gap: 50px;
      align-content: center;
    }
    #illustration {
      width: 1063px;
      max-width: 100%;
    }
    .description  {
      margin-top: 20px;
      margin: auto;
      padding: 0px 20px;
      text-align: center;
    }
    .description .text {
      font-size: 30px !important;
      padding-bottom: 0px !important;
    }
  }

  @media (max-width: 500px) {
    .flex-items {
      font-size: 12px;
    }
    .flex-items img {
      width: 20px;
    }
  }

</style>
