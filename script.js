const roomInps = document.getElementsByClassName("count");

const errorShowFunction = ()=>{
  const errorShow = document.querySelector(".errorShow")
  errorShow.innerHTML = "The sum of your rooms exceed the area constraint";
  errorShow.style.display = "block"
  setTimeout(() => {
    errorShow.style.display = "none"
  }, 2000);

}

// let aanaSelect = document.querySelector("#aanaInp");
// let paisaSelect = document.querySelector("#paisaInp");

// aanaSelect.addEventListener("change", () => {
//   if (aanaSelect.value == 5) {
//     console.log('hello');
//     // Remove all options from paisaSelect except the first one
//     while (paisaSelect.childElementCount > 1) {
//       paisaSelect.removeChild(paisaSelect.lastElementChild);
//     }
//   } 
// });

let aanaSelect = document.querySelector("#aanaInp");
let paisaSelect = document.querySelector("#paisaInp");

// Store the original options of paisaSelect
const originalPaisaOptions = Array.from(paisaSelect.children);

aanaSelect.addEventListener("change", () => {
  if (aanaSelect.value == 5) {
    console.log('hello');
    // Remove all options from paisaSelect except the first one
    while (paisaSelect.childElementCount > 1) {
      paisaSelect.removeChild(paisaSelect.lastElementChild);
    }
  } else {
    // Restore the original options of paisaSelect
    paisaSelect.innerHTML = ""; // Clear the dropdown
    originalPaisaOptions.forEach(option => paisaSelect.appendChild(option.cloneNode(true)));
  }
});

