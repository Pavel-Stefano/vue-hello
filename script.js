


const app = new Vue({
    el: '#root',
    data: {
      messaggio: "Welcome Vue",
      immagine: "https://picsum.photos/id/",
      idImmagine: "",
      imgSize: "/600/600",
    },
    methods: {

        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let random = Math.floor(Math.random() * (max - min) + min);
            console.log(random);
            this.idImmagine= random;
          },
    },
    
  }) 
  