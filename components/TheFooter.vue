<template>
    <div id="contact" class="hodoc-footer">
        <form action="#">
            <input type="text" placeholder="Nhập email để nhận tin tức và ưu đãi từ Home Doctor">
            <input type="submit" value="Gửi">
        </form>
        <div class="content">
            <div class="brand">
                <img src="@/assets/image/hodoc-logo-white.png">
                <h1>VinaDoctor</h1>
            </div>
            <div class="about-us">
                <h1>Về chúng tôi</h1>
                <a href="#">Blog & News</a>
                <a href="#">Điều khoản & điều kiện</a>
                <a href="#">Tuyển dụng</a>
            </div>
            <div class="services">
                <h1>Các dịch vụ</h1>
                <a href="#">Khám tại nhà</a>
                <a href="#">Đặt lịch khám</a>
                <a href="#">Trở thành bác sĩ</a>
            </div>
            <div class="social-media">
                <h2>Download VinaDoctor App</h2>
                <div class="logos" id="download-app">
                    <a href="https://play.google.com/store/apps/details?id=com.thietke24h.bacsi"><i class="fa fa-android"></i></a>
                    <a href="https://play.google.com/store/apps/details?id=com.thietke24h.bacsi"><i class="fa fa-apple"></i></a>
                </div>
                <h2>Connect with VinaDoctor</h2>
                <div class="logos">
                    <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
                    <a href="https://instagram.com"><i class="fa fa-instagram"></i></a>
                    <a href="https://youtube.com"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
            <div class="contact-info">
                <p>Tel: 0522862805</p>
                <p>Mail: support@vinadoctor.com</p>
                <p>Office: Tầng 10, Tòa nhà Pax Sky, Số 51 Nguyễn Cư Trinh, Quận 1, TP.Hồ Chí Minh</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";
@import "@/assets/css/utilities.scss";

* {
    box-sizing: border-box;
}

.hodoc-footer {
    background-color: $primary-color;
    padding: 50px;
    overflow: hidden;
    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        input {
            padding: 15px;
        }
        input:first-of-type {
            width: calc(100% - 300px);
            font-size: 1.2em;
            border-radius: 10px;
            border: none;
            outline: none;
            &:hover {
               box-shadow: 0 5px 5px rgba(0,0,0,0.3);
            }
        }
        input[type=submit] {
            border: none;
            margin-right: 30px;
            width: 150px;
            font-size: 1.2em;
            font-weight: 300;
            color: white;
            text-transform: uppercase;
            background-color: darken($primary-color, 20);
            border-radius: 5px;
            &:hover {
                background-color: darken($primary-color, 30);
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
                outline: none;
            }
        }
    }
    .content {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        color: white;
        h1, h2 {
            text-transform: uppercase;
        }
        div {
            flex-grow: 1;
            //outline: 1px solid green;
            a {
                text-decoration: none;
                color: inherit;
            }
        }
        .brand {
            width: 20%;
            display: flex;
            justify-content: center;
            align-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            img {
                margin-top: 20px;
                width: auto;
                height: 200px;
            }
            h1 {
                text-transform: uppercase;
            }
        }
        .about-us, .services {
            width: 25%;
            h1, a {
                padding: 15px;
                padding-left: 20%;
            }
            a {
                font-size: 1.2em;
                display: block;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .social-media {
            width: 30%;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            h2, div {
                display: block;
                width: 100%;
            }
            .logos {
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                a {
                    display: inline-block;
                    margin: 0 6%;
                    i {
                        font-size: 60px;
                        color: white;
                        &:hover {
                            color: darken($primary-color, 50);
                        }
                    }
                }
            }
        }
        .contact-info {
            width: 100%;
            font-size: 1.1em;
        }
    }

    // For both mobile and tablet
    @include responsive($tablet-max-width) {
        padding: 30px 50px;
        form {
            input:first-of-type {
                width: 70%;
            }
            input[type=submit] {
                width: 20%;
                margin: 0;
            }
        }
        .content {
            h1 {
                font-size: 1.5em;
            }
            h2 {
                font-size: 1.3em;
            }
            .brand {
                * {
                    width: 100%;
                }
            }
        }
    }

    // For mobile
    @include responsive($mobile-max-width) {
        padding: 30px 10px;
        form {
            input:first-of-type {
                width: 100% ;
            }
            input[type=submit] {
                margin: 15px auto;
                padding: 10px 15px;
                font-size: 14px;
                text-align: center;
                width: 60px;
            }
        }
        .content {
            margin-top: 10px;
            text-align: center;
            > div {
                position: relative;
                width: 100% !important;
                margin-bottom: 20px;
                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -15px;
                    height: 1px;
                    width: 60%;
                    background-color: white;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    box-shadow: 0 1px 3px white;
                }
                &:last-of-type {
                    margin-bottom: 0;
                    &::after {
                        display: none;
                    }
                }
            }
            .about-us, .services {
                * {
                    padding: 10px !important;
                }
                h1 {
                    margin-bottom: 0;
                }
            }
            .contact-info {
                font-size: 1em;
            }
        }
    }

    // For tablet
    @include responsive($mobile-max-width, $tablet-max-width) {
        form {

        }
        .content {
            .brand {
                width: 100%;
            }
            .about-us, .services {
                width: 50%;
            }
            .social-media {
                width: 100%;
            }
        }
    }
}
</style>
