function setcategorydropdown(data)
{
	var drrodownhtml='<option value="">Select categories</option>';
	var shopbycategory='';
	  $.each(data.category, function(index) {
           
            drrodownhtml+='<option value="'+data.category[index].slug+'">'+data.category[index].name+'</option>';
        
		  shopbycategory+='<div class="item">\
                    <div class="shop-category-oil">\
                        <a onclick="categoryproducts(\''+data.category[index].slug+'\')">\
                            <div class="category-cbd">\
                                <img src="'+data.category[index].category_image+'" alt="">\
                            </div>\
                            <div class="category-text">\
							   <div class="category-text-box">\
                                <p>'+data.category[index].name+'</p>\
								</div>\
                                <span class="category-cbd-icon"><i class="fa fa-arrow-right"\
                                        aria-hidden="true"></i></span>\
                            </div></a></div></div>';
		
		});
		
		jQuery('#productcategory').html(drrodownhtml);
		jQuery('#shopbycategoryid').html(shopbycategory);
		 $('#shopbycategoryid').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                990: {
                    items: 2
                },

            }
        }); 
}

function categoryproducts(catslug)
{
	 window.localStorage.setItem("current_cat_slug", catslug);
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-list.html"
          });
}
function categoryproductsCat(catslug)
{
	 window.localStorage.setItem("current_cat_slug", catslug);
	 setvalue();
}

function productdetal(productid)
{
	window.localStorage.setItem("current_product_id", productid);
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-detail.html"
          });
}

function searchProduct()
{
	var search_cat_slug=jQuery("#productcategory").val();	
    var search_product_name=jQuery("#productname").val();   
      if(search_product_name=='')
	  {
		jQuery('#productname').css('border', '1px solid red');
		setTimeout(function(){ jQuery('#productname').css('border', ''); },2000);
		return false;
	  }	
	  
	window.localStorage.setItem("search_cat_slug", search_cat_slug);
	window.localStorage.setItem("search_product_name", search_product_name);
	
	 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
			   "androiddelay":  400,
              "href" : "product-search.html"
          });
}
 