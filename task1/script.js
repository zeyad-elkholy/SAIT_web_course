// SAIT WDF Camp AL {Our First Website JS Part}

/*
Â  Task 1: Write a function named `toggleImageSrc` that takes a `src` string and returns the alternate image URL:
Â  Â  - If src is "https://i.ibb.co/XxKWZrm0/SAIT-LOGO.jpg",
Â  Â  Â  Â  Â return "https://i.ibb.co/v4YrnMk5/WEB-Fundamentals-Logo.png"
Â  Â  - Otherwise, return "https://i.ibb.co/XxKWZrm0/SAIT-LOGO.jpg"

*/

function toggleImageSrc(src) {
  const first = "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-cute-penguin-holding-fish-clipart-illustration-png-image_14717322.png";

  const second = "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2015/05/kernel-panic-linux.jpg";

  return src === first ? second : first;
}

const myImage = document.querySelector("img");

if (myImage) {
  myImage.onclick = () => {
    const currentSrc = myImage.getAttribute("src");

    myImage.setAttribute("src", toggleImageSrc(currentSrc));
  };
}

// ------------------------------------------------------------------------------------------

/*
    
    Â  Task 2: Write a function named `makeWelcomeHeading` that takes a `name` string and returns "Welcome To SAIT, [name]"
    
    */

function makeWelcomeHeading(name) {
  return `Welcome To /home/${name}, ${name}`;
}

const myHeading = document.querySelector("h1");

// ------------------------------------------------------------------------------------------

/*
    
    Â  Task 3:
    
    Â  1. Write a function named `storeName` that takes a `name` string and stores it in localStorage under the key "name"
    
    Â  2. Write a function named `getStoredName` that returns the value of "name" from localStorage
    
    */

function storeName(name) {
  localStorage.setItem("name", name);
}

function getStoredName() {
  return localStorage.getItem("name");
}

const myButton = document.getElementById("camp-apply");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    storeName(myName);

    if (myHeading) {
      myHeading.textContent = makeWelcomeHeading(myName);
    }
  }
}

if (myHeading) {
  if (!getStoredName()) {
    setUserName();
  } else {
    myHeading.textContent = makeWelcomeHeading(getStoredName());
  }
}

if (myButton) {
  myButton.addEventListener("click", setUserName);
}

// ------------------------------------------------------------------------------------------

// Export all functions for logic testing

// export { toggleImageSrc, makeWelcomeHeading, storeName, getStoredName };

