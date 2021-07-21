"use strict";
(function () {
  let total_cc = 0;
  let total_da = 0;
  let total_ecore = 0;
  // let cc_weight, da_weight, ecore_weight;
  let numAnswered = 0;

  let questions = [
    {
      question: "fabric",
      choices: {
        choice1: {
          choice: "linen",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
        choice2: {
          choice: "leather",
          weights: {
            DA: 4,
            CC: 1,
            EC: 3,
          },
        },
        choice3: {
          choice: "spandex",
          weights: {
            DA: 2,
            CC: 0,
            EC: 4,
          },
        },
        choice4: {
          choice: "denim",
          weights: {
            DA: 3,
            CC: 3,
            EC: 3,
          },
        },
      },
    },
    {
      question: "scent",
      choices: {
        choice1: {
          choice: "bread",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice2: {
          choice: "leather1",
          weights: {
            DA: 3,
            CC: 2,
            EC: 4,
          },
        },
        choice3: {
          choice: "jasmine",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
        choice4: {
          choice: "gas",
          weights: {
            DA: 2,
            CC: 0,
            EC: 4,
          },
        },
      },
    },
    {
      question: "freeDay",
      choices: {
        choice1: {
          choice: "reading",
          weights: {
            DA: 4,
            CC: 3,
            EC: 2,
          },
        },
        choice2: {
          choice: "baking",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice3: {
          choice: "sleeping",
          weights: {
            DA: 1,
            CC: 2,
            EC: 4,
          },
        },
        choice4: {
          choice: "hiking",
          weights: {
            DA: 3,
            CC: 4,
            EC: 2,
          },
        },
      },
    },
    {
      question: "pet",
      choices: {
        choice1: {
          choice: "whitecat",
          weights: {
            DA: 2,
            CC: 2,
            EC: 0,
          },
        },
        choice2: {
          choice: "blackcat",
          weights: {
            DA: 3,
            CC: 1,
            EC: 4,
          },
        },
        choice3: {
          choice: "dog",
          weights: {
            DA: 2,
            CC: 3,
            EC: 2,
          },
        },
        choice4: {
          choice: "bunny",
          weights: {
            DA: 2,
            CC: 4,
            EC: 1,
          },
        },
      },
    },
    {
      question: "food",
      choices: {
        choice1: {
          choice: "cafe",
          weights: {
            DA: 3,
            CC: 3,
            EC: 3,
          },
        },
        choice2: {
          choice: "upscale",
          weights: {
            DA: 4,
            CC: 1,
            EC: 3,
          },
        },
        choice3: {
          choice: "park",
          weights: {
            DA: 3,
            CC: 4,
            EC: 1,
          },
        },
        choice4: {
          choice: "hole",
          weights: {
            DA: 2,
            CC: 1,
            EC: 4,
          },
        },
      },
    },
  ];

  let qLocation = document.getElementsByClassName("questionBanner");

  window.addEventListener("load", init);

  function init() {
    let choices = document.querySelectorAll("input");
    for (let choice of choices) {
      choice.addEventListener("change", getAnswers);
    }
    // document.getElementById("linen-btn").addEventListener("click", getAnswers);
  }

  function getAnswers() {
    let selectedNum = this.dataset["number"];
    let questionText = this.name;
    let question = questions.find((q) => q.question === questionText);

    let selectedChoice = question.choices["choice" + selectedNum];
    total_da += selectedChoice.weights.DA;
    total_cc += selectedChoice.weights.CC;
    total_ecore += selectedChoice.weights.EC;
    numAnswered++;
    console.log(questions.length); //test

    // check if quiz is complete
    if (numAnswered === questions.length) {
      console.log("finished"); //test
      finishQuiz();
    }
    window.scrollTo({
      top: qLocation[numAnswered].offsetTop,
      behavior: "smooth",
    });
  }

  function finishQuiz() {
    let max_val = Math.max(total_cc, total_da, total_ecore);
    let resultLink = document.getElementById("results-link");
    //var resultImg = document.getElementById("resultImg");

    resultLink.classList.remove("hidden");
    if (max_val === total_cc) {
      resultLink.setAttribute("href", "/cottagecore/ccIndex.html");
      /*resultImg.src = "images/cottagecore.jpg";*/
    } else if (max_val === total_da) {
      resultLink.setAttribute("href", "/darkacademia/DA_Index.html");
      resultHeader.innerHTML =
        "<a href='/darkacademia/DA_Index.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
      /*resultImg.src = "images/darkacademia.jpg";*/
    } else {
      resultLink.setAttribute("href", "/ecore/eIndex.html");
      /*resultImg.src = "images/e-core.jpg";*/
    }
  }

  // function getAnswers() {
  //   //my own algorithm
  //   // let total_cc = 0;
  //   // let total_da = 0;
  //   // let total_ecore = 0;
  //   // let cc_weight, da_weight, ecore_weight;
  //   // let checked = 0;

  //   let fabric = document.getElementsByName("fabric");
  //   let scent = document.getElementsByName("scent");
  //   let freeDay = document.getElementsByName("freeDay");
  //   let pet = document.getElementsByName("pet");
  //   let food = document.getElementsByName("food");

  //   let qLocation = document.getElementsByClassName("questionBanner");

  //   //fabric
  //   for (let fabricChoice in fabric) {
  //     console.log(fabricChoice);
  //     if (fabric[fabricChoice].checked) {

  //       checked++;
  //       switch (fabric[fabricChoice].value) {
  //         case "linen":
  //           cc_weight = 4;
  //           da_weight = 2;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "leather":
  //           cc_weight = 1;
  //           da_weight = 4;
  //           ecore_weight = 3;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "spandex":
  //           cc_weight = 0;
  //           da_weight = 2;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "denim":
  //           cc_weight = 3;
  //           da_weight = 3;
  //           ecore_weight = 3;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //       }
  //       window.scrollTo(0, qLocation[1].offsetTop);
  //     }
  //   }

  //   //scent
  //   for (let scentChoice in scent) {
  //     if (scent[scentChoice].checked) {
  //       checked++;
  //       switch (scent[scentChoice].value) {
  //         case "bread":
  //           cc_weight = 4;
  //           da_weight = 3;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "leather1":
  //           cc_weight = 2;
  //           da_weight = 3;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "jasmine":
  //           cc_weight = 4;
  //           da_weight = 2;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "gas":
  //           cc_weight = 0;
  //           da_weight = 2;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //       }
  //       window.scrollTo(0, qLocation[2].offsetTop);
  //     }
  //   }

  //   //free day
  //   for (var freeDayChoice in freeDay) {
  //     if (freeDay[freeDayChoice].checked) {
  //       checked++;
  //       switch (freeDay[freeDayChoice].value) {
  //         case "reading":
  //           cc_weight = 3;
  //           da_weight = 4;
  //           ecore_weight = 2;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "baking":
  //           cc_weight = 4;
  //           da_weight = 3;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "sleeping":
  //           cc_weight = 2;
  //           da_weight = 1;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "hiking":
  //           cc_weight = 4;
  //           da_weight = 3;
  //           ecore_weight = 2;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //       }
  //       window.scrollTo(0, qLocation[3].offsetTop);
  //     }
  //   }

  //   //pet

  //   for (var petChoice in pet) {
  //     if (pet[petChoice].checked) {
  //       checked++;
  //       switch (pet[petChoice].value) {
  //         case "whitecat":
  //           cc_weight = 2;
  //           da_weight = 2;
  //           ecore_weight = 0;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "blackcat":
  //           cc_weight = 1;
  //           da_weight = 3;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "dog":
  //           cc_weight = 3;
  //           da_weight = 2;
  //           ecore_weight = 2;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "bunny":
  //           cc_weight = 4;
  //           da_weight = 2;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //       }
  //       window.scrollTo(0, qLocation[4].offsetTop);
  //     }
  //   }

  //   //food
  //   for (var foodChoice in food) {
  //     if (food[foodChoice].checked) {
  //       checked++;
  //       switch (food[foodChoice].value) {
  //         case "cafe":
  //           cc_weight = 3;
  //           da_weight = 3;
  //           ecore_weight = 3;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "upscale":
  //           cc_weight = 1;
  //           da_weight = 4;
  //           ecore_weight = 3;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "park":
  //           cc_weight = 4;
  //           da_weight = 3;
  //           ecore_weight = 1;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //         case "hole":
  //           cc_weight = 1;
  //           da_weight = 2;
  //           ecore_weight = 4;
  //           total_cc = total_cc + cc_weight;
  //           total_da = total_da + da_weight;
  //           total_ecore = total_ecore + ecore_weight;
  //           break;
  //       }
  //       window.scrollTo(0, qLocation[5].offsetTop);
  //     }
  //   }

  //   //music

  //   console.log(checked); // test
  //   //handle results
  //   if (checked === 5) {
  //     const max_val = Math.max(total_cc, total_da, total_ecore);
  //     var resultHeader = document.getElementById("resultHeader");
  //     //var resultImg = document.getElementById("resultImg");

  //     if (max_val === total_cc) {
  //       resultHeader.innerHTML = "<a href='/cottagecore/ccIndex.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
  //       /*resultImg.src = "images/cottagecore.jpg";*/

  //     }
  //     else if (max_val === total_da) {
  //       resultHeader.innerHTML = "<a href='/darkacademia/DA_Index.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
  //       /*resultImg.src = "images/darkacademia.jpg";*/
  //     }
  //     else {
  //       resultHeader.innerHTML = "<a href='/ecore/eIndex.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
  //       /*resultImg.src = "images/e-core.jpg";*/

  //     }
  //   }
  // }
})();
