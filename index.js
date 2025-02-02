<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <!-- FontAwesome -->
  <script src="https://kit.fontawesome.com/a99166f815.js" crossorigin="anonymous"></script>
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="./css/Logo Icon.svg" />
  <title>Šančiųbendruomenė.lt</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link rel="stylesheet" href="css/base.css">
  <link href="css/styles.css" rel="stylesheet">
</head>

<body>
  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg bg-white fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand lexend active" href="index.html">
        <img src="./css/Logo Icon.svg" alt="logo icon" class="logo">
        <span class="title2">Genius Loci</span>
      </a>
      <button class="navbar-toggler navbar-toggler-right bg-white" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-around" id="navbarResponsive">
        <ul class="navbar-nav bg-nav">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MAPS</a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownPortfolio">
              <a class="dropdown-item" href="./maps-past.html">Past</a>
              <a class="dropdown-item" href="./maps-present.html">Present</a>
              <a class="dropdown-item" href="./maps-future.html">Future</a>
            </div>
          <li class="separador d-none d-sm-none d-md-block">|</li>
          <li class="nav-item">
            <a class="nav-link" href="./communities.html">COMMUNITIES</a>
          </li>
          <li class="separador d-none d-sm-none d-md-block">|</li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GENIUS LOCI</a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownPortfolio">
              <a class="dropdown-item" href="./genius-loci.html">Proyect</a>
              <a class="dropdown-item" href="./about-maps.html">About Maps</a>
              <a class="dropdown-item" href="./activities.html">Activities</a>
              <a class="dropdown-item" href="./calendar.html">Calendar</a>
              <a class="dropdown-item" href="./partners.html">Partners</a>
            </div>
          </li>
          <!-- <li class="separador d-none d-sm-none d-md-block">|</li> -->
          <!-- <li class="nav-item">
            <a class="nav-link" href="./news.html">NEWS</a>
          </li> -->
          <li class="separador d-none d-sm-none d-md-block">|</li>
          <li>
            <form method ="get" action="#" class="input-group">
              <input type="search" id="search" name="Search" aria-label="Search" method="GET" action="" placeholder="Search" class="form-inline bg-transparent input2">
                <button class="btn lupa" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </form>          
          </li>
          <li class="nav-item">
            <a class="nav-link languaje" href="#">LT</a>
          </li>
          <li class="separador d-none d-sm-none d-md-block">|</li>
          <li class="nav-item">
            <a class="nav-link languaje active" href="#">EN</a>
          </li>
        </ul>
        <button type="button" class="btn login">Log-In</button>
      </div>      
    </div>
  </nav>

  <!-- Header / Carousel -->
  <header class="display-4">
    <div class="principal">
      <div class="row m-0">
        <!-- Desktop -->
        <div class="carousel-supra d-none d-sm-none d-md-block" style="background-image: url(./css/home/WAVE-WEB.png)">
          <div class="active-citizens-logo"></div>
          <div class="carousel-text">
            <h2>GENIUS LOCI:</h2>
            <h3>Urbanization and civil society</h3>
            <h4>This project is about the involvement of citizens in the planning of the territory of Šančiai district. It is funded by the EEA and Norwegian financial mechanisms and organised by Žemųjų Šančių community. Project time: 2020-2023.</h4>
            <a class="btn-maps" href="./maps-past.html" style="background-image: url(./css/home/MAP_EN.png);"></a>
          </div>
        </div>
        <!-- Mobile -->
        <div class="carousel-supra d-block d-sm-block d-md-none" style="background-image: url(./css/home/WAVE-MOBILE.png)"> 
          <div class="carousel-text">
            <h2>GENIUS LOCI:</h2>
            <h3>Urbanization and civil society</h3>
            <a class="btn-maps" href="./maps-past.html" style="background-image: url(./css/home/MAP_EN.png);"></a>
            </div>
            <!-- <h4>This project is about the involvement of citizens in the planning of the territory of Šančiai district. It is funded by the EEA and Norwegian financial mechanisms and organised by Žemųjų Šančių community. Project time: 2020-2023.</h4> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Images and indicators -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active" style="background-image: url(./css/img/11.jpg)">
          <div class="carousel-caption d-none d-md-block">
            <h3 class="photoby">Photo by</h3>
            <!-- <p>This is a description for the first slide.</p> -->
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('./css/img/6.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <h3 class="photoby">Photo by</h3>
            <!-- <p>This is a description for the second slide.</p> -->
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('./css/img/12.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <h3 class="photoby">Photo by</h3>
            <!-- <p>This is a description for the third slide.</p> -->
          </div>
        </div>
      </div>
      <!-- Flechas -->
      <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>
  </header>

  <!-- Events -->
  <section class="row mt-5 mb-5 justify-content-center">
    <div class="col-md-8 center">
      <div class="row justify-content-center ">
        <h2 class="text-center events">Upcomming Events</h2>
      </div>
      <div class="mb-4 justify-content-center" id="accordion" role="tablist" aria-multiselectable="true">
        <!-- 1st Event -->
        <div class="card">
          <a 
          class="card-header align-content-center" role="tab" 
          id="headingOne" 
          data-toggle="collapse" 
          data-parent="#accordion" 
          href="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne">
            <div class="col-md-3 col-sm-3 event-date">
              <p class="event-month">NOV</p>
              <p class="event-day">29</p>
            </div>
            <div class="col-md-6 col-sm-9">
              <div class="event-type">
                  <span class="event-proyect ea">GENIUS LOCI</span>
                  <span class="event-category ea">EDUCATION</span>
                  <span class="event-subcategory">Seminars</span>
              </div>              
              <div class="event-type-title">
                <span class="event-title ea">PUBLIC DISCUSSION</span>
                <span class="event-location">Sanciai Biblioteka 20h.</span>
              </div>
            </div>
            <div class="col-md-3 col-sm-12 center m-0">
              <button type="button" class="btn btn-register" onclick="location.href='./form.html'">Register</button>
            </div>
          </a>
  
          <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
            <a>
              <div class="card-body">
                <div class="col-md-3 col-sm-12 event-container">
                  <img src="./css/events photos/activities.jpg" alt="event image" class="img-thumbnail">
                </div>
                <div class="col-md-9 col-sm-12 event-description">
                  <h6 class="event-about">About the Event</h6>
                  <p class="event-data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis mollitia. Aliquam rem quae expedita nemo qui nisi illo, ratione quod veritatis corporis ipsam at non fuga id porro voluptatum.</p>
                  </p>
                  <h6 class="event-about">Time and location</h6>
                  <p class="event-data">Nov 29, 2020, 20:00</p>
                  <p class="event-data">Sanciai Biblioteka</p>
                  <p class="event-data">Sandėlių g. 7, Kaunas</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- 2nd Event -->
        <div class="card">
          <a 
          class="card-header" role="tab" 
          id="headingTwo" 
          data-toggle="collapse" 
          data-parent="#accordion" 
          href="#collapseTwo" 
          aria-expanded="false" 
          aria-controls="collapseTwo">
            <div class="col-md-3 col-sm-12 event-date">
              <p class="event-month">NOV</p>
              <p class="event-day">29</p>
            </div>
            <div class="col-md-6 col-sm-12 col-12 ">
              <div class="event-type">
                  <span class="event-proyect ea">GENIUS LOCI</span>
                  <span class="event-category ea">EDUCATION</span>
                  <span class="event-subcategory">Seminars</span>
              </div>              
              <div class="event-type-title">
                <span class="event-title ea">PUBLIC DISCUSSION</span>
                <span class="event-location">Sanciai Biblioteka 20h.</span>
              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-register" onclick="location.href='./form.html'">Register</button>
            </div>
          </a>
  
          <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <a>
              <div class="card-body">
                <div class="col-md-3 col-sm-12 event-container">
                  <img src="./css/events photos/activities.jpg" alt="event image" class="img-thumbnail">
                </div>
                <div class="col-md-9 col-sm-12 event-description">
                  <h6 class="event-about">About the Event</h6>
                  <p class="event-data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis mollitia. Aliquam rem quae expedita nemo qui nisi illo, ratione quod veritatis corporis ipsam at non fuga id porro voluptatum.</p>
                  </p>
                  <h6 class="event-about">Time and location</h6>
                  <p class="event-data">Nov 29, 2020, 20:00</p>
                  <p class="event-data">Sanciai Biblioteka</p>
                  <p class="event-data">Sandėlių g. 7, Kaunas</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- 3rd Event -->        
        <div class="card">
          <a 
          class="card-header" role="tab" 
          id="headingThree" 
          data-toggle="collapse" 
          data-parent="#accordion" 
          href="#collapseThree" 
          aria-expanded="false" 
          aria-controls="collapseThree">
            <div class="col-md-3 col-sm-12 event-date">
              <p class="event-month">NOV</p>
              <p class="event-day">29</p>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <div class="event-type">
                  <span class="event-proyect ea">GENIUS LOCI</span>
                  <span class="event-category ea">EDUCATION</span>
                  <span class="event-subcategory">Seminars</span>
              </div>              
              <div class="event-type-title">
                <span class="event-title ea">PUBLIC DISCUSSION</span>
                <span class="event-location">Sanciai Biblioteka 20h.</span>
              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-register" onclick="location.href='./form.html'">Register</button>
            </div>
          </a>
  
          <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
            <a>
              <div class="card-body">
                <div class="col-md-3 col-sm-12 event-container">
                  <img src="./css/events photos/activities.jpg" alt="event image" class="img-thumbnail">
                </div>
                <div class="col-md-9 col-sm-12 event-description">
                  <h6 class="event-about">About the Event</h6>
                  <p class="event-data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis mollitia. Aliquam rem quae expedita nemo qui nisi illo, ratione quod veritatis corporis ipsam at non fuga id porro voluptatum.</p>
                  </p>
                  <h6 class="event-about">Time and location</h6>
                  <p class="event-data">Nov 29, 2020, 20:00</p>
                  <p class="event-data">Sanciai Biblioteka</p>
                  <p class="event-data">Sandėlių g. 7, Kaunas</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- 4th Event -->
        <div class="card">
          <a 
          class="card-header" role="tab" 
          id="headingFour" 
          data-toggle="collapse" 
          data-parent="#accordion" 
          href="#collapseFour" 
          aria-expanded="false" 
          aria-controls="collapseFour">
            <div class="col-md-3 col-sm-12 event-date">
              <p class="event-month">NOV</p>
              <p class="event-day">29</p>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <div class="event-type">
                  <span class="event-proyect ea">GENIUS LOCI</span>
                  <span class="event-category ea">EDUCATION</span>
                  <span class="event-subcategory">Seminars</span>
              </div>              
              <div class="event-type-title">
                <span class="event-title ea">PUBLIC DISCUSSION</span>
                <span class="event-location">Sanciai Biblioteka 20h.</span>
              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-register" onclick="location.href='./form.html'">Register</button>
            </div>
          </a>
  
          <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
            <a>
              <div class="card-body">
                <div class="col-md-3 col-sm-12 event-container">
                  <img src="./css/events photos/activities.jpg" alt="event image" class="img-thumbnail">
                </div>
                <div class="col-md-9 col-sm-12 event-description">
                  <h6 class="event-about">About the Event</h6>
                  <p class="event-data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis mollitia. Aliquam rem quae expedita nemo qui nisi illo, ratione quod veritatis corporis ipsam at non fuga id porro voluptatum.</p>
                  </p>
                  <h6 class="event-about">Time and location</h6>
                  <p class="event-data">Nov 29, 2020, 20:00</p>
                  <p class="event-data">Sanciai Biblioteka</p>
                  <p class="event-data">Sandėlių g. 7, Kaunas</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <!-- 5th Event -->
        <div class="card">
          <a 
          class="card-header" role="tab" 
          id="headingFive" 
          data-toggle="collapse" 
          data-parent="#accordion" 
          href="#collapseFive" 
          aria-expanded="false" 
          aria-controls="collapseFive">
            <div class="col-md-3 col-sm-12 event-date">
              <p class="event-month">NOV</p>
              <p class="event-day">29</p>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
              <div class="event-type">
                  <span class="event-proyect ea">GENIUS LOCI</span>
                  <span class="event-category ea">EDUCATION</span>
                  <span class="event-subcategory">Seminars</span>
              </div>              
              <div class="event-type-title">
                <span class="event-title ea">PUBLIC DISCUSSION</span>
                <span class="event-location">Sanciai Biblioteka 20h.</span>
              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-register" onclick="location.href='./form.html'">Register</button>
            </div>
          </a>
  
          <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
            <a>
              <div class="card-body">
                <div class="col-md-3 col-sm-12 event-container">
                  <img src="./css/events photos/activities.jpg" alt="event image" class="img-thumbnail">
                </div>
                <div class="col-md-9 col-sm-12 event-description">
                  <h6 class="event-about">About the Event</h6>
                  <p class="event-data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis mollitia. Aliquam rem quae expedita nemo qui nisi illo, ratione quod veritatis corporis ipsam at non fuga id porro voluptatum.</p>
                  </p>
                  <h6 class="event-about">Time and location</h6>
                  <p class="event-data">Nov 29, 2020, 20:00</p>
                  <p class="event-data">Sanciai Biblioteka</p>
                  <p class="event-data">Sandėlių g. 7, Kaunas</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      </section>



  <!-- Footer -->
  <footer class="py-4 bg-green2">
    <div class="container-fluid">
      <div class="row m-0 text-center align-items-center">
        <div class="col-12">
          <span class="support">Paremkite Šančių pilietinę visuomenę</span>
        </div>
        <div class="col-12">
          <button type="button" class="btn btn-donate" data-toggle="modal" data-target="#donate">Paaukok</button>
        </div>
        <div class="col-12">
          <span class="legal">Internetinę svetainę administruoja Žemųjų Šančių bendruomenė, Įmonės kodas 303497934 - sanciubendruomene@gmail.com
          </span>
        </div>
        <div class="col-12 legal">
          <a href="./terms-and-conditions.html">Privatumo politika</a>
        </div>
        
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="donate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog donate-dialog">  
        <div class="modal-content donate-content">
          <div class="modal-header donate-header">
            <h5 class="modal-title" id="exampleModalLabel">Paremkite Šančių pilietinę bendruomenę</h5>
          </div>
          <div class="modal-body donate-body">
              <p>Sąskaitos numeris: LT28 7044 0600 0800 9369, AB SEB bankas</p>
              <p>Juridinio asmens pavadinimas: Žemųjų Šančių bendruomenė</p>
              <p>Įmonės kodas: 303497934</p>
              <p>Adresas: Norvegų g. 7A, Kaunas</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>
