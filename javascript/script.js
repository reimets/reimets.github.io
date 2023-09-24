// selles variandis on + kogu aeg nähtaval ja parempoolne menüü on natuke allpool, kui minu nimi

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const desktopMenu = document.querySelector(".desktop-menu");

  menuToggle.addEventListener("click", () => {
      if (desktopMenu.style.display === "none" || desktopMenu.style.display === "") {
          desktopMenu.style.display = "block";
      } else {
          desktopMenu.style.display = "none";
      }
  });

  // Hüpikakna avamine "Open To Work" ovaalile
  const ovalOpenToWork = document.querySelector(".oval:nth-child(1)");
  const openToWorkPopup = document.getElementById("open-to-work-popup");

  // ovalOpenToWork.addEventListener("mouseenter", () => {
  //     openToWorkPopup.style.display = "block";
  // });
    ovalOpenToWork.addEventListener("mouseenter", () => {
      openToWorkPopup.classList.add("show");
  });

  // Hüpikakna sulgemine "Open To Work" ovaalil
  const closeOpenToWorkPopup = document.getElementById("close-open-to-work-popup");

  // closeOpenToWorkPopup.addEventListener("click", () => {
  //     openToWorkPopup.style.display = "none";
  // });
    closeOpenToWorkPopup.addEventListener("click", () => {
      openToWorkPopup.classList.remove("show");
  });

  // Hüpikakna avamine "Invite Me" ovaalile
  const ovalInviteMe = document.querySelector(".oval:nth-child(2)");
  const inviteMePopup = document.getElementById("invite-me-popup");

  // ovalInviteMe.addEventListener("mouseenter", () => {
  //     inviteMePopup.style.display = "block";
  // });
    ovalInviteMe.addEventListener("mouseenter", () => {
      inviteMePopup.classList.add("show");
  });

  // Hüpikakna sulgemine "Invite Me" ovaalil
  const closeInviteMePopup = document.getElementById("close-invite-me-popup");

  // closeInviteMePopup.addEventListener("click", () => {
  //     inviteMePopup.style.display = "none";
  // });
    closeInviteMePopup.addEventListener("click", () => {
      inviteMePopup.classList.remove("show");
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      // openToWorkPopup.style.display = "none"; // kadus j'rsku 'ra'
      openToWorkPopup.classList.remove("show"); // l'heb sujuvalt 'ra

      // inviteMePopup.style.display = "none";
      inviteMePopup.classList.remove("show"); // l'heb sujuvalt 'ra
    }
  });
});

  // kaks lisa varianti:

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const desktopMenu = document.getElementById("portfolio-nav");

//   // Funktsioon, mis lisab või eemaldab "+" märgi sõltuvalt ekraani laiusest
//   function toggleMenuIcon() {
//       if (window.innerWidth <= 700) {
//           menuToggle.style.display = "block";
//       } else {
//           menuToggle.style.display = "none";
//       }
//   }

//   // Kutsu funktsioon, kui leht laadib
//   toggleMenuIcon();

//   // Kutsu funktsioon, kui brauseri aken muutub suuruse või orientatsiooni
//   window.addEventListener("resize", toggleMenuIcon);

//   // Lisa sündmuskuulaja "+" märgi klõpsamiseks
//   menuToggle.addEventListener("click", () => {
//       if (desktopMenu.style.display === "none" || desktopMenu.style.display === "") {
//           desktopMenu.style.display = "block";
//       } else {
//           desktopMenu.style.display = "none";
//       }
//   });
// });


// //// see variant kaotab plussi ja ilmutab plussi kui ekraan muutub kenasti väiksemaks, aga menüü on kehvasti
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const desktopMenu = document.getElementById("portfolio-nav");

//   // Funktsioon, mis lisab või eemaldab "+" märgi sõltuvalt ekraani laiusest
//   function toggleMenuIcon() {
//       if (window.innerWidth <= 700) {
//           menuToggle.style.display = "block";
//           desktopMenu.style.display = "none"; // Peida menüü väiksema ekraani jaoks
//       } else {
//           menuToggle.style.display = "none";
//           desktopMenu.style.display = "block"; // Näita menüü laiema ekraani jaoks
//       }
//   }

//   // Kutsu funktsioon, kui leht laadib
//   toggleMenuIcon();

//   // Kutsu funktsioon, kui brauseri aken muutub suuruse või orientatsiooni
//   window.addEventListener("resize", toggleMenuIcon);

//   // Lisa sündmuskuulaja "+" märgi klõpsamiseks
//   menuToggle.addEventListener("click", () => {
//       if (desktopMenu.style.display === "none" || desktopMenu.style.display === "") {
//           desktopMenu.style.display = "block";
//       } else {
//           desktopMenu.style.display = "none";
//       }
//   });
// });
