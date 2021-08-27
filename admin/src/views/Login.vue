<template>
    <div>
        <div class="main-wrapper">
            <div class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
                <div class="auth-box bg-dark border-top border-secondary">
                    <div id="loginform">
                        <div class="text-center pt-3 pb-3">
                        <span class="db">
                            <img src="../assets/theme/assets/images/logo.png" alt="logo" />
                        </span>
                        </div>
                        <!-- Form -->
                        <form class="form-horizontal mt-3" @submit.prevent="login" id="loginform">
                            <div class="row pb-6">
                                <Error v-if="error" :error="error"></Error>
                                <div class="col-12">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-success text-white h-100" id="basic-addon1">
                                                <i class="ti-user"> </i>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            class="form-control form-control-lg"
                                            placeholder="email"
                                            aria-label="email"
                                            v-model="email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-warning text-white h-100" id="basic-addon2">
                                                <i class="ti-pencil"></i>
                                            </span>
                                        </div>
                                        <input
                                        type="password"
                                        class="form-control form-control-lg"
                                        placeholder="Password"
                                        aria-label="Password"
                                        v-model="password"
                                        aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row border-top border-secondary">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="pt-3">
                                            <button class="btn btn-success  text-white" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Service from '@/services/Service.js'
import Error from '@/components/Error.vue';
export default {
    name: 'login',
    components: {
        Error
    },
    data() {
    return {
        email: '',
        password: '',
        error: ''
    }
    },
    methods: {
        async login() {
                 await Service.login({
                    email: this.email,
                    password: this.password,
                }).then((loggedInUser) => {
                    localStorage.setItem('token', loggedInUser.data.token)
                    this.$store.dispatch('user', loggedInUser)
                    this.$router.push('/dashboard')
                    this.error = loggedInUser.data.message
                    this.error = 'Invalid username/password '
                }).catch((error) => {
                    if (error.response.status == 401){
                        this.error = error.response.data.message
                    }
                });
        }
    }
};
</script>

<style lang="scss" scoped></style>
