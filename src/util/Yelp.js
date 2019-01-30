const apiKey = 'jNs7LsHjcFiNBJgme3SiZc_6xyPuErSZamJPP3gxp_H-bsAtBEL1Wa8HIQWg4d5P3R77IU5miKUGAjNhOXmAxTT4CYNdLjzX_sTYcuVUv57o1TGWO_0mxs5YWsFRXHYx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count ,
        }
        });
      }
    });
  }
};

export default Yelp;
