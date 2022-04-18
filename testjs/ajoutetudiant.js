let listeEtudiant=[];

function affichertableau(){
    let tbody= document.querySelector("tbody");
    let newHTML= "";
    for (let i=0;i<listeEtudiant.length;i++){
        let moyenne=(listeEtudiant[i].note1+listeEtudiant[i].note2+listeEtudiant[i].note3)/3;
        newHTML+="<tr>";
        newHTML+="<td>"+listeEtudiant[i].nom+" "+listeEtudiant[i].prénom+"</td>";
        newHTML+="<td>"+listeEtudiant[i].email+"</td>";
        newHTML+="<td>"+moyenne+"</td>";
       // newHTML+="<td>"+'<a onClick="showdetails('+i+')">see more</a>'+"</td>";
        newHTML+="<td>"+'<a  onClick="showdetails('+i+')"><img src = '+'img/plus.png'+' id ="plus"></a>'+"</td>";
        newHTML+="<td>"+'<a onClick="remove('+i+')"><img src = '+'img/supp.png'+' id ="supp"></a>'+"</td>";
        newHTML+="</tr>";
    }
       
    tbody.innerHTML=newHTML;

}
function init(){
    listeEtudiant = [
         /*  new etudiant("Abdi","mohamed","med@gmail.com","L3",12,13,14),
           new etudiant("benki ","rim","rim@gmail.com","L1",12,10,16),
           new etudiant("mejri","hassen","hsouna@gmail.com","L2",16,16,16),
         */ 
       ];  
       const btn = document.getElementById('add');
       btn.addEventListener("click", ajoutetudiant);

   }

   function ajoutetudiant(){
    const addnom = document.getElementById("nom").value;
    const addprenom = document.getElementById("prenom").value;
    const addemail = document.getElementById("email").value;
    const addclasse = document.getElementById("classe").value;
    const addnote1 = document.getElementById("note1").value;
    const addnote2 = document.getElementById("note2").value;
    const addnote3 = document.getElementById("note3").value;
    const n1=parseFloat(addnote1);
    const n2=parseFloat(addnote2);
    const n3=parseFloat(addnote3);
    listeEtudiant.push(new etudiant(addnom,addprenom,addemail,addclasse,n1,n2,n3));
    console.log(listeEtudiant);
    console.log(etudiant);
    affichertableau();

}

function showdetails(x){
let e = listeEtudiant[x];
let nom=e.nom;
let prénom=e.prénom;
let email=e.email;
let classe=e.classe;
let note1=e.note1;
let note2=e.note2;
let note3=e.note3;
let moy=(note1+note2+note3)/3;
let details="nom :"+nom +"\n"+"prénom :"+prénom+"\n"+"email :"+email+"\n"+"classe :"+classe+"\n"+"note 1 :"+note1+"\n"+"note 2 :"+note2+"\n"+"note 3 :"+note3+"\n"+"moyenne :"+moy;
alert(details);
}
function remove(x){

   listeEtudiant.splice(x,1);
   if(listeEtudiant.length==x){
    document.getElementById('body').deleteRow(0);
   }
   else
   {
   document.getElementById('body').deleteRow(x);
   }
    console.log(x);
}

function main(){
    
    init();
    
    affichertableau();


}  
window.addEventListener("load",main);