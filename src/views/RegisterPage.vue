<script setup>
   

</script>


<template>
  <section class="vh-100 bg-image" style="background: linear-gradient(180deg,rgba(34, 90, 115, 1), rgba(128, 201, 232, 1));">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                <form>

                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center">
                    <router-link :to="'/homelogin'"><button type="button"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 ">Register</button></router-link>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/loginPage"
                      class="fw-bold text-body"><u>Login here</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
  </section>


</template>

<style>

.gradient-custom-3 {

background: #000000;


background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));


background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {




background: -webkit-linear-gradient(to right, rgba(108, 211, 255, 1), rgba(34, 90, 115, 1));

background: linear-gradient(to right, rgba(108, 211, 255, 1), rgba(34, 90, 115, 1))
}

.gradient-custom-4.btn{
  border: 2px solid rgb(255, 255, 255);
}
.gradient-custom-4.btn:hover{

  border: 2px solid rgb(255, 51, 0);
}


img.vh-100.bg-image{
  width: 100%;
  position: absolute;

}
.text-body{
  color: #fff;
}


</style>

