<header id="header" class="container">
  <div class="col-md-4">
    <h1 id="logo">
      <a href="#">
        <img src="images/header/dona_feira.png" alt="Dona Feira" />
      </a>
    </h1>
  </div>
  <div class="col-md-4">
    <div id="wrap-search">
      <label for="list">Comece sua lista de compras aqui</label>
      <input type="text" name="list">
      <input type="submit" value="" class="">
    </div>
  </div>
  <div class="col-md-4">
    <div id="wrap-flag">
      <span class="arrow"></span>
      <nav id="nav-user" class="blue">
         <?php include "layout/menu.php"; ?>
      </nav>
    </div>
    <div id="wrap-cart">
      <div id="cart">
        <span id="value-cart">R$ 120,48</span>
      </div>
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
  </div>
</header>