<template>
  <div class="bg-primary overflow-x-hidden h-screen">
    <NavBar :name="getUserData.name" :username="getUserData.username" />
    <main class="w-full overflow-x-hidden">
      <SideBar :state="state" class="smx:hidden" />

        <!-- popup withdraw -->
        <div 
        :class="{'invisible scale-0': !wd_modal}"
        class="absolute z-40 w-full h-screen top-0 transition-all duration-100 left-0 flex items-center justify-center">

            <div class="w-[50%] smx:w-full h-[80%] rounded-lg bg-[#252325] text-secondary shadow-xl relative">

              <!-- x btn -->
              <svg @click="wd_modal = !wd_modal" clip-rule="evenodd" width="32" class="absolute fill-white hover:opacity-60 cursor-pointer top-0 right-0 mx-5 my-5" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
              <!-- x btn -->


                <div class="w-full flex flex-col gap-4 px-[2rem] pt-[1rem]">
                        <h1 class="text-center text-3xl text-secondary font-semibold mb-[2rem]">Withdraw</h1>
                        
                        <div class="w-full overflow-x-auto flex gap-4">
                          <div v-for="data, x in wallet_accounts" :key="x" class="pb-5">
                            <button @click="choiceCard(data.id)" class="w-[16rem] h-[10rem] p-3 rounded-lg border bg-gradient-to-br from-stone-500 to-primary flex flex-col justify-between hover:opacity-80 transition-all duration-200"
                            :class="{'from-stone-800': !data.is_active}">

                              <div class="w-full flex justify-between">
                                <div>
                                  <span class="font-semibold">{{data.Payment.code}}</span>
                                </div>
                                <div v-if="data.is_active" class="text-secondary font-semibold">[Active]</div>
                              </div>
  
                              <div class="flex flex-col items-start">
                                <span class="font-bold font-nunito text-lg text-secondary block">
                                  {{data.account_number}}
                                </span>
                                <span class="font-nunito text-secondary block text-sm">
                                  {{data.account_holder_name}}
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                        
                        <div class="flex justify-center gap-4 w-full mt-5">
                            <form @submit.prevent="withdraw" class="w-full flex flex-col items-center">

                              <input type="text" class="w-full p-2 rounded-md bg-transparent border border-secondary mb-10" placeholder="Amount" v-model="data_wd.amount"/>
                              
                              <!-- save or update -->
                              <button type="submit" class="px-20 rounded-3xl items-center hover:bg-secondary hover:bg-opacity-30  py-1 transition-all duration-300 border text-secondary font-semibold font-nunito" >
                                  <svg v-if="loading" class="animate-spin mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="user-select: auto;">
                                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="user-select: auto;"></circle>
                                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="user-select: auto;"></path>
                                  </svg>
                                  <span v-else>
                                      Withdraw       
                                  </span>
                              </button>
                              <!-- save or update -->
                            </form>
                          
                        </div>
                    </div>
                
              
                
            </div>
            
        </div>
        <!-- popup withdraw -->
        
        <!-- content -->
        <section class="h-screen pb-7 pl-22em pt-24 smx:p-2 smx:pt-24 smx:pb-20">
            <h2 class="text-4xl font-bold text-secondary text-left mb-7">My Balance</h2>
            
            <div class="flex flex-wrap gap-5 ">
              <!-- profile -->
              <div class="w-38% smx:w-full h-60 rounded-xl flex flex-col border px-5 py-6 bg-gradient-to-br from-stone-800 to-primary bg-opacity-10">
                  <div class="flex flex-col items-start">
                      <span class="font-bold font-nunito text-2xl block text-secondary mt-3">Rp {{numberFormater(balance.amounts)}}</span>
                      <span class="font-bold font-nunito text-lg text-secondary">Balance</span>
                  </div>
                  <div class="flex justify-end h-full items-end">
                      <button  @click="openModalWD" role="button" class="flex items-center flex-col gap-3 hover:opacity-60 transition-opacity duration-300">
                          <font-awesome-icon icon="fa-solid fa-circle-down" class="text-3xl text-secondary"/>
                          <span class="font-bold font-nunito text-sm text-secondary">Withdraw</span>
                      </button>
                  </div>
              </div>
              <!-- profile -->

              <!-- link -->
              <div class="w-58% smx:w-full h-full ">
                  <div class="flex flex-col">
                      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full sm:px-6 lg:px-8">
                          <div class="overflow-hidden border rounded-lg h-full">
                            <table class="min-w-full text-center">
                              <thead class="border-b">
                                <tr>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    #
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Price
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Type
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Status
                                  </th>
                                  <th scope="col" class="font-semibold text-secondary font-nunito px-6 py-2">
                                    Date
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="data, x in balance.transcations.data" :key="x" class="bg-secondary border-b">
                                  <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{{(++x)}}</td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    Rp {{numberFormater(data.amount)}}
                                  </td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    {{data.type == 'T' ? 'Income' : 'Outcome'}}
                                  </td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    {{data.status}}
                                  </td>
                                  <td class="text-gray-900 font-semibold font-nunito px-6 py-2 whitespace-nowrap">
                                    {{formatDate(data.createdAt)}}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div class="flex gap-4 p-2 pr-6">
                              <!-- prev -->
                              <button 
                              @click="pagginate('dec')"
                              :disabled="paggination.active == 0"
                              class="w-8 h-8 rounded-full hover:opacity-60 transition-all duration-300 bg-[#B2AAAA]"
                              :class="{'bg-opacity-30': paggination.active == 0}" 
                              >
                                <font-awesome-icon icon="fa-solid fa-angle-left" />
                              </button>
                              <!-- prev -->
                              
                              <!-- next -->
                              <button 
                              @click="pagginate('inc')"
                              :disabled="paggination.active >= paggination.totalPages-1"
                              class="w-8 h-8 rounded-full hover:opacity-60 transition-all duration-300 bg-[#B2AAAA]"
                              :class="{'bg-opacity-30': paggination.active >= paggination.totalPages-1}" 
                              >
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                              </button>
                              <!-- next -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
              <!-- link -->
            </div>

        </section>
        <!-- content -->
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NavBar from '../../components/dashboard/NavBar.vue'
import SideBar from '../../components/dashboard/SideBar.vue'

