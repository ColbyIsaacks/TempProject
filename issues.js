//Setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {constrainWidth : false});

    var collapsables = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsables);

    var selections = document.querySelectorAll('select');
    M.FormSelect.init(selections);

    setupUIIssues();

});

const loggedOutComponents = document.querySelectorAll('.logged-out');
const loggedInComponents = document.querySelectorAll('.logged-in');

const setupUIIssues = (user) => {
    if(user) {
        //Toggle UI elements
        loggedInComponents.forEach(item => item.style.display = "block");
        loggedOutComponents.forEach(item => item.style.display = 'none');
    }
    else{
        //Toggle UI elements
        loggedInComponents.forEach(item => item.style.display = "none");
        loggedOutComponents.forEach(item => item.style.display = 'block');
    }
    setDisplayAccordingToTheme();
}

var firebaseConfig = {
    apiKey: "AIzaSyC6QR79tnkpGKfvhc1d_VM2Pdp8lmwVTSw",
    authDomain: "software-engineering-pro-3ba1c.firebaseapp.com",
    databaseURL: "https://software-engineering-pro-3ba1c.firebaseio.com",
    projectId: "software-engineering-pro-3ba1c",
    storageBucket: "software-engineering-pro-3ba1c.appspot.com",
    messagingSenderId: "482967068895",
    appId: "1:482967068895:web:559182a15c3ba3c1e5c96a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function setDisplayAccordingToTheme(){
    const user = auth.currentUser;
    if(user) {
        database.ref("user themes/" + user.uid).on('value', function(snapshot){
            const theme = snapshot.val();
            console.log(theme);
            if(theme == "campfire"){
                document.body.className = "grey darken-2";
                document.getElementById("nav-wrapper").className =  "nav-wrapper grey darken-4";
                document.getElementById("logo").className = "brand-logo orange-text";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card grey darken-1 amber-text darken-3";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn orange darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal grey darken-2 amber-text";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content black-text grey darken-1";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header grey darken-2 orange-text";
                }
            }
            else if (theme =="coldfire"){
                document.body.className = "grey darken-2";
                document.getElementById("nav-wrapper").className =  "nav-wrapper grey darken-4";
                document.getElementById("logo").className = "brand-logo blue-text";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card grey darken-1 blue-text darken-2";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn blue darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal grey darken-2 blue-text";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content black-text grey darken-1";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header grey darken-2 blue-text";
                }
            }
            else if(theme == "swamp"){
                document.body.className = "green darken-2";
                document.getElementById("nav-wrapper").className =  "nav-wrapper green darken-4";
                document.getElementById("logo").className = "brand-logo brown-text darken-4";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card green darken-3 brown-text darken-4";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn green darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal green darken-2 brown-text darken-4";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content brown-text grey darken-4";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header green darken-2 brown-text darken-4";
                }
            }
            else if(theme == "aqua"){
                document.body.className = "cyan darken-2";
                document.getElementById("nav-wrapper").className =  "nav-wrapper cyan darken-4";
                document.getElementById("logo").className = "brand-logo white-text";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card twal darken-2 white-text";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn teal darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal teal darken-2 white-text";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content white-text cyan darken-4";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header cyan darken-2 blue-text";
                }
            }
            else if(theme == "mocha"){
                document.body.className = "brown darken-4";
                document.getElementById("nav-wrapper").className =  "nav-wrapper brown darken-3";
                document.getElementById("logo").className = "brand-logo white-text";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card brown darken-2 white-text";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn brown darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal brown darken-2 white-text";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content white-text brown darken-4";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header brown darken-2 brown-text darken-4";
                }
            }
            else{
                document.body.className = "";
                document.getElementById("nav-wrapper").className =  "nav-wrapper amber darken-2";
                document.getElementById("logo").className = "brand-logo";
                var cards = document.querySelectorAll(".card");
                for(var i =0; i< cards.length;i++){
                    cards[i].className = "card";
                }
                var buttons = document.querySelectorAll(".btn");
                for(var i=0;i<buttons.length;i++){
                    buttons[i].className  ="wave-effect waves-light btn yellow darken-2 modal-trigger";
                }
                var modals = document.querySelectorAll(".modal");
                for(var i=0;i<modals.length;i++){
                    modals[i].className ="modal";
                }
                var dropdowns = document.querySelectorAll(".dropdown-content");
                for(var i=0;i<dropdowns.length;i++){
                    dropdowns[i].className= "dropdown-content";
                }
                var collapsables = document.querySelectorAll(".collapsible-header");
                for(var i =0;i<collapsables.length;i++){
                    collapsables[i].className = "collapsible-header";
                }
            }
        });
    }
}

//Listen for bug reports
database.ref("bugreports").on("child_added", function(snapshot) {
    var html ="";
    html += '<li><div class="card" id="report-' + snapshot.key + '">'+
    '<div class="card-content">'+
        '<span class="card-title">Bug report: </span>'+
        '<p id="description">Description:</p>'+
        snapshot.val().description +
        '<p id="dev-response">Developer Response:</p>'+
        snapshot.val().response +
    '</div>'+
    '<div class="card-action">'+
        '<a href="#"class="waves-effect waves-light btn yellow darken-2 admin-only modal-trigger" data-target="modal-edit"> <i class="material-icons">build</i>Edit</a>'+
        '<a href="#" class="waves-effect waves-light btn red darken-2 admin-only modal-trigger" data-target="modal-delete"> <i class="material-icons">delete</i> Delete</a>'+
    '</div>'+
    '</div>' + '</li>';

    document.getElementById("reported-list").innerHTML += html;
})

database.ref("report-looked").on("child_added", function(snapshot) {
    var html ="";
    html += '<li><div class="card" id="report-' + snapshot.key + '">'+
    '<div class="card-content">'+
        '<span class="card-title">Bug report: </span>'+
        '<p id="description">Description:</p>'+
        snapshot.val().description +
        '<p id="dev-response">Developer Response:</p>'+
        snapshot.val().response +
    '</div>'+
    '<div class="card-action">'+
        '<a href="#"class="waves-effect waves-light btn yellow darken-2 admin-only modal-trigger" data-target="modal-edit"> <i class="material-icons">build</i>Edit</a>'+
        '<a href="#" class="waves-effect waves-light btn red darken-2 admin-only modal-trigger" data-target="modal-delete"> <i class="material-icons">delete</i> Delete</a>'+
    '</div>'+
    '</div>' + '</li>';

    document.getElementById("looked-at-list").innerHTML += html;
})

database.ref("report-fixed").on("child_added", function(snapshot) {
    var html ="";
    html += '<li><div class="card" id="report-' + snapshot.key + '">'+
    '<div class="card-content">'+
        '<span class="card-title">Bug report: </span>'+
        '<p id="description">Description:</p>'+
        snapshot.val().description +
        '<p id="dev-response">Developer Response:</p>'+
        snapshot.val().response +
    '</div>'+
    '<div class="card-action">'+
        '<a href="#"class="waves-effect waves-light btn yellow darken-2 admin-only modal-trigger" data-target="modal-edit"> <i class="material-icons">build</i>Edit</a>'+
        '<a href="#" class="waves-effect waves-light btn red darken-2 admin-only modal-trigger" data-target="modal-delete"> <i class="material-icons">delete</i> Delete</a>'+
    '</div>'+
    '</div>' + '</li>';

    document.getElementById("fixed-bug-list").innerHTML += html;
})