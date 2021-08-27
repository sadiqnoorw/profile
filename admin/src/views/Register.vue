<template>
    <div class="main-wrapper">
        <div class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div class="auth-box bg-dark border-top border-secondary">
                <div>
                    <div class="text-center pt-3 pb-3">
                        <span class="db"><img src="../assets/theme/assets/images/logo.png" alt="logo" /></span>
                    </div>
                    <div class="text-center pt-3">
                        <h3>Register</h3>
                    </div>
                    <!-- Form -->
                    <form @submit.prevent="registration" class="form-horizontal mt-3" action="index.html">
                        <div class="row pb-4">
                            <div v-if="errors">
                                <Error v-for="(error,  index) in errors" :key="index"  :error="error[0]"></Error>
                            </div>
                            <div class="col-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-success text-white h-100" id="basic-addon1"><i class="ti-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control form-control-lg" v-model="first_name" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-success text-white h-100" id="basic-addon1"><i class="ti-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control form-control-lg" v-model="last_name" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
                                </div>
                                <!-- email -->
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-danger text-white h-100" id="basic-addon1"><i class="ti-email"></i></span>
                                    </div>
                                    <input type="email" class="form-control form-control-lg" v-model="email" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning text-white h-100" id="basic-addon2"><i class="ti-pencil"></i></span>
                                    </div>
                                    <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-info text-white h-100" id="basic-addon2"><i class="ti-pencil"></i></span>
                                    </div>
                                    <input type="password" class="form-control form-control-lg" v-model="confirm_password" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        <div class="row border-top border-secondary">
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="pt-3 d-grid">
                                        <button class="btn btn-block btn-lg btn-info" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '@/services/Service.js'
    import Error from '@/components/Error.vue';

    export default {
        name: 'Register',
        components: {
            Error
        },
        data() {
            return {
                first_name : '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                errors: ''
            }
        },

        methods: {
            async registration() {
                
                await  Service.postRegistion({
                    first_name : this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.confirm_password
                })
                .then( response => {
                    this.errors = response.data
                    console.log('response')
                    this.$router.push('/')
                }).catch( error => {
                    console.log(error.response.data, 'yues')
                  //  this.errors = response
                    if (error.response.status == 422){
                        this.errors = error.response.data
                    }
                
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>