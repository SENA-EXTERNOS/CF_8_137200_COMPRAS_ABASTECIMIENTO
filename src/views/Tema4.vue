<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Condiciones de recibo

    .row.justify-content-center.mt-3  
        .col-lg-4
          figure
                img(src="@/assets/curso/temas/Tema3/img11.png", alt="Texto que describa la imagen")

        .col-lg-8           
          .cajon.color-acento-contenido.p-4            
            p En el proceso de recepción de mercancía se pueden identificar diversos e importantes elementos que componen el primer escalón en la gestión logística dentro de un centro de distribución. Estos elementos van desde la recepción, cantidades, información pormenorizada de lo que se recibe, documentos de soporte, conteo físico, pendientes de entrega, confiabilidad del despacho, zona de espera para almacenamiento, distribución física dentro de la bodega, equipos necesarios para su distribución, personal idóneo e infraestructura de la bodega.

        Separador
    
    #t_4_1
    
    .titulo-segundo.color-acento-contenido
      h2 4.1    Cantidades de recibo

    .row 
      .col-lg-10
        p Es importante tener en cuenta las cantidades en el recibo de pedidos, ya que indican el número de insumos o productos que son entregados por parte del proveedor, en contraste con las órdenes de pedido emitidas a este. También aquí se realizan comprobaciones documentales y físicas de las condiciones de recepción y se generan informes de novedades que indican posibles condiciones de recibo. Este subproceso es vital dado que permite, desde un inicio, el orden en la gestión de almacenaje, y hace posible llevar a cabo las estrategias de almacenamiento (PEPS (Primero en Entrar Primero en Salir), UEPS (Últimas Entradas Primeras Salidas), promedio ponderado, etc.); además, ayuda a definir la distribución física de lo recibido en el almacén, los cuidados y los equipos que se deben utilizar, entre otros aspectos relevantes.
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema3/img12.svg" width='207px' height='123px')

      Separador
    
    #t_4_2
    
    .titulo-segundo.color-acento-contenido
      h2 4.2    Fecha de recibo

    .row.mt-2.justify-content-center.mt-5
      .col-12
        .bloque-texto-g.color-primario.coloryellow.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img13.svg' )})`}"
          )
          .bloque-texto-g__texto3.p-4
            .col-11.col-lg-12
              p.text-small La fecha de recibo en un proceso de recepción de mercancía es muy importante para la trazabilidad, porque todo debe estar debidamente orquestado y coordinado entre el proveedor y el comprador, de tal forma que no haya pérdidas de recursos. El incumplimiento en la fecha podría crear retrasos en los envíos de pedidos a clientes, inconformidad y daños en la imagen de la organización.

      Separador
    
    #t_4_3
    
    .titulo-segundo.color-acento-contenido
      h2 4.3     Tiempos de entrega

    .bg13
      .row 
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/Tema3/img14.png", alt="Texto que describa la imagen")     
      
        .col-lg-7
          p Otro aspecto muy importante en la trazabilidad es la buena gestión de los tiempos de entrega, esto porque se debe cumplir el cronograma de actividades y tiempos de recibo. Tanto el cronograma de Gantt como el de Pert indican el tiempo, recursos y responsables necesarios para el proceso de recepción, además de los movimientos internos en la distribución física de la mercancía en el almacén, los equipos requeridos y el personal necesario, todo esto en un tiempo estimado y medido para que exista un flujo continuo de movimientos, sin tiempos muertos o inactividad en la plataforma de recepción.
        

      Separador
    
    #t_4_4
    
    .titulo-segundo.color-acento-contenido
      h2 4.4    Lugar de entrega


    p Este es otro de los aspectos esenciales de la trazabilidad de la mercancía, porque puede dificultar o alargar los tiempos de entrega y de espera para poder contar con esta. Dependiendo del medio de transporte, los seguimientos a la mercancía y la forma de moverla se gestionan por una combinación de hardware y software especializado, con énfasis en la tecnología GPS, que facilita monitorear el envío minuto a minuto y anticipar y conocer en tiempo real su ubicación.

    .row.justify-content-center.mt-3       
        .col-lg-9
          .cajon.color-primario.p-3            
            p Por último, hay indicadores orientados a mejorar y potencializar la industria.

        









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
