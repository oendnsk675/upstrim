<template>
  <div class="bg-primary pb-32 overflow-hidden">
    <NavBar/>
    <main class="w-full relative overflow-x-hidden flex justify-center pt-10  smx:p-4 smx:pt-20">

        <!-- cloud left -->
        <div class="opacity-50  smx:hidden">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-10 left-28 w-8" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 left-96 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 left-36 w-12" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 left-80 w-12" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-60 left-80 w-16" alt="">
        </div>
        <!-- cloud left -->

        <!-- cloud right -->
        <div class="opacity-50 smx:hidden">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 right-28 w-8" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-20 right-96 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-40 right-72 w-12" alt="">
            <!-- <img src="../../../public/img/character/Asset2.png" class="absolute top-40 right-80 w-12" alt=""> -->
            <img src="../../../public/img/character/Asset2.png" class="absolute top-60 right-80 w-16" alt="">
            <img src="../../../public/img/character/Asset2.png" class="absolute top-0 right-[30rem] w-16" alt="">
        </div>
        <!-- cloud right -->
        
        <div class="rounded-md border border-secondary px-5 pt-6 pb-6 w-29% smx:w-full">
            <div class="flex flex-col gap-3 items-center">
                <img src="../../../public/img/logo.png" alt="logo upstrim" class="w-8">
                <h3 class="font-bold font-nunito text-3xl text-center text-secondary">Sign Up</h3>
            </div>

            <form @submit.prevent="signup" class="mt-10">
                <input type="text" v-model="user.username" name="username" id="username" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito font-semibold text-secondary rounded outline-secondary w-full" placeholder="Username">
                <input type="text" v-model="user.name" id="name" name="name" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="Name">
                <input type="email" v-model="user.email" name="email" id="email" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="Email">
                <input type="password" v-model="user.password" id="password" name="password" class="bg-transparent border border-secondary p-3 py-2 text-lg font-nunito mt-6 font-semibold text-secondary rounded outline-secondary w-full" placeholder="Password">
                 
                <button type="submit" class="w-full rounded py-1.5 hover:opacity-75 transition-opacity duration-300 bg-secondary text-lg font-nunito mt-8 font-semibold flex justify-center">
                    <svg v-if="loading" class="animate-spin mr-3 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style="user-select: auto;">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="user-select: auto;"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="user-select: auto;"></path>
                    </svg>
                    <span v-else>
                      Sign Up
                    </span>
                </button>
            </form>

            <div class="text-secondary mt-5 flex items-center gap-2 font-semibold font-nunito">
                <span>Already have an account?</span>
                <router-link :to="{name: 'SignIn'}" class="text-red-500">Sign In</router-link></div>
        </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from "../../components/NavBar.vue"

export default {
  name: 'sign-up',
  data(){
    return {
      user: {
          "name": "",
          "username": "",
          "email": "",
          "password": "",
          "phone": ""
      },
      loading: false
    }    
  },
  components: {
    NavBar
  },
  computed: {
        ...mapGetters(['getUserToken'])
  },
  methods: {
    checkCredientials: async function() {
      await this.axios.get('profile', {
          headers: {
              'x-api-key': this.getUserToken
          }
      })
      .then((response) => {
          // console.log(response);
          // this.$swal('Hello Vue world!!!');
          this.$router.push("/dashboard")
      })
    },

    signup: async function() {
      this.loading = true
      await this.axios.post('signup', this.user)
      .then((response) => {
          console.log(response);
          // this.$router.push("/dashboard")
          this.loading = false
          this.$swal({
              icon: 'success',
              title: 'Registration success!',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1300,
              timerProgressBar: true
          }).then(() => {
            this.$router.push("/signin")
            this.setLoggedStatus(true)
            this.setToken(response.data.key)
            this.setDataUser(response.data.data)
          })
      }).catch(error => {
        console.log(error.response);
        this.loading = false
        if (error.response.status == 404) {
            // unauthorized
            this.$swal({
                icon: 'error',
                title: 'Invalid email or password!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
        }else if (error.response.status == 400) {
            // unauthorized
            this.$swal({
                icon: 'error',
                title: 'Invalid email or password!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
        } else {
            // something wrong
            this.$swal({
                icon: 'error',
                text: 'Something went wrong, reload you\'r page!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
        }
        // console.error();
      })
    }
  },
  
  created(){
    this.checkCredientials()
  }
}
</script>

<style>

</style>