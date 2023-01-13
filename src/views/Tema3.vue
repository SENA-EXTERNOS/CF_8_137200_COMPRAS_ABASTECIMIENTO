<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Trazabilidad

    .bg11
      .row.mt-4     
        .col-lg-6
          p La trazabilidad es todo el conjunto de acciones que permiten a empresas controlar la cadena de suministro de materias primas, insumos o productos mediante identificación, ubicación y trayectoria para su incorporación previa a su proceso productivo o distribución.
          .col-lg-12
            .cajon.color-primario.p-3            
              p Por medio de la misma podemos saber desde la procedencia de la mercancía hasta su distribución mediante las diferentes cadenas de distribución, es por ello que las organizaciones pueden integrar distintos tipos de trazabilidad para gestionar su función de transformar o distribuir bienes aumentando su oportunidad de mejorar eficacia y optimizar procesos y de paso su eficiencia en la logística.
        .col-lg-6
          figure
            img(src="@/assets/curso/temas/Tema2/img6.svg", alt="")


    h4.my-5 Componentes de la trazabilidad 

    p Los procesos de trazabilidad se dan por la combinación de personas, información, máquinas y #[i software,]  la cual genera como propiedad emergente de este sistema el control de actividades y recursos a favor de una organización.

    .row.justify-content-start.mt-4
      .col-auto
        .titulo-sexto.color-secundario.mt-4
          b Figura 1  
            p.mb-0 #[i Componentes de la trazabilidad] 

    .row
      .col-lg-12
      figure
          img(src="@/assets/curso/temas/Tema3/img1.svg", alt="")

    h4.my-5 Importancia de la trazabilidad

    .row
      
      .col-lg-10
        p La trazabilidad permite el registro histórico de un producto; permite conocer en qué proceso y en cual lugar se encuentra, así como también, las transformaciones que puede haber tenido. 
        p El siguiente esquema muestra los posibles beneficios que la trazabilidad aporta:
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema3/img2.svg", alt="")

    .row.justify-content-center.mt-4
      .col-lg-8.sm-8
        .titulo-sexto.color-secundario.mt-4
          b Figura 2 
            p #[i Beneficios que aporta la trazabilidad] 

    .row
      .col-lg-12
        figure
            img(src="@/assets/curso/temas/Tema3/img3.svg", alt="")


    h4.my-5 Tipos de trazabilidad 
    
    .row.mt-2.justify-content-center.mt-5
      .col-12
        .bloque-texto-g.color-primario.coloryellow.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img4.svg')})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p.text-small Los tipos de trazabilidad que se pretendan implementar en las organizaciones dependen estrictamente de lo complicado que sea su proceso productivo o la cadena de distribución que use para satisfacer a sus clientes, por ello, existen tres tipos de trazabilidad.
    p.mt-4 Conózcalos en el siguiente esquema:
    .row.justify-content-center.mt-4
      .col-lg-8.sm-8
        .titulo-sexto.color-secundario.mt-4
          b Figura 3 
            p #[i Tipos de trazabilidad] 

    .row.justify-content-center
      .col-lg-8
        figure
            img(src="@/assets/curso/temas/Tema3/1.svg", alt="")

    h4.my-5 #[i Software ] de trazabilidad 

    .bg12
      .row
        .col-lg-9
          p En cuanto al <i>software</i>, este debe ser capaz de registrar todo lo que sucede con el producto a lo largo de la cadena de suministro: permitir su localización en cualquier momento, registrar su origen, código, colores, etc., de manera que se pueda compartir esa información con todas las partes interesadas, para la gestión de la cadena, recopilar y almacenar la información sin riesgo de pérdida, así como estructurar los datos para uso estratégico y la toma de decisiones, con base en el análisis de esa información.

        .col-lg-3
          figure
            img(src="@/assets/curso/temas/Tema3/img15.png", alt="")

      .row.justify-content-center.mt-3  
        .col-lg-8
          figure
                img(src="@/assets/curso/temas/Tema3/img7.svg", alt="")

      .row.justify-content-center.my-5    
        .col-auto
          .cajon.color-primario.p-4          
            p.mb-0 Estos son los principales tipos de <i>software</i>, usados en sistemas de trazabilidad.

      .row
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema3/img10.png', alt='')
              

          .tarjeta.color-primario.p-3(x="7.7%" y="6.6%" numero="1")
            b Sistema de gestión empresarial o ERP:
              p Es un #[i software]  integrador donde convergen distintas fuentes de información de las áreas de la organización, como ventas, contabilidad, producción, gestión de existencias, recursos humanos, entre otros. Controla toda la compañía.
          
          .tarjeta.color-primario.p-3(x="51.9%" y="6.5%" numero="2")
            p  #[b Sistemas de gestión de flotas de transporte o TMS ] 
              b #[i (Transport Management System):]
              |  Organiza y planifica las rutas de reparto. Por lo general, en los envíos de comercio electrónico suele encargarse de notificar el seguimiento al cliente. Para una mayor agilidad de los procesos, puede integrarse con el Sistema Globalmente Armonizado para la Clasificación y Etiquetado de Productos Químicos (SGA) para unificar el etiquetado y el intercambio de información entre sistemas. En el caso de Easy WMS de Mecalux, esta unión es posible gracias al módulo  #[i Multi Carrier Shipping Software.] 
          
          .tarjeta.color-primario.p-3(x="7.7%" y="92.7%" numero="3")
            p  #[b Sistema de gestión del almacén o WMS ] 
              b #[i ((Warehouse Management System):]
              |  Optimiza todos los flujos de materiales que se producen en la bodega. Registra cada movimiento de un producto y notifica al ERP y al resto de sistemas con que se integre la organización.
          
          
          .tarjeta.color-primario.p-3(x="51.8%" y="92.7%" numero="4")
            b  #[i Supply Chain Event Management System ] 
              b  (SCEM):  
              p  Controla toda la información que tiene relación con los flujos logísticos y notifica posibles novedades. Contribuye a que cada responsable en su proceso cumpla con su rol, para así evitar que la trazabilidad de la información que alimenta el sistema se vea interrumpida y se pierda.

</template>

<script>
export default {
  name: 'Tema3',
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
