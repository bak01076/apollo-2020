import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const GET_MOVIES = gql`
  {
    movies {
      id
      midium_cover_image
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "loading...";
  }
};
