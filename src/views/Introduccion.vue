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
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="Texto que describa la imagen")
      .col-lg-9
        p Estimado aprendiz, reciba un cordial saludo, a continuación iniciará un nuevo componente formativo. Las empresas de hoy dependen cada vez más de la comunicación con otros para crecer y aumentar el valor y la utilidad del negocio; esto implica una relación fluida con proveedores y compradores para lograr la efectividad en la cadena de abastecimiento y la logística de entrega de productos a los clientes. La comunicación mantiene un vínculo estrecho con la disponibilidad de recursos; tener sistemas más o menos tecnológicos puede darle ventajas a la organización. Lo invitamos a ver el siguiente video donde conocerá, de forma general, la temática que estudiará a lo largo de este componente formativo.
    
    
    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption   VIDEO

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
