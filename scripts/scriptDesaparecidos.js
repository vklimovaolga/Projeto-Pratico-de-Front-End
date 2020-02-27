document.addEventListener("DOMContentLoaded", ()=>{
                const container = document.getElementById("container");
                const region = document.getElementById("region");
                const animal = document.getElementById("animal");
                const gender = document.getElementById("gender");
                // const breed = document.getElementById("breed");
                // const optgroup = document.getElementsByTagName("optgroup");
                // const size = document.getElementById("size");
                const otherAnimal = document.getElementById("otherAnimal");
                const selectorA = document.getElementsByClassName("selectorA");
            
                const locationSetubal = document.querySelectorAll('.selectorA[data-location ="Setúbal"]');
                const locationLisboa = document.querySelectorAll('.selectorA[data-location ="Lisboa"]');
                const locationPorto = document.querySelectorAll('.selectorA[data-location = "Porto"]');
                const animalGato = document.querySelectorAll('.selectorA[data-animal = "Gato"]');
                const animalCao = document.querySelectorAll('.selectorA[data-animal = "Cão"]');
                const animalOutro = document.querySelectorAll('.selectorA[data-animal = "Outro"]');
    

                // var myElement = document.getElementById('ddlViewBy');
                // var myValue = myElement.querySelector('[selected]').value;
               

                region.addEventListener("change", () => {
                    //  Qualquer Distrito/região
                    if(region.value == 0){
                        for(let i = 0; i < locationSetubal.length; i++){
                            locationSetubal[i].classList.remove("hide");
                        }
                        for(let i = 0; i < locationLisboa.length; i++){
                            locationLisboa[i].classList.remove("hide");
                        }
                        for(let i = 0; i < locationPorto.length; i++){
                            locationPorto[i].classList.remove("hide");
                        }
                        
                    }
                    //  Lisboa
                    if(region.value == 1){
                        for(let i = 0; i < locationLisboa.length; i++){
                            locationLisboa[i].classList.remove("hide");
                        }
                        for(let i = 0; i < locationSetubal.length; i++){
                            locationSetubal[i].classList.add("hide");
                        }
                        for(let i = 0; i < locationPorto.length; i++){
                            locationPorto[i].classList.add("hide");
                        }

                        animal.addEventListener("change", () => {
                        
                            //  Cão
                            if(animal.value == 1){
                            
        
                                for(let i = 0; i < animalGato.length; i++){
                                    animalGato[i].classList.add("hide");
                                }
                                for(let i = 0; i< animalCao.length; i++){
                                    animalCao[i].classList.remove("hide");
                                }
                                for(let i = 0; i < animalOutro.length; i++){
                                    animalOutro[i].classList.add("hide");
                                }
                            }});
                        
                    } 
                    //   Porto
                    if(region.value == 2){
                        for(let i = 0; i < locationPorto.length; i++){
                            locationPorto[i].classList.remove("hide");
                        }
                        for(let i = 0; i < locationLisboa.length; i++){
                            locationLisboa[i].classList.add("hide");
                        }
                        for(let i = 0; i < locationSetubal.length; i++){
                            locationSetubal[i].classList.add("hide");
                        }
                    }
                     //  Setúbal
                    if(region.value == 3){
                        for(let i = 0; i < locationSetubal.length; i++){
                            locationSetubal[i].classList.remove("hide");
                        }
                        for(let i = 0; i < locationLisboa.length; i++){
                            locationLisboa[i].classList.add("hide");
                        }
                        for(let i = 0; i < locationPorto.length; i++){
                            locationPorto[i].classList.add("hide");
                        }
                    }
                });
               
                animal.addEventListener("change", () => {
                    //  Qualquer Espécie
                    if(animal.value == 0){
                        for(let i = 0; i < animalGato.length; i++){
                            animalGato[i].classList.remove("hide");
                        }
                        for(let i = 0 ; i < animalCao.length; i++){
                            animalCao[i].classList.remove("hide");
                        }
                        for(let i = 0; i < animalOutro.length; i++){
                            animalOutro[i].classList.remove("hide");
                        }
                    }
                    //  Cão
                    if(animal.value == 1){
                        // breed.classList.remove("hide");
                        // optgroup[0].classList.remove("hide");
                        // size.classList.remove("hide");
                        // otherAnimal.classList.remove("show");

                        for(let i = 0; i < animalGato.length; i++){
                            animalGato[i].classList.add("hide");
                        }
                        for(let i = 0; i< animalCao.length; i++){
                            animalCao[i].classList.remove("hide");
                        }
                        for(let i = 0; i < animalOutro.length; i++){
                            animalOutro[i].classList.add("hide");
                        }
                    }
                    //  Gato
                    if(animal.value == 2){
                        // breed.classList.remove("hide");
                        // optgroup[1].classList.remove("hide");
                        // size.classList.add("hide");
                        // otherAnimal.classList.remove("show"); 

                        for(let i = 0 ; i < animalCao.length; i++){
                            animalCao[i].classList.add("hide");
                        }
                        for(let i = 0; i< animalGato.length; i++){
                            animalGato[i].classList.remove("hide");
                        }
                        for(let i = 0; i < animalOutro.length; i++){
                            animalOutro[i].classList.add("hide");
                        }
                    }
                    //  Outro
                    if(animal.value == 3){
                        // breed.classList.add("hide");
                        // size.classList.add("hide");
                        // otherAnimal.classList.add("show");

                        for(let i = 0; i < animalOutro.length; i++){
                            animalOutro[i].classList.remove("hide");
                        }
                        for(let i = 0 ; i < animalCao.length; i++){
                            animalCao[i].classList.add("hide");
                        }
                        for(let i = 0; i < animalGato.length; i++){
                            animalGato[i].classList.add("hide");
                        }
                    }
                });
                const macho = document.querySelectorAll('.selectorA[data-gender="Macho"]');
                const femea = document.querySelectorAll('.selectorA[data-gender="Fêmea"]');
                //  Gender
                gender.addEventListener("change", () => {
                    if(gender.value == 0){
                        for(let i = 0; i < macho.length; i++){
                           macho[i].classList.remove("hide");
                        }
                        for(let i = 0; i < femea.length; i++){
                           femea[i].classList.remove("hide");
                        }
                    }
                    if(gender.value == 1){
                        for(let i = 0; i < macho.length; i++){
                           macho[i].classList.remove("hide");
                        }
                        for(let i = 0; i < femea.length; i++){
                           femea[i].classList.add("hide");
                        }
                    }
                    if(gender.value == 2){
                        for(let i = 0; i < femea.length; i++){
                          femea[i].classList.remove("hide");
                        }
                        for(let i = 0; i < macho.length; i++){
                           macho[i].classList.add("hide");
                        }
                    }
                });

                const colorPicker = document.getElementsByClassName("colorPicker");
                const colorBlack = document.querySelectorAll('.selectorA[data-color="1"]');
                const colorWhite = document.querySelectorAll('.selectorA[data-color="2"]');
                const colorBrown = document.querySelectorAll('.selectorA[data-color="3"]');
                const colorGray = document.querySelectorAll('.selectorA[data-color="4"]');
                const colorOrange = document.querySelectorAll('.selectorA[data-color="5"]');
                const colorGreen = document.querySelectorAll('.selectorA[data-color="6"]');
                const notBlack = document.querySelectorAll('.selectorA[data-color]:not([data-color="1"])');
                const notWhite = document.querySelectorAll('.selectorA[data-color]:not([data-color="2"])');
                const notBrown = document.querySelectorAll('.selectorA[data-color]:not([data-color="3"])');
                const notGray = document.querySelectorAll('.selectorA[data-color]:not([data-color="4"])');
                const notOrange = document.querySelectorAll('.selectorA[data-color]:not([data-color="5"])');
                const notGreen= document.querySelectorAll('.selectorA[data-color]:not([data-color="6"])');

                colorPicker[0].addEventListener("click", () => {
                    for(let i = 0; i<colorBlack.length; i++){
                         colorBlack[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notBlack.length; i++){
                        notBlack[i].classList.add("hide");
                    }
                });
                colorPicker[1].addEventListener("click", () => {
                    for(let i = 0; i<colorWhite.length; i++){
                        colorWhite[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notWhite.length; i++){
                        notWhite[i].classList.add("hide");
                    } 
                });
                colorPicker[2].addEventListener("click", () => {
                    for(let i = 0; i<colorBrown.length; i++){
                        colorBrown[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notBrown.length; i++){
                        notBrown[i].classList.add("hide");
                    }
                });
                colorPicker[3].addEventListener("click", () => {
                    for(let i = 0; i<colorGray.length; i++){
                         colorGray[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notGray.length; i++){
                        notGray[i].classList.add("hide");
                    }
                });
                colorPicker[4].addEventListener("click", () => {
                    for(let i = 0; i<colorOrange.length; i++){
                         colorOrange[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notOrange.length; i++){
                        notOrange[i].classList.add("hide");
                    }
                });
                colorPicker[5].addEventListener("click", () => {
                    for(let i = 0; i<colorGreen.length; i++){
                         colorGreen[i].classList.remove("hide");
                    }
                    for(let i = 0; i < notGreen.length; i++){
                        notGreen[i].classList.add("hide");
                    }
                });
            });