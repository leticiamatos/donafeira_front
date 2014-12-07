<!-- categorys -->
<?php include "layout/categorys.php"; ?>

<!-- content -->
<div class="wrap-full bg-white b-top-gray m-bottom-micro pad-bottom pad-top over-hidden">
  <div class="container">
    <div class="col-md-12">
      <div class="wrap-titles">
        <div class="titles select">
          <h2>Carrinho</h2>
          <div id="wrap-select-order">
            <label for="order">Ordernar por:</label>
            <select for="order" id="order-table">
              <option value="setor1">Setor1</option>
              <option value="setor2">Setor2</option>
              <option value="setor3">Setor3</option>
              <option value="setor4">Setor4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="table-responsive">
        <table class="table cart-page no-margin">
          <tr>
            <th width="20%">&nbsp;</th>
            <th width="30%">Produto</th>
            <th width="10%" class="t-center">Preço unid.</th>
            <th width="20%" class="t-center">quantidade</th>
            <th width="20%" class="t-center">subtotal</th>
          </tr>
         </table>
         <table class="table cart-page">
          <tr class="no-bg-li">
            <td width="20%">
              <div id="wrap-flag-cart">
                <img src="images/header/arrow-menu.png" class="arrow" />
                <div id="itens-sector" class="blue">
                  <span>Frutas e Verduras</span>
                </div>
              </div>
            </td>
            <td width="30%">
              <figure>
                <img src="images/temporary/banana.png" title="title_img" />
              </figure>
              <p>Banana Prata de Um Fornecedor com Um Nome Bem Grande</p>
            </td>
            <td width="10%" class="t-center">
              <span class="value-prod-uni">R$<span>1,00</span> / kg</span>
            </td>
            <td width="20%" class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="text" value="1" class="quant-prod b-black"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td width="20%" class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
          <tr class="">
            <td width="20%">
              &nbsp;
            </td>
            <td width="30%">
              <figure>
                <img src="images/temporary/feijao.png" title="title_img" />
              </figure>
              <p>Banana Prata de Um Fornecedor com Um Nome Bem Grande</p>
            </td>
            <td width="10%" class="t-center">
              <span class="value-prod-uni">R$<span>2,00</span> / kg</span>
            </td>
            <td width="20%" class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="text" value="1" class="quant-prod b-black"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td width="20%" class="t-center">
              <span class="value-prod">R$<span>2,00</span></span>
            </td>
          </tr>
         </table>
         <table class="table cart-page">
          <tr>
            <td width="20%">
              <div id="wrap-flag-cart">
                <img src="images/header/arrow-menu.png" class="arrow" />
                <div id="itens-sector" class="blue">
                  <span>Cereais</span>
                </div>
              </div>
            </td>
            <td width="30%">
              <figure>
                <img src="images/temporary/banana.png" title="title_img" />
              </figure>
              <p>Banana Prata de Um Fornecedor com Um Nome Bem Grande</p>
            </td>
            <td width="10%" class="t-center">
              <span class="value-prod-uni">R$<span>1,00</span> / kg</span>
            </td>
            <td width="20%" class="t-center">
              <div class="quant-tool no-margin">
                <div class="col-xs-3 more bg-orange">+</div><!--
                --><div class="col-xs-3 quant-input"><input type="text" value="1" class="quant-prod b-black"></div><!--
                --><div class="col-xs-3 type bg-gray">kg</div><!--
                --><div class="col-xs-3 less bg-orange">-</div>
              </div>
            </td>
            <td width="20%" class="t-center">
              <span class="value-prod">R$<span>1,00</span></span>
            </td>
          </tr>
         </table>
        </div>
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
