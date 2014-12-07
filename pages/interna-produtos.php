<!-- categorys -->
<?php include "layout/categorys.php"; ?>

<!-- content -->
<div class="wrap-full bg-white b-top-gray m-bottom-micro pad-bottom pad-top over-hidden">
  <div class="container">
    <div class="col-md-12">
      <ul class="breadcrump">
        <li><a href="#">Categoria 01</a></li>
        <li>Categoria 01.1</li>
      </ul>
      <div class="wrap-titles">
        <div class="titles product">
          <h2>Nome do Produto</h2>
        </div>
      </div>
    </div>
    <div id="wrap-img-prod" class="col-md-6">
      <figure>
        <img src="images/temporary/feijao_grande.jpg" title="Feijão" />
      </figure>
    </div>
    <div class="col-md-3">
      <p>
        Nome do produto<br />
        Peso do produto 1kg<br />
        Alguma outra informação importante ou descrição do produto.
      </p>
    </div>
    <div class="col-md-3">
      <div class="cart-add-box cont">
        <div class="quant-box bg-beige box-shadow m-bottom pad-bottom radius2">
          <span class="m-bottom-micro">quantidade</span>
          <div class="quant-tool">
            <div class="col-xs-3 more bg-orange">+</div><!--
          --><div class="col-xs-3 quant-input"><input type="text" value="1" class="quant-prod"></div><!--
          --><div class="col-xs-3 less bg-orange">-</div>
          </div>
          <span class="value-prod t-line">R$<span class="t-line">5,00</span></span>
          <span class="value-prod-promo">R$<span>2,50</span></span>
        </div>
        <a href="#" class="add-cart-bt f-white box-shadow radius2">adicionar<br />ao carrinho</a>
  <!--       <span class="add-cart-bt f-white box-shadow radius2 active">item já<br />adicionado</span> -->
      </div>
      <p class="bg-warning t-center">O ítem Apple pie tiramisu dragée cookie pudding deve conter mais que nng.</p>
    </div>
  </div>
</div>

<!-- promotion -->
<?php include "layout/promotion.php"; ?>