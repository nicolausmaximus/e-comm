function init() {
  var tabletop = Tabletop.init( { key:' https://docs.google.com/spreadsheets/d/1YWeSQpxmCRqXx_zjjNC8qjTbQjrdRfY7HQAuU7Ns3V8/edit?usp=sharing',
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  console.log(data);

 
  for (var i = 0; i < data.length; i++) {
    x = tabletop.data()[i].photo ;
    y = tabletop.data()[i].id;
    x = x.replace('/file/d/', '/uc?export=view&id=');
    x = x.replace('/preview?usp=drivesdk', ' ');
   var headOne=document.querySelector('#abc')
    var img = document.createElement('img');
            img.src = x;

    var button = document.createElement("button");
    button.id = y;
    button.innerHTML = "add";
  $(headOne).append('<div class="col-lg-4 col-md-6 col-xs-6"><div class="row"><div class="column"><div class="card"><img  id='+i+' onclick="imfun(id)" src='+x+' > <div class="contx"><button id='+y+' onclick="mfun(id)">add to cart</button></div><div id="myModal" class="modal"><span class="close">&times;</span><img class="modal-content" id="img"><div id="caption">  </div></div></div></div></div></div>');
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


};

function mfun(id){

    var node = document.createElement("LI");
  var textnode = document.createTextNode(id);
  node.appendChild(textnode);
  document.getElementById("dl").appendChild(node);
}

function imfun(op){
  var modal = document.getElementById("myModal");
  var img = document.getElementById(op);
  var modalImg = document.getElementById("img");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = "click on the x to go back";
      console.log("hello")
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
}



window.addEventListener('DOMContentLoaded', init);
