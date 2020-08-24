import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Details = () => {
  const params = useParams();
  console.group('useParams()');
  console.log(params);
  console.groupEnd();

  console.group('useLocation()');
  console.log(useLocation());
  console.groupEnd();

  console.group('Query String.parse()');
  console.log(queryString.parse(useLocation().search));
  console.groupEnd();

  const { target } = params;

  return <div>{target}'s Details</div>;
};

export default Details;
