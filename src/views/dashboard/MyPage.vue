<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state" class="smx:hidden" />

        <!-- popup edit page -->
        <div 
        :class="{'invisible scale-0': !edit_modal}"
        class="absolute z-40 w-full h-screen top-0 transition-all duration-100 left-0 flex items-center justify-center">

            <div class="w-[50%] h-[80%] rounded-lg bg-[#252325] text-secondary shadow-xl relative">

                <svg @click="edit_modal = !edit_modal" clip-rule="evenodd" width="32" class="absolute fill-white hover:opacity-60 cursor-pointer top-0 right-0 mx-5 my-5" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>

                <!-- form my page -->
                <form @submit.prevent="updatePage">
                    <div class="w-full flex flex-col gap-4 px-[2rem] pt-[1rem]">
                        <h1 class="text-center text-3xl text-secondary font-semibold mb-[2rem]">Edit Page</h1>
                        <input type="text" class="w-full p-2 rounded-md bg-transparent border border-secondary" placeholder="Title" v-model="data_page.title">
                        <input type="text" class="w-full p-2 rounded-md bg-transparent border border-secondary" placeholder="Tag" v-model="data_page.id_tag">
                        <textarea v-model="data_page.description" type="text" class="w-full p-2 rounded-md bg-transparent border border-secondary" placeholder="Tag" rows="7"></textarea>
                        <div class="flex justify-center w-full mt-5">
                            <button class="px-20 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito" >
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
                <!-- form my page -->
                
            </div>
            
        </div>
        <!-- popup edit page -->
        
        <!-- content -->
        <section class="h-screen pb-7 pl-22em pt-24 smx:p-2 smx:pt-24 smx:pb-20">

            <h2 class="text-4xl font-bold text-secondary text-left mb-7">My Page</h2>

            <div class="flex flex-wrap gap-7 smx:pb-20">
                <!-- profile -->
                <div class="w-[60%] smx:w-full h-full flex flex-col items-center rounded-lg border px-5 py-6 bg-secondary bg-opacity-10">
                    <div class="w-32 h-32 bg-secondary mb-4 rounded-lg border overflow-hidden flex justify-center items-center">
                        <img src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">Title</span>
                        <span class="font-normal block font-nunito text-opacity-60 text-secondary">{{data_page.title}}</span>
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">Description</span>
                        <span class="font-normal block font-nunito text-opacity-60 text-secondary text-center">{{limitText(data_page.description)}}</span>
                    </div>
                    <div class="mb-4 flex flex-col items-center">
                        <span class="font-bold text-xl text-secondary font-nunito ">Tag</span>
                        <span class="font-normal text-center block font-nunito text-opacity-60 text-secondary">#{{data_page.id_tag}}</span>
                    </div>
                    <div class="mt-5">
                        <button @click="edit_modal = !edit_modal" class="px-20 flex justify-center gap-3 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square"/>
                            <span>Edit Page</span>
                        </button>
                    </div>
                </div>
                <!-- profile -->
    
                <!-- link -->
                <div class="w-[35%] smx:w-full h-full flex flex-col items-center px-5 py-6 rounded-lg border bg-secondary bg-opacity-10">
                    <div class="w-56 flex items-center justify-center h-56 mb-4 rounded-2xl bg-white border" id="qrcode">
                        <qrcode-vue :value="value" :size="size" level="H" class="rounded-xl"/>
                    </div>
                    <button @click="downloadQR" class="px-4 flex mb-4 justify-center gap-3 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                        <font-awesome-icon icon="fa-solid fa-angles-down"/>
                        <span>Download QR Code</span>
                    </button>
                    
                    <span class="font-bold mb-4 text-xl text-secondary font-nunito ">Or</span>
                    
                    <!-- sahre link -->
                    <span class="text-lg mb-4 text-secondary font-nunito border-b border-dotted">http://localhost:8080/{{getUserData.username}}</span>

                    
                    <div class="relative">
                        <div 
                        :class="{'scale-0 invisible' : !open_share}"
                        class="absolute -top-10 w-full flex justify-center hover:opacity-70 transition-all duration-300">
                            <ShareNetwork
                                network="facebook"
                                url="{{value}}"
                                title="Lorem"
                                description="{{getUserData.about ? getUserData.about : '..'}}"
                                hashtags="upstrim"
                                class="px-3 py-1 gap-2 rounded-xl bg-secondary flex items-center mb-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                                <span class="text-xs">
                                    Share on Facebook
                                </span>
                            </ShareNetwork>
                        </div>
                        <div class="flex flex-col">
                            <button @click="open_share = !open_share" id="btn-share" class="px-4 flex mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito w-full">
                                <font-awesome-icon icon="fa-solid fa-share-from-square"/>
                                <span>Share Your Link</span>
                            </button>
                            <router-link target="_blank" :to="`page/${getUserData.username}`" id="btn-share" class="px-4 flex mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito w-full">
                                <font-awesome-icon icon="fa-solid fa-eye" />
                                <span>Preview</span>
                            </router-link>
                        </div>
                    </div>
                    
                    <!-- sahre link -->
                    
                </div>
                <!-- link -->
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
    name: "my page",
    data(){
        return {
            state: "mypage",
            value: 'http://localhost:8080/',
            size: 200,
            data_page: null,
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

        getDataPage: async function () {
            await this.axios.get('my-page', {
                headers: {
                    'x-api-key': this.getUserToken
                }
            })
            .then((response) => {
                this.data_page = response.data.data
                console.log(this.data_page);
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

        updatePage: async function () {
            // data_page
            this.loading = true
            await this.axios.post('my-page', this.data_page ,{
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
        this.getDataPage()
    }
}
</script>