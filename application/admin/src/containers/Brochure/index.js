/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
// import { NotFound } from 'strapi-helper-plugin';

const BrochurePage = (props) => {
  const urlToCheck =
    "http://localhost:1337/uploads/blocksite_export_11_18_2021_fd8cd4cc00.csv";
  const {
    params: { url },
  } = useRouteMatch("/brochure/:url");

  const reqData = async (url) => {
    try {
      const data = await axios.get(url);
      console.log(`data`, data);
      return data;
    } catch (err) {
      console.log(`err`, err);
    }
  };
  reqData(urlToCheck)
    .then((data) => {
      console.log("dataInPromis", data);
    })
    .catch((err) => {
      console.log(`err`, err);
    });
  console.log(`brochurepage`, url);
  return (
    <>
      <div>You are viewing brochure page</div>
    </>
  );
};

BrochurePage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default BrochurePage;
