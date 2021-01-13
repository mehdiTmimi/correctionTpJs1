function afficher()
{
    //recuperation des elements
    let nomInput=document.getElementById("nom");
    let prenomInput=document.getElementById("prenom");
    let ageInput=document.getElementById("age");
    let resDiv=document.getElementById("res");
    //verification
    if(nomInput.value=="")
        nomInput.setAttribute("class","error");
    else
        nomInput.removeAttribute("class");

    if(prenomInput.value=="")
        prenomInput.setAttribute("class","error");
    else
        prenomInput.removeAttribute("class");

    if(ageInput.value=="")
        ageInput.setAttribute("class","error");
    else
        ageInput.removeAttribute("class");
    
    //communication
    // resultat
    let resultat="Bonjour , je suis "+nomInput.value+
    " "+prenomInput.value+" , j'ai "+ ageInput.value+
    " ans.";
    resDiv.innerHTML=resultat;
    nomInput.value="";
    prenomInput.value="";
    ageInput.value="";
}