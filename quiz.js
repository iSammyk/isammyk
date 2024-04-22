//   const firebaseConfig = {
//   apiKey: "AIzaSyDtpT23EPLkTS9kfEf6Aa02Wli2Ehgfpqw",
//   authDomain: "isammy-k.firebaseapp.com",
//   projectId: "isammy-k",
//   storageBucket: "isammy-k.appspot.com",
//   messagingSenderId: "243915862365",
//   appId: "1:243915862365:web:e0c543ab2caf0ed241b8b4",
//  };
const firebaseConfig = {
  apiKey: "AIzaSyDtpT23EPLkTS9kfEf6Aa02Wli2Ehgfpqw",
  authDomain: "isammy-k.firebaseapp.com",
  projectId: "isammy-k",
  storageBucket: "isammy-k.appspot.com",
  messagingSenderId: "243915862365",
  appId: "1:243915862365:web:e0c543ab2caf0ed241b8b4",
  measurementId: "G-70P28M0HYN"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();




let displayquestion = document.getElementById("display-question")
let option1 = document.getElementById("option-one-label")
let option2 = document.getElementById("option-two-label")
let option3 = document.getElementById("option-three-label")
let option4 = document.getElementById("option-four-label")
let disQues = document.getElementById("disQues")
let time = document.getElementById("time")
let displayNum = document.getElementById("question-number")
let disLength = document.getElementById("length")
let showUsername = document.getElementById("user")
let main = document.getElementById("maint")
let kojo = document.getElementById("kojo")
let input = document.getElementById("mang")
let spinner = document.getElementById("spinner")

main.style.display = "none"
// let seconds = document.getElementById("seconds")



let quiz1 =
{
  gamePin: "151030",
  hasStarted: false,
  questions: [
    {
      index: 0,
      gamePin: "151030",
      hasStarted: false,
      question: "Which country has the longest coastline in the world?",
      options: ["USA", "Canada", "Ghana", "Nigeria"],
      correctOption: "Canada"
    },
    {
      index: 1,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the capital of Malta?",
      options: ["London", "Korea", "Mayadiram", "Valetta"],
      correctOption: "Valetta"
    },
    {
      index: 2,
      gamePin: "151030",
      hasStarted: false,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctOption: "Carbon Dioxide"
    },
    {
      index: 3,
      gamePin: "151030",
      hasStarted: false,
      question: "In which US state would you find Harvard University?",
      options: ["Arizona", "Texas", "Califonia", "Massachusetts"],
      correctOption: "Massachusetts"
    },
    {
      index: 4,
      gamePin: "151030",
      hasStarted: false,
      question: "Which three countries does Mexico share a land border with?",
      options: ["Japan,Italy and USA", "USA, Belize and Guatemala", "Nigeria, England and Guatemala", "Belgium,USA and Spain"],
      correctOption: "USA, Belize and Guatemala"
    },
    {
      index: 5,
      gamePin: "151030",
      hasStarted: false,
      question: "Astana is the capital city of which country?",
      options: ["Tokyo", "Peru", "Tennesee", "Kazakhstan"],
      correctOption: "Kazakhstan"
    },
    {
      index: 6,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the biggest island in the world?",
      options: ["lagos Island", "Greenland", "Germany", "Brussell"],
      correctOption: "Greenland"
    },
    {
      index: 7,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the capital of Estonia?",
      options: ["Morroco", "Tallinn", "Andonna", "Angola"],
      correctOption: "Tallinn"
    },
    {
      index: 8,
      gamePin: "151030",
      hasStarted: false,
      question: "Which city currently has the highest population in the world?",
      options: ["Spain", "Tokyo", "Peru", "Nigeria"],
      correctOption: "Tokyo"
    },
    {
      index: 9,
      gamePin: "151030",
      hasStarted: false,
      question: "How many large islands make up Hawaii?",
      options: ["Three", "Two", "Four", "Eight"],
      correctOption: "Eight"
    },
    {
      index: 10,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the name of the microstate located between Spain and France?",
      options: ["Andorra", "Chicago", "Lima", "Ottawo"],
      correctOption: "Andorra"
    },
    {
      index: 11,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the highest peak in Africa?",
      options: ["Mount Benjamin", "Oke Olumo", "Mount Kilimanjaro", "Mount Everest"],
      correctOption: "Mount Kilimanjaro"
    },
    {
      index: 12,
      gamePin: "151030",
      hasStarted: false,
      question: "Which country has the most pyramids in the world?",
      options: ["Sudan", "China", "Qatar", "India"],
      correctOption: "Sudan"
    },
    {
      index: 13,
      gamePin: "151030",
      hasStarted: false,
      question: "In which US state would you find Fort Knox?",
      options: ["Kentucky", "nairobi", "Phoenix", "Buffalo"],
      correctOption: "Kentucky"
    },
    {
      index: 14,
      gamePin: "151030",
      hasStarted: false,
      question: "Mount Vesuvius casts a shadow over which modern Italian city?",
      options: ["Bangladash", "Bugat", "Kendozi", "Naples"],
      correctOption: "Naples"
    },
    {
      index: 15,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the largest desert in the world?",
      options: ["Kentra", "elect", "Ikorodu", "Antarctica"],
      correctOption: "Antarctica"
    },
    {
      index: 16,
      gamePin: "151030",
      hasStarted: false,
      question: "Which London Underground line is represented as green on the tube map?",
      options: ["Sctrach", "Station", "The District Line", "Brussels"],
      correctOption: "The District Line"
    },
    {
      index: 17,
      gamePin: "151030",
      hasStarted: false,
      question: "On the London Tube network, which is the only station to begin with the letter 'I'?",
      options: ["Ickenham", "Katkhanan", "Ijakumo", "Ukrania"],
      correctOption: "Ickenham",
    },
    {
      index: 18,
      gamePin: "151030",
      hasStarted: false,
      question: "In which European city would you find Manneken Pis – a statue of a small boy urinating into a fountain?",
      options: ["Spain", "TokBrussels", "Brussels", "Mercury"],
      correctOption: "Brussels"
    },
    {
      index: 19,
      gamePin: "151030",
      hasStarted: false,
      question: "In which city would you find La Sagrada Familia?",
      options: ["Barcelona", "Villareal", "Germany", "Real Madrid"],
      correctOption: "Barcelona"
    },
    {
      index: 20,
      gamePin: "151030",
      hasStarted: false,
      question: "What is the highest mountain in Britain?",
      options: ["Kent", "Colchester", "The Seine", "Ben Nevis"],
      correctOption: "Ben Nevis"
    },

  ],

}
let quiz2 = [
  {
    gamePin: "202030",
    hasStarted: false,
    questions: [
      {
        index: 0,
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["John Steinbeck", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
        correctOption: "Harper Lee"
      },
      {
        index: 1,
        question: "What is the chemical symbol for silver?",
        options: ["Sv", "Ag", "Si", "Au"],
        correctOption: "Ag"
      },
      {
        index: 2,
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctOption: "Carbon Dioxide"
      },
      {
        index: 3,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctOption: "Paris"
      },
      {
        index: 4,
        question: "How many teeth does an adult human have?",
        options: ["28", "30", "32", "36"],
        correctOption: "32"
      },
      {
        index: 5,
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Skin", "Liver"],
        correctOption: "Skin"
      },
      {
        index: 6,
        question: "Which gas do plants release into the atmosphere during respiration?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctOption: "Carbon Dioxide"
      },
      {
        index: 7,
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "George Orwell"],
        correctOption: "F. Scott Fitzgerald"
      },
      {
        index: 8,
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Arctic Desert"],
        correctOption: "Sahara Desert"
      },
      {
        index: 9,
        question: "In which country is the Taj Mahal located?",
        options: ["India", "Egypt", "Turkey", "China"],
        correctOption: "India"
      },
      {
        index: 10,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctOption: "Au"
      },
      {
        index: 11,
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOption: "Jupiter"
      },
      {
        index: 12,
        question: "Which gas is responsible for the green color of leaves?",
        options: ["Oxygen", "Carbon Dioxide", "Chlorophyll", "Nitrogen"],
        correctOption: "Chlorophyll"
      },
      {
        index: 13,
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "Leo Tolstoy"],
        correctOption: "Jane Austen"
      }
    ]


  }
]
let quiz3 = [
  {
    gamePin: "199033",
    hasStarted: false,
    questions: [
      {
        index: 0,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctOption: "Paris"
      },
      {
        index: 1,
        question: "Who is the current President of the United States?",
        options: ["Barack Obama", "Joe Biden", "Donald Trump", "George W. Bush"],
        correctOption: "Joe Biden"
      },
      {
        index: 2,
        question: "Which country recently won the UEFA European Championship in football (Euro 2020)?",
        options: ["France", "Germany", "Portugal", "Italy"],
        correctOption: "Italy"
      },
      {
        index: 3,
        question: "What is the largest social media platform in the world?",
        options: ["Twitter", "Instagram", "Facebook", "Snapchat"],
        correctOption: "Facebook"
      },
      {
        index: 4,
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["United States", "China", "Brazil", "Japan"],
        correctOption: "Japan"
      },
      {
        index: 5,
        question: "Who won the Nobel Prize in Physics in 2020 for their work on black holes?",
        options: ["Albert Einstein", "Stephen Hawking", "Roger Penrose", "Isaac Newton"],
        correctOption: "Roger Penrose"
      },
      {
        index: 6,
        question: "Which company became the world's most valuable publicly traded company in 2021?",
        options: ["Apple", "Amazon", "Microsoft", "Google"],
        correctOption: "Apple"
      },
      {
        index: 7,
        question: "In 2021, which spacecraft successfully landed on Mars and began exploring the planet?",
        options: ["Voyager 1", "Hubble Space Telescope", "Mars Rover Perseverance", "New Horizons"],
        correctOption: "Mars Rover Perseverance"
      },
      {
        index: 8,
        question: "Which country launched the first-ever crewed mission to the International Space Station (ISS) in 2020?",
        options: ["Russia", "United States", "China", "India"],
        correctOption: "China"
      },
      {
        index: 9,
        question: "In 2021, which cryptocurrency gained widespread attention and reached record-high prices?",
        options: ["Ethereum", "Ripple (XRP)", "Litecoin", "Bitcoin"],
        correctOption: "Bitcoin"
      },
      {
        index: 10,
        question: "Who won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Brazil", "Belgium"],
        correctOption: "France"
      },
      {
        index: 11,
        question: "Which country recently became the first to launch a digital currency issued by its central bank?",
        options: ["United States", "China", "European Union", "Japan"],
        correctOption: "China"
      },
      {
        index: 12,
        question: "In 2021, which global event was postponed to 2021 due to the COVID-19 pandemic?",
        options: ["Summer Olympics", "FIFA World Cup", "UEFA European Championship", "Winter Olympics"],
        correctOption: "Summer Olympics"
      },
      {
        index: 13,
        question: "Who is the current Prime Minister of the United Kingdom?",
        options: ["David Cameron", "Theresa May", "Boris Johnson", "Tony Blair"],
        correctOption: "Boris Johnson"
      },
      {
        index: 14,
        question: "Which country recently signed the Abraham Accords, normalizing diplomatic relations with Israel?",
        options: ["Saudi Arabia", "Egypt", "United Arab Emirates", "Iran"],
        correctOption: "United Arab Emirates"
      },
      {
        index: 15,
        question: "In 2021, which tech billionaire became the world's richest person?",
        options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
        correctOption: "Elon Musk"
      },
      {
        index: 16,
        question: "Which country experienced a major outbreak of wildfires in 2020, leading to widespread destruction and loss of wildlife?",
        options: ["Australia", "Brazil", "Canada", "Russia"],
        correctOption: "Australia"
      },
      {
        index: 17,
        question: "Who is the current Secretary-General of the United Nations?",
        options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Ban Ki-moon"],
        correctOption: "António Guterres"
      },
      {
        index: 18,
        question: "Which country recently launched the Chang'e-5 mission, successfully bringing lunar samples back to Earth?",
        options: ["Russia", "United States", "China", "India"],
        correctOption: "China"
      },
      {
        index: 19,
        question: "In 2020, which country was the first to approve a COVID-19 vaccine for public use?",
        options: ["United States", "Russia", "China", "United Kingdom"],
        correctOption: "Russia"
      },
      {
        index: 20,
        question: "Who won the Nobel Prize in Literature in 2020 for her novel 'The Testaments'?",
        options: ["Haruki Murakami", "Margaret Atwood", "J.K. Rowling", "Salman Rushdie"],
        correctOption: "Margaret Atwood"
      },
      {
        index: 21,
        question: "Which social justice movement gained prominence in 2020, advocating for racial equality and justice?",
        options: ["Me Too Movement", "Black Lives Matter", "March for Our Lives", "Climate Strike"],
        correctOption: "Black Lives Matter"
      },
      {
        index: 22,
        question: "Which European country faced a debt crisis and financial turmoil in recent years, leading to bailout programs?",
        options: ["Italy", "France", "Greece", "Spain"],
        correctOption: "Greece"
      },
      {
        index: 23,
        question: "In 2020, which environmental activist was named TIME magazine's Person of the Year?",
        options: ["Greta Thunberg", "Al Gore", "David Attenborough", "Jane Goodall"],
        correctOption: "Greta Thunberg"
      },
      {
        index: 24,
        question: "Which country recently experienced a major earthquake and tsunami, causing widespread destruction?",
        options: ["Indonesia", "Japan", "Mexico", "New Zealand"],
        correctOption: "Indonesia"
      },
      {
        index: 25,
        question: "Who is the current Chancellor of Germany?",
        options: ["Angela Merkel", "Gerhard Schröder", "Helmut Kohl", "Olaf Scholz"],
        correctOption: "Olaf Scholz"
      }
    ],
  }
]


