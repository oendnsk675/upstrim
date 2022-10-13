<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
      <SideBar :state="state" class="smx:hidden" />
        
        <!-- content -->
        <section class="container h-screen pb-7 flex flex-wrap gap-5 pl-22em pt-24 smx:p-2 smx:pt-24 smx:pb-20">
            <!-- profile -->
            <div class="w-[55%] smx:w-full flex flex-col items-center rounded-lg border px-5 py-6 bg-secondary bg-opacity-10">
                <div class="w-32 h-32 bg-secondary mb-4 rounded-lg border overflow-hidden flex justify-center items-center">
                    <img src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                </div>
                <div class="mb-4 flex flex-col items-center">
                    <span class="font-bold text-xl text-center text-secondary font-nunito ">{{data.title}}</span>
                </div>
                <div class="mb-4 flex flex-col items-center">
                    <span class="font-bold text-xl text-secondary font-nunito ">Description</span>
                    <span class="font-normal text-center block font-nunito text-opacity-60 text-secondary">{{data.description}}</span>
                </div>
            </div>
            <!-- profile -->

            <!-- link -->
            <div class="w-[38%] smx:w-full h-full flex flex-col items-center px-5 py-6 rounded-lg border bg-secondary bg-opacity-10">
                <div class="w-40 flex items-center justify-center h-56 mb-4 rounded-2xl bg-secondary bg-opacity-5 border">
                    <img src="../../../public/img/character/asset3.png">
                </div>
                <div class="flex flex-col mb-2">
                  <span class="font-nunito text-3xl text-center text-secondary font-extrabold">
                    Stars
                  </span>
                  <span class="font-nunito text-secondary text-opacity-50">
                    Rp {{numberFormater(amount)}}
                  </span>
                </div>
                <!-- Banyak Bintang -->
                <div class="flex mt-5">
                  <button @click="decrement" :class="{'opacity-30 cursor-not-allowed': star == 1}">
                    <font-awesome-icon icon="fa-solid fa-circle-minus" class="text-3xl text-secondary hover:opacity-70 py-1 transition-all duration-300"/>
                  </button>
                  <span  class="w-10 mx-2 pt-1 bg-primary bg-opacity-30 text-white font-semibold border-secondary rounded-lg items-center flex justify-center bg-white">{{star}}</span>
                  <button @click="increment">
                    <font-awesome-icon icon="fa-solid fa-circle-plus" class="text-3xl text-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 " />
                  </button>
                </div>

                <span class="font-nunito text-secondary text-xs opacity-80 mt-3 text-center font-light text-opacity-50">
                  Rp {{numberFormater(10000)}} / unit
                </span>
                
                <!-- Banyak Pesanan -->
                <div class="mt-5 flex items-center gap-5">
                  <button @click="pickStar(10)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">10</button>
                  <button @click="pickStar(25)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">25</button>
                  <button @click="pickStar(100)" class="w-20 py-1 border-2 border-white text-white font-nunito text-sm rounded-full hover:bg-secondary hover:bg-opacity-30">100</button>
                </div>
                <!-- Button -->
                <button @click="chosePayment" class="min-w-[80%] flex mt-7 mb-4 justify-center gap-3 rounded-3xl items-center bg-secondary bg-opacity-30 hover:opacity-70 py-1 transition-all duration-300 border text-secondary font-semibold font-nunito">
                  <svg v-if="loading" class="animate-spin mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="user-select: auto;">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="user-select: auto;"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="user-select: auto;"></path>
                  </svg>
                  <span v-else>Choose Payment Method</span>
                </button>
                <!-- sahre link -->
                
            </div>
            <!-- link -->
        </section>
        <!-- content -->
    </main>

    <!-- pop up for payment -->
    <div 
    :class="{'-z-[80] hidden': !pop_up_payment}"
    class="h-screen smx: w-full absolute z-[80] flex justify-center items-center bg-black bg-opacity-90 top-0 left-0">
        <div  
        :class="{'invisible scale-0': !pop_up_payment}"
        class="w-[70%] smx:w-full h-[90%] smx:h-screen bg-secondary rounded-xl smx:rounded-none overflow-hidden relative">

          <!-- header -->
          <div class="absolute flex justify-end top-0 left-0 w-full p-3 bg-primary bg-opacity-60">
            <svg @click="pop_up_payment = !pop_up_payment" clip-rule="evenodd" width="32" class="fill-white hover:opacity-60 cursor-pointer" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
          </div>
          <!-- header -->
          
          <iframe class="w-full h-full mt-[3.5rem] smx:pb-[3rem]" :src="url_payment" frameborder="0"></iframe>
          
        </div>
    </div>
    <!-- pop up for payment -->
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'

export default {
    name: "my page",
    data(){
        return {
            state: "mypage",
            value: 'https://example.com',
            data: null,
            url_payment: null,
            size: 200,
            loading: false,
            pop_up_payment: false,
            amount: 10000,
            star: 1
        }
    },
    computed: {
      ...mapGetters(['getUserToken', 'getUserData'])
    },
    components: {
        NavBar,
        SideBar
    },
    methods: {
      getDataPage: function (detail) {
          this.axios.get(`page/${detail}`)
            .then(response => {
                // console.log(response);
                this.data = response.data.data
                this.loading = false
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
              this.isLogged = true
              // change qrcode url base on https://example.com/username
              this.value = `http://localhost:8080/${response.data.data.username}`
          }).catch(() => {
                this.isLogged = false
          })
      },
      increment: function () {
        this.star++
        this.amount = this.star * 10000 
      },
      decrement: function () {
        if (this.star > 1) {
          this.star--
          this.amount = this.star * 10000 
        }
      },
      pickStar: function (jumlah) {
        this.star += jumlah
        this.amount = this.star * 10000 
      },
      chosePayment: function () {
          var data = JSON.stringify({
            "amount": this.amount,
            "type": "T",
            "username": this.$route.params.username
          });

          var config = {
            headers: { 
              'x-api-key': this.getUserToken, 
              'Content-Type': 'application/json'
            }
          };
          
          this.loading = true

          this.axios.post('/invoice', data, config)
          .then(response => {
            this.loading = false
            this.url_payment = response.data.data
            this.pop_up_payment = true 
            // console.log(response.data);
            // window.location.href = response.data.data.redirect_url
            // console.log(response.data);
          })
          .catch(error => {
            this.loading = false
            if (error.response.status == 401) {
              console.log(error.response.status);
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
          });

      },
      numberFormater(data) {
        // console.log(data);
        return new Intl.NumberFormat('de-DE').format(parseInt(data))
      },
    },

    created(){
      this.getDataPage(this.$route.params.username)
      this.getData()
      console.log()
    }
}
</script>

<style>

</style>