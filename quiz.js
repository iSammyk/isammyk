//   const firebaseConfig = {
//   apiKey: "AIzaSyDtpT23EPLkTS9kfEf6Aa02Wli2Ehgfpqw",
//   authDomain: "isammy-k.firebaseapp.com",
//   projectId: "isammy-k",
//   storageBucket: "isammy-k.appspot.com",
//   messagingSenderId: "243915862365",
//   appId: "1:243915862365:web:e0c543ab2caf0ed241b8b4",
//  };
const firebaseConfig = {
  apiKey: "AIzaSyCwVfH-A0BmPjRWef4VEdk4IAImHFLA1Ek",
  authDomain: "isammy-app.firebaseapp.com",
  projectId: "isammy-app",
  storageBucket: "isammy-app.appspot.com",
  messagingSenderId: "581637815341",
  appId: "1:581637815341:web:33eb5fc8ad00c97a148ca4",
  measurementId: "G-LXBM3HSSTT"
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



let quiz1 = {
  gamePin: "151030",
  hasStarted: false,
  questions: [
    {
      index: 0,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which country has the longest coastline in the world?",
      options: ["USA", "Canada", "Ghana", "Nigeria"],
      correctOption: "Canada"
    },
    {
      index: 1,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the capital of Malta?",
      options: ["London", "Korea", "Mayadiram", "Valetta"],
      correctOption: "Valetta"
    },
    {
      index: 2,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctOption: "Carbon Dioxide"
    },
    {
      index: 3,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "In which US state would you find Harvard University?",
      options: ["Arizona", "Texas", "Califonia", "Massachusetts"],
      correctOption: "Massachusetts"
    },
    {
      index: 4,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which three countries does Mexico share a land border with?",
      options: ["Japan,Italy and USA", "USA, Belize and Guatemala", "Nigeria, England and Guatemala", "Belgium,USA and Spain"],
      correctOption: "USA, Belize and Guatemala"
    },
    {
      index: 5,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Astana is the capital city of which country?",
      options: ["Tokyo", "Peru", "Tennesee", "Kazakhstan"],
      correctOption: "Kazakhstan"
    },
    {
      index: 6,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the biggest island in the world?",
      options: ["lagos Island", "Greenland", "Germany", "Brussell"],
      correctOption: "Greenland"
    },
    {
      index: 7,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the capital of Estonia?",
      options: ["Morroco", "Tallinn", "Andonna", "Angola"],
      correctOption: "Tallinn"
    },
    {
      index: 8,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which city currently has the highest population in the world?",
      options: ["Spain", "Tokyo", "Peru", "Nigeria"],
      correctOption: "Tokyo"
    },
    {
      index: 9,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "How many large islands make up Hawaii?",
      options: ["Three", "Two", "Four", "Eight"],
      correctOption: "Eight"
    },
    {
      index: 10,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the microstate located between Spain and France?",
      options: ["Andorra", "Chicago", "Lima", "Ottawo"],
      correctOption: "Andorra"
    },
    {
      index: 11,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the highest peak in Africa?",
      options: ["Mount Benjamin", "Oke Olumo", "Mount Kilimanjaro", "Mount Everest"],
      correctOption: "Mount Kilimanjaro"
    },
    {
      index: 12,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which country has the most pyramids in the world?",
      options: ["Sudan", "China", "Qatar", "India"],
      correctOption: "Sudan"
    },
    {
      index: 13,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "In which US state would you find Fort Knox?",
      options: ["Kentucky", "nairobi", "Phoenix", "Buffalo"],
      correctOption: "Kentucky"
    },
    {
      index: 14,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Mount Vesuvius casts a shadow over which modern Italian city?",
      options: ["Bangladash", "Bugat", "Kendozi", "Naples"],
      correctOption: "Naples"
    },
    {
      index: 15,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the largest desert in the world?",
      options: ["Kentra", "elect", "Ikorodu", "Antarctica"],
      correctOption: "Antarctica"
    },
    {
      index: 16,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "Which London Underground line is represented as green on the tube map?",
      options: ["Sctrach", "Station", "The District Line", "Brussels"],
      correctOption: "The District Line"
    },
    {
      index: 17,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "On the London Tube network, which is the only station to begin with the letter 'I'?",
      options: ["Ickenham", "Katkhanan", "Ijakumo", "Ukrania"],
      correctOption: "Ickenham",
    },
    {
      index: 18,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "In which European city would you find Manneken Pis – a statue of a small boy urinating into a fountain?",
      options: ["Spain", "TokBrussels", "Brussels", "Mercury"],
      correctOption: "Brussels"
    },
    {
      index: 19,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "In which city would you find La Sagrada Familia?",
      options: ["Barcelona", "Villareal", "Germany", "Real Madrid"],
      correctOption: "Barcelona"
    },
    {
      index: 20,
      gamePin: "151030",
      hasStarted: false,
      endGame: false,
      question: "What is the highest mountain in Britain?",
      options: ["Kent", "Colchester", "The Seine", "Ben Nevis"],
      correctOption: "Ben Nevis"
    }
  ]
};



let quiz2 = {
  gamePin: "202030",
  hasStarted: false,
  questions: [
    {
      index: 0,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["John Steinbeck", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
      correctOption: "Harper Lee"
    },
    {
      index: 1,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for silver?",
      options: ["Sv", "Ag", "Si", "Au"],
      correctOption: "Ag"
    },
    {
      index: 2,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctOption: "Carbon Dioxide"
    },
    {
      index: 3,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Rome", "Paris"],
      correctOption: "Paris"
    },
    {
      index: 4,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "How many teeth does an adult human have?",
      options: ["28", "30", "32", "36"],
      correctOption: "32"
    },
    {
      index: 5,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the largest organ in the human body?",
      options: ["Brain", "Heart", "Skin", "Liver"],
      correctOption: "Skin"
    },
    {
      index: 6,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Which gas do plants release into the atmosphere during respiration?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      correctOption: "Carbon Dioxide"
    },
    {
      index: 7,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Who is the author of 'The Great Gatsby'?",
      options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "George Orwell"],
      correctOption: "F. Scott Fitzgerald"
    },
    {
      index: 8,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the largest desert in the world?",
      options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Arctic Desert"],
      correctOption: "Sahara Desert"
    },
    {
      index: 9,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "In which country is the Taj Mahal located?",
      options: ["India", "Egypt", "Turkey", "China"],
      correctOption: "India"
    },
    {
      index: 10,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctOption: "Au"
    },
    {
      index: 11,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctOption: "Jupiter"
    },
    {
      index: 12,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Which gas is responsible for the green color of leaves?",
      options: ["Oxygen", "Carbon Dioxide", "Chlorophyll", "Nitrogen"],
      correctOption: "Chlorophyll"
    },
    {
      index: 13,
      gamePin: "202030",
      hasStarted: false,
      endGame: false,
      question: "Who wrote 'Pride and Prejudice'?",
      options: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "Leo Tolstoy"],
      correctOption: "Jane Austen"
    }
  ]
};