let knot = document.querySelector(".game-quiz-container");
let currentindex = 0;
let pickedAns = [];
let score = 0;
let quizz = [];
let currentopt;
let currentAns;
let queLength;
let quiz;
// let interval = null;
let seconds = 10;

kojo.style.display = "none"

// function setIt() {
//   quiz1.questions.forEach((el, i) => {
//     db.collection("151030").doc(`id${i}`).set(el)
//       .then(() => {
//         console.log("Document successfully written!");
//       })
//       .catch((error) => {
//         console.error("Error writing document: ", error);
//       });
//   })
// }
// setIt();

// I SET THE QUIZZEZ INSIDE FIREBASE FROM HERE 

// db.collection("just").doc("151030").set({
//   mygamepin: quiz1,
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });


// db.collection("just").doc("202030").set({
//   mygamepin: quiz2,
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

// db.collection("just").doc("199033").set({
//   mygamepin: quiz3,
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

let gamePin = JSON.parse(localStorage.getItem("pin"))
console.log(gamePin);
async function getQue() {
  // var allGame = await db.collection("just");
  console.log("Hey");
  db.collection("151030").where("hasStarted", "==", true).where("index", "==", currentindex)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log("Got here");
        // quiz = doc.data()
        // console.log(quiz);
        // quizz.push(quiz);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  // await db.collection("just")
  //   .doc(gamePin)
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       const quizData = doc.data().mygamepin.find((quiz) => quiz.gamePin === gamePin);
  //       if (quizData) {
  //         quiz = quizData;
  //         quizz.push(quiz);
  //         showQue(); // Call showQue() here after fetching the quiz data
  //       } else {
  //         console.log("Quiz data not found");
  //       }
  //     } else {
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("Error getting document:", error);
  //   });

}
getQue();
let maya;
async function fetchQue() {
  quizz = [];
  await db.collection("151030").where("hasStarted", "==", true).where("index", "==", currentindex)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        maya = doc.data();
        console.log(maya);
        quizz.push(maya);
        showQue()
      });
      console.log(quizz);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

