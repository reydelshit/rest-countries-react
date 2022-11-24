import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'

import { MainContext } from '../context/MainContext'

import Bold from '../components/utils/Bold'

const ViewCountry = () => {

  const {id, reg} = useParams()

  // const {storeCountries, setStoreCountries} = useContext(MainContext);

  const [countryDetails, setCountryDetails] = useState([])


  const [borderCountry, setBorderCountry] = useState([])

  const [bord, setBord] = useState([]);

  useEffect(() => {
    
    const viewCountryData = async () => {
      const fetchCountryData = await fetch(`https://restcountries.com/v3.1/name/${id}`)
      const data = await fetchCountryData.json();
        setCountryDetails(data)
        
      }

      //   if(countryDetails[0]?.borders) {
      //     countryDetails[0].borders.forEach(async (detai) => {
      //       try {
      //         const fetchBorderData = await fetch(`https://restcountries.com/v3.1/alpha/${detai}`)
      //         const data = await fetchBorderData.json();

      //         setBord((borders) => [...borders, data[0].name.common])

    
      //       } catch (err) {
      //         console.log(err)
      //       }
      //     })
      //  }

    viewCountryData()

  }, [id])

  // console.log(hays)

  // loop through object 

  const iterateCurrency = countryDetails.map((country) => {
    const {currencies} = country
      for(let key in currencies){
        return currencies[key].name
      }
  })

  const iterateNativeName = countryDetails.map((country) => {
    const {name} = country
      for(let key in name.nativeName){
        return name.nativeName[key].official
      }
  })


  return (
    <div className='country__details'>
      
      <div className='goback'>
        <Link to={`/`}>Back</Link>
      </div>

      {countryDetails.map((details, index) => {
        const {name, population, region, capital, subregion, tld, languages, borders} = details;
        return(        
        <div className='country__container__indi' key={index}>
          <img src={details.flags.png} alt={details.name.common} />

            <div className='country__details'>
              <h1>{name.common}</h1>
              <div className='country__info'>
                <div>
                  <p><Bold text="Native Name"/>: {iterateNativeName}</p>
                  <p><Bold text="Population"/>: {Intl.NumberFormat('en-US').format(population)}</p>
                  <p><Bold text="Region"/>: {region}</p>
                  <p><Bold text="Sub Region"/>: {subregion}</p>
                  <p><Bold text="Capital"/>: {capital}</p>
                </div>

                <div>
                  <p><Bold text="Top Level Domain"/>: {tld}</p>
                  <p><Bold text="Currencies"/>: {iterateCurrency}</p>
                  <p><Bold text="Languages"/>: {Object.values(languages).join(" ")}</p>
                </div>
              </div>
              <div className='border__countries'>
              {/* <Bold text="Border Countries"/>: <p>{bord ? bord.join(" "): <span>no border existing</span>}</p> */}
                </div>
            </div>
          </div>

          )
      })}
    </div>

  )
}

export default ViewCountry