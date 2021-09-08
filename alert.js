console.log('I am here');

// alert('Ma is coming!');//direct browser open korlei asbe

const maComing = () => (
   alert('Ammu is coming.Open the book')
)//button e click korle asbe...html e ekta button declare kore rakhchi.

/*
const askpicnic = () => {
   confirm('are you going to picnic');
}*/

/*
const askpicnic = () => {
   const response = confirm('are you going to picnic');

   console.log(response);
}*/

const askpicnic = () => {
   const response = confirm('are you going to picnic');
   console.log(response);

   if (response == true) {
      alert('amake fee ta b-kash kore de')
   }
   else {
      console.log('dure giya mor!!!');
   }
}

const askName = () => {
   const name = prompt('what is your name');
   /*console.log(name);*/

   if (name) {
      console.log(name);
   }
   else if (name == null) { console.log('') }
}
