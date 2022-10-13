<template>
   <header class="bg-primary smx:sticky smx:top-0 smx:left-0 smx:z-50">
        <nav class="flex justify-between px-20 py-4 items-center smx:px-4">
            <!-- logo -->
            <router-link :to="{name: 'Home'}" class="flex gap-2 items-center hover:opacity-75 transition-opacity duration-300">
                <img src="../../img/logo.png" alt="logo upstrim">
                <h3 class="text-2xl font-nunito font-black text-secondary">UpStrim</h3>
            </router-link>
            <!-- logo -->

            <!-- hamburger menu -->
            <div class="lg:hidden relative">
                <button v-if="!getUserLoginStatus" @click="bar_menu_home = !bar_menu_home">
                    <font-awesome-icon icon="fa-solid fa-bars" class="text-white w-7 h-7" />
                </button>
                
                <button v-else @click="toggleMenu" class="flex gap-3">
                    <div class="-mt-1 smx:hidden">
                        <span class="font-semibold text-sm font-nunito text-secondary">{{name}}</span>
                        <span class="font-thin font-nunito text-secondary block text-xs">@{{username}}</span>
                    </div>
                    <div class="bg-secondary rounded-lg w-9 h-9 p-1  flex justify-center items-center">
                        <img class="w-full h-full object-cover -mt-1" src="https://avatars.dicebear.com/api/miniavs/:hero.svg" alt="avatar user">
                    </div>
                </button>

                <!-- pop up menu profile -->
                <div id="pop-up-profile"
                class="absolute right-0 ease-out transition-all bg-primary duration-50 top-12 w-44 flex flex-col border border-secondary shadow-lg rounded-tl-lg rounded-bl-lg  text-secondary rounded-br-lg"
                :class="{'scale-0 invisible': !menu_profile}"
                >
                    <router-link :to="{name: 'MyProfile'}" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
                        <font-awesome-icon icon="fa-solid fa-user text-lg"/>
                        <span class="font-nunito font-semibold">My Profile</span>
                    </router-link>
                    
                    <router-link :to="{name: 'Dashboard'}" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
                        <font-awesome-icon icon="fa-solid fa-chart-line text-lg"/>
                        <span class="font-nunito font-semibold">Dashboard</span>
                    </router-link>

                    
                    <router-link :to="{name: 'MyPage'}" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
                        <font-awesome-icon icon="fa-solid fa-pager text-lg"/>
                        <span class="font-nunito font-semibold">My Page</span>
                    </router-link>

                    <router-link :to="{name: 'MyPage'}" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
                        <font-awesome-icon icon="fa-solid fa-credit-card text-lg"/>
                        <span class="font-nunito font-semibold">My Balance</span>
                    </router-link>

                    <button @click="signout" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
                        <font-awesome-icon icon="fa-solid fa-right-from-bracket transform rotate-180"/>
                        <span class="font-nunito font-semibold">Sign Out</span>
                    </button>
                </div>
                <!-- pop up menu profile -->

            </div>
            <!-- hamburger menu -->
            
            <!-- right side -->
            <button @click="signout" class="px-7 smx:hidden hover:opacity-75 transition-opacity duration-300 py-1.5 rounded-xl border border-secondary flex items-center gap-3">
                <i class="fa-solid fa-right-to-bracket text-secondary"></i>
                <span class="text-secondary font-nunito font-semibold">Sign In</span>
            </button>
            <!-- right side -->
        </nav>
        <!-- menu bar for mobile -->
        <div class="absolute w-full bg-primary transform duration-500"
        :class="{'translate-x-[49em] -z-40 opacity-0': !bar_menu_home, '-translate-x-0 z-40': bar_menu_home}"
        >
            <!-- list notifications -->
            <div class="flex flex-col">

                <router-link to="/" class="p-5 flex justify-center border-b border-opacity-10">
                    <span class="text-2xl font-semibold text-secondary hover:opacity-80">
                        Home
                    </span>
                </router-link>

                <router-link to="/" class="p-5 flex justify-center border-b border-opacity-10">
                    <span class="text-2xl font-semibold text-secondary hover:opacity-80">
                        About
                    </span>
                </router-link>

                <router-link to="/signin" class="p-5 flex justify-center border-b border-opacity-10">
                    <span class="text-2xl font-semibold text-secondary hover:opacity-80">
                        SignIn
                    </span>
                </router-link>
                
            </div>
            <!-- list notifications -->
        </div>
        <!-- menu bar for mobile -->

        
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'navbar-component',
    data(){
        return {
            menu_profile: false,
            bar_menu_home: false,
            auth: false,
        }
    },
    
    computed: {
        ...mapGetters(['getUserLoginStatus'])
    },

    methods: {
        toggleMenu: function() {
            this.menu_profile = !this.menu_profile
            this.menu_notif = false
        },
        
        toggleMenuNotif: function() {
            this.menu_notif = !this.menu_notif
            this.menu_profile = false
        },

        signout() {
            localStorage.clear();
            this.$router.push("/signin")
        }
    }
}
</script>

<style>

</style>