let quiz3 = {
  gamePin: "199033",
  hasStarted: false,
  questions: [
    {
      index: 0,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Rome", "Paris"],
      correctOption: "Paris"
    },
    {
      index: 1,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who is the current President of the United States?",
      options: ["Barack Obama", "Joe Biden", "Donald Trump", "George W. Bush"],
      correctOption: "Joe Biden"
    },
    {
      index: 2,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country recently won the UEFA European Championship in football (Euro 2020)?",
      options: ["France", "Germany", "Portugal", "Italy"],
      correctOption: "Italy"
    },
    {
      index: 3,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "What is the largest social media platform in the world?",
      options: ["Twitter", "Instagram", "Facebook", "Snapchat"],
      correctOption: "Facebook"
    },
    {
      index: 4,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country hosted the 2020 Summer Olympics?",
      options: ["United States", "China", "Brazil", "Japan"],
      correctOption: "Japan"
    },
    {
      index: 5,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who won the Nobel Prize in Physics in 2020 for their work on black holes?",
      options: ["Albert Einstein", "Stephen Hawking", "Roger Penrose", "Isaac Newton"],
      correctOption: "Roger Penrose"
    },
    {
      index: 6,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which company became the world's most valuable publicly traded company in 2021?",
      options: ["Apple", "Amazon", "Microsoft", "Google"],
      correctOption: "Apple"
    },
    {
      index: 7,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2021, which spacecraft successfully landed on Mars and began exploring the planet?",
      options: ["Voyager 1", "Hubble Space Telescope", "Mars Rover Perseverance", "New Horizons"],
      correctOption: "Mars Rover Perseverance"
    },
    {
      index: 8,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country launched the first-ever crewed mission to the International Space Station (ISS) in 2020?",
      options: ["Russia", "United States", "China", "India"],
      correctOption: "China"
    },
    {
      index: 9,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2021, which cryptocurrency gained widespread attention and reached record-high prices?",
      options: ["Ethereum", "Ripple (XRP)", "Litecoin", "Bitcoin"],
      correctOption: "Bitcoin"
    },
    {
      index: 10,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who won the FIFA World Cup in 2018?",
      options: ["France", "Germany", "Brazil", "Belgium"],
      correctOption: "France"
    },
    {
      index: 11,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country recently became the first to launch a digital currency issued by its central bank?",
      options: ["United States", "China", "European Union", "Japan"],
      correctOption: "China"
    },
    {
      index: 12,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2021, which global event was postponed to 2021 due to the COVID-19 pandemic?",
      options: ["Summer Olympics", "FIFA World Cup", "UEFA European Championship", "Winter Olympics"],
      correctOption: "Summer Olympics"
    },
    {
      index: 13,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who is the current Prime Minister of the United Kingdom?",
      options: ["David Cameron", "Theresa May", "Boris Johnson", "Tony Blair"],
      correctOption: "Boris Johnson"
    },
    {
      index: 14,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country recently signed the Abraham Accords, normalizing diplomatic relations with Israel?",
      options: ["Saudi Arabia", "Egypt", "United Arab Emirates", "Iran"],
      correctOption: "United Arab Emirates"
    },
    {
      index: 15,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2021, which tech billionaire became the world's richest person?",
      options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
      correctOption: "Elon Musk"
    },
    {
      index: 16,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country experienced a major outbreak of wildfires in 2020, leading to widespread destruction and loss of wildlife?",
      options: ["Australia", "Brazil", "Canada", "Russia"],
      correctOption: "Australia"
    },
    {
      index: 17,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who is the current Secretary-General of the United Nations?",
      options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Ban Ki-moon"],
      correctOption: "António Guterres"
    },
    {
      index: 18,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country recently launched the Chang'e-5 mission, successfully bringing lunar samples back to Earth?",
      options: ["Russia", "United States", "China", "India"],
      correctOption: "China"
    },
    {
      index: 19,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2020, which country was the first to approve a COVID-19 vaccine for public use?",
      options: ["United States", "Russia", "China", "United Kingdom"],
      correctOption: "Russia"
    },
    {
      index: 20,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who won the Nobel Prize in Literature in 2020 for her novel 'The Testaments'?",
      options: ["Haruki Murakami", "Margaret Atwood", "J.K. Rowling", "Salman Rushdie"],
      correctOption: "Margaret Atwood"
    },
    {
      index: 21,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which social justice movement gained prominence in 2020, advocating for racial equality and justice?",
      options: ["Me Too Movement", "Black Lives Matter", "March for Our Lives", "Climate Strike"],
      correctOption: "Black Lives Matter"
    },
    {
      index: 22,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which European country faced a debt crisis and financial turmoil in recent years, leading to bailout programs?",
      options: ["Italy", "France", "Greece", "Spain"],
      correctOption: "Greece"
    },
    {
      index: 23,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "In 2020, which environmental activist was named TIME magazine's Person of the Year?",
      options: ["Greta Thunberg", "Al Gore", "David Attenborough", "Jane Goodall"],
      correctOption: "Greta Thunberg"
    },
    {
      index: 24,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Which country recently experienced a major earthquake and tsunami, causing widespread destruction?",
      options: ["Indonesia", "Japan", "Mexico", "New Zealand"],
      correctOption: "Indonesia"
    },
    {
      index: 25,
      gamePin: "199033",
      hasStarted: false,
      endGame: false,
      question: "Who is the current Chancellor of Germany?",
      options: ["Angela Merkel", "Gerhard Schröder", "Helmut Kohl", "Olaf Scholz"],
      correctOption: "Olaf Scholz"
    }
  ]
};

