import { useState, useEffect } from "react"
import "../../Styles/Reused/CountrySelecter.css"
import axios from "axios"

const CountrySelecter =()=> {

    const [country, setCountry] = useState({
        loading: false,
        countries: [],
        errorMessage: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setCountry ({
                    ...country,
                    loading: true
                })

                const dataURL = "https://restcountries.com/v3.1/all"
                const response = await axios.get(dataURL)

                setCountry ({
                    ...country,
                    countries: response.data,
                    loading: false
                })
            }

            catch (error) {
                setCountry ({
                    ...country,
                    loading: false,
                    errorMessage:'error'
                })
            }
        }

        fetchData();
    }, [])

    return (
        <div className="CountrySelecter">
            <select>
                <option>Select country</option>

                {country.countries.map((selected) => (
                    <option value={selected.name.common}>{selected.name.common}</option>
                ))}
            </select>
        </div>
    )
}

export default CountrySelecter