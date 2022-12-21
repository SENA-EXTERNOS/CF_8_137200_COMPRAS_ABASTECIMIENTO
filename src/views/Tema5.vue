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
            img(src="@/assets/curso/temas/Tema5/img1.png", alt="Texto que describa la imagen")
        .col-lg-10
          p La comunicación en el ámbito empresarial ha tomado cada vez más relevancia en las organizaciones, ya que el flujo de información activa debe ser más fluido, más claro y oportuno; por ello, las herramientas de comunicación son fundamentales a la hora de fomentar y soportar la colaboración entre equipos de trabajo, con el fin de simplificar esfuerzos, ser más asertivos en las metas o simplemente coordinar acciones comunes.
          .row.justify-content-center
            .col-lg-7
              .cajon.color-primario.p-3            
                  p Entonces, ¿cuáles son los tipos de indicadores?

      Separador
    
      #t_5_1
      
      .titulo-segundo.color-acento-contenido
        h2 5.1     Tipo de indicadores

      p En lo que respecta a los indicadores, puede existir un sinnúmero de estos. No obstante, suelen agruparse en tres grandes grupos:

      b.mt-3 Tipo de indicadores

      p.mt-4 Pueden existir un sinnúmero de indicadores, pero principalmente se agrupan en tres tipos:

      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/Tema5/img3.png', alt='Texto que describa la imagen')
              

        div(x="10%" y="29%" tooltip="Ver más" numero="1")
          .row.justify-content-center
            .col-lg-6
              h4 De eficacia: 
              p Su función principal es medir si los procesos se realizan de la manera correcta.


        div(x="89%" y="24%" tooltip="Ver más" numero="2")
          .row.justify-content-center
            .col-lg-6
              h4 De eficiencia: 
              p Miden si los procesos, además de hacerse de manera correcta, utilizan menos recursos.

        div(x="10%" y="73%" tooltip="Ver más" numero="3")
          .row.justify-content-center
            .col-lg-6
              h4 De efectividad: 
              p Evalúan el impacto de la gestión en un determinado periodo, teniendo en cuenta las actividades realizadas y los recursos utilizados.

        div(x="91%" y="65%" tooltip="Ver más" numero="3")
          .row.justify-content-center
            .col-lg-9
              .col-lg-7  
                h4 Para la gestión de compras, entre los indicadores más usados están:
              .col-lg-8
                figure
                  img(src="@/assets/curso/temas/Tema5/img4.svg", alt="Texto que describa la imagen")
      
      .row.justify-content-center.mt-3       
        .col-lg-7
          .cajon.color-primario.p-3            
            p.text-center Entonces, ¿cuáles son las características? 


      Separador
    
      #t_5_2
      
      .titulo-segundo.color-acento-contenido
        h2 5.2     Características


      .row
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/Tema5/img5.svg", alt="Texto que describa la imagen")
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


      Separador
    
      #t_5_3
      
      .titulo-segundo.color-acento-contenido
        h2 5.3     Aplicación de los indicadores

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
            img(src="@/assets/curso/temas/Tema5/img6.svg", alt="Texto que describa la imagen")
      
      .row.justify-content-center.mt-3       
        .col-lg-5
          p.mt-4 ¿Cuál es la importancia de los indicadores?

      Separador
    
      #t_5_4
      
      .titulo-segundo.color-acento-contenido
        h2 5.4     Importancia de los indicadores

      .row.mt-2.justify-content-center
        .col-12
          .bloque-texto-g.color-primario.coloryellow.tarjetaimgcar.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.carimg2(
              :style="{'background-image': `url(${require('@/assets/curso/temas/Tema5/img7.svg')})`}"
            )
            .bloque-texto-g__texto4.p-4
              .col-11.col-lg-12
                p.text-small Los indicadores son herramientas importantes para las organizaciones desde muchos puntos de vista: en planeación sirven como instrumento para medir resultados de metas y objetivos futuros; como herramienta operativa son útiles para medir resultados inmediatos y proponer opciones de mejora, y como instrumento de evolución explican cuantitativamente sucesos y su evolución en el tiempo. Usar indicadores es muy común en las organizaciones por su versatilidad y por la objetividad de sus resultados. Esos resultados se pueden analizar, y con base en ello, desplegar acciones de mejoramiento continuo. Por esto es posible afirmar que todo lo que se mide se puede gestionar y mejorar.
      .row.justify-content-center.mt-5       
        .col-lg-6
          A continuación, se expone la síntesis de este componente formativo.


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
