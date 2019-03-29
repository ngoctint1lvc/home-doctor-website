<template>
  <div id="web">
    <div id="home">
      <img :src="homeImageUrl">
    </div>
    <Carrousel id="service"/>
    <RegisterForm id="become-doctor"/>
    <div class="background">
      <img src="@/assets/image/hodoc-more-smart.png">
      <a href="https://play.google.com/store/apps/details?id=com.thietke24h.bacsi"><p>Tham gia ngay</p></a>
    </div>
  </div>
</template>

<script>
import Carrousel from '@/components/Carrousel'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    Carrousel,
    RegisterForm
  },
  data() {
    return {
      isMobile: false
    }
  },
  methods:{
    initAccountKit(){
      const tag = document.createElement('script')
      tag.setAttribute(
        'src',
        `https://sdk.accountkit.com/en_US/sdk.js`
      )
      tag.setAttribute('id', 'account-kit')
      tag.setAttribute('type', 'text/javascript')
      tag.onload = () => {
        window.AccountKit_OnInteractive = this.onLoadAccountKit;
      }
      document.head.appendChild(tag)
    },
    initFirebase(){
      const tag = document.createElement('script');
      tag.setAttribute('src', 'https://www.gstatic.com/firebasejs/5.5.0/firebase.js');
      tag.onload = () => {
        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyCDXb7QvwM1GLJx3pXl9niI1O47hfejDZY",
          authDomain: "home-doctor-990ef.firebaseapp.com",
          databaseURL: "https://home-doctor-990ef.firebaseio.com",
          projectId: "home-doctor-990ef",
          storageBucket: "home-doctor-990ef.appspot.com",
          messagingSenderId: "593654167624"
        };
        firebase.initializeApp(config);
        console.log('firebase inited')
      }
      document.head.appendChild(tag);
    },
    onLoadAccountKit () {
      // Initialize facebook account kit
      AccountKit.init(
        {
            appId: "199515577439754",
            state: "1707693f3d2cd269634b39cce30d164b",
            version: "v1.0",
            fbAppEventsEnabled: true,
            redirect: "https://vinadoctor.com"
        }
      );
    },
  },
  computed: {
    homeImageUrl: function(){
      if(!this.isMobile){
        return require("../assets/image/hodoc-intro-v3.png");
      }
      else {
        return require("../assets/image/mobile/hodoc-intro-mobile.png");
      }
    }
  },
  mounted: function(){
    //this.initFirebase();
    this.initAccountKit();

    // Check size of screen
    const root = this;
    function checkSize(){
      if(window.innerWidth / window.innerHeight < 1)
        root.isMobile = true;
      else
        root.isMobile = false;
    }
    checkSize();
    addEventListener('resize', checkSize);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/utilities.scss';

#web {
  width: 100%;
  padding: 0;
  margin: 0;
}

#home {
  width: 100%;
  transition: height linear 0.2s;
  font-size: 0;
  img {
    font-size: 0;
    width: 100%;
    height: 100vh;
  }
  @media (max-aspect-ratio: 14/9) {
    img {
      height: auto;
    }
  }

  // For tablet and mobile
  @include responsive($tablet-max-width) {
    img {
      height: auto;
    }
  }
}

.background {
  position: relative;
  width: 100%;
  height: 100vw * 9 / 16;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  a {
    position: absolute;
    z-index: 2;
    display: table;
    background-color: $primary-color;
    color: white;
    width: 22.5%;
    height: 8%;
    text-align: center;
    text-decoration: none;
    padding: auto;
    top: 79.7%;
    left: 4.1%;
    border-radius: 10px;
    display: none;
    p {
      display: table-cell;
      vertical-align: middle;
      font-size: 25px;
      text-transform: uppercase;
      font-weight: 900;
    }
    &:hover {
      background-color: darken($primary-color, 20);
    }
  }
}
</style>
