import React, { useState } from "react";
import "./AllGames.css";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const gamesData = [
  {
    category: "collection-three",
    name: "Jandi Munda games",
    image: "/images/_5b836222-f6c3-4325-8d8d-23b02eeb21fc.webp",
  },
  {
    category: "collection-three",
    name: "Car Roulette games",
    image: "/images/_43546a57-d256-4212-a958-e2c1ff6d4961.webp",
  },
  {
    category: "collection-three",
    name: "Zoo Roulette games",
    image: "/images/_7ac40ffb-3018-4439-b9ca-dfb74ccc4ffa.webp",
  },

  {
    category: "collection-three",
    name: "Poker games",
    image: "/images/_1ffbe484-9c81-44f5-94b4-85f5da9eb5b0.webp",
  },
  {
    category: "collection-three",
    name: "Head Tail games",
    image: "/images/headtail (1).webp",
  },
  {
    category: "collection-three",
    name: "Jackpot games",
    image: "/images/_a60b9bdb-e06a-450f-911b-4b3ae21ec629.webp",
  },
  {
    category: "collection-three",
    name: "Rummy games",
    image: "/images/_8d35dcc6-5e0f-44c4-b302-50296aba94b9.webp",
  },
  {
    category: "collection-three",
    name: "Andar Bhar Games",
    image: "/images/_a73952e5-a1b6-45de-9644-a3fdc0c1f910.webp",
  },
  {
    category: "collection-three",
    name: "Bac Carat games",
    image: "/images/_2290c2c9-9c61-4873-92c4-9db65e197fc4.webp",
  },

  {
    category: "collection-three",
    name: "Red Black games",
    image: "/images/_f1cf2c21-7fe9-4f0d-9683-7ffe66de9fc2.webp",
  },

  {
    category: "collection-one",
    name: "Poker poll games",
    image: "/images/_0299cb50-9fe5-4cbb-b938-0d6b2fb45524.webp",
  },
  {
    category: "collection-two",
    name: "Praivate Table games",
    image: "/images/_81a2cb99-ceac-4ebe-b3e8-4e12e04d3d07.webp",
  },

  {
    category: "collection-three",
    name: "Jackpoat 3Patti  games",
    image: "/images/_c4270ed5-9963-470c-867b-f348b719f63f.webp",
  },

  {
    category: "collection-one",
    name: "Ludo games",
    image: "/images/_362c08b7-2c8f-4c3b-927c-768dc07d33ff.webp",
  },
  {
    category: "collection-two",
    name: "snake and ladder",
    image: "/images/_81b58a2c-3f2e-40d7-8746-f9aed523b1a7.webp",
  },

  {
    category: "collection-one",
    name: "3 patti games",
    image: "/images/_efc0f6fa-462c-4174-ad6e-b3d4563a4469.webp",
  },

  {
    category: "collection-three",
    name: "Dragon Tiger games",
    image: "/images/_e8d497a2-ea39-4f55-92cd-a636ced219ae.webp",
  },

  {
    category: "collection-three",
    name: "Aviator games",
    image: "/images/_554e0cfb-d397-44cf-97ee-ba9ba4dfd4c9.webp",
  },
  {
    category: "collection-three",
    name: "call Break",
    image: "/images/_b5904400-0160-4652-83c8-725146c2bf13.webp",
  },
  {
    category: "collection-one",
    name: "Custom Boot",
    image: "/images/_458f6f20-0a40-4c6b-bdd7-f1650249e316.webp",
  },
  {
    category: "collection-two",
    name: "Point Rummy",
    image: "/images/_62914abb-5218-4c8c-a110-7c780b32de97.webp",
  },
  {
    category: "collection-two",
    name: "Pool Rummy",
    image: "/images/_e09eb14d-1f59-40a3-a753-0e3e6ae03981.webp",
  },
];

const AllGames = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredGames =
    activeFilter === "*"
      ? gamesData
      : gamesData.filter((game) => game.category === activeFilter);
      const navigate = useNavigate()
  return (
    <div>
      <section
        className="pageheader-section"
        style={{ backgroundImage: "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.webp)" }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">Our ALL Games </h2>
            
          </div>
        </div>
      </section>
      <section className="collection-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
          <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
  <li 
    className={activeFilter === "*" ? "is-checked" : ""}
    onClick={() => handleFilterClick("*")}
    data-filter="*"
  >
    All games
  </li>
  <li
    className={activeFilter === "collection-one" ? "is-checked" : ""}
    onClick={() => handleFilterClick("collection-one")}
    data-filter="collection-one"
  >
    Multi games
  </li>
  <li
    className={activeFilter === "collection-two" ? "is-checked" : ""}
    onClick={() => handleFilterClick("collection-two")}
    data-filter="collection-two"
  >
    Skill
  </li>
  <li
    className={activeFilter === "collection-three" ? "is-checked" : ""}
    onClick={() => handleFilterClick("collection-three")}
    data-filter="collection-three"
  >
    Slots
  </li>
</ul>

            <div className="row g-4 justify-content-center collection-grid">
              {filteredGames.map((game, index) => (
                <div
                  key={index}
                  className={`col-lg-3 col-md-4 col-sm-6 gameListItem ${game.category}`}
                >
                  <div className="game__item item-layer">
                    <div className="game__inner text-center p-0">
                      <div className="game__thumb mb-0">
                        <img
                          src={game.image}
                          alt={`Thumbnail for ${game.name}`}
                          className="rounded-3 w-100"
                        />
                      </div>
                      <div className="game__overlay">
                        <h4>{game.name}</h4>
                        <a href="#" className="default-button">
                          <span>
                            play now <FaAngleRight />
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllGames;
