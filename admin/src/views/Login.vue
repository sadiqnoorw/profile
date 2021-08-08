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
                        <form class="form-horizontal mt-3" id="loginform">
                            <div class="row pb-4">
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
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            required=""
                                        />
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-warning text-white h-100" id="basic-addon2">
                                                <i class="ti-pencil"></i>
                                            </span>
                                        </div>
                                        <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        required=""
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
export default {};
</script>

<style lang="scss" scoped></style>
