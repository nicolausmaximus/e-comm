function init() {
  switch (sessionStorage["xyz"]) {
    case "1":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1wnTR9kZUW6ITBN-IDs5dGqkZrTuO3TTvnctAVhvZBlc/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
    case "2":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1iIduHzkAwU6Zv5xNtUip1seIucbNe6kigd7wOFZBkik/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
    case "3":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1SRkKLJ-cPXmwOrHiHSlgpkqWkbKr4t6mjBt0YaEvGoI/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
    case "4":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1MzRXIWUl2z1NgMpnoEKREaaCJUtoMwfxElH_sxu6H5o/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
    case "5":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1nU-65ADAOxyjdLdiZZjf9QoWvIsewPwPFpDINMUMrDA/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
    case "6":
      var tabletop = Tabletop.init({
        key:"https://docs.google.com/spreadsheets/d/1EwpeRiqhimwN7P-c9bNQY8ZY_oLFJIWni9dUAbzNP-E/edit?usp=sharing",
        callback: showInfo,
        simpleSheet: true,
      });
      break;
  }
}

function showInfo(data, tabletop) {
  var head = document.querySelector(".jumbo");
  $(head).append('<p class="catal">' + sessionStorage["pqr"] + "</p>");
  names=sessionStorage["pqr"]

  for (var i = 0; i < data.length; i++) {
    x = tabletop.data()[i].photo;
    y = tabletop.data()[i].id;
    //drive.google.com/open?id=1yMeTh4C3F7uZGvlSqCUf9IUUi88BNfyy
    https: x = x.replace("/open?id=", "/uc?export=view&id=");
    x = x.replace("/file/d/", "/uc?export=view&id=");
    x = x.replace("/preview?usp=drivesdk", " ");
    names=names.replace("S","");
    var headOne = document.querySelector("#abc");

    $(headOne).append(
      '<div class="col-lg-4 col-md-6 col-xs-6"><div class="row"><div class="column"><div class="card"><img  id=' +
        i +
        ' class="displayimg" onclick="imfun(id)" src=' +
        x +
        ' ><div class="contx"><a href="#"  data-name=' +
        names+(i+1)+
        " data-price=" +
        y +
        " data-photo=" +
        x +
        " name=" +
        names+(i+1) +
        " rel=" +
        y +
        " type=" +
        x +
        ' class="add-to-cart btn" id=' +
        "button" +
        i +
        ' onclick="addtocart(id,event)" >Add to cart</a></div><div id="myModal" class="modal"><span class="close">&times;</span><img class="modal-content" id="img"><div id="caption"></div></div></div></div></div></div>'
    );
  }

  var flexiblePagination = $("#abc").flexiblePagination({
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
      url: "",
    },
  });

  // Vanilla JavaScript

  var flexiblePagination = new Flexible.Pagination();
  flexiblePagination.pagingContainer = "#abc";

  window.shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count, photo) {
      this.name = name;
      this.price = price;
      this.count = count;
      this.photo = photo;
    }

    // Save cart
    function saveCart() {
      sessionStorage.setItem("window.shoppingCart", JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem("window.shoppingCart"));
    }
    if (sessionStorage.getItem("window.shoppingCart") != null) {
      loadCart();
    }

    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count, photo) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count, photo);
      cart.push(item);
      saveCart();
    };
    // Set count from item
    obj.setCountForItem = function (name, count) {
      for (var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count--;
          if (cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
      }
      saveCart();
    };

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    };

    // Clear cart
    obj.clearCart = function () {
      cart = [];
      saveCart();
    };

    obj.submit = function () {
      var x = document.getElementById("form_sample");
      var createform = document.createElement("form");
      createform.setAttribute("id", "form-trial");
      x.appendChild(createform);

      var random = Math.floor(Math.random() * 999);
      var idlabel = document.createElement("label"); // Create Label for Name Field
      idlabel.innerHTML = "Order id : "; // Set Field Labels
      createform.appendChild(idlabel);
      var ORDERID = document.createElement("input"); // Create Input Field for Name
      ORDERID.setAttribute("type", "text");
      ORDERID.setAttribute("name", "id");
      ORDERID.setAttribute("id", "ids");
      createform.appendChild(ORDERID);
      var linebreak = document.createElement("br");
      createform.appendChild(linebreak);

      var namelabel = document.createElement("label"); // Create Label for Name Field
      namelabel.innerHTML = "Name : "; // Set Field Labels
      createform.appendChild(namelabel);
      var NAME = document.createElement("input"); // Create Input Field for Name
      NAME.setAttribute("type", "text");
      NAME.setAttribute("name", "name");
      NAME.setAttribute("id", "names");
      createform.appendChild(NAME);
      var linebreak = document.createElement("br");
      createform.appendChild(linebreak);

      var pricelabel = document.createElement("label"); // Create Label for Name Field
      pricelabel.innerHTML = "Price : "; // Set Field Labels
      createform.appendChild(pricelabel);
      var PRICE = document.createElement("input"); // Create Input Field for Name
      PRICE.setAttribute("type", "text");
      PRICE.setAttribute("name", "price");
      PRICE.setAttribute("id", "prices");
      createform.appendChild(PRICE);
      var linebreak = document.createElement("br");
      createform.appendChild(linebreak);

      var countlabel = document.createElement("label"); // Create Label for Name Field
      countlabel.innerHTML = "Count : "; // Set Field Labels
      createform.appendChild(countlabel);
      var COUNT = document.createElement("input"); // Create Input Field for Name
      COUNT.setAttribute("type", "text");
      COUNT.setAttribute("name", "count");
      COUNT.setAttribute("id", "counts");
      createform.appendChild(COUNT);
      var linebreak = document.createElement("br");
      createform.appendChild(linebreak);

      var photolabel = document.createElement("label"); // Create Label for Name Field
      photolabel.innerHTML = "photo : "; // Set Field Labels
      createform.appendChild(photolabel);
      var PHOTO = document.createElement("input"); // Create Input Field for Name
      PHOTO.setAttribute("type", "text");
      PHOTO.setAttribute("name", "photo");
      PHOTO.setAttribute("id", "photos");
      createform.appendChild(PHOTO);
      var linebreak = document.createElement("br");
      createform.appendChild(linebreak);
      for (var item in cart) {
        document.getElementById("ids").value =
          document.getElementById("ID").value + "_" + random;

        document.getElementById("names").value =
          document.getElementById("names").value + cart[item].name + " , ";

        document.getElementById("prices").value =
          document.getElementById("prices").value + cart[item].price + " , ";

        document.getElementById("counts").value =
          document.getElementById("counts").value + cart[item].count + " , ";

        document.getElementById("photos").value =
          document.getElementById("photos").value + cart[item].photo + " , ";
      }
      var jqxhr = $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbxi_h6SgUshpSfDAMpD0ZwuziQL616NgZdTQfCfTcPrCaPBhMU/exec",
        method: "GET",
        dataType: "json",
        data: $("#form-trial").serializeObject(),
      });
      alert(
        "Your order is confirmed \n Please Contact Babita Agarwal--8617550611 \nOrder id:" +
          document.getElementById("ids").value
      );
      window.shoppingCart.clearCart();
      window.displayCart();
      createform.parentNode.removeChild(createform);
    };

    // Count cart
    obj.totalCount = function () {
      var totalCount = 0;
      for (var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    };

    // Total cart
    obj.totalCart = function () {
      var totalCart = 0;
      for (var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    };

    // List cart
    obj.listCart = function () {
      var cartCopy = [];
      for (i in cart) {
        item = cart[i];
        itemCopy = {};
        for (p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy);
      }
      return cartCopy;
    };

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
  $(".clear-cart").click(function () {
    window.shoppingCart.clearCart();
    window.displayCart();
  });

  $(".ordernow").click(function (e) {
    e.preventDefault();
    window.shoppingCart.submit();
  });

  window.displayCart = function () {
    var cartArray = window.shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
      output +=
        "<tr>" +
        "<td>" +
        cartArray[i].name +
        "</td>" +
        "<td>(" +
        cartArray[i].price +
        ")</td>" +
        "<td><div class='input-group'><span class='input-group-btn'><button class='btn btn-primary minus-item' data-name=" +
        cartArray[i].name +
        ">-</button></span>" +
        "<input type='number' class='item-count form-control' data-name='" +
        cartArray[i].name +
        "' value='" +
        cartArray[i].count +
        "'>" +
        "<span class='input-group-btn'><button type='button' class='btn btn-success plus-item ' data-name=" +
        cartArray[i].name +
        ">+</button></span></div></td>" +
        " = " +
        "<td> &nbsp;&nbsp;" +
        "</td>" +
        "<td><button class='delete-item btn btn-danger' data-name=" +
        cartArray[i].name +
        ">X</button></td>" +
        "<td><img src=" +
        cartArray[i].photo +
        " height='100' width='100'></td>" +
        "</tr>";
    }
    $(".show-cart").html(output);
    $(".total-cart").html(window.shoppingCart.totalCart());
    $(".total-count").html(window.shoppingCart.totalCount());
  };

  // Delete item button

  $(".show-cart").on("click", ".delete-item", function (event) {
    var name = $(this).data("name");
    window.shoppingCart.removeItemFromCartAll(name);
    window.displayCart();
  });

  // -1
  $(".show-cart").on("click", ".minus-item", function (event) {
    var name = $(this).data("name");
    window.shoppingCart.removeItemFromCart(name);
    window.displayCart();
  });
  // +1
  $(".show-cart").on("click", ".plus-item", function (event) {
    var name = $(this).data("name");
    window.shoppingCart.addItemToCart(name);
    window.displayCart();
  });

  // Item count input
  $(".show-cart").on("change", ".item-count", function (event) {
    var name = $(this).data("name");
    var count = Number($(this).val());
    window.shoppingCart.setCountForItem(name, count);
    window.displayCart();
  });

  displayCart();
}

function imfun(op) {
  var modal = document.getElementById("myModal");
  var img = document.getElementById(op);
  var modalImg = document.getElementById("img");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = "click on the x to go back";
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}

function addtocart(id, event) {
  event.preventDefault();

  var igg = document.getElementById(id);
  var price = igg.rel;
  var name = igg.name;
  var photo = igg.type;
  window.shoppingCart.addItemToCart(name, price, 1, photo);
  window.displayCart();
}

window.addEventListener("DOMContentLoaded", init);
