<template>
  <header class="fixed w-full bg-primary">
        <nav class="top-0 left-0 flex bg-primary justify-between px-20 smx:px-3 py-4 shadow-lg smx:z-50 sticky">
            <!-- logo -->
            <router-link :to="{name: 'Home'}" class="flex gap-2 items-center hover:opacity-75 transition-opacity duration-300">
                <img src="../../../img/logo.png" alt="logo upstrim">
                <h3 class="text-2xl font-nunito font-black text-secondary">UpStrim</h3>
            </router-link>
            <!-- logo -->

            <!-- right side -->
            <div class="flex gap-10 relative">
                <!-- notif -->
                <div class="relative">
                    <button @click="toggleMenuNotif">
                        <font-awesome-icon role="button" icon="fa-solid fa-bell" class="text-2xl hover:opacity-60 transition-opacity duration-300 text-secondary mt-1"/>
                    </button>

                    <!-- notif for web -->
                    <div 
                    :class="{'scale-0 invisible': !menu_notif}"
                    class="absolute smx:hidden right-0 bg-primary ease-out transition-all duration-50 top-12 w-96 flex flex-col border border-secondary bg-opacity-30 shadow-lg rounded-tl-lg rounded-bl-lg rounded-br-lg text-secondary overflow-hidden">
                        <h2 class="flex w-full py-2 bg-primary justify-center text-lg">Notifications</h2>

                        <hr class="border border-secondary bg-primary border-opacity-30">

                        <!-- list notifications -->
                        <span class="p-2 bg-[#383638]">
                            <span>
                                <b>Selamat datang cozy!</b> Lorem ipsum, dolor sit amet consectetur adipisicing...
                            </span>
                        </span>
                        <!-- list notifications -->
                    </div>
                    <!-- notif for web -->
                </div>
                <!-- notif -->

                <button @click="toggleMenu" class="flex gap-3">
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

                    <router-link :to="{name: 'MyBalance'}" class="px-5 py-2 hover:opacity-40 transition-all duration-300 w-full flex gap-4 items-center" >
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
            <!-- right side -->
        </nav>

        <!-- notif for mobile -->
        <div class="h-screen fixed w-full bg-primary  pt-5 transform duration-300"
        :class="{'-translate-y-[49em] -z-40 opacity-0': !menu_notif, '-translate-y-0 z-40': menu_notif}"
        >
                <h2 class="text-2xl text-center text-secondary font-semibold">Notifications</h2>

                <hr class="w-full bg-slate-900 my-4 opacity-40">

                <!-- list notifications -->
                <div class="flex flex-col">

                    <span class="p-2 bg-[#575657] border-b border-opacity-10">
                        <span>
                            <b>Selamat datang cozy!</b> Lorem ipsum, dolor sit amet consectetur adipisicing...
                        </span>
                    </span>
                    
                </div>
                <!-- list notifications -->
        </div>
        <!-- notif for mobile -->
    </header>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    name: 'navbar',
    props: ['name', 'username'],
    data(){
        return {
            menu_profile: false,
            menu_notif: false,
            menu_bar: false,
        }
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