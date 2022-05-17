import React from "react";
import { FormattedDate, FormattedNumber } from 'react-intl';


const Job = (props) => {
  const localLang = navigator.language;
  
  let million;
  if (localLang==="en") {
     million = 'million';
  } else {
    if(props.offer.salary > 1){
      million = 'millones'
    }
    else{
      million = 'millon'
    }
  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {million}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views}/>
      </td>
    </tr>
  );
};

export default Job;
