<template>
  <div class="header fix-top" id="hodoc-navbar">
    <nuxt-link class="logo" to="/">
        <img src="@/assets/image/hodoc-logo-inverse.png"/>
    </nuxt-link>
    <div class="drop-button" @click="toggleNavbar">
        <span class="dash"></span>
        <span class="dash"></span>
        <span class="dash"></span>
    </div>
    <div class="navbar collapse" ref="navbar">
        <span @click="collapseNavbar(1000)"><a href="#home">Trang chủ</a></span>
        <span @click="collapseNavbar(1000)"><a href="#service">Dịch vụ</a></span>
        <span @click="collapseNavbar(1000)"><a href="#contact">Liên hệ</a></span>
        <div class="vertical-line"></div>
        <span @click="collapseNavbar(1000)" class="blue"><a href="#become-doctor">Trở thành bác sĩ</a></span>
        <span @click="collapseNavbar(1000)" class="blue"><a href="#download-app">Tải ứng dụng ngay</a></span>
        <span @click="collapseNavbar(1000)" class="blue"><a href="#language_id">EN / VN</a></span>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        toggleNavbar: function() {
            let navbar = this.$refs.navbar;
            if(navbar.classList.contains('collapse')) {
                navbar.classList.remove('collapse');
            }
            else {
                navbar.classList.add('collapse');
            }
        },
        collapseNavbar: function(delay) {
            setTimeout(() => {
                if(!this.$el.classList.contains('fix-top')){
                    this.$el.classList.add('collapse');
                }
            }, delay);
        }
    },
    mounted: function() {
        let root = this;
        let navbar = this.$el;
        let lastScrollTop = 0;
        window.addEventListener('scroll', function(event){
            // Show the navbar when scroll up and vise versa
            let currentScrollTop = event.path[1].pageYOffset;
            if(currentScrollTop < lastScrollTop) {
                navbar.classList.remove('collapse');
            }
            else {
                navbar.classList.add('collapse');
                root.$refs.navbar.classList.add('collapse');
            }
            lastScrollTop = currentScrollTop;

            // transparent the navbar when it is on the top of the page
            if(event.path[1].scrollY == 0) {
                navbar.classList.remove('collapse');
                root.$refs.navbar.classList.add('collapse');
                navbar.classList.add('fix-top');
            }
            else {
                navbar.classList.remove('fix-top');
            }
        });
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/utilities.scss';

* {
    box-sizing: border-box;   
}

.header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 110px;
    display: flex;
    align-items: center;
    padding: 5px 50px;
    overflow: hidden;
    transform-origin: center top;
    transition: transform 0.3s ease;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    .logo {
        height: 100%;
        display: inline-block;
        text-align: center;
        padding: 0 auto;
        img {
            height: 100%;
        }
        flex-basis: 10%;
    }
    .navbar {
        height: 100%;
        flex-basis: 90%;
        margin: 0;
        background-color: transparent;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span.blue {
            color: $primary-color;
        }
        span {
            padding: 0;
            background-color: transparent;
            a {
                text-decoration: none;
                color: inherit;
                padding: 20px;
                text-align: center;
                display: inline-block;
            }
            &:hover, &:active {
                background-color: $primary-color;
                border-radius: 5px;
                color: white;
            }
        }
        .vertical-line {
            border: 0.5px solid rgba(0, 0, 0, 0.1);
            padding: 0;
            margin: 0;
            flex-grow: 0;
            height: $navbar-height*0.5;
            border-radius: 5px;
            margin: 0 5px;
        }
    }
    .drop-button {
        display: none;
        width: 35px;
        height: 35px;
        border: 2px solid $primary-color;
        border-radius: 8px;
        padding: 5px;
        .dash {
            display: block;
            width: 100%;
            height: 3px;
            border-radius: 3px;
            background-color: $primary-color;
        }
    }
    &.collapse {
        transform: scaleY(0);
    }
    &.fix-top {
        background: transparent;
        box-shadow: none;
    }

    // For mobile
    @include responsive ($mobile-max-width) {
        position: sticky;
        //position: fixed;
        height: 70px;
        padding: 5px 30px;
        justify-content: space-between;
        overflow: visible;
        .navbar {
            top: 70px;
            background-color: rgba(255, 255, 255, 0.9);
            height: auto;
            z-index: 20;
            position: absolute;
            left: 0;
            right: 0;
            align-content: flex-start;
            flex-wrap: wrap;
            transform-origin: center top;
            transform: scaleY(1);
            transition: transform 0.5s ease;
            box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            span {
                width: 100%;
                color: black !important;
                a {
                    text-align: left;
                    width: 100%;
                }
                &:hover {
                    color: white !important;
                }
            }
            .vertical-line {
                display: none;
            }
            &.collapse {
                transform: scaleY(0);
            }
        }
        .drop-button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }
        &.fix-top {
            //box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        }
    }
    // For tablet
    @include responsive ($mobile-max-width, $tablet-max-width) {
        font-size: 0.9em;
        height: 90px;
        padding: 5px 10px;
        span > a {
            padding: 10px !important;
        }
    }
}
</style>

