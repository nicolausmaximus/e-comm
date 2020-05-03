function init() {
  switch(sessionStorage["xyz"])
  {
    case "1":
             var tabletop = Tabletop.init( { key:'https://docs.google.com/spreadsheets/d/1oegQtX2uIk0hdNFPT1YW4KEnW1LSxCvO8BVpsO5kZYM/edit?usp=sharing',
             callback: showInfo,
             simpleSheet: true } )
             break;
    case "2":
            var tabletop = Tabletop.init( { key:'https://docs.google.com/spreadsheets/d/1TB8AKP9GRmU8hyLlHrVub-yhPpzzxmBAqAFcWUSJuJQ/edit?usp=sharing    ',
            callback: showInfo,
            simpleSheet: true } )
            break;
    case "3":
            var tabletop = Tabletop.init( { key:'https://docs.google.com/spreadsheets/d/108MHFbHuH8xNz6HyNSF5xUQVkOieega-xzPTi1zuvFo/edit?usp=sharing',
            callback: showInfo,
            simpleSheet: true } )
            break;
    case "4":
            var tabletop = Tabletop.init( { key:'https://docs.google.com/spreadsheets/d/1zsIJeOp94vnHP0pBVBNOdlHIdp59qS64ptTGz5lNQzk/edit?usp=sharing',
            callback: showInfo,
            simpleSheet: true } )
            break;
    case "5":
            var tabletop = Tabletop.init( { key:'https://docs.google.com/spreadsheets/d/1yf8SD1mtlo4vFEEjBw5B-tUMCfCuHibF0IkPJnQbzVE/edit?usp=sharing',
            callback: showInfo,
            simpleSheet: true } )
            break;
    case "6":
            var tabletop = Tabletop.init( { key:' https://docs.google.com/spreadsheets/d/1mPvNBj_Mti_sURltZbD-u4KZXkGdHWrBh9QhBn9JV-8/edit?usp=sharing ',
            callback: showInfo,
            simpleSheet: true } )
            break;
  }
    
      
};


function showInfo(data, tabletop) {
  var head=document.querySelector('.jumbo')
             $(head).append('<p>Welcome to Category '+ sessionStorage["xyz"] +'</p>');
  
  for (var i = 0; i < data.length; i++) {
    x = tabletop.data()[i].photo ;
    y = tabletop.data()[i].id;
    https://drive.google.com/open?id=1yMeTh4C3F7uZGvlSqCUf9IUUi88BNfyy
    x = x.replace('/open?id=', '/uc?export=view&id=');
    x = x.replace('/file/d/', '/uc?export=view&id=');
    x = x.replace('/preview?usp=drivesdk', ' ');
    var headOne=document.querySelector('#abc')
    

    $(headOne).append('<div class="col-lg-4 col-md-6 col-xs-6"><div class="row"><div class="column"><div class="card"><img  id='
    +i+' onclick="imfun(id)" src='+x+' ><div class="contx"><a href="#"  data-name='+y+' data-price='+  Math.floor((Math.random() + 2*i)*100 ) +' data-photo='+x+' name='+y+' rel='+  Math.floor((Math.random() + 2*i)*100 ) +' type='+x+' class="add-to-cart btn" id='+"button"+i+' onclick="addtocart(id,event)" >add to cart</a></div><div id="myModal" class="modal"><span class="close">&times;</span><img class="modal-content" id="img"><div id="caption"></div></div></div></div></div></div>');

  }
  
  



  var flexiblePagination = $('#abc').flexiblePagination({
    pagingControlsContainer: "#pagingControls",
    pagingContainer: "#abc",
    itemSelector: ".col-lg-4:visible",
    itemsPerPageSelector: ".col-lg-4PerPageDropDown", //Paragraphs Per Page
    
  
    // How many items to display per page
    itemsPerPage: 12,
  
    // Current page
    currentPage: 1,
    
    // Search phrase

    displayedPages: 6,
  
    // Show/hide control buttons
    showGotoFirst: true,
    showGotoLast: true,
    showPrevious: true,
    showNext: true,
  
    // All text can accept an icon using a <span> OR <i> tag. 
    btnFirstText: "<<",
    btnLastText: ">>",
    btnNextText: ">",
    btnPreviousText: "<",
  
    // CSS properties
    
    // data source
    
    
    // ajax data source
    ajax: {
      params: {},
      url: '',
    }

    
    
  
    
  })
  

// Vanilla JavaScript

var flexiblePagination = new Flexible.Pagination();
flexiblePagination.pagingContainer = '#abc';



window.shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(name, price, count,photo) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.photo = photo;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('window.shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('window.shoppingCart'));
  }
  if (sessionStorage.getItem("window.shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count ,photo) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count ,photo);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
// Clear items
$('.clear-cart').click(function() {
  window.shoppingCart.clearCart();
  window.displayCart();
});


window.displayCart=function() {
  
  var cartArray = window.shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><span class='input-group-btn'><button class='btn btn-primary minus-item' data-name=" + cartArray[i].name + ">-</button></span>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<span class='input-group-btn'><button type='button' class='btn btn-success plus-item ' data-name=" + cartArray[i].name + ">+</button></span></div></td>"
      + " = " 
      + "<td> &emsp; &emsp; Total=" + cartArray[i].total + "</td>" 
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + "<td><img src=" +cartArray[i].photo+ " height='100' width='100'></td>"
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(window.shoppingCart.totalCart());
  $('.total-count').html(window.shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  window.shoppingCart.removeItemFromCartAll(name);
  window.displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  window.shoppingCart.removeItemFromCart(name);
  window.displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  window.shoppingCart.addItemToCart(name);
  window.displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  window.shoppingCart.setCountForItem(name, count);
  window.displayCart();
});

displayCart();






};

function imfun(op){

  var modal = document.getElementById("myModal");
  var img = document.getElementById(op);
  var modalImg = document.getElementById("img");
  var captionText = document.getElementById("caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = "click on the x to go back";
      var span = document.getElementsByClassName("close")[0];
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
  

    }

function addtocart(id,event) {

      event.preventDefault();
  
  var igg = document.getElementById(id);
  var price = igg.rel;
  var name = igg.name;
  var photo = igg.type;
  window.shoppingCart.addItemToCart(name, price, 1,photo);
  window.displayCart();

  
 
}

window.addEventListener('DOMContentLoaded', init);



 
  
  