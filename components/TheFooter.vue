<template>
  <div class="footer">
    <!-- ======= Footer ======= -->
    <footer id="footer" class="bg-primary text-white py-5">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4>歐維程式有限公司</h4>
              <p>台中市神岡區大豐路四段37號</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-end fs-7">
        <div class="copyright">
          &copy; Copyright
          <strong> <span>Appland</span> </strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/" class="text-secondary"
            >BootstrapMade</a
          >
        </div>
      </div>
    </footer>
    <!-- End Footer -->

    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      @click.prevent="returnTop"
    >
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script setup>
function returnTop() {
  document.querySelector('#top').scrollIntoView(true)
}
</script>
