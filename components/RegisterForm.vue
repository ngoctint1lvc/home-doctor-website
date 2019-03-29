<template>
    <div class="register">
        <div class="header">
            <h1>VinaDoctor</h1>
            <h3>Hãy tham gia vào đội ngũ bác sĩ cùng chúng tôi</h3>
        </div>
        <form id="phone-authenticate-form" ref="phoneAuth" method="post">
            <div class="phoneNumber">
                <label>Số điện thoại</label>
                <input value="+84" type="tel" name="countryCode" required>
                <input type="tel" name="phoneNumber" required>
            </div>
            <button type="submit" v-on:click="phoneAuthenticate">Xác thực</button>
        </form>
        <form id="create-account-form" ref="createAccount" class="hidden" method="post">
            <div class="name">
                <label for="name">Họ và tên</label>
                <input type="text" name="name" required>
            </div>
            <div class="gender">
                <label for="gender">Giới tính</label>
                <select name="gender">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                </select>
            </div>
            <div class="dateOfBirth">
                <label for="dateOfBirth">Ngày sinh</label>
                <input type="date" data-date-format="DD MMMM YYYY" name="dateOfBirth" required>
            </div>
            <div class="idNumber">
                <label for="idNumber">Số CMND</label>
                <input type="text" name="idNumber">
            </div>
            <div class="placeOfIssue">
                <label for="placeOfIssue">Nơi cấp</label>
                <select name="placeOfIssue">
                    <option v-for="(province, index) in provinceList" :value="province.provinceid" :key="index">
                        {{ province.name }}
                    </option>
                </select>
            </div>
            <!-- <div class="phoneNumber">
                <label for="phoneNumber">Số điện thoại</label>
                <input type="tel" name="phoneNumber">
            </div> -->
            <div class="email">
                <label for="email">Địa chỉ email</label>
                <input type="email" name="email">
            </div>
            <div class="company">
                <label for="company">Đơn vị công tác (Nơi làm việc / học tập)</label>
                <input type="text" name="company">
            </div>
            <div class="recommender">
                <label for="recommender">Người giới thiệu (Số điện thoại)</label>
                <input type="tel" name="recommender">
            </div>
            <div class="avatar">
                <label for="avatar">Ảnh cá nhân</label>
                <input type="file" name="avatar">
            </div>
            <div class="profile">
                <label for="profile">Thông tin nghề nghiệp (Bằng cấp, bảng điểm, chứng chỉ hành nghề)</label>
                <input type="file" name="profile" multiple>
            </div>
            <button type="submit" v-on:click="createAccount">Đăng ký</button>
        </form>
        <div class="loading hidden" ref="loading">
            <img src="../assets/image/please-wait-2.gif" alt="please wait">
        </div>
        <div class="notification hidden" ref="notification">{{ notification }}</div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/utilities.scss';

* {
    box-sizing: border-box;
}

