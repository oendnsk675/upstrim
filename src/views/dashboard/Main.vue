<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
        <SideBar :state="state" class="smx:hidden" />

        
        <!-- content -->
        <section class="pl-22em pt-28 smx:p-2 smx:pt-24 smx:pb-20">
            <h2 class="text-4xl font-bold text-secondary text-left mb-7">Dashboard</h2>

            <div class="flex flex-wrap smx:justify-evenly gap-5 ">
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:bg-opacity-60 cursor-pointer w-[22%] smx:w-full  flex flex-col items-start justify-end overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp {{numberFormater(finance.amounts)}}</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Balance</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:bg-opacity-60 cursor-pointer flex flex-col items-start justify-end w-[22%] smx:w-full  overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">{{numberFormater(finance.n_donation)}}</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Time Donations</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:bg-opacity-60 cursor-pointer flex flex-col items-start justify-end w-[22%] smx:w-full  overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">{{numberFormater(finance.n_views)}}</span>
                    <span class="font-bold font-nunito text-lg text-secondary">View Page</span>
                </div>
                <div class="p-3 bg-secondary transition-opacity duration-300 hover:bg-opacity-60 cursor-pointer flex flex-col items-start justify-end w-[22%] smx:w-full  overflow-hidden h-36 bg-opacity-10 border rounded-lg">
                    <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp {{numberFormater(finance.disbursed)}}</span>
                    <span class="font-bold font-nunito text-lg text-secondary">Amount Disbursed</span>
                </div>
            </div>
            
        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
    
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'
import {  mapGetters, mapMutations } from 'vuex'

export default {
    name: "dashboard",
    data(){
        return {
            state: "dashboard",
            finance: {}
        }
    },

    computed: {
        ...mapGetters(['getUserToken', 'getUserData'])
    },

    methods: {
        ...mapMutations(['setLoggedStatus', 'setDataUser']),
        // ...mapActions(['setDataUser']),

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
            }).catch(error => {
                // console.log(error.response.status);
                if (error.response.status == 401 || error.response.status == 403) {
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

        getDataFinance: async function () {
            // console.log(localStorage.getItem("token"));
            await this.axios.get('dashboard', {
                headers: {
                    'x-api-key': this.getUserToken
                }
            })
            .then((response) => {
                // this.$swal('Hello Vue world!!!');
                // console.log(response);
                this.finance = response.data.data
            }).catch(error => {
                if (error.response.status == 401 || error.response.status == 403) {
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

        numberFormater(data) {
          // console.log(data);
          return new Intl.NumberFormat('de-DE').format(parseInt(data))
        },

    },
    
    components: {
        NavBar,
        SideBar
    },

    created(){
        this.getData()
        this.getDataFinance()
    }
}
</script>