let quiz4 = {
  gamePin: "419234",
  hasStarted: false,
  questions: [ 
    {
      index: 0,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who was the first military head of state in Nigeria?",
      options: ["General Yakubu Gowon", "General Aguiyi Ironsi", "General Ibrahim Babangida", "General Murtala Mohammed"],
      correctOption: "General Aguiyi Ironsi"
    },
      
    {
      index: 1,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "What year did Nigeria gain independence?",
      options: ["1959", "1961", "1963", "1960"],
      correctOption: "1960"
    },
      
    {
      index: 2,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who is the current president of Nigeria?",
      options: ["Goodluck Jonathan", "Muhammadu Buhari", "Olusegun Obasanjo", "Yemi Osinbajo"],
      correctOption: "Muhammadu Buhari"
    },
      
    {
      index: 3,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian city is known as the center of excellence?",
      options: ["Abuja", "Kano", "Port Harcourt", "Lagos"],
      correctOption: "Lagos"
    },
      
    {
      index: 4,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who is the first female finance minister of Nigeria?",
      options: ["Ngozi Okonjo-Iweala", "Nenadi Usman", "Kemi Adeosun", "Zainab Ahmed"],
      correctOption: "Ngozi Okonjo-Iweala"
    },
      
    {
      index: 5,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "What is the capital city of Nigeria?",
      options: ["Abuja", "Lagos", "Kano", "Port Harcourt"],
      correctOption: "Abuja"
    },
      
    {
      index: 6,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian musician won a Grammy award in 2021?",
      options: ["Davido", "Burna Boy", "Wizkid", "Tiwa Savage"],
      correctOption: "Wizkid"
    },
      
    {
      index: 7,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who led Nigeria during the Nigerian Civil War?",
      options: ["General Ibrahim Babangida", "General Yakubu Gowon", "General Murtala Mohammed", "General Aguiyi Ironsi"],
      correctOption: "General Yakubu Gowon"
    },
      
    {
      index: 8,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian author wrote the novel 'Things Fall Apart'?",
      options: ["Wole Soyinka", "Chimamanda Ngozi Adichie", "Chinua Achebe", "Ben Okri"],
      correctOption: "Chinua Achebe"
    },
      
    {
      index: 9,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who is the current Chief Justice of Nigeria?",
      options: ["Justice Walter Onnoghen", "Justice Amina Mohammed", "Justice Ibrahim Tanko Muhammad", "Justice Muhammadu Buhari"],
      correctOption: "Justice Ibrahim Tanko Muhammad"
    },
      
    {
      index: 10,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian athlete won a gold medal at the 2016 Olympics?",
      options: ["Hakeem Olajuwon", "Folorunsho Alakija", "Blessing Okagbare", "Chioma Ajunwa"],
      correctOption: "Blessing Okagbare"
    },
      
    {
      index: 11,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "What year did Nigeria become a republic?",
      options: ["1961", "1959", "1963", "1960"],
      correctOption: "1963"
    },
      
    {
      index: 12,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian city is famous for its annual Durbar festival?",
      options: ["Ibadan", "Kano", "Lagos", "Abuja"],
      correctOption: "Kano"
    },
      
    {
      index: 13,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who was the first female governor in Nigeria?",
      options: ["Kemi Adeosun", "Nenadi Usman", "Ngozi Okonjo-Iweala", "Dame Virginia Ngozi Etiaba"],
      correctOption: "Dame Virginia Ngozi Etiaba"
    },
      
    {
      index: 14,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "What is the largest ethnic group in Nigeria?",
      options: ["Ijaw", "Hausa-Fulani", "Yoruba", "Igbo"],
      correctOption: "Hausa-Fulani"
    },
      
    {
      index: 15,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who founded the city of Lagos?",
      options: ["Dr. Nnamdi Azikiwe", "King Jaja of Opobo", "Eshman", "Sir Frederick Lugard"],
      correctOption: "Eshman"
    },
      
    {
      index: 16,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian leader introduced the 'War Against Indiscipline' campaign?",
      options: ["General Olusegun Obasanjo", "General Ibrahim Babangida", "General Yakubu Gowon", "General Muhammadu Buhari"],
      correctOption: "General Muhammadu Buhari"
    },
      
    {
      index: 17,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "What year was Nigeria's first constitution enacted?",
      options: ["1999", "1954", "1960", "1963"],
      correctOption: "1960"
    },
      
    {
      index: 18,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Who is regarded as the 'Father of Nigerian Literature'?",
      options: ["Wole Soyinka", "Chimamanda Ngozi Adichie", "Ben Okri", "Chinua Achebe"],
      correctOption: "Chinua Achebe"
    },
      
    {
      index: 19,
      gamePin: "419234",
      hasStarted: false,
      endGame: false,
      question: "Which Nigerian city is referred to as the 'City of Peace'?",
      options: ["Jos", "Port Harcourt", "Kano", "Lagos"],
      correctOption: "Jos"
    }

  ]
};

let quiz5 = {
  gamePin: "162922",
  hasStarted: false,
  questions: [ 
    {
      index: 0,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which HTML tag is used to create a heading in a webpage?",
      options: ["title tag", "head tag", "p tag", "h1 tag"],
      correctOption: "<h1>"
    },
      
    {
      index: 1,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctOption: "Cascading Style Sheets"
    },
      
    {
      index: 2,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which property in CSS is used to change the text color of an element?",
      options: ["foreground-color", "text-color", "font-color", "color"],
      correctOption: "color"
    },
      
    {
      index: 3,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What does the 'href' attribute in the <a> tag specify?",
      options: ["The link's destination URL", "The link's ID", "The link's text content", "The link's target"],
      correctOption: "The link's destination URL"
    },
      
    {
      index: 4,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript method is used to add an element to the end of an array?",
      options: ["concat()", "addToEnd()", "append()", "push()"],
      correctOption: "push()"
    },
      
    {
      index: 5,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which HTML tag is used to define a table?",
      options: ["<th>", "<tr>", "<td>", "<table>"],
      correctOption: "<table>"
    },
      
    {
      index: 6,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "In CSS, which property is used to change the background color of an element?",
      options: ["bgcolor", "background", "background-color", "color"],
      correctOption: "background-color"
    },
      
    {
      index: 7,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript keyword is used to declare a variable?",
      options: ["const", "let", "variable", "var"],
      correctOption: "var"
    },
      
    {
      index: 8,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What does CSS margin property specify?",
      options: ["Space between elements' content and padding", "Space between elements' border and content", "Space between elements", "Space between elements' padding and border"],
      correctOption: "Space between elements' border and content"
    },
      
    {
      index: 9,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which HTML attribute is used to specify additional information about an element?",
      options: ["title", "class", "style", "id"],
      correctOption: "title"
    },
      
    {
      index: 10,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which CSS property is used to make text italic?",
      options: ["font-style", "italic", "text-style", "font-italic"],
      correctOption: "font-style"
    },
      
    {
      index: 11,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What does the 'src' attribute in the <img> tag specify?",
      options: ["Image file path", "Image dimensions", "Image alternative text", "Image caption"],
      correctOption: "Image file path"
    },
      
    {
      index: 12,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript method is used to remove the last element from an array?",
      options: ["splice()", "delete()", "remove()", "pop()"],
      correctOption: "pop()"
    },
      
    {
      index: 13,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which HTML element is used to define an unordered list?",
      options: ["<list>", "<ol>", "<ul>", "<li>"],
      correctOption: "<ul>"
    },
      
    {
      index: 14,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "In CSS, which property is used to change the font size of an element?",
      options: ["text-size", "font-size", "font", "size"],
      correctOption: "font-size"
    },
      
    {
      index: 15,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript method is used to join two or more arrays?",
      options: ["join()", "merge()", "concat()", "combine()"],
      correctOption: "concat()"
    },
      
    {
      index: 16,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["<script name='script.js'>", "<script href='script.js'>", "<script link='script.js'>", "<script src='script.js'>"],
      correctOption: "<script src='script.js'>"
    },
      
    {
      index: 17,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which CSS property is used to set the background image of an element?",
      options: ["image", "background-url", "background-image", "background"],
      correctOption: "background-image"
    },
      
    {
      index: 18,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "Which HTML tag is used to define a list item?",
      options: ["<ol>", "<list>", "<li>", "<ul>"],
      correctOption: "<li>"
    },
      
    {
      index: 19,
      gamePin: "162922",
      hasStarted: false,
      endGame: false,
      question: "What is the correct way to comment in JavaScript?",
      options: ["<!--This is a comment-->", "##This is a comment##", "/This is a comment/", "//This is a comment"],
      correctOption: "//This is a comment"
    }
    
  ] 
    
};

