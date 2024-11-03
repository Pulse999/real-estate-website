import React from "react";
import { Link } from "react-router-dom";
import "../styles/HouseListings.css";

const HouseListings = () => {
  const houses = [
    {
      id: 1,
      address: "123 Main St, Cityville",
      mls: "12345678",
      price: "$300,000",
      beds: 3,
      baths: 2,
      agent: "John Doe",
      courtesy: "City Real Estate",
      image: "/images/House 1/House 1.jpg",
      details: {
        images: [],
        price: "$3,200,000",
        address: "123 Example St, City, State",
        information: {
          purchaseType: "For Sale",
          price: "$1,200,000",
          squareFootage: "3000 sqft",
          baths: 3,
          bedrooms: 4,
          yearBuilt: 2005,
          mlsId: "12345678",
          lotSize: "0.5 acres",
        },
        nearbySchools: ["Silver Oaks High School", "Maplewood Middle School"],
        details: {
          status: "Active",
          propertyType: "Single Family",
          schoolDistrict: "District 12",
          city: "City",
          zip: "12345",
          style: "Modern",
          swimmingPool: "Yes",
          address: "123 Example St",
          neighborhood: "Example Neighborhood",
          state: "State",
        },
        description: "A beautiful modern house...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },
    {
      id: 2,
      address: "456 Elm St, Townsville",
      mls: "87654321",
      price: "$450,000",
      beds: 4,
      baths: 3,
      agent: "Jane Smith",
      courtesy: "Prime Realty",
      image: "/images/House 2/House 2.jpg",
      details: {
        images: [],
        price: "$3,500,000",
        address: "456 Sample Ave, Town, State",
        information: {
          purchaseType: "For Sale",
          price: "$1,400,000",
          squareFootage: "3500 sqft",
          baths: 4,
          bedrooms: 5,
          yearBuilt: 2010,
          mlsId: "87654321",
          lotSize: "0.7 acres",
        },
        nearbySchools: ["Lakeview High School ", "Riverbend Academy"],
        details: {
          status: "Active",
          propertyType: "Single Family",
          schoolDistrict: "District 9",
          city: "Town",
          zip: "54321",
          style: "Contemporary",
          swimmingPool: "No",
          address: "456 Sample Ave",
          neighborhood: "Sample Neighborhood",
          state: "State",
        },
        description: "A spacious contemporary home...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 3,
      address: "789 Oak St, Villageville",
      mls: "11223344",
      price: "$275,000",
      beds: 2,
      baths: 1,
      agent: "Sam White",
      courtesy: "Village Realty",
      image: "/images/House 3/House 3.jpg",
      details: {
        images: [],
        price: "$2,800,000",
        address: "789 Example Ave, Village, State",
        information: {
          purchaseType: "For Rent",
          price: "$1,500/month",
          squareFootage: "2000 sqft",
          baths: 2,
          bedrooms: 3,
          yearBuilt: 1995,
          mlsId: "11223344",
          lotSize: "0.3 acres",
        },
        nearbySchools: [
          "Crestwood High School",
          "Greenfield Preparatory School",
        ],
        details: {
          status: "Available",
          propertyType: "Condo",
          schoolDistrict: "District 7",
          city: "Village",
          zip: "67890",
          style: "Traditional",
          swimmingPool: "Yes",
          address: "789 Example Ave",
          neighborhood: "Historic District",
          state: "State",
        },
        description: "A charming traditional condo...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 4,
      address: "101 Maple St, Metropolis",
      mls: "99887766",
      price: "$600,000",
      beds: 5,
      baths: 4,
      agent: "Ella Brown",
      courtesy: "Urban Real Estate",
      image: "/images/House 4/House 4.jpg",
      details: {
        images: [],
        price: "$5,500,000",
        address: "101 Prime Blvd, Metropolis, State",
        information: {
          purchaseType: "For Sale",
          price: "$3,000,000",
          squareFootage: "5000 sqft",
          baths: 5,
          bedrooms: 6,
          yearBuilt: 2015,
          mlsId: "99887766",
          lotSize: "1 acre",
        },
        nearbySchools: ["Evergreen High School", "Hillside Junior Academy"],
        details: {
          status: "Active",
          propertyType: "Single Family",
          schoolDistrict: "District 1",
          city: "Metropolis",
          zip: "11223",
          style: "Luxury",
          swimmingPool: "Yes",
          address: "101 Prime Blvd",
          neighborhood: "Exclusive Estates",
          state: "State",
        },
        description: "An exquisite luxury home...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 5,
      address: "202 Pine St, Ruralville",
      mls: "22334455",
      price: "$150,000",
      beds: 3,
      baths: 2,
      agent: "Jack Black",
      courtesy: "Country Homes",
      image: "/images/House 5/House 5.jpg",
      details: {
        images: [],
        price: "$2,200,000",
        address: "202 Peaceful Rd, Rural, State",
        information: {
          purchaseType: "For Sale",
          price: "$800,000",
          squareFootage: "2200 sqft",
          baths: 2,
          bedrooms: 4,
          yearBuilt: 1990,
          mlsId: "22334455",
          lotSize: "2 acres",
        },
        nearbySchools: [
          "Summit Ridge High School",
          "Brightwood Charter School",
        ],
        details: {
          status: "Available",
          propertyType: "Ranch",
          schoolDistrict: "District 3",
          city: "Rural",
          zip: "44556",
          style: "Rustic",
          swimmingPool: "No",
          address: "202 Peaceful Rd",
          neighborhood: "Countryside",
          state: "State",
        },
        description: "A rustic countryside retreat...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 6,
      address: "303 Birch St, Suburbia",
      mls: "33445566",
      price: "$350,000",
      beds: 4,
      baths: 3,
      agent: "Lucy Green",
      courtesy: "Suburban Realty",
      image: "/images/House 6/House 6.jpg",
      details: {
        images: [],
        price: "$3,000,000",
        address: "303 Suburban Dr, Suburbia, State",
        information: {
          purchaseType: "For Rent",
          price: "$2,200/month",
          squareFootage: "2500 sqft",
          baths: 3,
          bedrooms: 5,
          yearBuilt: 2000,
          mlsId: "33445566",
          lotSize: "0.6 acres",
        },
        nearbySchools: ["Horizon High School", "Lakeside Academy"],
        details: {
          status: "Available",
          propertyType: "Townhouse",
          schoolDistrict: "District 5",
          city: "Suburbia",
          zip: "66778",
          style: "Colonial",
          swimmingPool: "Yes",
          address: "303 Suburban Dr",
          neighborhood: "Green Meadows",
          state: "State",
        },
        description: "A cozy suburban townhouse...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },
    {
      id: 7,
      address: "404 Cedar St, Seaside",
      mls: "44556677",
      price: "$575,000",
      beds: 3,
      baths: 2.5,
      agent: "Dylan Fox",
      courtesy: "Coastal Realty",
      image: "/images/House 7/House 7.jpg",
      details: {
        images: [],
        price: "$2,900,000",
        address: "404 Coastal Rd, Seaside, State",
        information: {
          purchaseType: "For Sale",
          price: "$1,750,000",
          squareFootage: "2700 sqft",
          baths: 3,
          bedrooms: 4,
          yearBuilt: 2018,
          mlsId: "44556677",
          lotSize: "0.4 acres",
        },
        nearbySchools: [
          "North Valley High School",
          "Cedar Springs Middle School",
        ],
        details: {
          status: "Pending",
          propertyType: "Single Family",
          schoolDistrict: "District 8",
          city: "Seaside",
          zip: "88776",
          style: "Coastal",
          swimmingPool: "Yes",
          address: "404 Coastal Rd",
          neighborhood: "Ocean View",
          state: "State",
        },
        description: "A stunning coastal property...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 8,
      address: "505 Redwood St, Lakeview",
      mls: "55667788",
      price: "$800,000",
      beds: 5,
      baths: 4,
      agent: "Alex Grant",
      courtesy: "Lakeside Homes",
      image: "/images/House 8/House 8.jpg",
      details: {
        images: [],
        price: "$4,300,000",
        address: "505 Lake Rd, Lakeview, State",
        information: {
          purchaseType: "For Sale",
          price: "$2,500,000",
          squareFootage: "4500 sqft",
          baths: 5,
          bedrooms: 6,
          yearBuilt: 2020,
          mlsId: "55667788",
          lotSize: "1.5 acres",
        },
        nearbySchools: ["Pinecrest High School ", "Elmwood Learning Center"],
        details: {
          status: "Active",
          propertyType: "Villa",
          schoolDistrict: "District 6",
          city: "Lakeview",
          zip: "99887",
          style: "Mediterranean",
          swimmingPool: "Yes",
          address: "505 Lake Rd",
          neighborhood: "Lakeside Villas",
          state: "State",
        },
        description: "Luxurious lakeside villa...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 9,
      address: "606 Willow St, Downtown",
      mls: "66778899",
      price: "$1,100,000",
      beds: 4,
      baths: 3.5,
      agent: "Nina Hart",
      courtesy: "Urban Spaces Realty",
      image: "/images/House 9/House 9.jpg",
      details: {
        images: [],
        price: "$3,700,000",
        address: "606 Metro Blvd, Downtown, State",
        information: {
          purchaseType: "For Rent",
          price: "$3,500/month",
          squareFootage: "3500 sqft",
          baths: 4,
          bedrooms: 5,
          yearBuilt: 2021,
          mlsId: "66778899",
          lotSize: "0.8 acres",
        },
        nearbySchools: ["Golden Meadows High School", "Willowbrook Academy"],
        details: {
          status: "Available",
          propertyType: "Penthouse",
          schoolDistrict: "District 2",
          city: "Downtown",
          zip: "55443",
          style: "Modern",
          swimmingPool: "No",
          address: "606 Metro Blvd",
          neighborhood: "City Heights",
          state: "State",
        },
        description: "Spacious modern penthouse...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },

    {
      id: 10,
      address: "707 Aspen St, Uptown",
      mls: "77889900",
      price: "$1,750,000",
      beds: 6,
      baths: 5,
      agent: "Oscar Blue",
      courtesy: "Uptown Realty",
      image: "/images/House 10/House 10.jpg",
      details: {
        images: [],
        price: "$6,000,000",
        address: "707 Park Ave, Uptown, State",
        information: {
          purchaseType: "For Sale",
          price: "$4,500,000",
          squareFootage: "5500 sqft",
          baths: 6,
          bedrooms: 7,
          yearBuilt: 2022,
          mlsId: "77889900",
          lotSize: "2 acres",
        },
        nearbySchools: [
          "Riverside High School",
          "Blue Ridge Preparatory School",
        ],
        details: {
          status: "Active",
          propertyType: "Estate",
          schoolDistrict: "District 10",
          city: "Uptown",
          zip: "44332",
          style: "Victorian",
          swimmingPool: "Yes",
          address: "707 Park Ave",
          neighborhood: "Uptown Manor",
          state: "State",
        },
        description: "Majestic Victorian estate...",
        location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.719742266132!2d26.154314675375677!3d-29.08320267542169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fdb6a5867b92b%3A0x6a68f1ae264ac9e!2sCTU%20Training%20Solutions%20Bloemfontein!5e1!3m2!1sen!2sza!4v1730047943180!5m2!1sen!2sza",
      },
    },
    // Add more listings as needed
  ];

  return (
    <div className="house-listings">
      <h2>Available Listings</h2>
      <div className="house-grid">
        {houses.map((house) => (
          <div key={house.id} className="house-item">
            <img
              className="house-img"
              src={house.image}
              alt={`property of ${house.address}`}
            />
            <div className="house-info">
              <p>{house.address}</p>
              <p>MLS#: {house.mls}</p>
              <p>{house.price}</p>
              <p>
                {house.beds} BEDS / {house.baths} BATHS
              </p>
              <p>Listing Agent: {house.agent}</p>
              <p>Courtesy of: {house.courtesy}</p>
              <Link to={`/property/${house.id}`} state={house.details}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseListings;
