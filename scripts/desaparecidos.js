document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("container");
    const region = document.getElementById("region");
    const animal = document.getElementById("animal");
    const gender = document.getElementById("gender");
    // const breed = document.getElementById("breed");
    // const optgroup = document.getElementsByTagName("optgroup");
    // const size = document.getElementById("size");
    const otherAnimal = document.getElementById("otherAnimal");
    const selectorA = document.querySelectorAll(".selectorA");

    const locationSetubal = document.querySelectorAll('.selectorA[data-location ="Setúbal"]');
    const locationLisboa = document.querySelectorAll('.selectorA[data-location ="Lisboa"]');
    const locationPorto = document.querySelectorAll('.selectorA[data-location = "Porto"]');
    const animalGato = document.querySelectorAll('.selectorA[data-animal = "Gato"]');
    const animalCao = document.querySelectorAll('.selectorA[data-animal = "Cão"]');
    const animalOutro = document.querySelectorAll('.selectorA[data-animal = "Outro"]');

    function regionn(){
        for(let i = 0; i < selectorA.length; i++){
            if(region.value == 1){
                locationLisboa[i].classList.remove("hide");
                locationSetubal[i].classList.add("hide");
                locationPorto[i].classList.add("hide");
                if(animal.value == 1){
                    animalCao[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");   
                }
                else if(animal.value == 2){
                    animalGato[i].classList.remove("hide");
                    animalCao[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");
                }
                else if(animal.value == 3){
                    animalOutro[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalCao[i].classList.add("hide");
                }
            }
            else if(region.value == 2){
                locationPorto[i].classList.remove("hide");
                locationLisboa[i].classList.add("hide");
                locationSetubal[i].classList.add("hide");
                if(animal.value == 1){
                    animalCao[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");   
                }
                else if(animal.value == 2){
                    animalGato[i].classList.remove("hide");
                    animalCao[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");
                }
                else if(animal.value == 3){
                    animalOutro[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalCao[i].classList.add("hide");
                }
            }
            else if(region.value == 3){
                locationSetubal[i].classList.remove("hide");
                locationPorto[i].classList.add("hide");
                locationLisboa[i].classList.add("hide");
                if(animal.value == 1){
                    animalCao[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");   
                }
                else if(animal.value == 2){
                    animalGato[i].classList.remove("hide");
                    animalCao[i].classList.add("hide");
                    animalOutro[i].classList.add("hide");
                }
                else if(animal.value == 3){
                    animalOutro[i].classList.remove("hide");
                    animalGato[i].classList.add("hide");
                    animalCao[i].classList.add("hide");
                }
            }
            else{
                locationPorto[i].classList.remove("hide");
                locationLisboa[i].classList.remove("hide");
                locationSetubal[i].classList.remove("hide");
            }
        }
        
    }
    // function animall(){
    //     for(let i = 0; i < selectorA.length; i++){
    //         if(animal.value == 1){
    //             animalCao[i].classList.remove("hide");
    //             animalGato[i].classList.add("hide");
    //             animalOutro[i].classList.add("hide");
    //         }
    //         else if(animal.value == 2){
    //             animalGato[i].classList.remove("hide");
    //             animalCao[i].classList.add("hide");
    //             animalOutro[i].classList.add("hide");
    //         }
    //         else if(animal.value == 3){
    //             animalOutro[i].classList.remove("hide");
    //             animalGato[i].classList.add("hide");
    //             animalCao[i].classList.add("hide");
    //         }
    //         else{
    //             animalGato[i].classList.remove("hide");
    //             animalCao[i].classList.remove("hide");
    //             animalOutro[i].classList.remove("hide");
            
    //         }
    //     }
    // }
    
    region.addEventListener("change", () => {
        regionn()
    });
    animal.addEventListener("change", () => {
        regionn()
    });
});