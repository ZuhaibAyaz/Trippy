import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

import Cards from "./Cards";

function Body() {
  return (
    <div>
      <section className="SECTION1">
        <div>
          <div className="section1-container">
            <div className="section1-title">Your journey Your story</div>
            <div className="section1-subtitle">
              {" "}
              Choose your favourite destination
            </div>

            <div>
              <button className="section1-button">Travel Plans</button>
            </div>
          </div>
        </div>
      </section>

      <section className="SECTION2">
        <div>
          <div className="section2-title-container">
          <div className="title2">Popular Destinations</div>
            <div className="section2-subtitle">
              Tours give you the opportunity to see a lot, within a time frame
            </div>
          </div>

          <div class="grid-container">
            <div className="row1">
              <div class="grid-item">
                <div className="section2-item-title">
                  Taal Volcano, Batangas
                </div>
                <div className="section2-item-desc">
                  One of the most iconic views in Luzon, Mt. Taal boasts a
                  volcano inside a lake inside an island. If you fancy a closer
                  look, the hike up to the crater is a mere 45 minutes, and is
                  easy enough for beginners. Guides will assist you most of the
                  way, and you’ll see the peculiar environment found on an
                  active volcano, including volcanic rocks and steam vents. The
                  hike can be dusty and hot, so plan for an early morning trip,
                  and then unwind with some bulalo before heading back home!
                </div>
              </div>

              <div class="grid-item">
                <center>
                  <img src={img2} alt="" />
                </center>
              </div>
            </div>

            <div className="row2">
              <div class="grid-item">
                <center>
                  <img src={img1} alt="" />
                </center>
              </div>

              <div class="grid-item">
                <div className="section2-item-title">
                  Mt. Daguldul, Batangas
                </div>
                <div className="section2-item-desc">
                  If you’re looking for a hike that’s a little more challenging
                  but still good for a beginner mountaineer, check out Mt.
                  Daguldul in San Juan, Batangas. You’ll start your hike from
                  the beach and pass through tropical forest, different rock
                  formations, and small streams. There’s a small store halfway
                  up the trail where you can take a break and drink buko juice,
                  and though the summit itself may not have the best view, the
                  breeze is fantastic. Once you’ve made it back down, head
                  straight to the beach for a refreshing, well-deserved swim.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="SECTION3">
        <div>
          <div className="section2-title-container">
            <div className="title2">Recent Trips</div>
            <div className="section2-subtitle">
              You can discover unique destinations using Google Maps.
            </div>
          </div>

          <div class="card-grid-container">
            <div class="card-grid-item">
              <Cards
                image={img1}
                title="Trip in Indonesia"
                desc="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
              />
            </div>

            <div class="card-grid-item">
              <Cards
                image={img3}
                title="Trip in Malaysia"
                desc="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
              />
            </div>

            <div class="card-grid-item">
              <Cards
                image={img2}
                title="Trip in France"
                desc="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
