 function value1() {
    $(".slider h1, .slider h2, .slider p").remove("h1, h2, p");
    $(".slider #polosa div").append("<h1>WE1 ARE AWSOME CREATIVE AGENCY</h1> <h2>&nbsp;</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar consequat lectus, nec rutrum eros.<br> Vivamus quis nisl eget sem dignissim cursus. Pellentesque habitant morbi<br> tristique senectus et netus et malesuada fames ac turpis egestas. Nullam pellentesque<br> sagittis urna nec fermentum. Praesent dignissim hendrerit dolor, non pellentesque<br> est molestie in. Vestibulum et justo ligula.</p>");
    
    $('.slider button:eq(0)').css("background", "#00E0D0");
    $('.slider button:eq(1), .slider button:eq(2), .slider button:eq(3)').css("background", "gray");
}  

function value2() {
   $(".slider h1, .slider h2, .slider p").remove("h1, h2, p");
   $(".slider #polosa div").append("<h1>We Are2</h1> <h2>&nbsp;</h2>  <p>Lorem ipsum dolor sit amet2, consectetur adipiscing elit2. Aenean pulvinar consequat lectus2, nec rutrum eros.<br> Vivamus quis nisl eget2 sem dignissim cursus. Pellentesque habitant2 morbi<br> tristique senectus et netus et malesuada fames ac turpis egestas2. Nullam pellentesque<br> sagittis urna nec fermentum. Praesent dignissim hendrerit dolor, non pellentesque2<br> est molestie in. Vestibulum et justo ligula2.</p>");

   $('.slider button:eq(1)').css("background", "#00E0D0");
   $('.slider button:eq(0), .slider button:eq(2), .slider button:eq(3)').css("background", "gray");
}

function value3() {
   $(".slider h1, .slider h2, .slider p").remove("h1, h2, p");
   $(".slider #polosa div").append("<h1>WE3ARE3</h1> <h2>&nbsp;</h2> <p>Lorem ipsum dolor sit amet3, consectetur adipiscing elit. Aenean pulvinar3 consequat lectus, nec rutrum eros.<br> Vivamus quis nisl3 eget sem dignissim cursus. Pellentesque3 habitant morbi<br> tristique senectus et netus et malesuada fames3 ac turpis egestas. Nullam pellentesque<br> sagittis urna nec fermentum3. Praesent dignissim hendrerit dolor3, non pellentesque<br> est molestie in. Vestibulum et justo ligula.</p>");
   
   $('.slider button:eq(2)').css("background", "#00E0D0");
   $('.slider button:eq(0), .slider button:eq(1), .slider button:eq(3)').css("background", "gray");
}

function value4() {
   $(".slider h1, .slider h2, .slider p").remove("h1, h2, p");
   $(".slider #polosa div").append("<h1>WE4ARE4</h1> <h2>&nbsp;</h2> <p>Lorem ipsum dolor sit amet4, consectetur adipiscing elit4. Aenean pulvinar consequat lectus, nec rutrum eros.<br> Vivamus4 quis nisl eget sem dignissim cursus4. Pellentesque habitant morbi<br> tristique4 senectus et netus et malesuada fames ac turpis egestas4. Nullam pellentesque<br> sagittis4 urna nec fermentum. Praesent dignissim hendrerit dolor4, non pellentesque<br> est molestie in. Vestibulum et justo ligula.</p>");
   
   $('.slider button:eq(3)').css("background", "#00E0D0");
   $('.slider button:eq(0), .slider button:eq(1), .slider button:eq(2)').css("background", "gray");
}

function video() {
	$(".video .container").remove(".container");
	$(".video").css("background", "none");
	$(".video iframe").css("display", "block");
	$(".video iframe").css("width", "100%");
}