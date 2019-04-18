/*----MANIPULATION TABLEAU D'OBJET*/

var data = [
    {
        title: "Aquaman",
        note: "4"
    },
    {
        title: "Sauver ou périr",
        note: "5"
    },
    {
        title: "Les animaux fantastiques",
        note: "4"
    }
];

for (i = 0; i < data.length; i++) {

    var tpl = $("#helloTmpl").html();
    var viewdata = {
        title: data[i].title,
        note: data[i].note,
    };
    var html2insert = Mustache.render(tpl, viewdata);
    $("#box").append(html2insert);
}
/*---UTILISTION DE FONCTION---*/

$(document).ready(function () {
    // On cache les sous-menus :
    $(".navigation ul.subMenu").hide();
    // On sélectionne tous les items de liste portant la classe "toggleSubMenu"
    // et on remplace l'élément span qu'ils contiennent par un lien :
    $(".navigation li.toggleSubMenu span").each(function () {
        // On stocke le contenu du span :
        var TexteSpan = $(this).text();
        $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>');
    });

    // On modifie l'évènement "click" sur les liens dans les items de liste
    // qui portent la classe "toggleSubMenu" :
    $(".navigation li.toggleSubMenu > a").click(function () {
        // Si le sous-menu était déjà ouvert, on le referme :
        if ($(this).next("ul.subMenu:visible").length != 0) {
            $(this).next("ul.subMenu").slideUp("slow", function () {
                $(this).parent().removeClass("open")
            });
        }
        // Si le sous-menu est caché, on ferme les autres et on l'affiche :
        else {
            $(".navigation ul.subMenu").slideUp("slow", function () {
                $(this).parent().removeClass("open")
            });
            $(this).next("ul.subMenu").slideDown("10000", function () {
                $(this).parent().addClass("open")
            });
        }
        // On empêche le navigateur de suivre le lien :

    });
    return false;
});

/*-----PORTEE DES DONNEES-----*/

var exterieur = "Salut"
var maFonction = function () {
    exterieur
    var interieur = 3
}
maFonction() /*Dans cet appel exterieur vaudra "Salut"*/
/*interieur*/ /*ERREUR, interieur is not defined*/