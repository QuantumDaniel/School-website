const object= [
  {
    image:'images/Admistrative block.jpg',
    title:'Block'
  },
  {
    image:'images/IMG_20240526_182541_497 (5)@1394047752.jpg',
    title:'Lodge'
  },

  {
    image:'images/IMG_20240526_182650_260 (1) (2)@-2007831903.jpg',
    title:'Lodge'
  },
  {
    image:'images/IMG_20240526_180109_087 (1) (1)@249234736.jpg',
    title:'Block2'
  },

  {
    image:'images/IMG_20240526_180136_107 (1) (1)@633120083.jpg',
    title:'secondary block'
  },

  {
    image:'images/IMG_20240526_180029_262 (1) (1)@1351912044.jpg',
    title:'primary block'
  },

  {
    image:'images/IMG_20240526_180540_199 (1) (1)@333951753.jpg',
    title:'junction'
  },

  {
    image:'images/IMG_20240526_180136_107 (1) (1)@633120083.jpg',
    title:'secondary block'
  },
  {
    image:'images/IMG_20240526_181319_082 (1)@1716450734.jpg',
    title:'Liabrary'
  },

  {
    image:'images/IMG_20240527_094240_272@-1113849659.jpg',
    title:`Celebrating children's day`
  },

  {
    image:'images/IMG_20240526_180136_107 (1) (1)@633120083.jpg',
    title:'secondary block'
  },

  {
    image:'images/IMG_20240526_180136_107 (1) (1)@633120083.jpg',
    title:'secondary block'
  },

];

let gallery='';
object.forEach((object)=>{


 gallery +=`

        <div class=" image1">
         <img src="${object.image}">

      <div class="title">${object.title}
 </div>
     </div>

  
  `
});

document.querySelector('.js-image-display').innerHTML=gallery;
document.querySelectorAll('.image1').addEventListener('click',()=>{
  alert('hello');
  
})