.register {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../assets/image/become-doctor-background-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    padding: 60px 0;
    div, form, label, input, h1, h3 {
        //outline: 1px solid green;
    }
    .header {
        text-align: center;
        h1, h3 {
            margin: 0;
            padding: 20px;
        }
        h1 {
            font-size: 70px;
            color: $primary-color;
        }
        h3 {
            font-size: 40px;
            color: white;
        }
    }
    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        input:focus {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        div {
            width: 100%;
            outline: none;
            padding: 5px;
            label, input, select {
                display: block;
                border: none;
                padding: 10px;
            }
            input, select {
                border-radius: 10px;
                width: 100%;
                outline: none;
            }
            input[type=file] {
                padding: 0;
                box-shadow: none;
            }
            input[type=file]::-webkit-file-upload-button {
                padding: 10px 15px;
                border-radius: 10px;
                border: none;
                outline: none;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                color: $primary-color;
                background-color: #ececee;
                &:hover {
                    background-color: #504f45f0;
                    color: white;
                }
                &:active {
                    transform: scale(1.05);
                }
            }
        }
        .gender {
            width: 40%;
            select {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                -ms-progress-appearance: none;
                background-color: white;
            }
        }
        .dateOfBirth {
            width: 50%;
            input {
                &::-webkit-clear-button {
                    display: none;
                }
                &::-webkit-inner-spin-button {
                    display: none;
                }
                box-shadow: none;
            }
        }
        .idNumber {
            width: 50%;
        }
        .placeOfIssue {
            width: 40%;
        }
        button[type=submit] {
            padding: 15px 25px;
            border-radius: 10px;
            background-color: $primary-color;
            text-transform: uppercase;
            color: white;
            border: none;
            margin: 0 auto;
            outline: none;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            &:hover, &:active {
                background-color: darken($primary-color, 20);
            }
            &:active {
                transform: scale(1.05);
            }
        }
    }

    #phone-authenticate-form {
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 15px;
            label {
                width: 100%;
                text-align: center;
                font-size: 1.5em;
            }
            input {
                background: transparent;
                border: 2px solid white;
                border-radius: 0;
                color: white;
                font-size: 1.1em;
                &:-webkit-autofill {
                    background: transparent !important;
                }
            }
            input[name=countryCode] {
                width: 20%;
                border-right: none;
            }
            input[name=phoneNumber] {
                width: 80%;
            }
        }
        &.hidden {
            display: none;
        }
    }

    #create-account-form {
        &.hidden {
            display: none;
        }
    }

    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #00000065;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 30%;
            height: auto;
        }
        &.hidden {
            display: none;
        }
    }

    .notification {
        z-index: 21;
        position: fixed;
        top: 0;
        left: 20%;
        right: 20%;
        min-width: 300px;
        background-color: $primary-color;
        padding: 15px;
        text-align: center;
        transform: scaleY(1);
        transform-origin: center top;
        transition: transform 0.2s ease;
        //border-radius: 15px;
        opacity: 0.9;
        box-shadow: 0 2px 3px rgb(70, 61, 61);
        &.hidden {
            //display: none;
            transition: transform 0.2s;
            transform: scaleY(0);
        }
    }

    // for mobile
    @include responsive($mobile-max-width) {
        .header {
            h1 {
                font-size: 2.7em;
            }
            h3 {
                font-size: 1.2em;
            }
        }
        .notification {
            left: 0;
            right: 0;
        }
    }

    // for tablet
    @include responsive($mobile-max-width, $tablet-max-width){
        .header {
            h1 {
                font-size: 3.5em;
            }
            h3 {
                font-size: 2em;
            }
        }
    }
}
</style>


<script>
import Cookies from 'js-cookie';
import provinceList from '../content/province.json';