fetchQue();


setTimeout(() => {
  main.style.display = "block"
  spinner.style.display = "none"
  showQue()
  count()
}, 4000);

function showQue() {
  if (quizz) {
    quiz = quizz[0]
    // console.log(quiz.questions.length);
    console.log("Found quiz:", quiz);
    // disLength.innerHTML = quiz.questions.length;
    displayNum.innerHTML = quiz.index + 1;
    var docRef = db.collection("151030");
    docRef.get().then((querySnapshot) => {
    const numberOfDocs = querySnapshot.size;
    console.log("Number of documents:", numberOfDocs);
    if (numberOfDocs) {
        disLength.innerHTML = numberOfDocs;
    } else {
        console.error("Element with ID 'docCount' not found.");
    }
    }).catch((error) => {
            console.log("Error getting document:", error);
    });
    currentAns = quiz.correctOption
    disQues.innerHTML = `<div>${quiz.question}</div>`
    opt.innerHTML = ""
    currentopt = quiz.options
    for (let i = 0; i < currentopt.length; i++) {
      // const element = currentopt[i];
      // console.log(element);
      opt.innerHTML += `
      <div class="mot mt-2 d-flex align-items-center rounded-2">
              <span class="d-flex align-items-center text-center justify-content-center" id=" boss" style="width: 100vw; height:100%;">
            <label class="kill w-100 fw-bold text-white rounded-2">${currentopt[i]}
            <input onchange="pickAns(event, ${i})" id="mang" value="${currentopt[i]}" name="maya" type="radio"/>
            </label>
            </span>
          </div>
    `;
    }
  }

}


