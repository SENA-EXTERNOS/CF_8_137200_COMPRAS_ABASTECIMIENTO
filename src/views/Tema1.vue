<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas de comunicación interempresarial

    .row
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/Tema1/img1.svg", alt="")
      .col-lg-9
        p La comunicación, en el ámbito empresarial, ha tomado cada vez más relevancia en las organizaciones, debido a que el flujo de información activa es más dinámico, más claro y oportuno; es por eso que las herramientas de comunicación son fundamentales a la hora de fomentar y soportar la colaboración entre equipos de trabajo, con la finalidad de simplificar esfuerzos, ser más asertivos en las metas o, simplemente, coordinar acciones comunes.

        p Exploremos los elementos teóricos que se muestran en el siguiente esquema:

      
    .row.justify-content-center.align-items-center.my-lg-4.mt-5
      .col-lg-8
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema1/img2.svg', alt='')
              

          div(x="54%" y="44%" tooltip="Ver más" numero="1")
            h5 Recepción del cliente
            p En un mundo cada vez más digitalizado, tanto las empresas proveedoras como los clientes utilizan canales más expeditos y ágiles como los medios electrónicos. Sin embargo, también existen organizaciones que aún llevan registros físicos de muchas comunicaciones debido a la importancia que tiene para ellas el soporte documental; un ejemplo de esto son las empresas del sector público donde se requiere trazabilidad y conservación de documentos por medio de tablas de retención. Este es un instrumento que indica la trazabilidad de documentos y registros y tiempos que se deben almacenar, ya sea en archivo de gestión, archivo central o archivo histórico.
          
          div(x="85%" y="52%" tooltip="Ver más" numero="2")
            .h5.mb-2 No obstante, en las empresas de naturaleza privada, se utilizan cada vez más, herramientas digitales para la gestión documental, porque agilizan la labor de la distribución, por medio de correos institucionales. Otra de las ventajas se encuentra en el uso de nubes digitales para almacenar documentos y registros, con la facilidad de tenerlos disponibles en cualquier lugar, a cualquier hora, sin ocupar espacio físico, y sin necesidad de imprimirlos, lo que ahorra en recursos como el papel. Con el paso de los años las comunicaciones tradicionales han venido sucumbiendo a la presión de la era digital y sus avances tecnológicos.
          

    h4.my-5 Tipos de herramientas de comunicación

    p Para referenciar las herramientas usadas en la comunicación se debe, primero, reconocer cuáles son los elementos fundamentales de esta:
      

    .tarjeta.bg5.p-4.mt-5
      SlyderA(tipo="b")
        .row         
          .col-md-7
            h4.mb-5 Codificación y decodificación
            ul.lista-ul--
              li.mb-3 
                i.fas.fa-angle-right.yelllow
                |    La codificación, esto es, asignar un código al mensaje que enviará un emisor. El código puede incluir palabras, colores, formas, gestos, símbolos y combinaciones.

              li 
                i.fas.fa-angle-right.yelllow
                |     La decodificación, que consiste en aplicar las reglas de un código a un mensaje codificado para obtener su forma primigenia y conocer su contenido.
            p.mt-4 La comunicación externa en la gestión de compras tiene como finalidad transmitir información comercial mediante cotizaciones, folletos, propuestas comerciales, correos electrónicos, propaganda, condiciones de compra, garantías, contratos comerciales, entre otros muchos más. 

          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/img4.svg', alt='')

        .row 
          .col-md-7
            b Cartas comerciales
            p.mt-3 En el ámbito comercial es muy común el uso de documentos físicos, dentro de los cuales encontramos las cartas comerciales, que tienen diversos objetivos, como enviar información de productos y servicios, presentar reclamaciones, hacer pedidos y solicitar información, entre otros. La carta sirve de puente entre organizaciones y tiene ventajas frente a medios de comunicación electrónica cuando una de las partes no tiene acceso a ellos, por ende, puede convertirse en clave del éxito para ciertas relaciones comerciales.
            p-mt-3 Dentro de las cartas comerciales hay tres tipos que se usan de acuerdo con la necesidad o intención con la que se envía. Puede dar clic en el siguiente hipervínculo para saber más al respecto 
              

            .row.align-items-center.justify-content-center.mt-4
              .col-lg-1
                figure
                  img(src="@/assets/curso/temas/Tema1/img5.svg" width='34px' height='43px')

              .col-lg-7
                p.mb-0 #[b Anexo 1 -]  
                  | Tipos de cartas comerciales
                  
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo3_Tipos_de_carta_comerciales_CF8_Herramientas_de_comunicacion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/slider2.svg', alt='')
              


        .row           

          .col-md-7
            b La comunicación verbal y no verbal
            p.mt-3 La voz es una herramienta natural que permite comunicar información relevante en, prácticamente, todos los aspectos de la vida y esto incluye los asuntos comerciales. Para lograr una acertada comunicación, es importante tener en cuenta:
            
            
            ul.lista-ul
              li 
                i.fas.fa-angle-right.yelllow
                p.mb-0 <b>Las palabras que se emplean.</b> <br> Estas deben transmitir un mensaje claro, sencillo, ameno y que se adapte al receptor. También deben ser coherentes con las ideas que se quieren transmitir.

              
              li 
                i.fas.fa-angle-right.yelllow
                p.mb-0 <b>El tono de voz.</b> <br> Es un elemento importante porque transmite información valiosa al receptor; por ejemplo, enfado, falta de interés, apatía al servicio, superioridad, entre otros.

            p La comunicación no verbal, por su parte, es la que no requiere palabras y, aun así, le da a conocer al receptor información fundamental. Por ejemplo, los gestos, la postura, la forma de presentarse, de moverse o de mirar.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/slider3.svg', alt='')
              


        .row         
          .col-md-7
            b La comunicación telemática
            p.mt-3 Permite el intercambio de información con un número indeterminado de personas, de manera ágil, usando herramientas informáticas como computadores, teléfonos celulares y tabletas.
            p.mt-2 Las herramientas telemáticas pueden ser de dos tipos: sincrónica y asincrónica.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/Tema1/slider4.png', alt='')
              


    .row.justify-content-center.align-items-center.mt-4
      .col-lg-9
        p.text-center Para ampliar la información sobre la comunicación telemática en la gestión de compras, puede dirigirse al #[b ANEXO 2 -]  
          | Implementación de comunicación telemática en compras.
          
    .row.justify-content-center.align-items-center     
      .col-lg-10    
        .tarjeta.color-primario.p-3.mb-5.bg10
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/Tema1/img6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 #[b Anexo 2 -]  Implementación de comunicación telemática en compras
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo2_Implementación_de_comunicación_telemática_en_Compras_CF8_Herramientas_de_comunicacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    .row.justify-content-around.align-items-centerrd
      .col-11
        p.text-center Ahora bien, luego de conocer los tipos de herramientas de comunicación, veamos ahora los usos que tienen esas herramientas.
                

    h4.my-5 Usos de las herramientas de comunicación

    .row
      
      .col-lg-9
        p La comunicación interempresarial se basa, fundamentalmente, en acuerdos entre empresas que tienen intereses en común. Las herramientas de comunicación empleadas en este tipo de comunicación, han venido ampliándose, con el paso del tiempo, a todo tipo de empresas, sin importar su tamaño ni su naturaleza. Sus beneficios se basan en el conocimiento colectivo del negocio y el aprendizaje de las buenas prácticas individuales. 

        p Las herramientas más útiles son:


      .col-lg-3
        figure
          img(src="@/assets/curso/temas/Tema1/img7.svg", alt="")


    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema1/img8.svg', alt='')
          
        h5.text-center Información acerca de buenas prácticas en el negocio. 
        p.text-center.mt-5 Se pueden compartir experiencias que generen métodos de mejoramiento y protección en la práctica del negocio.


      .col-md.tarjeta.color.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema1/img9.svg', alt='')
          
        h5.text-center Información que incrementa el conocimiento tecnológico del sector
        p.text-center.mt-4  Se comparten innovaciones técnicas y tecnológicas para mejorar la productividad, calidad, promoción, etc.


      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/Tema1/img10.svg', alt='')
          
        h5.text-center Información que incrementa la relación con las demás empresas y aumenta el clúster productivo. 
        p.text-center.mt-4 Se aumentan las relaciones con empresas con las cuales se comparten intereses comunes en cuanto a producción, además de las alianzas estratégicas para penetrar un mercado foráneo.

      
    h4.mt-5.mb-4 Procedimientos

    p La acción comunicativa, dentro de las organizaciones, tiene dos ámbitos: el interno y el externo.

    ul.lista-ul
      li 
        i.fas.fa-angle-right.yelllow
        p.mb-0 El ámbito interno sucede con y entre los empleados, para animar el diálogo entre las distintas áreas, enfocado en la mayor eficiencia y en un mejor ambiente de trabajo.
      li 
        i.fas.fa-angle-right.yelllow
        p.mb-0 El ámbito externo, por su parte, sucede con proveedores, clientes y otras empresas con las que se mantienen relaciones de negocios.
        
    p Actualmente, hay diferentes canales que facilitan la comunicación externa, como las notas de prensa o comunicados, publicidad, página web corporativa, blog, redes sociales, boletines digitales y llamadas telefónicas, entre otros.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
