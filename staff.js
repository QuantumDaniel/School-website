const object = [
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Mom mngohol catherine \n Proprietress'
  },
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Bem  dajo  Gabriel  school\n Administrator'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'corpers lodge'
  },
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'secondary block'
  },

  {
   image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'secondary block'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'primary block'
  },

  {
   image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'junction'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'School gate'
  },
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Liabrary'
  },

  {
    image: 'Image/telescope logo.png',
    title: 'School LOgo'
  },

  {
    image: 'Image/IMG_20240526_182009_746 (1)@296927994.jpg',
    title: 'Mission/vision'
  },

];


const objectPrimary = [
  {
    image: '',
    title: 'Mom mngohol catherine \n Proprietress'
  },
  {
    image: '',
    title: 'Bem  dajo  Gabriel  school\n Administrator'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },
  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },

  {
    image: 'Image/Dan.jpeg',
    title: 'Abur Orhembaga Daniel \n Maths/Physics teacher'
  },


];






let gallery = '';
object.forEach((object) => {


  gallery += `

        <div class=" image1">
         <img src="${object.image}" title = "Staff" loading = "lazy">

      <div class="title">${object.title}
 </div>
     </div>
  `
});

document.querySelector('.js-image-display').innerHTML = gallery;

document.querySelector('.js-primary-button').addEventListener('click', () => {
  document.querySelector('.js-section').innerHTML = 'Primary section';
  let primaryGallery = '';
  objectPrimary.forEach((objectPrimary) => {


    primaryGallery += `
   
           <div class=" image1">
            <img src="${objectPrimary.image}" title = "staff" loading = "lazy">
   
         <div class="title">${objectPrimary.title}
    </div>
        </div>
     `
  });

  document.querySelector('.js-image-display').innerHTML = primaryGallery;
});




document.querySelector('.js-secondary-button').addEventListener('click', () => {
  document.querySelector('.js-section').innerHTML = 'secondary section';
  let gallery = '';
  object.forEach((object) => {
    gallery += `
   
           <div class=" image1">
            <img src="${object.image}">
   
         <div class="title">${object.title}
    </div>
        </div>
     `
  });

  document.querySelector('.js-image-display').innerHTML = gallery;





});

