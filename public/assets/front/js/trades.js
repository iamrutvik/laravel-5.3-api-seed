$(function(){
var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];
$('#trades').autocomplete({
source: availableTags,
multiselect: true
});


var availableservices = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++"
];
$('#serviceslist').autocomplete({
source: availableservices,
multiselect: true
});

var availableserprovider = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++"
];
$('#serprovider').autocomplete({
source: availableserprovider,
multiselect: true
});

var availablewishlist = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++"
];
$('#wishlist').autocomplete({
source: availablewishlist,
multiselect: true
});


})