<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Indicadores
    .bg14
      .row
        .col-lg-2
          figure
            img(src="@/assets/curso/temas/Tema5/img1.png", alt="")
        .col-lg-10
          p La comunicación en el ámbito empresarial ha tomado cada vez más relevancia en las organizaciones, ya que el flujo de información activa debe ser más fluido, más claro y oportuno; por ello, las herramientas de comunicación son fundamentales a la hora de fomentar y soportar la colaboración entre equipos de trabajo, con el fin de simplificar esfuerzos, ser más asertivos en las metas o simplemente coordinar acciones comunes.

    h4.my-5  Tipo de indicadores

    p.mb-5 En lo que respecta a los indicadores, puede existir un sinnúmero de estos. No obstante, suelen acopiarse en tres grandes grupos:

    ImagenInfograficaB.color-acento-botones
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/Tema5/img3.png', alt='')
            

      div(x="9.3%" y="28.6%" tooltip="Ver más" numero="1")
        .row.justify-content-center
          .col-lg-6
            h4 De eficacia: 
            p Su función principal es medir si los procesos se realizan de la manera correcta.


      div(x="89.5%" y="23.7%" tooltip="Ver más" numero="3")
        .row.justify-content-center
          .col-lg-6
            h4 De efectividad: 
            p Evalúan el impacto de la gestión en un determinado periodo, teniendo en cuenta las actividades realizadas y los recursos utilizados.

      div(x="9%" y="73%" tooltip="Ver más" numero="2")
        .row.justify-content-center
          .col-lg-6
            h4 De eficiencia: 
            p Miden si los procesos, además de hacerse de manera correcta, utilizan menos recursos.

      div(x="92.1%" y="65.2%" tooltip="Ver más" numero="4")
        .row.justify-content-center
          .col-lg-9
            .col-lg-7  
              h4 Para la gestión de compras, entre los indicadores más usados están:
            .col-lg-8
              figure
                img(src="@/assets/curso/temas/Tema5/img4.svg", alt="")

    h4.my-5 Características y aplicación de los indicadores

    .row
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/Tema5/img5.svg", alt="")
      .col-lg-8
        
          .col-lg-12
            .cajon.color-acento-contenido.p-3            
                p Los indicadores de gestión tienen en común los siguientes aspectos relevantes: 
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Son proyectivos y perspectivos, miden cambios en una situación determinada durante el tiempo.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Permiten revisar los resultados de acciones tomadas o hacerles seguimiento. 
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Permiten evaluar el cumplimiento de objetivos de desarrollo organizacional.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Son valiosos para determinar cómo alcanzar mejores resultados en los proyectos de desarrollo.
    .row.justify-content-center.mt-3       
      .col-lg-5
        p.mt-4 Y ¿cómo funciona la aplicación de los indicadores?

    .row
      
      .col-lg-8
        
          .col-lg-12
            .cajon.color-primario.p-3            
                p Entre tantas funciones que pueden tener los indicadores, las siguientes son las más remarcables:
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Facilitan la toma de decisiones organizacionales basadas en resultados objetivos.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Controlan la evolución de procesos.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Sirven para la planificación y prospección de la organización.
                p.edit-angle <i class="fas fa-angle-right" STYLE="Color: #D84318"></i> Son útiles para la comprensión de la evolución, situación actual y futuro de la organización.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/Tema5/img6.svg", alt="")

    .row.my-5.justify-content-center
      .col-12
        .bloque-texto-g.color-primario.coloryellow.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema5/img7.svg')})`}"
          )
          .bloque-texto-g__texto4.p-4
            .col-11.col-lg-12
              p.mb-0  Los indicadores son herramientas importantes para las organizaciones desde muchos puntos de vista: en planeación sirven como instrumento para medir resultados de metas y objetivos futuros; como herramienta operativa son útiles para medir resultados inmediatos y proponer opciones de mejora, y como instrumento de evolución explican cuantitativamente sucesos y su evolución en el tiempo. <br><br>Usar indicadores es muy común en las organizaciones, debido a su versatilidad y por la objetividad de sus resultados, los cuales se pueden analizar y, con base en ellos, desplegar acciones de mejoramiento continuo. Por esto, es posible afirmar que, todo lo que se mide, se puede gestionar y mejorar.


    .row.justify-content-center  
      .col-lg-10
        .cajon.color-primario.p-3            
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.  
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