let quiz6 = {
  gamePin: "391333",
  hasStarted: false,
  questions: [ 
    {
      index: 0,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the primary function of a router in a computer network?",
      options: ["Forward data between networks", "Store files and data", "Provide power to devices", "Encrypt data transmissions"],
      correctOption: "Forward data between networks"
    },
      
    {
      index: 1,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for building mobile applications?",
      options: ["Java", "C++", "Python", "Swift"],
      correctOption: "Swift"
    },
      
    {
      index: 2,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a firewall in computer security?",
      options: ["Monitor and control network traffic", "Store backup copies of files", "Manage computer memory", "Optimize website performance"],
      correctOption: "Monitor and control network traffic"
    },
      
    {
      index: 3,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which database management system is known for its scalability and high availability?",
      options: ["MySQL", "SQLite", "MongoDB", "Oracle"],
      correctOption: "MongoDB"
    },
      
    {
      index: 4,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a CDN (Content Delivery Network) in web development?",
      options: ["Improve website performance by caching content", "Manage user authentication", "Create responsive web designs", "Track user interactions"],
      correctOption: "Improve website performance by caching content"
    },
      
    {
      index: 5,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which version control system is commonly used for managing code repositories?",
      options: ["Git", "SVN", "Mercurial", "Perforce"],
      correctOption: "Git"
    },
      
    {
      index: 6,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the primary purpose of HTML5 Web Storage?",
      options: ["Store data locally in a browser", "Host websites on a server", "Create responsive web designs", "Optimize website performance"],
      correctOption: "Store data locally in a browser"
    },
      
    {
      index: 7,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for data analysis and machine learning?",
      options: ["Java", "Python", "C#", "Ruby"],
      correctOption: "Python"
    },
      
    {
      index: 8,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a Virtual Private Network (VPN) in network security?",
      options: ["Establish secure connections", "Host websites on a server", "Optimize website performance", "Manage computer memory"],
      correctOption: "Establish secure connections"
    },
      
    {
      index: 9,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which cloud computing service is known for its serverless platform?",
      options: ["AWS", "Azure", "GCP", "IBM Cloud"],
      correctOption: "AWS"
    },
      
    {
      index: 10,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a Docker container in software development?",
      options: ["Package and distribute applications", "Manage user authentication", "Create responsive web designs", "Optimize website performance"],
      correctOption: "Package and distribute applications"
    },
      
    {
      index: 11,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for building dynamic web applications?",
      options: ["Java", "C++", "Python", "JavaScript"],
      correctOption: "JavaScript"
    },
      
    {
      index: 12,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of SQL (Structured Query Language) in database management?",
      options: ["Interact with and manipulate databases", "Create responsive web designs", "Optimize website performance", "Manage computer memory"],
      correctOption: "Interact with and manipulate databases"
    },
      
    {
      index: 13,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which web development framework uses the MVC pattern?",
      options: ["Django", "Flask", "Ruby on Rails", "Express.js"],
      correctOption: "Ruby on Rails"
    },
      
    {
      index: 14,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of an API (Application Programming Interface) in software development?",
      options: ["Define software component interactions", "Manage user authentication", "Create responsive web designs", "Optimize website performance"],
      correctOption: "Define software component interactions"
    },
      
    {
      index: 15,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for building iOS mobile applications?",
      options: ["Java", "C++", "Python", "Swift"],
      correctOption: "Swift"
    },
      
    {
      index: 16,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a reverse proxy server in web development?",
      options: ["Improve performance and security", "Create responsive web designs", "Optimize website performance", "Manage computer memory"],
      correctOption: "Improve performance and security"
    },
      
    {
      index: 17,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which version control system is commonly used for managing code repositories?",
      options: ["Git", "SVN", "Mercurial", "Perforce"],
      correctOption: "Git"
    },
      
    {
      index: 18,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of GraphQL in web development?",
      options: ["Provide efficient and flexible APIs", "Manage user authentication", "Create responsive web designs", "Optimize website performance"],
      correctOption: "Provide efficient and flexible APIs"
    },
      
    {
      index: 19,
      gamePin: "391333",
      hasStarted: false,
      endGame: false,
      question: "Which database management system is known for its relational database capabilities?",
      options: ["MySQL", "MongoDB", "SQLite", "Oracle"],
      correctOption: "MySQL"
    }
    
]     
};

let quiz7 = {
  gamePin: "991203",
  hasStarted: false,
  questions: [ 
    {
      index: 0,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a CSS preprocessor?",
      options: ["Extend CSS with variables, mixins, and functions", "Convert CSS to machine code", "Optimize CSS performance", "Create interactive UIs"],
      correctOption: "Extend CSS with variables, mixins, and functions"
    },
      
    {
      index: 1,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for building scalable web applications?",
      options: ["Python", "Java", "C#", "Ruby"],
      correctOption: "Java"
    },
      
    {
      index: 2,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a load balancer in a web server environment?",
      options: ["Compress files for transmission", "Manage authentication", "Optimize performance with caching","Distribute traffic across servers"],
      correctOption: "Distribute traffic across servers"
    },
      
    {
      index: 3,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript framework is commonly used for building single-page applications?",
      options: ["React", "Angular", "Vue.js", "Ember.js"],
      correctOption: "React"
    },
      
    {
      index: 4,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a CMS (Content Management System) in web development?",
      options: ["Manage authentication", "Create responsive designs","Simplify content creation and management",  "Optimize performance"],
      correctOption: "Simplify content creation and management"
    },
      
    {
      index: 5,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which cloud computing service is known for its serverless computing platform?",
      options: ["AWS", "Azure", "GCP", "IBM Cloud"],
      correctOption: "AWS"
    },
      
    {
      index: 6,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a reverse proxy server in web development?",
      options: [ "Create responsive designs", "Improve performance and security", "Optimize performance", "Manage memory"],
      correctOption: "Improve performance and security"
    },
      
    {
      index: 7,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which version control system is commonly used for managing code repositories?",
      options: [ "SVN", "Mercurial", "Perforce", "Git"],
      correctOption: "Git"
    },
      
    {
      index: 8,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of GraphQL in web development?",
      options: [ "Manage authentication", "Efficient alternative to RESTful APIs","Create responsive designs", "Optimize performance"],
      correctOption: "Efficient alternative to RESTful APIs"
    },
      
    {
      index: 9,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which database management system is known for its relational database capabilities?",
      options: [ "MongoDB", "SQLite", "MySQL", "Oracle"],
      correctOption: "MySQL"
    },
      
    {
      index: 10,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a CSS preprocessor?",
      options: ["Extend CSS with variables, mixins, and functions", "Convert CSS to machine code", "Optimize CSS performance", "Create interactive UIs"],
      correctOption: "Extend CSS with variables, mixins, and functions"
    },
      
    {
      index: 11,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which programming language is commonly used for building scalable web applications?",
      options: ["Python", "C#", "Ruby", "Java"],
      correctOption: "Java"
    },
      
    {
      index: 12,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a load balancer in a web server environment?",
      options: [ "Compress files for transmission", "Distribute traffic across servers", "Manage authentication", "Optimize performance with caching"],
      correctOption: "Distribute traffic across servers"
    },
      
    {
      index: 13,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which JavaScript framework is commonly used for building single-page applications?",
      options: ["Angular", "Vue.js", "Ember.js", "React"],
      correctOption: "React"
    },
      
    {
      index: 14,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a CMS (Content Management System) in web development?",
      options: ["Simplify content creation and management", "Manage authentication", "Create responsive designs", "Optimize performance"],
      correctOption: "Simplify content creation and management"
    },
      
    {
      index: 15,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which cloud computing service is known for its serverless computing platform?",
      options: ["AWS", "Azure", "GCP", "IBM Cloud"],
      correctOption: "AWS"
    },
      
    {
      index: 16,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of a reverse proxy server in web development?",
      options: [ "Create responsive designs", "Improve performance and security", "Optimize performance", "Manage memory"],
      correctOption: "Improve performance and security"
    },
      
    {
      index: 17,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which version control system is commonly used for managing code repositories?",
      options: ["Git", "SVN", "Mercurial", "Perforce"],
      correctOption: "Git"
    },
      
    {
      index: 18,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "What is the purpose of GraphQL in web development?",
      options: ["Manage authentication", "Create responsive designs", "Optimize performance", "Efficient alternative to RESTful APIs"],
      correctOption: "Efficient alternative to RESTful APIs"
    },
      
    {
      index: 19,
      gamePin: "991203",
      hasStarted: false,
      endGame: false,
      question: "Which database management system is known for its relational database capabilities?",
      options: ["MySQL", "MongoDB", "SQLite", "Oracle"],
      correctOption: "MySQL"
    }    
  ] 
    
};

