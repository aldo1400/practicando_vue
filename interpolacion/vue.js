var app=new Vue({
  el:'.vue',
  data:{
    mensaje:'Aprende vue.js Facilmente'
  },
  methods:{
    mostrarMensaje:function(){
      return this.mensaje;
    }
  }
})