// });
let username;
let recieve = 0;
function showlb() {
  admin = JSON.parse(localStorage.getItem('admin'));
  console.log(admin);
  showUsername.innerHTML = ""; // Clear the previous content before displaying new data
  let nextQuesbtn = admin ? `<button class="btn btn-primary my-2" onclick="net()"><span> NEXT QUESTION</span></button>` : '';
  showUsername.innerHTML += nextQuesbtn;
  db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(doc.id, " => ", doc.data());
      const username = doc.id;
      const score = doc.data().score;
      if (username) {
        const userHTML = `<div class="justify-content-between align-items-center pt-2 px-2 mx-auto bg-white rounded-4" style="width: 90%; display:flex; ">
          <p class="h5 fw-bold">${username}</p>
          <p class="fs-3 fw-bold">${score}</p>
        </div>
        <br>`;
        showUsername.innerHTML += userHTML; // Append the HTML for each user
      } else {
        console.log("Username is missing or empty:", username);
      }
    });
  });
}

console.log(recieve);
showlb();
let userid;



async function pickAns(ev, i) {
  db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      data = doc.data()
      userid = data.username
    });
  });
  const optionInputs = document.querySelectorAll('input[name="maya"]');
  for (const optionInput of optionInputs) {
    optionInput.disabled = true;
  }

  let selected = ev.target.value;

  if (currentAns === selected) {
    recieve += 100;
    ev.target.parentElement.style.backgroundColor = "green";
  } else {
    ev.target.parentElement.style.backgroundColor = "red";
    // Highlight the correct answer
    optionInputs.forEach((input) => {
      if (input.value === currentAns) {
        input.parentElement.style.backgroundColor = "green";
      }
    });
  }

  if (username) {
    showUsername.innerHTML = "";
    showUsername.innerHTML += `<div class="justify-content-between align-items-center pt-2 px-2 mx-auto bg-white rounded-4" style="width: 90%; display:flex;"> 
    <p class="h5 fw-bold"> ${username}</p>
    <p class="fs-3 fw-bold"> ${recieve}</p>
    </div>
    <br>`;

    if (userid) {
      // Save the data to Firestore immediately after the user clicks on an answer
      db.collection("users").doc(userid).set({
        score: recieve,
      })
        .then(() => {
          console.log("Data saved to Firestore:", recieve);
        })
        .catch((error) => {
          console.error("Error saving data to Firestore: ", error);
        });
    }
  }

}