Array.from(roomInps).forEach((element) => {
  element.addEventListener("input", () => {
    const aana = parseInt(document.getElementById("aanaInp").value);
    const bedroomCount = parseInt(document.getElementById("countBed").value);
    const bathroomCount = parseInt(document.getElementById("countBath").value);
    const diningRoomCount = parseInt(
      document.getElementById("countDining").value
    );
    const livingCount = parseInt(document.getElementById("countLiving").value);
    const kitchenCount = parseInt(
      document.getElementById("countKitchen").value
    );
    const garageCount = parseInt(document.getElementById("countGarage").value);

    // Logic to restrict room combinations
    if (livingCount>1) {
      errorShowFunction();
      document.getElementById("countLiving").value = 1;
    }
    if (kitchenCount>1) {
      errorShowFunction();
      document.getElementById("countKitchen").value = 1;
    }
    if (garageCount>1) {
      errorShowFunction();
      document.getElementById("countGarage").value = 1;
    }
    if (aana < 5) {
      // if (!(bedroomCount==2 && bathroomCount==2) || !(bedroomCount==2 && bathroomCount==1)) {
      //     alert("For land area < 5 aana, only 2 Bedrooms, 1 Bathroom, and no Dining Room are allowed.");
      //     document.getElementById("countBed").value = 2;
      //     // document.getElementById("countBath").value = 1;
      //     document.getElementById("countDining").value = 0;
      // }
      if (bedroomCount > 2) {
        // console.log("Bedroom count is greater than 2");
        // errorShow.style.display = "block";
        errorShowFunction();
        document.getElementById("countBed").value = 2;
      }
      if (bathroomCount > 2) {
        // console.log("Bathroom count is greater than 2");
        // errorShow.style.display = "block";
        errorShowFunction();
        document.getElementById("countBath").value = 2;
      }
      if (diningRoomCount > 0) {
        // console.log("Dining Room count is greater than 0");
        // errorShow.style.display = "block";
        errorShowFunction();
        document.getElementById("countDining").value = 0;
      }
    } else if (aana >= 5) {
      // if (!(bedroomCount==2 && bathroomCount==2 && diningRoomCount==0) || !(bedroomCount==3 && bathroomCount==1 && diningRoomCount==0) || !(bedroomCount==2 && bathroomCount==1 && diningRoomCount==1)) {
      //     alert("For land area ≥ 5 aana, you can have 2 or 3 Bedrooms, but Dining Room is optional.");
      // }
      if (bedroomCount > 3) {
        // console.log("Bedroom count is greater than 3");
        errorShowFunction();
        document.getElementById("countBed").value = 3;
      }
      if (bathroomCount > 2) {
        // console.log("Bathroom count is greater than 2");
        errorShowFunction();
        document.getElementById("countBath").value = 2;
      }
      if (bedroomCount == 3) {
        if (bathroomCount > 1 || diningRoomCount > 0) {
          // console.log(
          //   "Bedroom count is 3 and bathroom count is greater than 1 or dining room count is greater than 0"
          // );
          errorShowFunction();
          document.getElementById("countBath").value = 1;
          document.getElementById("countDining").value = 0;
        }
      } else if (bathroomCount == 2) {
        if (bedroomCount > 2 || diningRoomCount > 0) {
          // console.log(
          //   "Bathroom count is 2 and bedroom count is greater than 2 or dining room count is greater than 0"
          // );
          errorShowFunction();
          document.getElementById("countBed").value = 2;
          document.getElementById("countDining").value = 0;
        }
      } else if (diningRoomCount == 1) {
        if (bedroomCount > 2 || bathroomCount > 1) {
          // console.log(
          //   "Dining room count is 1 and bedroom count is greater than 2 or bathroom count is greater than 1"
          // );
          errorShowFunction();
          document.getElementById("countBed").value = 2;
          document.getElementById("countBath").value = 1;
        }
      }
    }
  });
});
const genBtn = document.querySelector(".generate");
genBtn.addEventListener("click", () => {
  const aana = parseInt(document.getElementById("aanaInp").value);
  const paisa = parseInt(document.getElementById("paisaInp").value);

  const bedroomCount = parseInt(document.getElementById("countBed").value);
  const bathroomCount = parseInt(document.getElementById("countBath").value);
  const diningRoomCount = parseInt(
    document.getElementById("countDining").value
  );
  const livingCount = parseInt(document.getElementById("countLiving").value);
  const kitchenCount = parseInt(document.getElementById("countKitchen").value);
  const garageCount = parseInt(document.getElementById("countGarage").value);
  const planShowContain = document.querySelector(".planShow");
  // let aana = aanaInp.value;
  // let paisa = paisaInp.value;
  const noOfRooms = `${bedroomCount}BHK${bathroomCount == 1 ? "" : "2"}B${
    diningRoomCount > 0 ? "d" : ""
  }`;
  console.log(noOfRooms);
  let areaFolder = `${aana}aana${paisa}Paisa`;
//   let planNumber = Math.floor(Math.random() * 3) + 1;

let plansArray = ["plan1", "plan2", "plan3", "plan4", "front", "back", "side1", "side2"];
let fileNamesArray = ["plan1.png", "plan2.png", "plan3.png", "plan4.png", "plan1front.png", "plan1back.png", "plan1side1.png", "plan1side2.png"];

plansArray.forEach((type, index) => {
  let imgElement = document.querySelector(`#${type}`);
  let srcPath = `houseplanData/${areaFolder}/${noOfRooms}/${fileNamesArray[index]}`;
  imgElement.src = srcPath;
});




  // let planSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1.png`;
  // let plan2Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1.png`;
  // let plan3Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1.png`;
  // let plan4Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1.png`;
  // console.log(planSrc);

  // let frontSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1front.png`;
  // let backSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1back.png`;
  // let side1Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1side1.png`;
  // let side2Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1side2.png`;
  


  // let plan1Img = document.querySelector("#plan1");
  // let plan2Img = document.querySelector("#plan2");
  // let plan3Img = document.querySelector("#plan3");
  // let plan4Img = document.querySelector("#plan4");
  // let frontImg = document.querySelector("#front");
  // let backImg = document.querySelector("#back");
  // let side1Img = document.querySelector("#side1");
  // let side2Img = document.querySelector("#side2");
  // plan1Img.src = planSrc;
  // frontImg.src = frontSrc;
  // backImg.src = backSrc;
  // side1Img.src = side1Src;
  // side2Img.src = side2Src;
  // planImg.classList.add("planImg");
  
  // planShowContain.innerHTML = ""; // Clear existing content
  // planShowContain.appendChild(planImg);
  
  let table0 = document.querySelector("#plans4");
  table0.style.display = "block";
  let view2dButton = document.querySelector(".view2dBackButton")
  let view3dButton = document.getElementsByClassName("view3dButton")
  let table1 = document.querySelector("#views4");
  Array.from(view3dButton).forEach((e)=>{
    e.addEventListener("click", ()=>{
      table1.style.display = "block";
      table0.style.display = "none";
      view2dButton.style.display = "block"
    })
  })

  view2dButton.addEventListener("click", ()=>{
    table1.style.display = "none";
    table0.style.display = "block";
    view2dButton.style.display = "none";
})

});
