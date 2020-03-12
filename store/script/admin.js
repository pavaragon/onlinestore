var serverURL="http://restclass.azurewebsites.net/API/";

var items=[];

function init(){
    console.log("Admin Page");
}

window.onload=init;

//object constructor

class Item {
    constructor(code, title, price, description, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.user="Pavel";
    }
}

function clearForm(){
    $('#code').val("");
    $('#code').focus();
    $('#title').val("");
    $('#price').val("");
    $('#description').val("");
    $('#category').val("");
    $('#image').val("");
}

function register(){
    //save from the input into a var
    var code=$('#code').val();
    var title=$('#title').val();
    var price=$('#price').val();
    var description=$('#description').val();
    var category=$('#category').val();
    var image=$('#image').val();

    if(code!="" && title!="" && price!="" && description!="" && category!="" && image!=""){

    // create an object
    
    var newItem = new Item(code, title, price, description, category, image)

    // assing the var to the attribute
    items.push(newItem);
    var jsonString=JSON.stringify(newItem);

    console.log(newItem);
    console.log(jsonString);

    }

    // asynchronus JS and xml

    $.ajax({
        url:serverURL+"points",
        type:"POST",
        contentType:"application/json",
        data:jsonString,
        success:function(response){
            console.log("it works",response);
            //show the notification
            $('#alert-box').removeClass("hidden");
            // hide notification
            setTimeout(function(){
                $('#alert-box').addClass("hidden");
            },3000);
            clearForm();
        },
        error:function(errorDetails){
            console.log("error, Something went wrong",errorDetails);
        }
    });
}

$("#register-btn").on('click',function(){
    register();
});

// homework 

function solveHW(){
    var data=[
        {
            age:28,
            name:"Eli",
            color:"Orange"
        },
        {
            age:35,
            name:"Zack",
            color:"Blue"
        },
        {
            age:26,
            name:"Larry",
            color:"Blue"
        },
        {
            age:37,
            name:"Ed",
            color:"Blue"
        },
        {
            age:28,
            name:"Pavel",
            color:"Purple"
        },
        {
            age:30,
            name:"Jeremy",
            color:"Peach"
        }
    ]
}

// display on console who using (name - age) is the oldest
//                    who is thge youngest
//


// read about
// HTTP methods (GET,POST,PUT,PATCH, DELETE)