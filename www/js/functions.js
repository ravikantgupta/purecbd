
<!-- popup.js -->
    document.addEventListener('DOMContentLoaded', function () {
      main();
    
     

    });

 
 function flippageup(page) {


             window.plugins.nativepagetransitions.slide({

                 "direction" : "up",
                  "href" : page
             });
           }

function bakpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "right",
			 "href" : page
		 });
	   }
		   
function nextpage(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "left",
			 "href" : page
		 });
	}	   


function bakpagedwn(page) {


		 window.plugins.nativepagetransitions.slide({
			 "direction" : "down",
			 "href" : page
		 });
	   }

function buslist(element) {

	var city_from=$('#city_from').val();
	var city_to=$('#city_to').val();

	var jrn_date=$('#jrn_date').val();

	if(city_from=='')
	{
	alert('Please select from city');	

	return false;
	}

	if(city_to=='')
	{
	alert('Please select to city');	

	return false;
   }	


	window.localStorage.setItem("city_from", city_from);
	window.localStorage.setItem("city_to", city_to);
	window.localStorage.setItem("jrn_date", jrn_date);

	var city_from_text= jQuery("#autocomplete").val();

	var city_to_text= jQuery("#autocomplete1").val();

	window.localStorage.setItem("city_from_text", city_from_text);
	window.localStorage.setItem("city_to_text", city_to_text);




			   
	  window.plugins.nativepagetransitions.slide({
		  "direction" : "left",
		   "duration":1000,
			"androiddelay"     :  400,
		  "href" : "bus-list.html"
	  });
	  
	  
  
}


function productdetal()
{
	
			
	 window.plugins.nativepagetransitions.slide({
	  "direction" : "left",
	  "duration":1000,
	  "androiddelay"     :  400,
	  "href" : "product-detail.html"
  });
  
}

function main()
{	
	var menuhtm='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
	 <div class="sidbar-header">\
		<a class="profile-box" href="javascript:void(0)"> <span class="profile"><img src="images/all.jpg" alt=""></span>\
			<span>Raj Sharma</span></div>\
		<ul class="sidbar-listing">\
		<li><a onClick="nextpage(\'index.html\')"><span class="sidbar-icon"><img src="images/list8.jpg" alt=""></span>Product By\
				Category</a>\
			<ol class="sidbar-olist">\
				<li><a onClick="nextpage(\'product-list.html\')">-&nbsp;CBD Oil</a></li>\
				<li><a onClick="nextpage(\'product-list.html\')">-&nbsp;CBD Edibleas</a></li>\
				<li><a onClick="nextpage(\'product-list.html\')">-&nbsp;CBD Topicals</a></li>\
				<li><a onClick="nextpage(\'product-list.html\')">-&nbsp;CBD Edibles</a></li>\
			</ol>\
		</li>\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list7.jpg" alt=""></span>My Oreders</a></li>\
		<li><a onClick="nextpage(\'my-cart.html\')"><span class="sidbar-icon"><img src="images/list6.jpg" alt=""></span>My Cart <span\
					class="cart-rt-dtl">5</span></a></li>\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list5.jpg" alt=""></span>My Wallet</a></li>\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list4.jpg" alt=""></span>Offer Zone</a></li>\
	</ul>\
	<p class="other-pr">Others</p>\
	<ul class="cust-support">\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list3.jpg" alt=""></span>Customer Support</a>\
		</li>\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list2.jpg" alt=""></span>Rate us</a></li>\
		<li><a href="#"><span class="sidbar-icon"><img src="images/list1.jpg" alt=""></span>Share</a></li>\
	</ul>';
	
		
				
			var loggedIn=	window.localStorage.getItem("loggedIn");
			
				if(loggedIn)
				{
				 menuhtm+='<div class="logout">\
				  <a onClick="logout()"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Logout</a>\
				   </div>';	
				}else
				{
				 menuhtm+='<div class="logout">\
				  <a onClick="nextpage(\'login.html\')"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span> Logoin</a>\
				  </div>';
				}

			 jQuery('#sidenavcontainer').html(menuhtm);

}

	
function logout() {

  window.localStorage.removeItem("loggedIn");
  window.localStorage.removeItem("userid");  
  nextpage('login.html');

}