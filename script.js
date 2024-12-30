const roomInps = document.getElementsByClassName("count");

const errorShowFunction = ()=>{
  const errorShow = document.querySelector(".errorShow")
  errorShow.innerHTML = "The sum of your rooms exceed the area constraint";
  errorShow.style.display = "block"
  setTimeout(() => {
    errorShow.style.display = "none"
  }, 1500);

}

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
        document.getElementById("countBath").value = 1;
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
  let planSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1.png`;
  console.log(planSrc);

  let frontSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1front.png`;
  let backSrc = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1back.png`;
  let side1Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1side1.png`;
  let side2Src = `houseplanData/${areaFolder}/${noOfRooms}/plan1/plan1side2.png`;
  


  let planImg = document.querySelector(".planImg");
  let frontImg = document.querySelector("#front");
  let backImg = document.querySelector("#back");
  let side1Img = document.querySelector("#side1");
  let side2Img = document.querySelector("#side2");
  planImg.src = planSrc;
  frontImg.src = frontSrc;
  backImg.src = backSrc;
  side1Img.src = side1Src;
  side2Img.src = side2Src;
  planImg.classList.add("planImg");
  
  planShowContain.innerHTML = ""; // Clear existing content
  planShowContain.appendChild(planImg);

  let table = document.querySelector("table");
  table.style.display = "block";
});