// disney

let quiz8 = {
  gamePin: "614753",
  hasStarted: false, 
   questions: [
    {
      index: 0,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the toy cowboy in Toy Story?",
      options: ["Buzz Lightyear", "Woody", "Jessie", "Bullseye"],
      correctOption: "Woody"
    },
    {
      index: 1,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "Which Disney movie features a young deer named Bambi?",
      options: ["The Lion King", "Bambi", "Dumbo", "Snow White"],
      correctOption: "Bambi"
    },
    {
      index: 2,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In which Disney movie does the character Mufasa appear?",
      options: ["The Jungle Book", "The Lion King", "Aladdin", "Hercules"],
      correctOption: "The Lion King"
    },
    {
      index: 3,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the princess in the movie 'The Princess and the Frog'?",
      options: ["Ariel", "Tiana", "Belle", "Mulan"],
      correctOption: "Tiana"
    },
    {
      index: 4,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What kind of animal is Disney's Dumbo?",
      options: ["Elephant", "Lion", "Mouse", "Dog"],
      correctOption: "Elephant"
    },
    {
      index: 5,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "Who is the main villain in 'The Little Mermaid'?",
      options: ["Scar", "Ursula", "Jafar", "Hades"],
      correctOption: "Ursula"
    },
    {
      index: 6,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of Aladdin's monkey?",
      options: ["Rajah", "Abu", "Iago", "Zazu"],
      correctOption: "Abu"
    },
    {
      index: 7,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'Beauty and the Beast', what is the name of Belle's father?",
      options: ["Maurice", "Gaston", "Lefou", "Philippe"],
      correctOption: "Maurice"
    },
    {
      index: 8,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the snowman in 'Frozen'?",
      options: ["Elsa", "Anna", "Kristoff", "Olaf"],
      correctOption: "Olaf"
    },
    {
      index: 9,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'The Lion King', what is Simba's mother's name?",
      options: ["Nala", "Sarabi", "Sarafina", "Shenzi"],
      correctOption: "Sarabi"
    },
    {
      index: 10,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "Who is the fashion-obsessed villain in '101 Dalmatians'?",
      options: ["Maleficent", "Cruella de Vil", "Queen of Hearts", "Lady Tremaine"],
      correctOption: "Cruella de Vil"
    },
    {
      index: 11,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the dragon in 'Mulan'?",
      options: ["Mushu", "Sisu", "Falkor", "Toothless"],
      correctOption: "Mushu"
    },
    {
      index: 12,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "Which Disney movie features a flying elephant?",
      options: ["Dumbo", "Bambi", "The Jungle Book", "Tarzan"],
      correctOption: "Dumbo"
    },
    {
      index: 13,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'Finding Nemo', what kind of fish is Dory?",
      options: ["Clownfish", "Surgeonfish", "Angelfish", "Goldfish"],
      correctOption: "Surgeonfish"
    },
    {
      index: 14,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'Moana', what is the name of the demigod who accompanies Moana?",
      options: ["Maui", "Hercules", "Zeus", "Poseidon"],
      correctOption: "Maui"
    },
    {
      index: 15,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In which Disney movie do characters sing 'A Whole New World'?",
      options: ["Cinderella", "Aladdin", "The Little Mermaid", "Beauty and the Beast"],
      correctOption: "Aladdin"
    },
    {
      index: 16,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the cat in 'The Aristocats'?",
      options: ["Figaro", "Oliver", "Thomas O'Malley", "Duchess"],
      correctOption: "Duchess"
    },
    {
      index: 17,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'Peter Pan', what is the name of Wendy's dog?",
      options: ["Nana", "Lulu", "Max", "Shadow"],
      correctOption: "Nana"
    },
    {
      index: 18,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the tea cup in 'Beauty and the Beast'?",
      options: ["Chip", "Potts", "Lumière", "Cogsworth"],
      correctOption: "Chip"
    },
    {
      index: 19,
      gamePin: "614753",
      hasStarted: false,
      endGame: false,
      question: "In 'Cinderella', what is the name of the fairy godmother?",
      options: ["Flora", "Fauna", "Merryweather", "She is just known as the Fairy Godmother"],
      correctOption: "She is just known as the Fairy Godmother"
    }
  ]
  
}

