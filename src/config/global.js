export default {
  global: {
    componenteFormativo:
      'Herramientas de comunicación e indicadores de trazabilidad',
    descripcionCurso:
      'Las tecnologías de la información y las comunicaciones, muy presentes en el ámbito empresarial, exigen conocer las herramientas de comunicación virtual. Este componente formativo presenta varios instrumentos que responden al qué, cómo, cuándo y dónde se intercambian documentos electrónicos, cómo se lleva la trazabilidad entre las empresas y otros conceptos aplicables en el aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas de comunicación interempresarial ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Usos de las herramientas de comunicación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procedimientos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Intercambio electrónico de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Terminología',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Objetivos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Usos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Glosario de términos en inglés',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Componentes de la trazabilidad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Importancia de la trazabilidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de trazabilidad',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '<em>Software</em> de trazabilidad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Condiciones de recibo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Cantidades de recibo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Fecha de recibo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tiempos de entrega',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Lugar de entrega',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipo de indicadores',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características de indicadores',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Aplicación de los indicadores',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Importancia de los indicadores',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Glosario EDI',
      referencia:
        '<em>DataTrans (2020).</em> Terminología EDI y glosario EDI completo. DTS.',
      tipo: 'Página web',
      link: 'https://es.datatrans-inc.com/industry-terminology/',
    },
    {
      tema: 'Intercambio electrónico de datos (EDI) y su impacto',
      referencia:
        '<em>Raglianti, J., Soto, L., Soto, C. y Southerland, R. (1996).</em> Intercambio electrónico de datos (EDI) y su impacto (tesis de doctorado). Universidad Andrés Bello.',
      tipo: 'Tesis',
      link: 'https://repositorio.unab.cl/xmlui/handle/ria/6519',
    },
    {
      tema:
        'Mejoramiento de los procesos de planificación de obras a partir de la introducción de conceptos de gestión logística soportados en TIC, para el sector de la construcción en Colombia.',
      referencia:
        'Fonseca, C. (2011). Mejoramiento de los procesos de planificación de obras a partir de la introducción de conceptos de gestión logística soportados en TIC, para el sector de la construcción en Colombia [tesis de maestría]. Universidad EAFIT.',
      tipo: 'Tesis de maestría',
      link:
        'https://repository.eafit.edu.co/bitstream/handle/10784/183/CristianGuillermo_FonsecaArias_2011.pdf?sequence=1&isAllowed=y',
    },
    {
      tema:
        'Modelo de comunicación interempresarial apoyado en tecnología de información para automatizar y hacer más eficiente la labor operativa, productiva y de mercadotecnia',
      referencia:
        'Pérez, G. (2005). Modelo de comunicación interempresarial apoyado en tecnología de información para automatizar y eficientar la labor operativa, productiva y de mercadotecnia [tesis de maestría]. Instituto Tecnológico y de Estudios Superiores de Monterrey.',
      tipo: 'Tesis de maestría',
      link: 'https://repositorio.tec.mx/handle/11285/569540',
    },
    {
      tema:
        'Herramientas digitales que apoyan en la toma de decisiones de las MiPymes en México',
      referencia:
        'Miranda, A., Núñez, O. y Trejo, M. (2022). Herramientas digitales que apoyan en la toma de decisiones de las MiPymes en México.<em> South Florida Journal of Development,</em> 3(1), pp. 423-434.',
      tipo: 'Artículo',
      link:
        'https://drive.google.com/drive/folders/11wcONK_xCve-_6XxR7RfcgrnS83eubzD',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso mediante el cual los proveedores facilitan medios al resto de individuos o grupos económicos, los cuales consiguen un determinado nivel de satisfacción o utilidad (Arenal, 2022).',
    },
    {
      termino: 'Cadenas de distribución',
      significado:
        'Procesos que se realizan a partir del momento en el cual un producto ha sido fabricado y hasta el momento en el que termina en las manos del cliente.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad. Esto es, desde buscar materias primas y transformarlas, hasta la fabricación, transporte y entrega al consumidor final (Arenal, 2022).',
    },
    {
      termino: 'Cadena logística',
      significado:
        'Comprende la organización y coordinación de todos los movimientos de mercancía, el almacenamiento y la gestión de ubicaciones en almacenes, centros de producción y distribución, así como la sincronización entre operativas de transporte interno y externo de productos.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Están definidos por las diferentes fases o etapas por las que transita un producto, de modo que su propiedad va pasando de unas manos a otras. Desde el fabricante al consumidor o usuario final (Arenal, 2022).',
    },
    {
      termino: 'Clúster económico',
      significado:
        'Concentración de empresas e instituciones que se agrupan alrededor de una actividad común y en una determinada localidad. Su objetivo es alcanzar un alto índice de beneficio y eficiencia (Dueñas, 2017).',
    },
    {
      termino: 'Demanda',
      significado:
        'Solicitud para adquirir algo. En economía, la demanda es la cantidad total de un bien o servicio que la gente desea adquirir (Dueñas, 2017).',
    },
    {
      termino: 'Diagrama Pert',
      significado:
        'Técnica de revisión y evaluación de proyectos que se utiliza para evaluar las tareas involucradas en un proyecto, con el objetivo de la eficiencia (Arenal, 2022).',
    },
    {
      termino: 'EOQ (cantidad económica del pedido)',
      significado:
        'En inglés <em>Economic Order Quantity,</em> es un modelo matemático que sirve para calcular el tamaño óptimo de cada pedido de materia prima, con el fin de lograr la mayor eficiencia (Arenal, 2022).',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'Administración respecto al ingreso y salida de insumos, productos terminados o semiterminados, bienes auxiliares y herramientas que posee una empresa (Westreicher, 2020).',
    },
    {
      termino: 'Inventario final',
      significado:
        'El que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias (Escudero, 2019).',
    },
    {
      termino: 'Inventario inicial',
      significado:
        'Es el que se registra al comienzo de un ejercicio contable, previo cálculo de variaciones de este al final del ejercicio anterior (Llamas, 2020).',
    },
    {
      termino: 'Justo a tiempo (método Toyota)',
      significado:
        'Filosofía de dar lo que el cliente pide, la cantidad que pide, en la fecha pactada y en el sitio acordado.',
    },
    {
      termino: ' Lote',
      significado:
        'Agrupación de activos, valores o instrumentos financieros, equivalente en la mayoría de los casos a cien unidades. A menudo permite su posible traspaso en los mercados (Escudero, 2019).',
    },
    {
      termino: ' Materia prima',
      significado:
        'También conocida como bien intermedio, es todo bien que es transformado durante un proceso de producción hasta convertirse en un bien de consumo (Dueñas, 2017).',
    },
    {
      termino: ' Mercancía',
      significado:
        'Cualquier objeto factible de ser comercializado o intercambiado en el mercado. Se caracteriza por poder satisfacer alguna necesidad del consumidor (Escudero, 2019). ',
    },
    {
      termino: ' Orden de compra',
      significado:
        'También llamada orden de pedido o nota de pedido. Es un documento mediante el cual el comprador solicita mercancías al vendedor (Arenal, 2022).',
    },
    {
      termino: ' Regulación',
      significado:
        'Normas o leyes para disponer un determinado orden en un ámbito jurídico concreto. Esto, por parte del Estado a través del ejercicio de la legislación (Dueñas, 2017).',
    },
    {
      termino: 'Rotación de inventario ',
      significado:
        'Práctica de <em>marketing</em> y de la dirección estratégica consistente en controlar los productos desde el punto logístico, por medio de las veces por periodo de tiempo que se renuevan las existencias (Arenal, 2022).',
    },
    {
      termino: 'Sistema de inventario ',
      significado:
        'Grupo de reglas y procesos que implementa una empresa para planificar y supervisar las mercancías y los materiales de los que dispone (Escudero, 2019).',
    },
    {
      termino: ' Valoración de inventario',
      significado:
        'Técnicas aplicadas para valorar las unidades en almacén en términos monetarios. Esta valoración es especialmente útil cuando las unidades se van adquiriendo a distintos precios (Arenal, 2022).',
    },
    {
      termino: ' Ventajas competitivas',
      significado:
        'Cualquier característica de una empresa, país o persona que la diferencia de otras poniéndola en una posición relativa superior para competir. Es decir, cualquier atributo que la haga más competitiva que las demás (Dueñas, 2017).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal, C. (2022). Gestión de proveedores. MF1004.  Tutor Formación. ',
      link: ' ',
    },
    {
      referencia:
        'Dueñas, J. (2017). MF1004_3: Gestión de proveedores. IC Editorial.     ',
      link:
        'https://www.editorialelearning.com/catalogo/media/iverve/uploadpdf/1526029393_MF1004_3_demo.pdf.',
    },
    {
      referencia:
        'Escudero, M (2019). Gestión de compras. Editorial Paraninfo. ',
      link: '',
    },
    {
      referencia:
        'Escrivá, J., Savall, V. y Martínez, A. (2014). Gestión de compras. McGraw-Hill. ',
      link: 'https://bit.ly/3Fkpjbu.',
    },

    {
      referencia:
        'Gómez, J. (2014). Gestión logística y comercial. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Ibáñez, A. [AIN] (2021, 31 de mayo). Los cuatro pasos para tener el sistema de trazabilidad [video]. ',
      link: 'https://www.youtube.com/watch?v=AMIamNCaUAo.',
    },
    {
      referencia:
        'Johnson, F., Leenders, M. y Flynn, A. (2012). Administración de compras y abastecimientos. McGraw-Hill.',
      link: 'https://bit.ly/3U2r0P0.',
    },
    {
      referencia:
        'Mora, L. (2012). Indicadores de la gestión logística. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Mora, L. (2011). Diccionario de Supply Chain Management: terminología de la cadena de abastecimientos. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Soriano, C. (2012). Compras e inventarios. Ediciones Díaz de Santos. ',
      link: '',
    },
    {
      referencia:
        'Chopra, S. y Meindl P. (2017). Administración de la cadena de suministro. Pearson Educación. ',
      link: 'https://bit.ly/3DBiq4k.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