// console.log(userid); 

// async function net() {
//   currentindex++
//   console.log(currentindex);
//   var washingtonRef = await db.collection("151030").doc(`id${currentindex}`);
//   console.log(washingtonRef);

//   // Set the "capital" field of the city 'DC'
//   washingtonRef.update({
//     hasStarted: true
//   })
//     .then(async () => {
//       // console.log("Document successfully updated!");
//       // alert("Updated")
//       db.collection("151030").where("index", "==", currentindex)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             console.log(currentindex);
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());

//             if(doc.data().hasStarted == true){
//               quizz = [];
//               quizz.push(doc.data())
//               showQue()
//               kojo.style.display = "none"
//               main.style.display = "block"
//             }
//           //   quizz.forEach(el => {
//           //     queLength = el.questions.length
//           // });
//         })

//       // if (currentindex < queLength) {
//       //   currentindex++
//       //   showQue()
//       //   console.log("more")
//       // }
//       // else {
//       //   console.log("end")

//       // }
//     }) 
//      .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
// })
// }




async function net() {
  await db.collection("151030").doc(`id${currentindex}`).update({
    hasStarted: false
  });
  currentindex++;
  console.log(currentindex);
  try {
    await db.collection("151030").doc(`id${currentindex}`).update({
      hasStarted: true
    });
    console.log(currentindex);
    fetchQue();
    if (quizz !== "") {
      count()
      kojo.style.display = "none";
      main.style.display = "block";
    }

  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// function nextplayers() {
//   var docRef = db.collection("151030").doc(`id${currentindex}`);
//   docRef.get().then((doc) => {
//     if (doc.exists && doc.data().hasStarted === true) {
//       const question = doc.data().question;
//       if (question) {
//         alert("Next question triggered!");
//         quizz = [doc.data()];
//         showQue();
//       }
//       kojo.style.display = "none";
//       main.style.display = "block";
//     }
//   }).catch((error) => {
//     console.error("Error getting document: ", error);
//   });
// }

// db.collection("151030").doc(`id${currentindex}`)
//   .onSnapshot((doc) => {
//     console.log("Current data: ", doc.data());
//     maya = doc.data();
//     console.log(maya);
//     quizz.push(maya);
//     showQue()
//   });
// db.collection("151030").onSnapshot((querySnapshot) => {

//   querySnapshot.forEach((doc) => {
//     const index = doc.data().index;
//     // console.log(doc.data());
//     console.log(currentindex);
//     if (index === currentindex) {
//       alert("oiuytr")
//       let dd = doc.data().index == currentindex
//       console.log(dd);
//       return
//     }
//   });
// }, (error) => {
//   console.error("Error updating document: ", error);
// });







let interval;
let tete;
function count() {
  tete = () => {
    time.innerHTML = seconds;
    time.innerHTML = (seconds < 10 ? "0" : " ") + seconds;
    // console.log(currentindex);
    if (seconds < 10) {
      time.style.backgroundColor = "red";
    }
    if (seconds <= 0) {
      seconds = 10;
      kojo.style.display = "block";
      main.style.display = "none";
      // currentindex++;
      // console.log(currentindex);
      // console.log(seconds);
      clearInterval(interval);
    }
    seconds--;
  };
  interval = setInterval(tete, 1000);
}






// function pickAns(ev) {
//   let selected = ev.target;
//   let selectedValue = selected.value;
//   pickedAns[currentindex] = selectedValue;
//   const correctOption = quiz.questions[currentindex].correctOption;
//   const optionInputs = document.querySelectorAll('input[name="maya"]');

//   for (const optionInput of optionInputs) {
//     optionInput.disabled = true;
//   }

//   const optionLabels = document.querySelectorAll('label');

//   for (const optionLabel of optionLabels) {
//     optionLabel.style.backgroundColor = 'red'; // Change the background color of all labels to red
//   }

//   if (selectedValue !== correctOption) {
//     // Provide feedback for an incorrect answer
//     alert("Incorrect. The correct answer is: " + correctOption);
//   } else {
//     // Increment the score if the selected option is correct
//     sco  re++;
//     alert("Correct! Your score is now: " + score);
//   }

//   let interval = setInterval(() => {
//     currentindex++;

//     if (currentindex < quiz.questions.length) {
//       // Clear the previous correct answer background color
//       const prevCorrectOptionLabel = document.querySelector('label[for="' + correctOption + '"]');
//       if (prevCorrectOptionLabel) {
//         prevCorrectOptionLabel.style.backgroundColor = '';
//       }

//       showquestion();
//     } else if (currentindex === quiz.questions.length) {
//       clearInterval(interval);
//       alert("Well done! Your final score is: " + score);
//       // Add code to handle what happens when the quiz is completed
//     }

//   },4000);
// }