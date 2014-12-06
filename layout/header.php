<div id="wrap-flag">
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
      <span id="value-cart" class="t-center block f-blue-2">R$ 120,48</span>
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
                  <strong>R$<span class="price-prod">3,90</span> / kg</strong>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/manga.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">2,05</span> / kg</strong>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/feijao.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">3,75</span> / kg</strong>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/iogurte.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">4,50</span> / kg</strong>
                </li>
                <li class="col-xs-6 col-md-3 m-bottom-mini">
                  <figure>
                    <img src="images/temporary/feijao.png" alt="banana"/>
                  </figure>
                  <span>Aliquam ac sem</span>
                  <strong>R$<span class="price-prod">0,23</span> / kg</strong>
                </li>
            </ul>
        </div>
        <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
        <a href="#" class="jcarousel-control-next">&rsaquo;</a>
        <p class="jcarousel-pagination"></p>
    </div>
    <!-- carousel -->
  </div>
</header>