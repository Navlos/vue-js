const app = Vue.createApp({
    data(){
      return{
          showBooks:true,
          title:'ONE THOUGHT AT A TIME',
          author:'Adetayo',
          age:45,
      }
    },

    methods:{
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        }


        }

    }
  )
  
  app.mount('#app')