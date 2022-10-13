<template>
  <div class="font-nunito">
    <NavBar/>
    <main class="w-full overflow-x-hidden">
        <!-- hero -->
        <section class="px-20 smx:px-4 bg-primary py-8 pb-0 flex justify-between w-full">
                <!-- left side -->
                <div class="mt-28 smx:mt-8 smx:w-full">
                    <h1 class="font-nunito text-6xl smx:text-4xl smx:text-center font-black text-secondary block">Share To Opens</h1>
                    <h1 class="font-nunito text-6xl font-black smx:text-4xl smx:text-center text-secondary">Your Donation</h1>
                    
                    <div class="my-20  rounded-full relative bg-secondary flex items-center justify-between bg-opacity-40 p-3">
                        <div>
                          <label for="name" class="text-xl smx:text-base text-secondary font-bold">upstrim.com/</label>
                          <input type="text" name="name" id="name" class="focus:outline-none text-xl smx:text-base border-b-2 ml-1 border-b-secondary w-40 smx:w-20 text-secondary font-bold items-center bg-transparent border-secondary">
                        </div>
                        <button type="button" role="button" class="px-4 hover:opacity-75 transition-opacity duration-300 py-1 rounded-full ml-7 border border-secondary flex items-center gap-3">
                            <span class="text-secondary font-nunito font-semibold">create</span>
                        </button>
                    </div>
                </div>
                <!-- left side -->

                <!-- right side -->
                <div class="smx:hidden">
                    <!-- <img src="../../img/character/Asset1.png" class="w-29em ml-40"> -->
                    <img src="../../img/character/Asset1.png" class="w-[29em] ml-40" alt="">
                </div>
                <!-- right side -->

                <div></div>
        </section>
        <!-- hero -->
        <!-- wave -->
        <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100F11" fill-opacity="1" d="M0,160L120,144C240,128,480,96,720,85.3C960,75,1200,85,1320,90.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <!-- wave -->
          
          <!-- card info about traktirapp -->
        <div class="w-full mb-20 flex flex-col items-center smx:mt-5">
          <span class="text-primary font-nunito mb-10 text-4xl smx:text-3xl font-bold text-center w-full">What We Have Done</span>
          <div class="flex justify-center w-full">
          
            <div class="bg-primary bg-opacity-50 w-58% smx:w-[80%] mb-20 h-40 smx:h-full smx:p-4 flex smx:flex-col justify-self-center rounded-xl gap-3 smx:gap-6 items-center justify-evenly shadow-xl ">
              <!-- Pembungkus Kartu -->
              <div>
                <!-- Isi Kartu -->
                <div class="flex items-center gap-4">
                  <!-- Gambar -->
                  <img src="../../img/character/Asset4.png" class="w-24 bg-secondary p-2 rounded-full">
                  <div class="flex flex-col">
                    <span class="font-nunito font-bold text-3xl text-secondary">3</span>
                    <span class="font-nunito text-lg font-semibold text-secondary text-opacity-80">Users</span>
                    <!-- Word -->
                  </div>
                </div>
              </div>
              <!-- Pembungkus Kartu -->
              <div>
                <!-- Isi Kartu -->
                <div class="flex items-center gap-3">
                  <!-- Gambar -->
                  <img src="../../img/character/Asset5.png" class="w-24 bg-secondary p-2 rounded-full">
                  <div class="flex flex-col">
                    <span class="font-nunito font-bold text-3xl text-secondary">4.5</span>
                    <span class="font-nunito text-lg font-semibold text-secondary text-opacity-80">Support</span>
                    <!-- Word -->
                  </div>
                </div>
              </div>
              <!-- Pembungkus Kartu -->
            </div>
          </div>
        </div>
        <!-- Apa Itu UPSTRIM -->
        <div class="flex flex-col mb-20 items-center smx:w-full">
          <span class="text-primary font-nunito text-4xl smx:text-3xl font-bold">What is Upstrim?</span>
          <span class="text-primary font-nunito text-xl box w-58% smx:w-full text-center mt-5 ">upstrim is an application that helps the community in opening donations with a Minimum Viable Product (MVP) which is certainly simple and easy to use.</span>
          
          <div class="w-[40rem] smx:w-full h-[25rem] bg-primary rounded-xl smx:rounded-none mt-10 overflow-hidden"></div>
          
        </div>
        <!-- Kumpulin Traktir -->
        <div class="mt-20 hidden">
          <!-- Kata -->
          <div class="">
            <span class="text-primary font-nunito text-4xl font-bold">Collect treats from 100+ supporters and other creators on Upstrim!</span>
          </div>
          <!-- Kategory Upstrim -->
          <div class="flex flex-row gap-5 mt-5 justify-center ">
            <button class="text-secondary bg-primary font-nunito font-semibold text-lg p-2 rounded-full">Streaming</button>
            <button class="text-primary font-nunito font-semibold text-lg p-2 rounded-full">Writer</button>
            <button class="text-primary font-nunito font-semibold text-lg p-2 rounded-full">Artist</button>
            <button class="text-primary font-nunito font-semibold text-lg p-2 rounded-full">Cosplayer</button>
            <button class="text-primary font-nunito font-semibold text-lg p-2 rounded-full">Lainnya</button>
            <button class="text-primary font-nunito font-semibold text-lg p-2 rounded-full"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/>Explore All Creator</button>
          </div>
          <!-- TestiMony-->
          <div class="my-20 flex justify-center gap-5 ">
            <!-- TestiMony Kiri-->
            <div class="border-2 border-primary flex p-5 rounded-lg gap-5 items-center">
              <!-- Gambar -->
              <img src="../../img/character/Asset7.png" class="w-60 p-2 rounded-full border-2 border-primary">
              <div>
                <!-- Text -->
                <div class="flex justify-between">
                  <!-- Baris 1 -->
                  <div class="flex flex-col my-5">
                    <span class="text-primary font-nunito font-extrabold">Miraak</span>
                    <span class="text-primary font-nunito text-opacity-50">@Miraak</span>
                  </div>
                  <div>
                    <button class="font-nunito">View Profile Page <font-awesome-icon icon="fa-solid fa-angle-right" /></button>
                  </div>
                </div>
                <div class="mt-5">
                  <!-- Baris 2 -->
                  <span class="font-nunito">"Thank you for all of your hardworks!"</span>
                </div>
                <div>
                  <!-- Baris 3 -->
                  <div class="mt-10 bg-secondary p-2 rounded-full bg-opacity-30 shadow-lg">
                    <span class="font-nunito"><font-awesome-icon icon="fa-solid fa-meteor" /> Treated by 10 Comet's</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimony kanan -->
            <div class="border-2 border-primary flex p-5 rounded-lg gap-5 items-center">
              <!-- Gambar -->
              <img src="../../img/character/Asset7.png" class="w-60 p-2 rounded-full border-2 border-primary">
              <div>
                <!-- Text -->
                <div class="flex justify-between">
                  <!-- Baris 1 -->
                  <div class="flex flex-col my-5">
                    <span class="text-primary font-nunito font-extrabold">Miraak</span>
                    <span class="text-primary font-nunito text-opacity-50">@Miraak</span>
                  </div>
                  <div>
                    <button class="font-nunito">View Profile Page <font-awesome-icon icon="fa-solid fa-angle-right" /></button>
                  </div>
                </div>
                <div class="mt-5">
                  <!-- Baris 2 -->
                  <span class="font-nunito">"Thank you for all of your hardworks!"</span>
                </div>
                <div>
                  <!-- Baris 3 -->
                  <div class="mt-10 bg-secondary p-2 rounded-full bg-opacity-30 shadow-lg">
                    <span class="font-nunito"><font-awesome-icon icon="fa-solid fa-meteor" /> Treated by 10 Comet's</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Metode Pembayaran -->
        <div class="flex flex-col items-center mb-20 smx:px-2">
            <!-- Baris 1 -->
            <span class="text-primary font-nunito text-center text-4xl font-bold my-5">Payments That Can Be Used</span>
            <!-- Baris 2 -->
            <span class="text-primary font-nunito text-xl box w-58% smx:w-full text-center">Supporters can hire creators through many payment methods, from e-wallet to online bank transfers. The easier it is for supporters to make payments, the more opportunities for creators to get treat's.</span>
            <div class="flex flex-col p-2 my-5 items-center">
              <div class="flex mb-3">
                <!-- gambar pembayaran -->
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset8.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset9.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset10.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset11.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset12.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset13.png">
              </div>
              </div>
              <div class="flex">
                <!-- gambar pembayaran -->
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset14.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset15.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset17.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset18.png">
              </div>
              <div class="flex items-center justify-center px-3 py">
                <img src="../../img/character/Asset19.png">
              </div>
              </div>
            </div>
            
        </div>

        <!-- Footer -->
        <!-- Wave -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100F11" fill-opacity="1" d="M0,0L80,0C160,0,320,0,480,48C640,96,800,192,960,197.3C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" style="user-select: auto;"></path></svg>
        </div>
        <!-- Isi -->
        <div class="bg-primary">
            <div class="flex smx:flex-col mx-10 gap-5 py-5 justify-evenly">
                <div class="smx:hidden">
                <!-- Gambar -->
                <img src="../../img/character/Asset1.png" class="w-80">
                </div>
                <!-- produk -->
                <div class="flex flex-col hidden">
                  <!-- Menu -->
                  <span class="text-lg font-nunito text-secondary font-extrabold">Produk</span>
                  <div class="text-left text-secondary text-opacity-70 mt-5 font-nunito">
                      <ul>
                      <a href="#" class="hover:text-secondary">Explore</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Search Creator</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Create Page</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Price and Features</a>
                      </ul>
                  </div>
                </div>
                <!-- Informasi -->
                <div class="flex flex-col">
                  <!-- Menu -->
                  <span class="text-lg font-nunito text-secondary font-extrabold">Information</span>
                  <div class="text-left text-secondary text-opacity-70 mt-5 font-nunito">
                      <ul>
                      <a href="#" class="hover:text-secondary">About</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Terms and Conditions</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Help</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Privacy Policy</a>
                      </ul>
                  </div>
                </div>
                <!-- Contact Us -->
                <div class="flex flex-col">
                  <!-- Menu -->
                  <span class="text-lg font-nunito text-secondary font-extrabold">Contact Us</span>
                  <div class="text-left text-secondary text-opacity-70 mt-5 font-nunito">
                      <ul>
                      <a href="#" class="hover:text-secondary">Career</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">Blog</a>
                      </ul>
                      <ul>
                      <a href="#" class="hover:text-secondary">criticism and suggestions</a>
                      </ul>
                  </div>
                </div>
                <!-- sosmed -->
                <div class="flex flex-col">
                  <!-- Menu -->
                  <span class="text-lg font-nunito text-secondary font-extrabold">Social media</span>
                  <div class="flex gap-5 mt-5">
                    <!-- fb -->
                    <a href="" target="_blank" class="hover:opacity-40 transition-all duration-300">
                      <font-awesome-icon class="text-secondary text-[2.45rem]" icon="fa-brands fa-facebook" />
                    </a>

                    <!-- ig -->
                    <a href="" target="_blank" class="bg-secondary border-2 border-secondary rounded-full border-opacity-50 h-fit p-2 hover:opacity-40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#100F11" class="bi bi-instagram bg-secondary w-5" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>

                    <!-- twitter -->
                    <a href="" target="_blank" class="border-2 bg-secondary border-secondary rounded-full border-opacity-50 items-center hover:opacity-40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#100F11" class="bi bi-twitter w-9 bg-secondary rounded-full p-1" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>


                  </div>
                  
                </div>

              </div>
        </div>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue"
import { mapGetters, mapActions, mapMutations } from "vuex"

export default {
  name: 'Home-page',
  components: {
    NavBar
  },

  computed: {
    ...mapGetters(['getUserToken'])
  },

  methods: {

    ...mapActions(['setDataUser']),
    
    ...mapMutations(['setLoggedStatus']),

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
            this.setLoggedStatus(true)

        }).catch(error => {
            if (error.response.status == 401 || error.response.status == 403) {
                // unauthorized
                this.setLoggedStatus(false)
            }else {
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
  },

  created(){
    this.getData()
  }
}
</script>
