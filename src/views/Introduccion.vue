<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="")
      .col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá, con mayor profundidad y detalle, los aspectos claves de la comunicación empresarial e interempresarial. 

        p Las empresas de hoy dependen, cada vez más, de la comunicación con otros, para crecer y aumentar el valor y la utilidad del negocio; esto implica una relación fluida con proveedores y compradores, para lograr la efectividad en la cadena de abastecimiento y la logística de la entrega de los productos a los clientes. La comunicación mantiene un vínculo estrecho con la disponibilidad de recursos y contar con sistemas tecnológicos, puede darle ventajas a la organización.

    p.mt-4 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.         
    
    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-4 Para ampliar la información descrita anteriormente, veamos lo siguiente.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
