import React from "react";
import Company from "../CompanyDetails/Company";
import PopularRepositories from "../Repositories/PopularRepositories";
import MostActivePeople from "../People/MostActivePeople";

const Overview = () => {
  return (
    <div>
      <Company />
      <PopularRepositories />
      <MostActivePeople />
    </div>
  );
};

export default Overview;
