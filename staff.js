const object = [
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
  },
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
  },

  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
  },
  {
    image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
  },

  {
   image: 'images/-r0lf6z@-1289732288.jpg',
    title: 'Abur Orhembaga Daniel (C.E.O)'
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

