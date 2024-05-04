import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import logo1 from './medisync.png';
import Logout from './shutdown.png';
let data = "";

const Medicines = () => {
  const [medicineData, setMedicineData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const searchMedicine = async (medicineName) => {
    const encodedMedicineName = encodeURIComponent(medicineName);
    const url = `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${encodedMedicineName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '43002541c6mshcff4af9f634f660p116baejsncf97a6d33ffa',
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMedicineData(result);
      data = result;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    searchMedicine(searchQuery); // Pass the search query to the searchMedicine function
  };

  return (
    <div>
      <header>
        <img src={logo1} alt="l" />
        <h1>MEDIsync</h1>
        <Link to="/"><p><img className='logout' src={Logout} alt="" />logout</p></Link>
      </header>
      <div class="search-container">
      <input
        type="text"
        className="search-input" placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)} // Update searchQuery state with input value
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {medicineData && (
        <div>
          {/* <h1>{medicineData}</h1> */}
          <h2>{medicineData[0].generic_name}{data.generic_name}</h2>
          {/* <p>{medicineData[0].active_ingredients[0]}</p>
          <p>{medicineData[0].active_ingredients[1]}</p>
          <p>{medicineData[0].active_ingredients[2]}</p> */}
          <p>{medicineData[0].dosage_form}</p>
          <p>{medicineData[0].labeler_name}</p>
          <p>{medicineData[0].pacakging}</p>
          {/* Render other relevant data here */}
        </div>
      )}
    </div>
  );
};

export default Medicines;
