import React from "react";
import "./People.css";
import peopleDetails from "./peopleDetails";
import { Link } from "react-router-dom";

const MostActivePeople = () => {
  return (
    <div className="people mt-5">
      <h3>Most Active Contributors</h3>
      <div className="row">
        {peopleDetails.slice(0, 6).map((person, inx) => (
          <div className="col-12" key={inx}>
            <div className="card my-3">
              <div className="card-body">
                <div className="flex-row-custom">
                  <div className="flex-row-custom">
                    <img
                      src={person.imageUrl}
                      alt="profile"
                      className="rounded-circle"
                    />
                    <div className="ms-5">
                      <h3>{person.name}</h3>
                      <p>{person.experience}</p>
                      <div>{person.tools.join(", ")}</div>
                    </div>
                  </div>

                  <div className="align-self-center">
                    <div className="flex-row-custom">
                      <div className="activity-graph">
                        {person.contribution.map((contrib, idx) => (
                          <div
                            key={idx}
                            className={`activity-bar ${
                              contrib > 10
                                ? "high"
                                : contrib > 5
                                ? "medium"
                                : contrib > 0
                                ? "low"
                                : "none"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <a
                        className="btn align-self-center ms-5"
                        href={person.followLink}
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/people" className="btn w-100 mx-auto">
        View All
      </Link>
    </div>
  );
};

export default MostActivePeople;
