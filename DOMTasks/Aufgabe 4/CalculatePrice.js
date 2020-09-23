document.getElementById("frmOrder").onsubmit = function () {
    let schrauben = document.getElementById("numberSchrauben").value;
    let muttern = document.getElementById("numberMuttern").value;
    let unterlegscheiben = document.getElementById("numberUnterlegscheiben").value;
    
    let preis = 0;
    preis += schrauben * 20;
    preis += muttern * 10;
    preis += unterlegscheiben * 5;

    preis = preis/100;
    document.getElementById("txtPreis").innerText = "Total: " + preis + " CHF";
    return false;
};