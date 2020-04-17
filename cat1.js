
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
  $(headOne).append('<div class="col-lg-4 col-md-6 col-xs-6"><div class="row"><div class="column"><div class="card"><img  id='+i+' src='+x+' > <div class="contx"><button id='+y+' onclick="mfun(id)">add to cart</button></div><div id="myModal" class="modal"><span class="close">&times;</span><img class="modal-content" id="img"><div id="caption">  </div></div></div></div></div></div>');
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(i);
  var modalImg = document.getElementById("img");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "click on the x to go back";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}
};

function mfun(id){
    var node = document.createElement("LI");
  var textnode = document.createTextNode(id);
  node.appendChild(textnode);
  document.getElementById("dl").appendChild(node);
}


window.addEventListener('DOMContentLoaded', init);
