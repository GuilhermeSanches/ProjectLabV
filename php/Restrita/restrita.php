  
<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>My Travel</title>
        <link rel="stylesheet" href="main.css">
        <link rel="stylesheet" href="mainRestrita.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script type="text/jscript" src="js/script.js"></script>
      
       

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>

    </head>
    <body>
        
        <!-- Header cabeçalho-->
			<header id="header">
				<div class="logo container" >
					<div>
						<p>Controle suas viagens financeiramente.</p>
					</div>
				</div>
			</header>
          

            <!-- Nav -->
			<nav id="nav" class="skel-layers-fixed" class="responsive">
				<ul>
					<li class="current"><a href="index.html">Início</a></li>
					<li><a href="about.html">Sobre</a></li>
					<li><a href="contact.html">Contato</a></li>
                    <li><a  href="logout.php">Logout</a></li> 
                
				</ul>
                 <div id="user" class="user" >      
                      <?php
                    include('functions.php');
                    ?>
                        </div>  
                
			</nav>
            <div id="bodyRestrita">
        
            <nav id="navInf" class="skel-layers-fixed" class="responsive">
				<ul>
					<li class="current"><a href="index.html">Vou Viajar</a><img src='image/pipeline.png'> </li>
					<li><a href="about.html">Relatórios</a><img src='image/pipeline.png'></li>
					<li><a href="contact.html">Ultimas Viagens</a><img src='image/pipeline.png'></li>
                    <li><a  href="logout.php">Ajuda</a></li> 
				</ul>
			</nav>
                
                
    
   
       </div>
        <div id="map-canvas" >
             <p><span id="status">Por favor aguarde enquanto nós tentamos locar você...</span></p>
            <script>
            function success(position) {
            var s = document.querySelector('#status');

    if (s.className == 'success') {
        return;
    }

    s.innerHTML = "Você foi localizado!";
    s.className = 'success';





    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.ZOOM_PAN},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"Você está aqui!"
    });

}

function error(msg) {
    var s = document.querySelector('#status');
        s.innerHTML = typeof msg == 'string' ? msg : "falhou";
        s.className = 'fail';
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    error('Seu navegador não suporta <b style="color:black;background-color:#ffff66">Geolocalização</b>!');
}
           
            </script>
           
        </div>
        
        <div class="cabFundo">
            
        </div>
  
        <div class="rodape">
            <p>Desenvolvido por Guilherme Sanches / Jéssica Adriele 2015</p>
        </div>

        
  
    </body>
</html>