// random shows
let quiz9 = {
  gamePin: "189432",
  hasStarted: false, 
   questions:[
    {
      index: 0,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Friends', what is the name of Ross Geller's second wife?",
      options: ["Rachel", "Emily", "Carol", "Monica"],
      correctOption: "Emily"
    },
    {
      index: 1,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the coffee shop in 'Friends'?",
      options: ["Central Coffee", "Central Park", "Central Perk", "Central Café"],
      correctOption: "Central Perk"
    },
    {
      index: 2,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Breaking Bad', what is Walter White's alias?",
      options: ["Heisenberg", "Eisenhower", "Hindenburg", "Eisenstein"],
      correctOption: "Heisenberg"
    },
    {
      index: 3,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "Which TV show features a character named Sheldon Cooper?",
      options: ["How I Met Your Mother", "The Big Bang Theory", "Friends", "Modern Family"],
      correctOption: "The Big Bang Theory"
    },
    {
      index: 4,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Game of Thrones', what is the name of Jon Snow's direwolf?",
      options: ["Ghost", "Nymeria", "Summer", "Grey Wind"],
      correctOption: "Ghost"
    },
    {
      index: 5,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the fictional paper company in 'The Office'?",
      options: ["Dunder Mifflin", "Wernham Hogg", "Pied Piper", "Sterling Cooper"],
      correctOption: "Dunder Mifflin"
    },
    {
      index: 6,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Stranger Things', what is Eleven's favorite food?",
      options: ["Waffles", "Pancakes", "Pizza", "Hamburgers"],
      correctOption: "Waffles"
    },
    {
      index: 7,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "Which cartoon features characters named Homer, Marge, Bart, Lisa, and Maggie?",
      options: ["Family Guy", "The Simpsons", "South Park", "Futurama"],
      correctOption: "The Simpsons"
    },
    {
      index: 8,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'The Simpsons', what is the name of Bart's best friend?",
      options: ["Nelson", "Ralph", "Milhouse", "Martin"],
      correctOption: "Milhouse"
    },
    {
      index: 9,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "What is the name of the main character in 'Sherlock', played by Benedict Cumberbatch?",
      options: ["Sherlock Holmes", "John Watson", "Jim Moriarty", "Greg Lestrade"],
      correctOption: "Sherlock Holmes"
    },
    {
      index: 10,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Friends', what is Chandler Bing's middle name?",
      options: ["Muriel", "Marcel", "Michael", "Mitchell"],
      correctOption: "Muriel"
    },
    {
      index: 11,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'The Big Bang Theory', what is Howard Wolowitz's occupation?",
      options: ["Physicist", "Engineer", "Biologist", "Chemist"],
      correctOption: "Engineer"
    },
    {
      index: 12,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "Which TV series is set in the fictional town of Hawkins, Indiana?",
      options: ["Riverdale", "Stranger Things", "Twin Peaks", "Buffy the Vampire Slayer"],
      correctOption: "Stranger Things"
    },
    {
      index: 13,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'The Mandalorian', what is the name of the Child?",
      options: ["Yoda", "Grogu", "Luke", "Boba"],
      correctOption: "Grogu"
    },
    {
      index: 14,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Rick and Morty', what is the name of Morty's sister?",
      options: ["Summer", "Beth", "Jessica", "Tammy"],
      correctOption: "Summer"
    },
    {
      index: 15,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "Which TV show features a chemistry teacher turned methamphetamine manufacturer?",
      options: ["Better Call Saul", "The Sopranos", "Breaking Bad", "Narcos"],
      correctOption: "Breaking Bad"
    },
    {
      index: 16,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Parks and Recreation', what is the name of the town where the show is set?",
      options: ["Pawnee", "Springfield", "Scranton", "Quahog"],
      correctOption: "Pawnee"
    },
    {
      index: 17,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'Stranger Things', who is the police chief of Hawkins?",
      options: ["Jim Hopper", "Steve Harrington", "Mike Wheeler", "Jonathan Byers"],
      correctOption: "Jim Hopper"
    },
    {
      index: 18,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "Which animated series features the Griffin family?",
      options: ["Family Guy", "The Simpsons", "South Park", "American Dad"],
      correctOption: "Family Guy"
    },
    {
      index: 19,
      gamePin: "189432",
      hasStarted: false,
      endGame: false,
      question: "In 'The Office', what is the name of Michael Scott's boss?",
      options: ["David Wallace", "Jan Levinson", "Ryan Howard", "Toby Flenderson"],
      correctOption: "David Wallace"
    }
  ]
  
}


// math

let quiz10 = {
  gamePin: "215009",
  hasStarted: false, 
  questions:[
    {
      index: 0,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      correctOption: "3.14"
    },
    {
      index: 1,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If a triangle has angles of 30° and 60°, what is the third angle?",
      options: ["30°", "60°", "90°", "120°"],
      correctOption: "90°"
    },
    {
      index: 2,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correctOption: "12"
    },
    {
      index: 3,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If you have a 20% discount on a $50 item, how much will you pay?",
      options: ["$30", "$35", "$40", "$45"],
      correctOption: "$40"
    },
    {
      index: 4,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the result of 9 x 8?",
      options: ["64", "72", "81", "90"],
      correctOption: "72"
    },
    {
      index: 5,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the perimeter of a rectangle with length 5 and width 3?",
      options: ["8", "15", "16", "18"],
      correctOption: "16"
    },
    {
      index: 6,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the value of 2^5?",
      options: ["16", "32", "64", "128"],
      correctOption: "32"
    },
    {
      index: 7,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If you divide 81 by 9, what do you get?",
      options: ["7", "8", "9", "10"],
      correctOption: "9"
    },
    {
      index: 8,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      correctOption: "30"
    },
    {
      index: 9,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If a car is traveling at 60 miles per hour, how far will it travel in 2.5 hours?",
      options: ["120 miles", "130 miles", "140 miles", "150 miles"],
      correctOption: "150 miles"
    },
    {
      index: 10,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the area of a circle with a radius of 7 (π = 3.14)?",
      options: ["100.48", "153.86", "200.96", "256.78"],
      correctOption: "153.86"
    },
    {
      index: 11,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "Solve for x: 2x + 5 = 15",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      correctOption: "x = 5"
    },
    {
      index: 12,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the greatest common divisor of 24 and 36?",
      options: ["6", "8", "12", "18"],
      correctOption: "12"
    },
    {
      index: 13,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If you subtract 8 from 20, what is the result?",
      options: ["10", "11", "12", "13"],
      correctOption: "12"
    },
    {
      index: 14,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the decimal representation of 3/4?",
      options: ["0.5", "0.6", "0.75", "0.8"],
      correctOption: "0.75"
    },
    {
      index: 15,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "How many degrees are in a right angle?",
      options: ["30°", "60°", "90°", "120°"],
      correctOption: "90°"
    },
    {
      index: 16,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the product of 7 and 6?",
      options: ["36", "42", "48", "54"],
      correctOption: "42"
    },
    {
      index: 17,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If x = 3, what is the value of x^2 - 2x + 1?",
      options: ["1", "2", "3", "4"],
      correctOption: "4"
    },
    {
      index: 18,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "What is the sum of the interior angles of a triangle?",
      options: ["90°", "180°", "270°", "360°"],
      correctOption: "180°"
    },
    {
      index: 19,
      gamePin: "215009",
      hasStarted: false,
      endGame: false,
      question: "If 5x = 20, what is the value of x?",
      options: ["2", "3", "4", "5"],
      correctOption: "4"
    }
  ]
  
}

