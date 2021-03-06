// define container variable in order to import objects via HTML
const container = document.querySelector('.container');

// define empty variable to enable HTML to be dynamically added via forEach loop
let containerHTML = '';

// fetch json array and send error if not
fetch('/api/v0/gallery')
  .then(response =>  {
    if(!response.ok) {
      throw new Error('Unable to locate json file');
    }else{
      return response.json();
    }
  })
  .then((responseJson) =>{
    const imgArray = responseJson;
    imgArray.forEach((pic) => {
      containerHTML += 
      `<figure class="card">
      <img class="card-img" src="${pic.imageSrc}" alt="${pic.title}"
      width="${pic.width}" height="${pic.height}" onclick="window.location='gallery/${pic.id}'">
      <figcaption>
        <h2>${pic.description}</h2>
      </figcaption>
    </figure>`;
      });
      
      // output the populated values from the pic function
      container.innerHTML = containerHTML; 
  
  });

  