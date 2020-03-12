/*
 Global variables
var items=[
    {//first ite
        code:'1tvs',
        title:'TV Samsung',
        price: 1000,
        description: "This is a Samsung Tv",
        category: 'Electronics',
        image: 'img/tv.jpg'

    },

    {//second item
        code:'1ph10',
        title:'Iphone X',
        price: 1200,
        description: "This is an Iphone X",
        category: 'Mobile devices',
        image: 'img/iphonex.jpg'

    },
    {//second item
        code:'1bspeaker',
        title:'Bluetooth Speakers',
        price: 600,
        description: "This is an Bluetooth Speaker",
        category: 'Sound',
        image: 'img/speaker.jpg'

    },
    {//second item
        code:'1pc',
        title:'Personal Computer',
        price: 1700,
        description: "This is an Personal Computer",
        category: 'Computers',
        image: 'img/computer.jpg'

    }
];
*/

var items=[];
var serverURL="http://restclass.azurewebsites.net/API/";


// FUNCTIONS ------>>>>

function fetchCatalog(){
    // get the items from the server
    $.ajax({
        url:serverURL+"points",
        type:"GET",
        success:function(res){
            console.log("Server responded OK",res);
            for(var j=0;j<res.length;j++){

                if(res[j].user=="Pavel" && res[j].title!=""){
                    items.push(res[j]);
                }

            }
            console.log(items);
            displayCatalog();
        },
        error:function(details){
            console.log("error, Something went wrong",details);
        }
    });

}


function displayCatalog(){
    for(var i=0;i<items.length;i++){
        displayItems(items[i]);
    }
}

function displayItems(product){

    // travel the array -->
    //for(var i=0;i<items.length;i++){
        // get element from array -->
    // Create the string -->
        var layout =`<div class="item" id="${product.code}">
            <img src="${product.image}">
            <h4> ${product.title}</h4>
            <h6 class="item-price">${product.price}</h6>
            <p> ${product.description} </p>
            <div class="button-div">
                <button class="btn btn-primary mb-2"> Add to Cart </button>
            </div>
        </div>`;
        //console.log(i,layout);
    // display element in the DOM (HTML) -->
            $("#catalog").append(layout);
   // }    
}


function init(){
    console.log('Catalog page');
    fetchCatalog();
    $("#search-btn").click(Search);
    $("#search-txt").keypress(function(e){
        if(e.keyCode==13){
            Search();
        }
    });
}


function Search(){
//$('#search-btn').on('click',function(){
    //body search function
    var searchString=$('#search-txt').val();
    //travel array
    for(var i=0;items.length;i++){
        // conditional
        if(items[i].title.toUpperCase().includes(searchString.toUpperCase())||items[i].code.toUpperCase().includes(searchString.toUpperCase())||items[i].description.toUpperCase().includes(searchString.toUpperCase())){
           //exceute the change
            $('#'+items[i].code).show();
        }
        else{
                //execute change
            $('#'+items[i].code).hide();
        }
        if(searchString==""){
            $('#'+items[i].code).show();
        }
    }


    //});
};
// Initialization 
window.onload=init;