// musix
let quiz11 = {
  gamePin: "755234",
  hasStarted: false, 
    questions: [
      {
        index: 0,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Who is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        correctOption: "Michael Jackson"
      },
      {
        index: 1,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which band released the album 'Abbey Road'?",
        options: ["The Rolling Stones", "Pink Floyd", "The Who", "The Beatles"],
        correctOption: "The Beatles"
      },
      {
        index: 2,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "What genre of music is Taylor Swift primarily known for?",
        options: ["Rock", "Country", "Pop", "Jazz"],
        correctOption: "Pop"
      },
      {
        index: 3,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which artist is known for the hit song 'Rolling in the Deep'?",
        options: ["Adele", "Beyoncé", "Rihanna", "Katy Perry"],
        correctOption: "Adele"
      },
      {
        index: 4,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which composer is known for the 'Moonlight Sonata'?",
        options: ["Mozart", "Beethoven", "Bach", "Chopin"],
        correctOption: "Beethoven"
      },
      {
        index: 5,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "What instrument does Yo-Yo Ma play?",
        options: ["Piano", "Violin", "Cello", "Flute"],
        correctOption: "Cello"
      },
      {
        index: 6,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Who sang the song 'Imagine'?",
        options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
        correctOption: "John Lennon"
      },
      {
        index: 7,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "What is the title of Queen's most famous song?",
        options: ["We Will Rock You", "Bohemian Rhapsody", "Another One Bites the Dust", "Radio Ga Ga"],
        correctOption: "Bohemian Rhapsody"
      },
      {
        index: 8,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which rapper is known as 'Slim Shady'?",
        options: ["Dr. Dre", "Snoop Dogg", "Kanye West", "Eminem"],
        correctOption: "Eminem"
      },
      {
        index: 9,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "What is the stage name of Robyn Fenty?",
        options: ["Cardi B", "Rihanna", "Nicki Minaj", "Lizzo"],
        correctOption: "Rihanna"
      },
      {
        index: 10,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Who is the lead singer of U2?",
        options: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        correctOption: "Bono"
      },
      {
        index: 11,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which famous musician was shot by a fan in 1980?",
        options: ["Elvis Presley", "John Lennon", "Freddie Mercury", "Jim Morrison"],
        correctOption: "John Lennon"
      },
      {
        index: 12,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which band is known for the album 'Dark Side of the Moon'?",
        options: ["Led Zeppelin", "Pink Floyd", "The Beatles", "The Rolling Stones"],
        correctOption: "Pink Floyd"
      },
      {
        index: 13,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which singer released the album '25'?",
        options: ["Adele", "Beyoncé", "Taylor Swift", "Lady Gaga"],
        correctOption: "Adele"
      },
      {
        index: 14,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Who is the frontman of the band 'Nirvana'?",
        options: [ "Dave Grohl", "Krist Novoselic", "Pat Smear", "Kurt Cobain"],
        correctOption: "Kurt Cobain"
      },
      {
        index: 15,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which artist is known for the hit single 'Shape of You'?",
        options: ["Bruno Mars", "Ed Sheeran", "Justin Bieber", "Shawn Mendes"],
        correctOption: "Ed Sheeran"
      },
      {
        index: 16,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which band had a hit with the song 'Hotel California'?",
        options: ["Fleetwood Mac", "The Eagles", "The Beach Boys", "The Doors"],
        correctOption: "The Eagles"
      },
      {
        index: 17,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "What genre is the band Metallica known for?",
        options: ["Pop", "Rock", "Heavy Metal", "Jazz"],
        correctOption: "Heavy Metal"
      },
      {
        index: 18,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Which classical composer became deaf later in life?",
        options: ["Mozart", "Bach",  "Beethoven", "Haydn"],
        correctOption: "Beethoven"
      },
      {
        index: 19,
        gamePin: "755234",
        hasStarted: false,
        endGame: false,
        question: "Who is known as the 'Queen of Pop'?",
        options: ["Madonna", "Britney Spears",  "Whitney Houston", "Mariah Carey"],
        correctOption: "Madonna"
      }
    ]
  
}

// science
let quiz12 = {
  gamePin: "653630",
  hasStarted: false, 
    questions: [
    {
      index: 0,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the smallest unit of matter?",
      options: ["Atom", "Molecule", "Cell", "Electron"],
      correctOption: "Atom"
    },
    {
      index: 1,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the process by which plants make their own food?",
      options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
      correctOption: "Photosynthesis"
    },
    {
      index: 2,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctOption: "Mars"
    },
    {
      index: 3,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the powerhouse of the cell?",
      options: ["Mitochondrion", "Nucleus", "Ribosome", "Endoplasmic reticulum"],
      correctOption: "Mitochondrion"
    },
    {
      index: 4,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which force holds the nucleus of an atom together?",
      options: ["Gravity", "Electromagnetic force", "Strong nuclear force", "Weak nuclear force"],
      correctOption: "Strong nuclear force"
    },
    {
      index: 5,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correctOption: "Au"
    },
    {
      index: 6,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which scientist proposed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctOption: "Albert Einstein"
    },
    {
      index: 7,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the Earth's primary source of energy?",
      options: ["Wind", "Water", "Sun", "Geothermal"],
      correctOption: "Sun"
    },
    {
      index: 8,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for table salt?",
      options: ["NaCl", "H2O", "CO2", "O2"],
      correctOption: "NaCl"
    },
    {
      index: 9,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the study of fossils called?",
      options: ["Biology", "Paleontology", "Archaeology", "Geology"],
      correctOption: "Paleontology"
    },
    {
      index: 10,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      options: ["Venus", "Mars", "Mercury", "Jupiter"],
      correctOption: "Venus"
    },
    {
      index: 11,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Diamond", "Iron", "Platinum"],
      correctOption: "Diamond"
    },
    {
      index: 12,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which gas is most abundant in the Earth's atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correctOption: "Nitrogen"
    },
    {
      index: 13,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
      correctOption: "Blue whale"
    },
    {
      index: 14,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the process by which plants release water vapor into the air?",
      options: ["Photosynthesis", "Respiration", "Evaporation", "Transpiration"],
      correctOption: "Transpiration"
    },
    {
      index: 15,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for helium?",
      options: ["He", "H", "Ho", "Ha"],
      correctOption: "He"
    },
    {
      index: 16,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "Which scientist proposed the three laws of motion?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctOption: "Isaac Newton"
    },
    {
      index: 17,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical symbol for silver?",
      options: ["Si", "Ag", "Au", "Sr"],
      correctOption: "Ag"
    },
    {
      index: 18,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the study of earthquakes called?",
      options: ["Geography", "Meteorology", "Seismology", "Volcanology"],
      correctOption: "Seismology"
    },
    {
      index: 19,
      gamePin: "653630",
      hasStarted: false,
      endGame: false,
      question: "What is the chemical formula for water?",
      options: ["HO", "CO2", "H2O", "O2"],
      correctOption: "H2O"
    }
  ]

}


let knot = document.querySelector(".game-quiz-container");
let currentindexs = localStorage.getItem('currentindex') ||  0;
let currentindex = parseInt(currentindexs)
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

// let play =  document.getElementById('play')
// let pause =  document.getElementById('pause')
// let music = document.getElementById('bg-music')