export default {
    data() {
        return {
            notification: 'This is notification',
            provinceList: provinceList
        }
    },
    methods: {
        showNotification(message){
            this.notification = message;
            let notificationBox = this.$refs.notification;
            notificationBox.classList.remove('hidden');
            setTimeout(() => {
                notificationBox.classList.add('hidden');
            }, 2000);
            //console.log(this.provinceList);
        },
        loginCallback(response){
            const root = this;
            console.log(response);
            if(response.status == "PARTIALLY_AUTHENTICATED"){
                // Get authorized_code from facebook account kit
                var authorizedCode = response.code;
                let data = {
                    'ack_token': authorizedCode,
                    'role': "doctor",
                    'device_id': "web",
                    'device_os': "web"
                }

                let formData = new FormData();
                for (let key in data) {
                    formData.append(key, data[key]);
                }

                // check whether this phone number is registered or not
                fetch('https://homedoctor.thietke24h.com/api/v1.0.0/user/verifyacktoken', {
                    method: "POST",
                    mode: "cors",
                    body: formData
                }).then(response => {
                    return response.json();
                }).then(response => {
                    if(response.code == 200){
                        let data = response.data;
                        console.log(data);
                        Cookies.set('token', data.token, {expires: 1}); // expires in 1 minute
                        if(data.status == "unregistered"){
                            root.$refs.phoneAuth.classList.add('hidden');
                            root.$refs.createAccount.classList.remove('hidden');
                        }
                        else {
                            root.showNotification('Your phone number is already being used');
                        }
                    }
                }).catch(error => {
                    console.log(error);
                    root.showNotification('Some error occured! Please try again');
                });
            }
            else {
                root.showNotification('Some error occured! Please try again');
            }
        },
        phoneAuthenticate(event) {
            event.preventDefault();
            var countryCode = this.$el.querySelector('#phone-authenticate-form input[name=countryCode]').value;
            var phoneNumber = this.$el.querySelector('#phone-authenticate-form input[name=phoneNumber]').value;
            console.log(Cookies);

            AccountKit.login(
                'PHONE',
                {countryCode: countryCode, phoneNumber: phoneNumber},
                this.loginCallback
            );
        },
        createAccount(event) {
            event.preventDefault();
            const root = this;
            const form = this.$refs.createAccount;
            let avatarFilePath = '';
            let profileIdList = [];
            // bool variable to check if we are already to create account (finish upload image)
            var uploadFileDone = function(){
                return (profileIdList.length == form.profile.files.length) && (form.avatar.files.length == 0 || avatarFilePath);
            }

            var failToUploadFile = function() {
                console.log('Fail to upload file')
                root.$refs.loading.classList.add('hidden');
            }

            function uploadFile(token, fileImage, type, callBack){
                let data = new FormData();
                data.append('token', token);
                data.append('file_image', fileImage);
                data.append('type', type);
                fetch('https://homedoctor.thietke24h.com/api/v1.0.0/upload/image', {
                    method: "POST",
                    mode: "cors",
                    body: data
                }).then(response => {
                    //console.log(response);
                    return response.json();
                }).then(response => {
                    callBack(response);
                }).catch(error => {
                    callBack(error);
                });
            }

            // form validation
            function formValidation() {
                if(!form.name.value) {
                    root.showNotification('Họ và tên không hợp lệ');
                    return false;
                }
                if(!form.dateOfBirth.value){
                    root.showNotification('Ngày sinh không hợp lệ');
                    return false;
                }
                if(!form.idNumber.value) {
                    root.showNotification('Số CMND không hợp lệ');
                    return false;
                }
                if(isNaN(form.placeOfIssue.value) && !form.placeOfIssue.value) {
                    root.showNotification('Nơi cấp không hợp lệ');
                    return false;
                }
                if(!form.email.value) {
                    root.showNotification('Email không hợp lệ');
                    return false;
                }
                if(!form.company.value) {
                    root.showNotification('Đơn vị công tác không hợp lệ');
                    return false;
                }
                if(isNaN(form.recommender.value) && !form.recommender.value) {
                    root.showNotification('Số điện thoại người giới thiệu không hợp lệ');
                    return false;
                }
                if(!form.avatar.files.length) {
                    root.showNotification('Hãy đính kèm ảnh cá nhân của bạn');
                    return false;
                }
                if(!form.profile.files.length) {
                    root.showNotification('Hãy đính kèm ảnh bằng cấp của bạn');
                    return false;
                }
                return true;
            }

            if(!formValidation()) return;

            // show loading
            this.$refs.loading.classList.remove('hidden');

            // upload avatar images
            uploadFile(Cookies.get('token'), form.avatar.files[0], 'avatar', function(response) {
                if(response.code && response.code == 200){
                    console.log(response);
                    avatarFilePath = response.data.path;
                    if(uploadFileDone()) return finishCreateAccount();
                }
                else {
                    return failToUploadFile();
                }
            });

            // upload certificate images
            for(let i = 0; i < form.profile.files.length; i++) {
                uploadFile(Cookies.get('token'), form.profile.files[i], 'certificate', function(response){
                    if(response.code && response.code == 200){
                        console.log(response);
                        profileIdList.push(response.data.id);
                        if(uploadFileDone()) return finishCreateAccount();
                    }
                    else {
                        return failToUploadFile();
                    }
                });
            }

            function finishCreateAccount(){
                console.log('you can create your account with this information');
                let data = {
                    token: Cookies.get('token'),
                    name: form.name.value,
                    email: form.email.value,
                    gender: form.gender.value,
                    birthday: form.dateOfBirth.value,
                    cardid: form.idNumber.value,
                    cardid_province: form.placeOfIssue.value,
                    work_place: form.company.value,
                    avatar: avatarFilePath,
                    certificate_image_ids: profileIdList.join(','),
                    recommender: form.recommender.value
                }
                console.log(data);

                let formData = new FormData();
                for (let key in data){
                    formData.append(key, data[key]);
                }

                fetch('https://homedoctor.thietke24h.com/api/v1.0.0/user/update', {
                    method: 'post',
                    mode: 'cors',
                    body: formData
                }).then(response => {
                    return response.json()
                }).then(response => {
                    if(response.code == 200){
                        root.showNotification('Tài khoản của bạn đang được chờ duyệt');
                    }
                    else{
                        console.log(response);
                        root.showNotification(response.error);
                    }
                }).catch(error => {
                    console.log(error);
                    root.showNotification('Some error occured! Please try again!');
                }).finally(() => {
                    root.$refs.loading.classList.add('hidden');
                });
            }
        }
    }
}
</script>
