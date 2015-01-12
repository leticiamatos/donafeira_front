<!-- categorys -->
<?php include "layout/categorys.php"; ?>

<!-- content -->
<div class="wrap-full bg-white b-top-gray b-bottom-gray m-bottom-micro pad-bottom pad-top over-hidden">
  <div class="container">
    <div class="col-md-4 border-vert over-hidden">
      <div class="wrap-titles">
        <div class="titles">
          <h2>Acesso Restrito</h2>
        </div>
      </div>
      <!-- login -->
      <?php include "layout/forms/login.php"; ?>
    </div>
    <div class="col-md-8">
      <div class="wrap-titles">
        <div class="titles">
          <h2>Cadastre-se!</h2>
        </div>
        <p class="m-bottom-micro">In porttitor dolor non purus lobortis, ut tincidunt lacus rutrum. Nullam sapien justo, rhoncus eu eros id, auctor iaculis elit. </p>
        <a href="#" class="bt-green bt-cadastre">cadastre-se</a>
        <div id="wrap-cadastre">
          <!-- cadastre -->
          <?php include "layout/forms/cadastre.php"; ?>
        </div>
      </div>
    </div>
  </div>
</div>