export default {
    name: "my balance",
    data(){
        return {
            state: "mybalance",
            wd_modal: false,
            data_wd: {
              amount: 10000
            },
            wallet_accounts: null,
            loading: false,
            paggination: {
              active: 0,
              limit: 9,
              totalPages: 0,
            },
            balance: {}
        }
    },
    components: {
        NavBar,
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

        getDataBalance: async function () {
            await this.axios.get(`balance?page=${this.paggination.active}&size=${this.paggination.limit}`, {
                headers: {
                    'x-api-key': this.getUserToken
                }
            }).then(response => {
                this.balance = response.data.data
                this.paggination.totalPages = response.data.data.transcations.totalPages
                this.paggination.active = response.data.data.transcations.active
                // console.log(response);
            })
        },

        numberFormater(data) {
          // console.log(data);
          return new Intl.NumberFormat('de-DE').format(parseInt(data))
        },

        pagginate: async function (status) {
          status == 'inc' ? this.paggination.active++ : this.paggination.active--
          this.getDataBalance()
        },

        getWallet: async function () {
          // wallet
          await this.axios.get('wallet', {
              headers: {
                  'x-api-key': this.getUserToken
              }
          })
          .then((response) => {
              // this.$swal('Hello Vue world!!!');
              // console.log(response);
              this.wallet_accounts = response.data.data
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

        openModalWD() {
          // wd_modal = !wd_modal
          this.wd_modal = !this.wd_modal
          this.getWallet()
        },

        formatDate(date) {
          // console.log(date.split("T")[0]);
          return date.split("T")[0]
        },

        choiceCard: async function (id) {
          await this.axios.patch('wallet/active', {
            "id": id
          } , {
              headers: {
                  'x-api-key': this.getUserToken
              }
          }).then(response => {
            // console.log(response);
              this.$swal({
                  icon: 'success',
                  title: response.data.msg,
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              this.wallet_accounts = response.data.data
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
          })
        },
        
        withdraw: async function () {

          this.loading = true
          
          let amount = this.data_wd.amount
          // check amount value
          if(!amount || amount < 10000) {
              this.$swal({
                  icon: 'error',
                  title: 'Minimum withdraw is \n Rp 10.000',
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })

              return true
          }

          // preparing the data
          let data = {}
          this.wallet_accounts.forEach(element => {
            if(element.is_active){
                data = {
                  amount: this.data_wd.amount,
                  bankCode: element.Payment.code,
                  accountHolderName: element.account_holder_name,
                  accountNumber: element.account_number,
                  description: 'Donation',
                  email_to: [
                    this.getUserData.email
                  ]
                }
            }
          });

          // request post
          await this.axios.post('disbursement', data, {
            headers: {
                'x-api-key': this.getUserToken
            }
          }).then(response => {
              // console.log('haha', response);
              this.$swal({
                  icon: 'success',
                  title: response.data.msg,
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500,
                  timerProgressBar: true
              })
              this.loading = false
          }).catch(error => {
            // this.loading = true
            // console.log('error', error);
            // return true
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
                    title: 'Something went wrong, reload you\'r page!',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true
                })
            }
          })
        }
    },
    created(){
        this.getData()
        this.getDataBalance()
    }
}
</script>

<style>

</style>