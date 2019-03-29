<template>
    <div class="carrousel">
        <div v-for="(slide, index) in slideShow" :key="index" class="slide">
            <img :src="getImage(slide)">
        </div>
        <a class="prev" v-on:click="plusSlide(-1)">&#10094;</a>
        <a class="next" v-on:click="plusSlide(1)">&#10095;</a>
        <div class="indicator">
            <span v-for="(slide, index) in slideShow" :key="index"
            v-on:click="jumpToSlide(index)"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slideShow: [
                'slideshow-1-v2.png',
                'slideshow-2-v2.png',
                'slideshow-3-v2.png'
            ],
            currentSlide: 0
        }
    },
    methods: {
        getImage: function(image) {
            return require('../assets/image/' + image);
        },
        plusSlide: function(number) {
            if (!number) return;
            let slides = this.$el.querySelectorAll('.slide');
            let nextSlide = (this.currentSlide + number + this.slideShow.length) % this.slideShow.length;
            
            slides[nextSlide].classList.remove('leftToRight');
            slides[nextSlide].classList.remove('rightToLeft');
            if(number > 0) {
                slides[nextSlide].classList.add('leftToRight');
            }
            else {
                slides[nextSlide].classList.add('rightToLeft');
            }
            setTimeout(function(){
                slides[nextSlide].classList.remove('leftToRight');
                slides[nextSlide].classList.remove('rightToLeft');
            }, 2000);
            this.jumpToSlide(nextSlide);
        },
        jumpToSlide: function(slide){
            if(slide == this.currentSlide) return;
            let slides = this.$el.querySelectorAll('.slide');
            let dots = this.$el.querySelectorAll('.indicator > span');

            slides[this.currentSlide].classList.remove('active');
            dots[this.currentSlide].classList.remove('dot-active');
            this.currentSlide = slide;
            slides[this.currentSlide].classList.add('active');
            dots[this.currentSlide].classList.add('dot-active');
        }
    },
    mounted: function() {
        let slides = this.$el.querySelectorAll('.carrousel > .slide');
        let dots = this.$el.querySelectorAll('.indicator > span');
        slides[0].classList.add('active');
        dots[0].classList.add('dot-active');
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/utilities.scss';

.carrousel {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .slide {
        position: absolute;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: opacity 1.5s ease;
        img {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
        }
        &.active {
            opacity: 1;
        }
        &.leftToRight {
            animation-name: leftToRight;
            animation-duration: 1.5s;
        }
        &.rightToLeft {
            animation-name: rightToLeft;
            animation-duration: 1.5s;
        }
    }
    @keyframes leftToRight {
        from {
            transform: translateX(-100%);
            opacity: 1;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes rightToLeft {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    a {
        position: absolute;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        line-height: 60px;
        text-align: center;
        color: $primary-color;
        padding: 15px;
        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
        }
        &.prev {
            left: 0;
            margin-left: 30px;
        }
        &.next {
            right: 0;
            margin-right: 30px;
        }
    }
    .indicator {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -150%);
        padding: 15px;
        span {
            border: 1.1px solid #302c2c;
            cursor: pointer;
            transition: all 1.5s ease;
            width: 15px;
            height: 15px;
            display: inline-block;
            border-radius: 50%;
            background-color: transparent;
            margin: 0 5px;
            &:active, &:hover {
                background-color: #4b4444;
            }
            &.dot-active {
                background-color: #302c2c;
            }
        }
    }

    @media (max-aspect-ratio: 14/9) {
        height: 12/20*100vw;
    }

    // For mobile
    @include responsive($mobile-max-width) {
        a {
            font-size: 15px;
            padding: 0 5px;
            height: 35px;
            line-height: 35px;
        }
        .indicator {
            transform: translate(-50%, -100%);
            span {
                width: 10px;
                height: 10px;
            }
        }
    }
}
</style>