document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');
  audio.muted = false; // Unmute the audio after it's loaded and started muted
  audio.play().catch(error => {
      console.log('Autoplay failed:', error);
  });
});

function toggleswitch() {
  const audio = document.getElementById('bg-music');
  const playIcon = document.getElementById('play');
  const pauseIcon = document.getElementById('pause');

  if (audio.paused) {
      audio.play();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
  } else {
      audio.pause();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
  }
}
// console.log(currentindex);

// function setIt() {
//   quiz8.questions.forEach((el, i) => {
//     db.collection("614753").doc(`id${i}`).set(el)
//       .then(() => {
//         console.log("Document successfully written!");
//       })
//       .catch((error) => {
//         console.error("Error writing document: ", error);
//       });
//   })

//   quiz9.questions.forEach((el, i) => {
//     db.collection("189432").doc(`id${i}`).set(el)
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

// db.collection("just").doc("419234").set({
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

let gamePin = JSON.parse(localStorage.getItem("userPin"))
let pin = gamePin.toString();
// console.log(pin);
async function getQue() {
  console.log("Hey");
  db.collection(pin).where("hasStarted", "==", true).where("index", "==", currentindex)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // console.log("Got here");
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
  await db.collection(pin).where("hasStarted", "==", true).where("index", "==", currentindex)
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
    var docRef = db.collection(pin);
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
let nume;
let recieve = 0;
function showlb() {
  var docRef = db.collection(pin);
  docRef.get().then((querySnapshot) => {
  const numberOfDocs = querySnapshot.size;
  console.log("Number of documents:", numberOfDocs);
  nume = numberOfDocs
  console.log(nume);
  let nextQuesbtn = `<button class="btn btn-primary my-3" onclick="net()"><span> NEXT QUESTION</span></button>`;
  // let endgame = `<button class="btn btn-danger my-2" onclick="endd()"><span> END QUIZ</span></button>`
  showUsername.innerHTML += nextQuesbtn;
  if(currentindex >= nume - 1){
    window.location.href = 'leaderboard.html'
  }
  }).catch((error) => {
      console.log(error);
  });
  showUsername.innerHTML = "";

    db.collection("posts").where("gamepin", "==", parseInt(pin)).get()
    .then((querySnapshot) => {
        const players = [];
        querySnapshot.forEach((doc) => {
        const username = doc.id;
        const score = doc.data().score;
        const avatar = doc.data().avatar;
        players.push({ username, score, avatar });
        console.log(players);
        });
      // Sort the players by score in descending order
      players.sort((a, b) => b.score - a.score);

      // Iterate over the sorted players array and display them with their ranks
      players.forEach((player, index) => {
          const rank = index + 1;
          const userHTML = `
          <div class="d-flex gaid justify-content-between align-items-center pt-2 px-2 mx-auto bg-white rounded-4" style="width: 90%;">
          <div class="d-flex align-items-center">
            <span class="h5 fw-bold">${rank}.</span>
            <img src="${player.avatar}" class="imad mx-2" alt="">
            <p class="h5 fw-bold">${player.username}</p>
          </div>
          <p class="fs-3 fw-bold">${player.score}</p>
        </div>
        <br>`;
          showUsername.innerHTML += userHTML;
      });
  });
}

console.log(recieve);
showlb();
let userid;

async function endd() {
  try {
    const querySnapshot = await db.collection("posts").where("gamepin", "==", parseInt(pin)).get();
    console.log(parseInt(pin));
    
    // Array to store promises
    const deletePromises = [];

    querySnapshot.forEach((doc) => {
      // Add each delete operation to the array
      deletePromises.push(doc.ref.delete());
    });

    // Wait for all delete operations to complete
    await Promise.all(deletePromises);

    await db.collection(pin).doc(`id${currentindex}`).update({
      hasStarted: false
    });

    console.log("donee");

const querySnapshots = await db.collection(pin.toString()).where("endGame", "==", false).get();
querySnapshots.forEach(async (doc) => {
    try {
        await doc.ref.update({
            endGame: true
        });
        console.log("Document updated successfully:", doc.id);
    } catch (error) {
        console.error("Error updating document:", error);
    }
});

    console.log("Document successfully updated!");
    localStorage.removeItem('score');
    localStorage.removeItem('userPin');
    localStorage.removeItem('username');
    localStorage.removeItem('selectedAvatar');
    window.location.href = 'create.html';

  } catch (error) {
    console.error("Error updating document:", error);
    // Handle error
  }
}



// async function pickAns(ev, i) {
//   db.collection("posts").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//       data = doc.data()
//       userid = data.username
//     });
//   });
//   const optionInputs = document.querySelectorAll('input[name="maya"]');
//   for (const optionInput of optionInputs) {
//     optionInput.disabled = true;
//   }

//   let selected = ev.target.value;

//   if (currentAns === selected) {
//     recieve += 100;
//     ev.target.parentElement.style.backgroundColor = "green";
//   } else {
//     ev.target.parentElement.style.backgroundColor = "red";
//     // Highlight the correct answer
//     optionInputs.forEach((input) => {
//       if (input.value === currentAns) {
//         input.parentElement.style.backgroundColor = "green";
//       }
//     });
//   }

//   if (username) {
//     showUsername.innerHTML = "";
//     showUsername.innerHTML += `<div class="justify-content-between align-items-center pt-2 px-2 mx-auto bg-white rounded-4" style="width: 90%; display:flex;"> 
//     <p class="h5 fw-bold"> ${username}</p>
//     <p class="fs-3 fw-bold"> ${recieve}</p>
//     </div>
//     <br>`;

//     if (userid) {
//       // Save the data to Firestore immediately after the user clicks on an answer
//       db.collection("users").doc(userid).set({
//         score: recieve,
//       })
//         .then(() => {
//           console.log("Data saved to Firestore:", recieve);
//         })
//         .catch((error) => {
//           console.error("Error saving data to Firestore: ", error);
//         });
//     }
//   }

// }


// console.log(userid); 

// async function net() {
//   currentindex++
//   console.log(currentindex);
//   var washingtonRef = await db.collection(pin).doc(`id${currentindex}`);
//   console.log(washingtonRef);

//   // Set the "capital" field of the city 'DC'
//   washingtonRef.update({
//     hasStarted: true
//   })
//     .then(async () => {
//       // console.log("Document successfully updated!");
//       // alert("Updated")
//       db.collection(pin).where("index", "==", currentindex)
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
  await db.collection(pin).doc(`id${currentindex}`).update({
    hasStarted: false
  });
  currentindex++;
  console.log(currentindex);
  try {
    await db.collection(pin).doc(`id${currentindex}`).update({
      hasStarted: true
    });
    console.log(currentindex);
    fetchQue();
    if (quizz !== "") {
      count()
      kojo.style.display = "none";
      main.style.display = "block";
      localStorage.setItem('currentindex', currentindex)
    }

  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// function nextplayers() {
//   var docRef = db.collection(pin).doc(`id${currentindex}`);
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
      showlb()
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