<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state" class="smx:hidden" />

        <!-- popup edit page -->
        <div 
        :class="{'invisible scale-0': !edit_modal}"
        class="absolute z-40 w-full h-screen top-0 transition-all duration-100 left-0 flex items-center justify-center bg-black bg-opacity-90">

            <div class="w-[50%] smx:w-[95%] border h-fit pb-8 rounded-lg bg-[#252325] text-secondary shadow-xl relative">

                <svg @click="edit_modal = !edit_modal" clip-rule="evenodd" width="32" class="absolute fill-white hover:opacity-60 cursor-pointer top-0 right-0 mx-5 my-5" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>

                <!-- form My Profile -->
                <form @submit.prevent="updateProfile">
                    <div class="w-full flex flex-col gap-4 px-[2rem] pt-[1rem]">

                        <h1 class="text-center text-3xl text-secondary font-semibold mb-[2rem]">Edit Page</h1>
                        
                        <div class="relative cursor-not-allowed opacity-50">
                            <label for="email" class="absolute -top-3 px-2 left-4 bg-[#252325]">
                                Email
                            </label>
                            <input id="email" type="email" class="w-full p-3 rounded-md bg-transparent border border-secondary" placeholder="Title" v-model="getUserData.email" disabled>
                        </div>
                        
                        <div class="relative">
                            <label for="name" class="absolute -top-3 px-2 left-4 bg-[#252325]">
                                Name
                            </label>
                            <input id="name" type="text" class="w-full p-3 rounded-md bg-transparent border border-secondary" placeholder="Title" v-model="getUserData.name">
                        </div>
                        
                        <div class="relative cursor-not-allowed opacity-50">
                            <label for="username" class="absolute -top-3 px-2 left-4 bg-[#252325]">
                                Username
                            </label>
                            <input id="username" type="text" class="w-full p-3 rounded-md bg-transparent border border-secondary" placeholder="Tag" v-model="getUserData.username" disabled>
                        </div>
                        
                        <div class="relative">
                            <label for="about" class="absolute -top-3 px-2 left-4 bg-[#252325]">
                                About
                            </label>
                            <textarea id="about" v-model="getUserData.about" type="text" class="w-full p-3 rounded-md bg-transparent border border-secondary" placeholder="About" rows="7"></textarea>
                        </div>
                        
                        <div class="flex justify-center w-full mt-5">
                            <button class="px-20 smx:w-full rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito" >
                                <svg v-if="loading" class="animate-spin mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="user-select: auto;">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="user-select: auto;"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="user-select: auto;"></path>
                                </svg>
                                <span v-else>
                                    Save Change        
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- form My Profile -->
                
            </div>
            
        </div>
        <!-- popup edit page -->
        
        <!-- content -->
        <section class="h-screen pb-7 pl-22em pr-20 pt-24 smx:p-4 smx:pt-24 smx:pb-20">

            <h2 class="text-4xl font-bold text-secondary text-left mb-7">My Profile</h2>

            <div class="flex flex-wrap gap-7 smx:pb-10">
                <!-- profile -->
                <div class="w-full h-full smx:items-center smx:flex-col flex gap-14 rounded-lg border px-5 py-6 bg-secondary bg-opacity-10">
                        <div class="w-80 h-full p-3 border border-dashed rounded-lg">
                            <div class="w-full h-full bg-secondary rounded-lg border overflow-hidden flex justify-center items-center">
                                <img src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                            </div>
                        </div>
    
                        <div class="">
                            <div class="mb-4 flex flex-col">
                                <span class="font-bold text-xl text-secondary font-nunito ">Name</span>
                                <span class="font-normal block font-nunito opacity-60 text-secondary">{{getUserData.name}}</span>
                            </div>
                            <div class="mb-4 flex flex-col">
                                <span class="font-bold text-xl text-secondary font-nunito ">Email</span>
                                <span class="font-normal block font-nunito opacity-60 text-secondary">{{getUserData.email}}</span>
                            </div>
                            <div class="mb-4 flex flex-col">
                                <span class="font-bold text-xl text-secondary font-nunito ">Username</span>
                                <span class="font-normal block font-nunito opacity-60 text-secondary">@{{getUserData.username}}</span>
                            </div>
                            <div class="mb-4 flex flex-col">
                                <span class="font-bold text-xl text-secondary font-nunito ">About</span>
                                <span class="font-normal block font-nunito opacity-60 text-secondary">{{getUserData.about ? getUserData.about : '..'}}</span>
                            </div>
                            <div class="mt-5 smx:mt-10">
                                <button @click="edit_modal = !edit_modal" class="px-20 flex justify-center smx:w-full gap-3 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                                    <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
                                    <span>Edit Profile</span>
                                </button>
                            </div>                    
                        </div>
                </div>
                <!-- profile -->
            </div>
            
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'
import QrcodeVue from 'qrcode.vue'
import { mapGetters, mapMutations } from 'vuex'


export default {
    name: "My Profile",
    data(){
        return {
            state: "myprofile",
            value: 'http://localhost:8080/',
            size: 200,
            edit_modal: false,
            loading: false,
            open_share: false
        }
    },
    components: {
        NavBar,
        QrcodeVue,
        SideBar
    },
    computed: {
        ...mapGetters(['getUserToken', 'getUserData'])
    },
    methods: {
        ...mapMutations(['setLoggedStatus', 'setDataUser']),
        
        getData: async function () {
            // console.log(localStorage.getItem("token"));
            await this.axios.get('profile', {
                headers: {
                    'x-api-key': this.getUserToken
                }
            })
            .then((response) => {
                // this.$swal('Hello Vue world!!!');
                this.setDataUser(response.data.data)

                // change qrcode url base on https://example.com/username
                this.value = `http://localhost:8080/${response.data.data.username}`
            }).catch(error => {
                if (error.response.status == 401) {
                    // unauthorized
                    this.$swal({
                        icon: 'error',
                        title: 'Please login first!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    }).then(() => window.location.href = '/signin')
                } else {
                    // something wrong
                    this.$swal({
                        icon: 'error',
                        title: 'Upps...',
                        text: 'Something went wrong, reload you\'r page!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    })
                }
                // console.error('error:', error.response);
            })
        },

        updateProfile: async function () {
            // data_page
            this.loading = true
            await this.axios.put('users', this.data_page ,{
                headers: {
                    'x-api-key': this.getUserToken
                }
            }).then(response => {
                console.log(response);
                this.loading = false
                this.$swal({
                    icon: 'success',
                    title: response.data.msg,
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1300,
                    timerProgressBar: true
                })
            }).catch(error => {
                if (error.response.status == 401) {
                    // unauthorized
                    this.$swal({
                        icon: 'error',
                        title: 'Please login first!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    }).then(() => window.location.href = '/signin')
                } else {
                    // something wrong
                    this.$swal({
                        icon: 'error',
                        title: 'Upps...',
                        text: 'Something went wrong, reload you\'r page!',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true
                    })
                }
            })
        },

        downloadQR() {
            let canvasImage = document.getElementsByTagName('canvas')[0].toDataURL('image/png')
            // console.log(canvasImage);
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function () {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = 'upstrim-qrcode.png';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                a.remove();
            };
            xhr.open('GET', canvasImage);
            xhr.send();
        },

        limitText(str) {
            // return "sad"
            if(str.length > 50) {
                return str.replace(/^(.{300}[^\s]*).*/, "$1")
            }
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style scoped>
.w-35\% {
    width: 35%; 
}
.w-60\% {
    width: 60%; 
}

</style>