import React, { useState } from "react";
import "./styles.css";

var categoryList = {
  HOME: [
    {
      name: "",
      location:
        "Hey!! Welcome to the Travel Guide. Here is the guide which suggests places of different traveling categories. Click on the category to explore more."
    },
    {
      location:
        "🗺️ It's Better to See Something Once Than to Hear About It a Thousand Times. Fill Your Life With Experiences."
    }
  ],
  ADVENTURE: [
    {
      name: "⛰️ TREKKING:",
      location: ""
    },
    {
      name: "Treks in Uttarakhand",
      location:
        "- Kedarkantha, Brahmatal, Dayara Bugyal, Deoriatal Chandrashila, Kuari Pass, Valley of Flowers, Ali Bedni Bugyal, Har Ki Dun, Phulara Ridge,"
    },
    {
      name: "   ",
      location:
        "Pangarchulla Peak, Nag Tibba (2-Day Trek), Roopkund, Gidara Bugyal, Gaumukh Tapovan, Kedartal Trek, Bali Pass"
    },
    {
      name: "Treks in Himachal Pradesh",
      location:
        "- Hampta Pass, Buran Ghati, Rupin Pass, Beas kund, Bhrigu Lake, Miyar Valley, Pin Bhaba Pass"
    },
    {
      name: "Treks in Jammu & Kashmir",
      location:
        "- Kashmir Great Lakes, Tarsar Marsar, Gurez Valley, Nafran Valley, Warwan Valley"
    },
    {
      name: "Treks in Ladakh",
      location: "- Chadar Trek"
    },
    {
      name: "Treks in West Bengal",
      location: "- Sandakphu Phalut"
    },
    {
      name: "Treks in Sikkim",
      location: "- Geochala"
    },
    {
      name: "Treks in Maharashtra",
      location:
        "- Lohagad Fort, Kalsubai Peak, Harihar Fort, Ratangad Fort, Harishchandragad Fort, Rajgad Fort, Sandhan Valley Trek, Kalavatin Durg Trek,"
    },
    {
      name: "",
      location:
        "Visapur Fort, Karnala Fort, Rajmachi Fort, Sinhagad Fort, Torna Fort, Devkund WaterFalls, Bhairavgad, Alang Madan Kulang"
    },
    {
      name: "Treks in Nepal Region",
      location: "- Everest Base Camp, Annapurna Base Camp, Khopra Ridge"
    },
    {
      name: "🚣‍♂️ RIVER RAFTING",
      location: "- Rishikesh, Himachal Pradesh, Sikkim, Dandeli"
    },
    {
      name: "🔥 BUNGEE JUMPING",
      location:
        "- Rishikesh (83 metres), Goa (55 metres): Jumpin Heights Company"
    },
    { name: "🪂 PARAGLIDING", location: "- Bir billing (Himachal Pradesh)" },
    { name: "⛷️ SNOW SKIING COURSE", location: "- IISM Gulmarg, Auli" },
    { name: "🏄🏼 SURFING COURSE", location: "- Mulki" },
    {
      name: "🧗 MOUNTAINEERING COURSE",
      location:
        "- Nehru Institute of Mountaineering (NIM), Uttarakhand | HMI, Darjeeling | ABVIMAS, Manali | JIM, J&K | NIMAS, Arunachal Pradesh"
    }
  ],
  "CULTURE & HERITAGE": [
    { name: "Ellora Caves", location: "- Aurangabad, Maharashtra" },
    { name: "Konark Temple", location: "- Odisha" }
  ],
  SPIRITUAL: [
    {
      name: "JYOTIRLINGAS",
      location:
        "- Somnath, Gujarat| Nageshwar, Gujarat| Bhimashankar, Maharashtra| Trimbakeshwar, Maharashtra| Grishneshwar, Maharashtra|"
    },
    {
      name: "  ",
      location:
        "Vaidyanath, Jharkhand| Mahakaleshwar, Madhya Pradesh| Omkareshwar, Madhya Pradesh| Kashi Vishwanath, Uttar Pradesh| Kedarnath, Uttarakhand|"
    },
    {
      name: " ",
      location: " Rameshwaram, Tamil Nadu| Mallikarjuna, Andhra Pradesh"
    }
  ],
  "NATURAL ATTRACTIONS": [
    { name: "Araku", location: "- Visakhapatnam, AndhraPradesh" }
  ]
};

var categoriesWeHave = Object.keys(categoryList);

export default function App() {
  var [selectedCategory, setCategory] = useState("HOME");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>✈️ TRAVEL GUIDE</h1>
        <div>
          {categoriesWeHave.map(function (category) {
            return (
              <button
                key={category}
                onClick={() => categoryClickHandler(category)}
                className="items"
              >
                {category}
              </button>
            );
          })}
        </div>
      </nav>
      <ul className="listItem">
        {categoryList[selectedCategory].map(function (place) {
          return (
            <li className="list" key={place.name}>
              <div className="div">
                {place.name} {place.location}
              </div>
            </li>
          );
        })}
      </ul>
      <footer className="footer">
        <div className="footer-items">© | 2022 | KSJ VARDHAN</div>
        <a href="https://www.instagram.com/vardhan_komma/">Instagram</a>
        <a href="https://www.facebook.com/vardhan.smart.3/">Facebook</a>
        <a href="https://www.linkedin.com/in/saijayavardhankomma/">LinkedIn</a>
        <div className="footer-items">✉ ksjvardhan@gmail.com</div>
      </footer>
    </div>
  );
}
