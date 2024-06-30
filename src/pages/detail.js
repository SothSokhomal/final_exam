import { url, getOnePet } from "../api/api.js"

function displayPetDetail(pet) {
  // 1. select the #petDetail
  const petDetail = document.querySelector("#petDetail")
  // 2. update the content of petDetail -> detialCard
  petDetail.innerHTML = `
  
  <div class="detailCard">
      <img src="${url}/api/files/${pet.collectionId}/${pet.id}/${pet.img}" alt="">
      <h4>Name: ${pet.name}  </h4>
      <h4>Age: ${pet.age} </h4>
      <h4>Gender: ${pet.gender} </h4>
      <p>Description: ${pet.description}</p>
      <a href="#"> Contact: ${pet.contact}</a>
    </div>
  
  `
  
}



window.addEventListener("DOMContentLoaded", async () => {
  // 1. create params object to get access to window url search
  const params = new URLSearchParams(window.location.search)
  // 2. from the params object, get the id 
  const id = params.get("id")
  console.log(id)
  // 3. from the id, get the pet of this id from the api
  const pet = await getOnePet(id)
  console.log(pet)
  // 4. display the pet detail with the pet data you just got
  displayPetDetail(pet)
  

})

