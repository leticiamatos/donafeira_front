<div id="wrap-menu-responsivo" class="hidden-sm hidden-md hidden-lg">
  <i class="button-menu fa fa-bars"></i>
  <nav id="nav-user-responsive" class="">
    <a href="#" id="close-menu"><i class="fa fa-times-circle-o"></i></a>
    <?php include "layout/menu.php"; ?>
  </nav>
</div>
<div id="wrap-flag" class="hidden-xs">
  <img src="images/header/arrow-menu.png" class="arrow" />
  <nav id="nav-user" class="blue">
     <?php include "layout/menu.php"; ?>
  </nav>
</div>
<header id="header" class="container">
  <h1 id="logo">
    <a href="index.php">
      <img src="images/header/dona_feira.png" alt="Dona Feira" />
    </a>
  </h1>
  <div id="wrap-search">
    <img id="arrow-search" src="images/content/arrow.png" />
    <label for="list" class="">Comece sua lista de compras aqui</label>
    <input type="text" name="list" id="search-bar" class="box-shadow bg-orange f-white">
    <button type="submit" id="submit-search">
        <i class="fa fa-search"></i>
    </button>
  </div>
  <div id="wrap-cart">
    <a href="#" id="cart">
      <span id="value-cart" class="t-center block f-blue-2">R$ <span>0,00</span></span>
    </a>
  </div>
  <div id="wrap-itens-cart" class="bg-white">
    <!-- carousel -->
    <div class="jcarousel-wrapper">
        <div class="jcarousel">
            <ul class="list-itens">
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/banana.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">1,00</span> / kg</strong>
                  <a href="interna-produtos.php">sobre o produto</a>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/manga.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">1,00</span> / kg</strong>
                  <a href="interna-produtos.php">sobre o produto</a>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/feijao.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">1,00</span> / kg</strong>
                  <a href="interna-produtos.php">sobre o produto</a>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/iogurte.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">1,00</span> / kg</strong>
                  <a href="interna-produtos.php">sobre o produto</a>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/feijao.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">1,00</span> / kg</strong>
                  <a href="interna-produtos.php">sobre o produto</a>
                </li>
            </ul>
        </div>
        <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
        <a href="#" class="jcarousel-control-next">&rsaquo;</a>
        <div class="jcarousel-pagination"></div>
    </div>
    <!-- carousel -->
  </div>
</header>