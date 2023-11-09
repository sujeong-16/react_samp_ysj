function Main() {
  return(
    <>
      <SkipMenu/>
      <Header/>
      <Container/>
      <Footer/>
    </>
  );
}

//Skip menu - 컨텐츠 바로가기 메뉴
function SkipMenu() {
  return(
    <>
      <ul class="skip">
        <li><a href="#main">콘텐츠바로가기</a></li>
      </ul>
    </>
  );
}

function Header() {
  return(
    <>
      <header id="header">
        <h1><a href="#">LOGOLOGO</a></h1>

        <div id="menu-box">
          <nav id="menu">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">DRINK</a></li>
              <li><a href="#">DESERT</a></li>
              <li><a href="#">BINGSU</a></li>
            </ul>
          </nav>
          <div id="submenu">
            <div class="box">
              <ul>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
              </ul>
              
              <ul>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
              </ul>
              
              <ul>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
              </ul>
              
              <ul>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
                <li><a href="#">LIST</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

//wrap
function Container() {
  return(
    <>
      <section id="banner">
        <div><img src="img/bb1.png" alt="ban" /></div>
        <div><img src="img/bb1.png" alt="ban" /></div>
        <div><img src="img/bb1.png" alt="ban" /></div>
        <div><img src="img/bb1.png" alt="ban" /></div>
      </section>

      <section id="main">
        <h2>LIST</h2>
        <ul>
          <li><a href="#"><img src="img/b1.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/b2.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/b3.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/b4.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/b5.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/b6.png" alt="1" /></a></li>
        </ul>
      </section>
      
      <section id="main1">
        <h2>LIST1</h2>
        <ul>
          <li><a href="#"><img src="img/be1.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/be2.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/be3.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/be4.png" alt="1" /></a></li>
        </ul>
      </section>

      <section id="ban">
        <img src="img/bb2.jpg" alt="bb" />
      </section>
      
      <section id="main2">
        <h2>LIST2</h2>
        <ul>
          <li><a href="#"><img src="img/d1.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/d2.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/d3.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/d4.png" alt="1" /></a></li>
          <li><a href="#"><img src="img/d6.png" alt="1" /></a></li>
        </ul>
      </section>
    </>
  );
}

//footer
function Footer() {
  return(
    <>
      <footer>
        FOOTER
      </footer>
    </>
  );
}

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);