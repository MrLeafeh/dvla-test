import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse';
import React, { useState } from 'react';

function FetchApi() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  const apiGet = () => {
    fetch(
      'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
      {
        method: 'post',
        headers: {
          'x-api-key': 'EX3qAg1Yjy6yWucSx5vRX1XGIGs4uce78AzU8SE9',
          Accept: 'application/json+v6',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: '{"registrationNumber":"AA19AAA"}',
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        setData(json);
      });
  };

  const handleChange = (event: any) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    apiGet();
    console.log(inputs);
  };

  return (
    <div>
      <div className='AddToList'>
        <div onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Txx LFM'
            className='numberplate'
            onChange={handleChange}
            name='numberPlate'
          />
        </div>
        <br />
        <button className='AddToList-btn' onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FetchApi;
