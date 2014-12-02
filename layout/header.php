<header id="header" class="container">
  <h1 id="logo">
    <a href="#">
      <img src="images/header/dona_feira.png" alt="Dona Feira" />
    </a>
  </h1>
  <div id="wrap-search">
    <img id="arrow-search" src="images/content/arrow.png" />
    <label for="list" class="">Comece sua lista de compras aqui</label>
    <input type="text" name="list" class="box-shadow bg-orange f-white">
    <button type="submit" id="submit-search">
        <i class="fa fa-search"></i>
    </button>
  </div>
  <div id="wrap-flag">
    <span class="arrow"></span>
    <nav id="nav-user" class="blue">
       <?php include "layout/menu.php"; ?>
    </nav>
  </div>
  <div id="wrap-cart">
    <a href="#" id="cart">
      <span id="value-cart" class="t-center block f-blue-2">R$ 120,48</span>
    </a>
    <div id="wrap-itens-cart">
      <!-- carousel -->
      <div class="jcarousel-wrapper">
          <div class="jcarousel">
              <ul>
                  <li><img src="../_shared/img/img1.jpg" alt="Nome do produto"></li>
                  <li><img src="../_shared/img/img2.jpg" alt="Nome do produto"></li>
                  <li><img src="../_shared/img/img3.jpg" alt="Nome do produto"></li>
                  <li><img src="../_shared/img/img4.jpg" alt="Nome do produto"></li>
                  <li><img src="../_shared/img/img5.jpg" alt="Nome do produto"></li>
                  <li><img src="../_shared/img/img6.jpg" alt="Nome do produto"></li>
              </ul>
          </div>
          <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
          <a href="#" class="jcarousel-control-next">&rsaquo;</a>
          <p class="jcarousel-pagination"></p>
      </div>
      <!-- carousel -->
    </div>
  </div>
</header>