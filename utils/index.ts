import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    params: { model: 'corolla' },
    headers: {
        'X-RapidAPI-Key': '0a1c67c9abmsh8ef50120764e1b8p1cc99djsnd7f5f7f549e0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
}

export async function fetchCars() {
    const response = await axios.request(options)

    const result = await response.data

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50 // Base rental price per day in dollars
    const mileageFactor = 0.1 // Additional rate per mile driven
    const ageFactor = 0.05 // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}
