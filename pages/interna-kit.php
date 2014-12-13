<!-- categorys -->
<?php include "layout/categorys.php"; ?>

<!-- content -->
<div class="wrap-full bg-white b-top-gray m-bottom-micro pad-bottom pad-top over-hidden">
  <div class="container">
    <div class="col-md-12">
      <ul class="breadcrump">
        <li><a href="#">Categoria 01</a></li>
        <li>Kits</li>
      </ul>
      <div class="wrap-titles">
        <div class="titles product">
          <h2>Nome do Kit</h2>
        </div>
      </div>
    </div>
    <div id="wrap-img-prod" class="col-md-4">
      <ul>
        <li class="col-md-6 col-xs-6">
          <figure>
            <img src="images/temporary/banana.png" title="Feijão" />
          </figure>
        </li>
        <li class="col-md-6 col-xs-6">
          <figure>
            <img src="images/temporary/manga.png" title="Feijão" />
          </figure>
        </li>
        <li class="col-md-6 col-xs-6">
          <figure>
            <img src="images/temporary/feijao.png" title="Feijão" />
          </figure>
        </li>
        <li class="col-md-6 col-xs-6">
          <figure>
            <img src="images/temporary/iogurte.png" title="Feijão" />
          </figure>
        </li>
      </ul>
    </div>
    <div class="col-md-8">
       <table class="table table-striped b-bottom-black-doble">
          <tr>
            <td>ítens</td>
            <td class="t-center">quantidade</td>
            <td class="t-center">preço</td>
          </tr>
          <tr>
            <td>Nome do primeiro ítem do kit</td>
            <td class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="number" value="1" class="quant-prod b-gray"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
          <tr>
            <td>Nome do primeiro ítem do kit</td>
            <td class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="number" value="1" class="quant-prod b-gray"></div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
          <tr>
            <td>Nome do primeiro ítem do kit</td>
            <td class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="number" value="1" class="quant-prod b-gray"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
          <tr>
            <td>Nome do primeiro ítem do kit</td>
            <td class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="number" value="1" class="quant-prod b-gray"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
         </table>
         <div id="wrap-value-kit">
            <span class="value-prod-desc t-line">R$<span class="t-line">5,00</span></span>
            <span class="value-prod-promo">R$<span>...</span></span>
         </div>
         <div id="wrap-bt-cart-kit">
          <a href="#" class="add-cart-bt f-white radius2">adicionar<br />ao carrinho</a>
          <!--<span class="add-cart-bt f-white box-shadow radius2 active">item já<br />adicionado</span> -->
          <p class="bg-warning t-right">O ítem Apple pie tiramisu dragée cookie pudding deve conter mais que nng.</p>
         </div>
    </div>
  </div>
</div>

<!-- promotion -->
<?php include "layout/promotion.php"; ?>