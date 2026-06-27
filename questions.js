const quizzes = {
  "semana-1": [
    {
      "question": "¿Cuál describe mejor ITSM?",
      "options": [
        "Una herramienta para monitorear servidores",
        "La disciplina para gestionar servicios de tecnología",
        "Un curso Bridge para personas con ITIL 4",
        "Un framework específico de programación"
      ],
      "answer": 1,
      "explanation": "ITSM es la disciplina general para gestionar servicios de tecnología."
    },
    {
      "question": "¿Cuál describe mejor ITIL?",
      "options": [
        "Una base de datos para tickets",
        "Un lenguaje de programación",
        "Un framework de buenas prácticas para aplicar ITSM",
        "Un proveedor cloud"
      ],
      "answer": 2,
      "explanation": "ITIL es un framework de buenas prácticas que ayuda a aplicar ITSM."
    },
    {
      "question": "Una app bancaria no es solo código porque también incluye:",
      "options": [
        "Solo backend y base de datos",
        "Solo UI y diseño visual",
        "Solo documentación para usuarios",
        "Soporte, seguridad, monitoreo, experiencia y operación"
      ],
      "answer": 3,
      "explanation": "Un producto digital incluye tecnología, soporte, experiencia, operación, datos, seguridad y mejora."
    },
    {
      "question": "Una empresa quiere organizar cómo atiende fallas, solicitudes, cambios y mejoras de sus servicios tecnológicos. ¿Qué concepto aplica mejor?",
      "options": [
        "ITSM",
        "Release Management",
        "Deployment Management",
        "Frontend Architecture"
      ],
      "answer": 0,
      "explanation": "ITSM organiza cómo una empresa gestiona servicios tecnológicos de forma consistente."
    },
    {
      "question": "Un servicio ayuda a un consumidor principalmente a:",
      "options": [
        "Escribir código más rápido",
        "Lograr resultados sin gestionar todos los costos y riesgos",
        "Eliminar la necesidad de soporte",
        "Evitar cualquier proveedor externo"
      ],
      "answer": 1,
      "explanation": "Un service ayuda a lograr outcomes sin que el consumidor gestione toda la complejidad."
    },
    {
      "question": "¿Cuál es la mejor forma de pensar en un digital product según esta guía?",
      "options": [
        "Como una pantalla bonita",
        "Como código listo para compilar",
        "Como software más operación, soporte, datos, experiencia y mejora",
        "Como una base de datos con usuarios"
      ],
      "answer": 2,
      "explanation": "Un digital product debe verse como un sistema completo, no solo como código."
    }
  ],

  "semana-2": [
    {
      "question": "El beneficio percibido por usuario, cliente o negocio es:",
      "options": [
        "Risk",
        "Value",
        "Cost",
        "Provider"
      ],
      "answer": 1,
      "explanation": "Value es el beneficio percibido por las partes interesadas."
    },
    {
      "question": "El resultado que el consumidor quiere lograr se llama:",
      "options": [
        "Outcome",
        "Experience",
        "Supplier",
        "Warranty"
      ],
      "answer": 0,
      "explanation": "Outcome es el resultado esperado que el consumidor quiere lograr."
    },
    {
      "question": "Un equipo agrega un nuevo método de pago. Puede aumentar ventas, pero también introduce integración, pruebas y posibles fallas. ¿Qué concepto describe esa incertidumbre?",
      "options": [
        "Value",
        "Risk",
        "Outcome",
        "Stakeholder"
      ],
      "answer": 1,
      "explanation": "Risk es la posibilidad de que algo negativo ocurra o afecte el servicio."
    },
    {
      "question": "El valor se crea mediante interacción entre provider, consumer y stakeholders. Esto se llama:",
      "options": [
        "Deployment Management",
        "Service Desk",
        "Value co-creation",
        "Monitoring"
      ],
      "answer": 2,
      "explanation": "Value co-creation implica que el valor se crea en conjunto mediante interacción."
    },
    {
      "question": "En un sistema de pagos, seguridad, soporte, negocio, usuarios y proveedores pueden considerarse:",
      "options": [
        "Solo consumidores",
        "Stakeholders",
        "Solo developers",
        "Workarounds"
      ],
      "answer": 1,
      "explanation": "Stakeholders son grupos interesados, afectados o involucrados en el servicio."
    },
    {
      "question": "Un login está técnicamente disponible, pero es lento y confuso. ¿Qué concepto ayuda a analizar cómo lo percibe el usuario?",
      "options": [
        "Experience",
        "Cost",
        "Deployment",
        "Governance"
      ],
      "answer": 0,
      "explanation": "Experience considera cómo una persona percibe e interactúa con el servicio."
    }
  ],

  "semana-3": [
    {
      "question": "Si checkout está caído y los usuarios no pueden pagar, el foco inicial es:",
      "options": [
        "Problem Management",
        "Service Request Management",
        "Incident Management",
        "Governance"
      ],
      "answer": 2,
      "explanation": "Una interrupción o degradación actual se gestiona inicialmente como incident."
    },
    {
      "question": "Después de varios incidentes similares, el equipo quiere encontrar la causa raíz para evitar recurrencia. ¿Qué práctica aplica mejor?",
      "options": [
        "Problem Management",
        "Service Desk",
        "Service Request Management",
        "Release Management"
      ],
      "answer": 0,
      "explanation": "Problem Management se enfoca en causas reales o potenciales de incidentes."
    },
    {
      "question": "Pedir acceso a una herramienta interna es principalmente:",
      "options": [
        "Incident",
        "Problem",
        "Risk",
        "Service Request"
      ],
      "answer": 3,
      "explanation": "Una solicitud normal, como pedir acceso, es un service request."
    },
    {
      "question": "El punto principal de contacto entre usuarios y proveedor del servicio es:",
      "options": [
        "Service Desk",
        "Value Stream",
        "Governance",
        "Supplier"
      ],
      "answer": 0,
      "explanation": "Service Desk conecta usuarios con el proveedor del servicio."
    },
    {
      "question": "Priority normalmente se decide combinando:",
      "options": [
        "Nombre del usuario y color del botón",
        "Impact y urgency",
        "Número de developers y lenguaje usado",
        "Costo y documentación"
      ],
      "answer": 1,
      "explanation": "Impact + urgency ayudan a decidir la prioridad."
    },
    {
      "question": "Un workaround sirve para:",
      "options": [
        "Resolver siempre la causa raíz",
        "Eliminar el service desk",
        "Reducir impacto temporalmente mientras se trabaja en la solución",
        "Publicar una nueva release"
      ],
      "answer": 2,
      "explanation": "Un workaround reduce o evita impacto, aunque no necesariamente elimina la causa raíz."
    },
    {
      "question": "Una app falla con biometría, pero permite entrar usando contraseña mientras se corrige el problema. Eso es un ejemplo de:",
      "options": [
        "Workaround",
        "Service Level Agreement",
        "Supplier Management",
        "Value Stream Mapping"
      ],
      "answer": 0,
      "explanation": "Usar contraseña temporalmente reduce impacto mientras se resuelve la falla biométrica."
    }
  ],

  "semana-4": [
    {
      "question": "El ITIL Value System describe cómo la organización convierte demanda y oportunidades en:",
      "options": [
        "Tickets únicamente",
        "Value",
        "Código",
        "Contratos"
      ],
      "answer": 1,
      "explanation": "El ITIL Value System está orientado a la creación de valor."
    },
    {
      "question": "Governance se relaciona principalmente con:",
      "options": [
        "Diseñar pantallas",
        "Cerrar tickets sin revisar",
        "Dirección, evaluación y control",
        "Instalar builds"
      ],
      "answer": 2,
      "explanation": "Governance da dirección, evaluación y control organizacional."
    },
    {
      "question": "La service value chain es:",
      "options": [
        "Un proveedor externo",
        "Un modelo de actividades para crear y entregar valor",
        "Un ticket específico",
        "Una contraseña temporal"
      ],
      "answer": 1,
      "explanation": "La service value chain contiene actividades clave para crear y entregar valor."
    },
    {
      "question": "Continual Improvement busca:",
      "options": [
        "Cambiar todo sin medir",
        "Ignorar feedback",
        "Mejorar servicios y prácticas de forma constante",
        "Evitar métricas"
      ],
      "answer": 2,
      "explanation": "Continual Improvement implica medir, aprender y mejorar continuamente."
    },
    {
      "question": "Una nueva necesidad de stakeholders que puede activar trabajo en service management se relaciona con:",
      "options": [
        "Demand",
        "Known Error",
        "Deployment",
        "Warranty"
      ],
      "answer": 0,
      "explanation": "Demand representa una necesidad o solicitud que puede activar trabajo."
    },
    {
      "question": "Después de un incidente mayor, el equipo revisa comunicación, detección y respuesta para mejorar. ¿Qué práctica aparece aquí?",
      "options": [
        "Continual Improvement",
        "Service Request Management",
        "Release Management",
        "Supplier Management"
      ],
      "answer": 0,
      "explanation": "Revisar y aprender para mejorar es parte de continual improvement."
    }
  ],

  "semana-5": [
    {
      "question": "¿Qué principio recomienda preguntar primero qué valor se crea?",
      "options": [
        "Start where you are",
        "Focus on value",
        "Collaborate and promote visibility",
        "Optimize and automate"
      ],
      "answer": 1,
      "explanation": "Focus on value pone el valor al centro de las decisiones."
    },
    {
      "question": "Antes de reemplazar una herramienta, el equipo analiza qué funciona y qué no en el proceso actual. ¿Qué principio aplica?",
      "options": [
        "Start where you are",
        "Keep it simple and practical",
        "Optimize and automate",
        "Think and work holistically"
      ],
      "answer": 0,
      "explanation": "Start where you are recomienda evaluar lo existente antes de cambiar."
    },
    {
      "question": "Trabajar por pasos pequeños y obtener feedback se relaciona con:",
      "options": [
        "Governance",
        "Deployment",
        "Progress iteratively with feedback",
        "Risk"
      ],
      "answer": 2,
      "explanation": "Progress iteratively with feedback reduce riesgo y facilita aprendizaje."
    },
    {
      "question": "Durante un incidente mayor, varios equipos trabajan con un timeline visible. ¿Qué principio aplica mejor?",
      "options": [
        "Collaborate and promote visibility",
        "Keep it simple and practical",
        "Start where you are",
        "Focus on value"
      ],
      "answer": 0,
      "explanation": "Colaborar y promover visibilidad ayuda a reducir silos y mejorar coordinación."
    },
    {
      "question": "Evitar burocracia innecesaria se relaciona con:",
      "options": [
        "Focus on value",
        "Start where you are",
        "Keep it simple and practical",
        "Collaborate"
      ],
      "answer": 2,
      "explanation": "Keep it simple and practical busca soluciones simples, útiles y adecuadas al contexto."
    },
    {
      "question": "Antes de automatizar conviene:",
      "options": [
        "Automatizar todo de inmediato",
        "Eliminar feedback",
        "Optimizar y entender el proceso",
        "Evitar medir"
      ],
      "answer": 2,
      "explanation": "Optimize and automate recomienda optimizar primero y automatizar después."
    },
    {
      "question": "Un equipo analiza personas, procesos, proveedores y tecnología antes de decidir. ¿Qué principio aplica?",
      "options": [
        "Think and work holistically",
        "Focus on value",
        "Start where you are",
        "Deployment Management"
      ],
      "answer": 0,
      "explanation": "Think and work holistically considera el sistema completo."
    }
  ],

  "semana-6": [
    {
      "question": "Roles, habilidades, cultura y estructura pertenecen a:",
      "options": [
        "Information and technology",
        "Organizations and people",
        "Partners and suppliers",
        "Value streams"
      ],
      "answer": 1,
      "explanation": "Organizations and people cubre personas, cultura, roles y estructura."
    },
    {
      "question": "Datos, herramientas, aplicaciones e infraestructura pertenecen a:",
      "options": [
        "Information and technology",
        "Partners and suppliers",
        "Governance",
        "Experience"
      ],
      "answer": 0,
      "explanation": "Information and technology cubre herramientas, datos, aplicaciones e infraestructura."
    },
    {
      "question": "Dependencias externas, contratos y terceros pertenecen a:",
      "options": [
        "Organizations and people",
        "Service desk",
        "Partners and suppliers",
        "Incident"
      ],
      "answer": 2,
      "explanation": "Partners and suppliers cubre terceros y dependencias externas."
    },
    {
      "question": "Un value stream es:",
      "options": [
        "Una persona responsable del servicio",
        "Una secuencia de pasos para crear y entregar valor",
        "Un proveedor cloud",
        "Un error conocido"
      ],
      "answer": 1,
      "explanation": "Value stream muestra el flujo de pasos para crear y entregar valor."
    },
    {
      "question": "Lanzar una app no es terminar porque un servicio también debe:",
      "options": [
        "Operarse, soportarse y mejorarse",
        "Ignorarse después del release",
        "Congelarse",
        "Eliminarse"
      ],
      "answer": 0,
      "explanation": "El lifecycle continúa después del lanzamiento con operación, soporte y mejora."
    },
    {
      "question": "Si una decisión solo considera tecnología e ignora personas, proveedores y procesos, está fallando en:",
      "options": [
        "Pensamiento holístico / four dimensions",
        "Service Request Management",
        "Known Error",
        "Practice exams"
      ],
      "answer": 0,
      "explanation": "Las four dimensions ayudan a mirar el servicio completo."
    }
  ],

  "semana-7": [
    {
      "question": "Evaluar riesgos de un cambio en producción se relaciona con:",
      "options": [
        "Incident Management",
        "Change Enablement",
        "Service Request Management",
        "Experience Management"
      ],
      "answer": 1,
      "explanation": "Change Enablement gestiona cambios equilibrando valor, velocidad y riesgo."
    },
    {
      "question": "Hacer disponible una nueva versión para uso se relaciona con:",
      "options": [
        "Deployment Management",
        "Problem Management",
        "Release Management",
        "Risk Management"
      ],
      "answer": 2,
      "explanation": "Release Management se enfoca en hacer disponible una versión para uso."
    },
    {
      "question": "Mover componentes nuevos o cambiados a un ambiente se relaciona con:",
      "options": [
        "Service Level Management",
        "Deployment Management",
        "Service Desk",
        "Value co-creation"
      ],
      "answer": 1,
      "explanation": "Deployment Management mueve componentes a ambientes."
    },
    {
      "question": "Alertas, eventos y observabilidad se relacionan con:",
      "options": [
        "Service Request Management",
        "Governance",
        "Monitoring and Event Management",
        "Release Management"
      ],
      "answer": 2,
      "explanation": "Monitoring and Event Management detecta eventos relevantes para el servicio."
    },
    {
      "question": "Objetivos y expectativas de calidad del servicio se relacionan con:",
      "options": [
        "Service Level Management",
        "Problem Management",
        "Deployment Management",
        "Service Consumer"
      ],
      "answer": 0,
      "explanation": "Service Level Management gestiona expectativas y objetivos del servicio."
    },
    {
      "question": "Proteger datos, accesos y reducir riesgos de información se relaciona con:",
      "options": [
        "Information Security Management",
        "Release Management",
        "Service Request Management",
        "Value Stream Mapping"
      ],
      "answer": 0,
      "explanation": "Information Security Management protege información y reduce riesgos de seguridad."
    },
    {
      "question": "¿Cuál es la diferencia más correcta entre release y deployment?",
      "options": [
        "Release mueve componentes; deployment gestiona usuarios",
        "Release hace disponible una versión; deployment mueve componentes a ambientes",
        "Release investiga causa raíz; deployment atiende solicitudes",
        "No hay diferencia"
      ],
      "answer": 1,
      "explanation": "Release se enfoca en disponibilidad para uso; deployment en mover componentes."
    }
  ],

  "semana-8": [
    {
      "question": "Una buena estrategia para preguntas tipo examen es:",
      "options": [
        "Responder siempre la opción más larga",
        "Memorizar dumps",
        "Identificar el concepto central y eliminar respuestas extremas",
        "Ignorar el contexto"
      ],
      "answer": 2,
      "explanation": "Razonar el escenario y detectar el concepto central ayuda a elegir mejor."
    },
    {
      "question": "AI en service management debe usarse con:",
      "options": [
        "Cero control",
        "Foco en valor, datos confiables y responsabilidad",
        "Sin proceso",
        "Solo por moda"
      ],
      "answer": 1,
      "explanation": "AI debe apoyar valor y mantener responsabilidad, control y datos confiables."
    },
    {
      "question": "Automatizar un proceso confuso probablemente:",
      "options": [
        "Siempre lo soluciona",
        "Amplifica el problema",
        "Elimina necesidad de mejora",
        "Debe ser lo primero"
      ],
      "answer": 1,
      "explanation": "Primero se entiende y optimiza el proceso; luego se automatiza."
    },
    {
      "question": "Revisar errores de practice exams ayuda a:",
      "options": [
        "Reemplazar el curso oficial",
        "Evitar estudiar",
        "Memorizar sin entender",
        "Corregir razonamiento y detectar temas débiles"
      ],
      "answer": 3,
      "explanation": "La revisión de errores mejora comprensión y preparación."
    },
    {
      "question": "Antes de agendar el examen conviene poder:",
      "options": [
        "Leer solo el título del curso",
        "Evitar preguntas",
        "Explicar conceptos con ejemplos propios",
        "Comprar un Bridge sin ITIL 4"
      ],
      "answer": 2,
      "explanation": "Explicar conceptos con ejemplos propios muestra comprensión real."
    },
    {
      "question": "Una pregunta menciona 'usuarios no pueden acceder al servicio ahora mismo'. ¿Qué idea deberías considerar primero?",
      "options": [
        "Incident Management",
        "Sustainability",
        "Release Management",
        "Service Provider"
      ],
      "answer": 0,
      "explanation": "Si hay interrupción actual del servicio, el foco inicial suele ser incident management."
    },
    {
      "question": "Una pregunta menciona 'se quiere reducir tickets repetitivos usando autoservicio'. ¿Qué combinación suena más alineada?",
      "options": [
        "Continual Improvement y Optimize and Automate",
        "Deployment y Warranty",
        "Problem y Release únicamente",
        "Supplier y Cost únicamente"
      ],
      "answer": 0,
      "explanation": "Reducir tickets repetitivos puede ser mejora continua y automatización/optimización."
    },
    {
      "question": "Si dos respuestas parecen correctas, ¿qué conviene hacer?",
      "options": [
        "Elegir la más larga",
        "Elegir la más alineada con el escenario, valor y menor riesgo",
        "Elegir siempre la opción A",
        "Ignorar las palabras clave"
      ],
      "answer": 1,
      "explanation": "En escenarios, la respuesta correcta suele ser la que mejor se ajusta al contexto y al valor."
    }
  ]
};