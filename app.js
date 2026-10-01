/* ===== Helpers ===== */
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let _u=0; const uid=()=>'x'+(++_u);
const acc=(t,b)=>`<div class="acc"><button class="acc__h" type="button">${t}<span class="s">+</span></button><div class="acc__b">${b}</div></div>`;
const tabs=items=>{const id=uid();return `<div class="tabs"><div class="tabs__bar" role="tablist">${items.map((it,i)=>`<button class="tabs__b" role="tab" data-tabs="${id}" data-i="${i}" aria-selected="${i===0}">${it.t}</button>`).join('')}</div>${items.map((it,i)=>`<div class="tabs__p" data-tabs="${id}" data-i="${i}" ${i?'hidden':''}>${it.c}</div>`).join('')}</div>`;};
const quiz=(q,opts,fb)=>{const id=uid();return `<div class="quiz"><div class="quiz__q">${q}</div><div class="quiz__o">${opts.map((o,i)=>`<button class="opt" type="button" data-quiz="${id}" data-i="${i}" data-ok="${o.ok?1:0}">${o.t}</button>`).join('')}</div><div class="fb" data-fb="${id}" data-ok="${esc(fb.ok)}" data-no="${esc(fb.no)}"></div></div>`;};
const note=(k,t,b)=>`<div class="note note--${k}"><span class="note__t">${t}</span>${b}</div>`;
const dlg=ts=>`<div class="dialog">${ts.map(t=>`<div class="turn ${t.w==='P'?'p':'a'}"><div class="turn__w">${t.w==='P'?'Prospecto':'Asesor'}</div><div class="turn__s">${t.s}${t.n?`<div class="turn__n">${t.n}</div>`:''}</div></div>`).join('')}</div>`;
const tbl=(h,r)=>`<div class="tw"><table><thead><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${r.map(x=>`<tr>${x.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ficha=p=>`<div class="ficha"><dl>${p.map(x=>`<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join('')}</dl></div>`;
const cierre=i=>note('key','Aprendizajes clave',`<ul>${i.map(x=>`<li>${x}</li>`).join('')}</ul>`);
const $=n=>'<span class="money">$'+n.toLocaleString('es-CO',{maximumFractionDigits:0})+'</span>';
/* kase() se conserva para compatibilidad con el caso incrustado del módulo institucional */
const kase=(tag,sit,preg,ops,cie)=>{const id=uid();return `<div class="case"><div class="case__t"><div class="case__id">${tag}</div></div><div class="case__b"><div class="case__say">${sit}</div><div class="case__reto">${preg}</div><div class="quiz__o">${ops.map((o,i)=>`<button class="opt" type="button" data-kase="${id}" data-i="${i}" data-q="${o.q}">${o.t}</button>`).join('')}</div><div class="fb" data-kasebox="${id}"></div>${ops.map((o,i)=>`<template data-kasefb="${id}" data-i="${i}">${o.fb}</template>`).join('')}${cie?`<template data-kasec="${id}">${cie}</template>`:''}</div></div>`;};
/* ============ MÓDULOS ============ */
const BLOQUES = [
{
 id:'m1', n:'Módulo 1', t:'Conocimiento y dominio de CEIPA',
 d:'Hablar de CEIPA con autoridad y precisión, sin leer y sin improvisar.',
 intro:`<p class="lead">Este módulo es la puerta de entrada. Todo lo demás —preguntar, argumentar, manejar objeciones— depende de que conozcas la institución de verdad. No para recitarla, sino para poder elegir, en dos segundos, qué parte le sirve a la persona que tienes enfrente.</p>`,
 ficha:ficha([
  ['Objetivo','Que puedas hablar de CEIPA con autoridad, precisión y naturalidad, sin leer y sin improvisar.'],
  ['Resultados','Explicas qué es CEIPA en el sistema de educación superior · Diferencias Registro Calificado de Acreditación · Explicas UBFlex sin tecnicismos · Ubicas cualquier programa en su nivel, modalidad y perfil · Traduces tres diferenciales a beneficio concreto.'],
  ['Duración','8 horas (4 de estudio autónomo + 4 de taller)'],
  ['Se evalúa con','Examen de conocimiento, checkpoint del módulo y el pitch “Mi CEIPA en 90 segundos”.'],
  ['Prerrequisito','Ninguno.']
 ]),
 cuerpo:
  tabs([
  {t:'Identidad', c:`
    <h3>CEIPA dentro del sistema de educación superior</h3>
    <p>Las Instituciones de Educación Superior son entidades reconocidas oficialmente para prestar el servicio público de educación superior en Colombia. Ese reconocimiento implica reglas de funcionamiento, vigilancia del Estado y cumplimiento de condiciones de calidad. El Ministerio las clasifica por carácter académico en instituciones técnicas profesionales, tecnológicas, instituciones universitarias o escuelas tecnológicas, y universidades.</p>
    <p><strong>Dónde se ubica CEIPA:</strong> se presenta oficialmente como <strong>Fundación Universitaria CEIPA</strong>, institución de educación superior privada, de utilidad común y sin ánimo de lucro, en la categoría de <strong>institución universitaria</strong>.</p>
    <p>Las instituciones universitarias pueden ofrecer pregrado y especializaciones, y también maestrías y doctorados cuando cuentan con autorización ministerial. CEIPA tiene hoy oferta vigente en <strong>pregrados, especializaciones y maestrías</strong>.</p>
    ${note('error','Error frecuente del asesor','<p>Presentar a CEIPA como “una institución limitada a pregrado” o llamarla “instituto”. Ninguna de las dos es correcta: se comunica como institución de educación superior con oferta vigente en los tres niveles.</p>')}
    <h3>Historia, liderazgo y filosofía</h3>
    ${tbl(['Dato','Valor'],[
      ['Fundación','1972, en Medellín. Más de 52 años de trayectoria.'],
      ['Fundador','Antonio Mazo Mejía, visionario de la educación empresarial en Colombia, que impulsó una formación enfocada en la práctica, la empresa y el desarrollo del talento humano.'],
      ['Rector actual','Dr. Diego Mauricio Mazo Cuervo, Ed. D., hijo del fundador: continuidad, identidad y evolución institucional.'],
      ['Evolución','De formación administrativa tradicional, a modelos innovadores de aprendizaje, hasta consolidarse como referente en educación experiencial y flexible, y como escuela de negocios.']
    ])}
    ${acc('Principio rector: texto completo y cómo se usa', `
      <blockquote style="border-left:3px solid var(--pine);padding-left:1rem;margin:0 0 1rem;font-style:italic;color:var(--muted)">Somos una universidad emprendedora, líder en la gestión del conocimiento, comprometida con la formación integral, consciente e incluyente, que fomenta el espíritu emprendedor. Innovamos y trabajamos en entornos de aprendizaje ubicuos, nos comprometemos con la prosperidad del ser humano, el porvenir de la sociedad, el desarrollo global sostenible y la salud planetaria. Caminamos con nuestros stakeholders generando iFuturo.</blockquote>
      ${tbl(['Frase del principio','Lo que significa en la conversación'],[
        ['Universidad emprendedora','No forma empleados, forma generadores de valor'],
        ['Gestión del conocimiento','No transmite información, la transforma en acción'],
        ['Entornos de aprendizaje ubicuos','El estudio se adapta a la vida del estudiante, no al revés'],
        ['Formación integral, consciente e incluyente','Se forma a la persona, no solo al profesional'],
        ['Generando iFuturo','La promesa es proyección, no un cartón']
      ])}
      ${note('alert','Uso correcto','<p>El principio rector no se recita a un prospecto. Se usa <strong>una</strong> idea del principio: la que conecte con lo que esa persona acaba de contarte.</p>')}`)}
    ${acc('Sedes y recursos institucionales', `
      ${tbl(['Sede','Ubicación','Notas'],[
        ['Campus Sabaneta (principal)','Calle 77 Sur N.° 40 – 165, Vereda San José','Operación académica e institucional; programas presenciales'],
        ['Nodo Barranquilla','Carrera 57 N.° 72 – 143, Barrio El Prado','Nace el 16 de febrero de 2007; más de 19 años en la región Caribe']
      ])}
      <p>Para profundizar: Manifiesto CEIPA, Museo Digital CEIPA (museodigital.ceipa.edu.co), Hitos Institucionales 52 años y la sección del Rector en ceipa.edu.co.</p>`)}
    ${quiz('Un prospecto dice: “nunca había escuchado CEIPA, ¿eso es un instituto?”. ¿Qué respondes primero?',
      [{t:'“No, es una universidad como cualquier otra, tranquilo.”'},
       {t:'“Es Fundación Universitaria CEIPA, una institución de educación superior privada y sin ánimo de lucro, vigilada por MINEDUCACIÓN.”',ok:1},
       {t:'“Llevamos 52 años, somos de las más antiguas de Medellín.”'}],
      {ok:'Exacto. Primero la categoría correcta y el respaldo del Ministerio; la trayectoria viene después, como refuerzo.',
       no:'La trayectoria y la tranquilidad no responden la pregunta. Lo que el prospecto necesita saber es la categoría institucional y quién la vigila. Después puedes sumar los 52 años.'})}
  `},
  {t:'Calidad', c:`
    <p class="lead">Esta distinción es la que más asesores confunden y la que más confianza genera cuando se explica bien.</p>
    <h3>Registro Calificado</h3>
    <p>Es la base legal: reconocimiento del Ministerio de Educación Nacional que certifica que un programa cumple las condiciones mínimas de calidad exigidas y tiene validez oficial en Colombia. <strong>Todos los programas de CEIPA cuentan con Registro Calificado.</strong> Permite que el programa exista y garantiza el mínimo. No es un diferencial: es el piso.</p>
    <h3>Acreditación en Alta Calidad</h3>
    <p>Reconocimiento <strong>voluntario</strong> que otorga el Ministerio y que certifica el cumplimiento de los más altos estándares en procesos académicos, administrativos y formativos.</p>
    ${note('key','El dato, literal', '<p><strong>Acreditación Institucional en Alta Calidad. Resolución MEN N.° 016362 del 23 de junio de 2026, por 6 años. Vigilada MINEDUCACIÓN.</strong></p>')}
    ${note('alert','Ojo con el material antiguo','<p>Brochures y fichas impresas antes de junio de 2026 citan la resolución anterior (000679 del 21 de enero de 2022, por 4 años). Si un prospecto te muestra uno, no lo contradigas: explícale que la acreditación fue renovada y que la vigente es la de 2026, por seis años.</p>')}
    ${acc('Cómo se obtiene la acreditación y qué es el CNA', `
      <ol><li>Autoevaluación institucional.</li><li>Evaluación externa por pares académicos designados por el Ministerio.</li><li>Verificación de condiciones: docentes, infraestructura, programas, resultados de aprendizaje, investigación, bienestar.</li><li>Otorgamiento del reconocimiento.</li></ol>
      <p>El Consejo Nacional de Acreditación tiene la misión de contribuir al fomento de la alta calidad en las IES y garantizar a la sociedad que las instituciones y programas acreditados cumplen los más altos niveles de calidad. La acreditación institucional valora la capacidad de la institución de sostener en el mediano y largo plazo su proyecto institucional y educativo, y de responder a los cambios del entorno.</p>`)}
    ${tbl(['','Registro Calificado','Acreditación en Alta Calidad'],[
      ['¿Obligatorio?','Sí','No, es voluntaria'],
      ['¿Qué demuestra?','Cumple lo mínimo','Está por encima del estándar'],
      ['¿Quién lo otorga?','MEN','MEN, con evaluación de pares / CNA'],
      ['¿Lo tienen todas?','Los programas que operan legalmente, sí','No'],
      ['Uso comercial','Base de confianza','Argumento diferencial']
    ])}
    ${note('do','Cómo decirlo','<p><em>Evita:</em> “todos los programas tienen registro” (suena a trámite).<br><em>Usa:</em> “Todos los programas de CEIPA cuentan con Registro Calificado del Ministerio, lo que garantiza que cumplen las condiciones de calidad exigidas y tienen validez oficial en Colombia. Y además la institución está Acreditada en Alta Calidad, que es un reconocimiento voluntario que no todas las universidades tienen.”</p>')}
    ${quiz('¿Cuál de estas afirmaciones es falsa?',
      [{t:'Todos los programas de CEIPA tienen Registro Calificado.'},
       {t:'Todos los programas de CEIPA tienen Acreditación en Alta Calidad.',ok:1},
       {t:'La Acreditación en Alta Calidad es voluntaria.'}],
      {ok:'Correcto. La acreditación de CEIPA es institucional, no programa por programa. Decir lo contrario es un error de información que puede costar credibilidad.',
       no:'Las dos primeras opciones no son equivalentes: el Registro Calificado sí lo tienen todos los programas, pero la acreditación que tiene CEIPA es institucional.'})}
  `},
  {t:'Modelo UBFlex', c:`
    <p class="lead">UBFlex es el corazón de la experiencia educativa CEIPA y su principal diferencial frente a la educación superior tradicional. Es una metodología original de CEIPA.</p>
    ${tbl(['Principio','Qué significa'],[
      ['Learning by doing','Se aprende haciendo, diseñando soluciones a retos empresariales reales'],
      ['Aula invertida','El estudiante llega con el contenido trabajado; el encuentro es para aplicar y discutir'],
      ['Ubicuidad','El aprendizaje no depende de un lugar ni de un horario rígido']
    ])}
    <p>El modelo articula tres realidades con la dinámica curricular: <strong>la empresa</strong> (problemas y retos reales), <strong>la sociedad</strong> (contexto e impacto) y <strong>la naturaleza</strong> (sostenibilidad y visión de futuro). El currículo es ubicuo, interdisciplinar y teórico-práctico.</p>
    ${acc('Los siete principios de UBFlex', `<ol>
      <li><strong>Aprender haciendo:</strong> conocimientos adquiridos diseñando soluciones a retos reales.</li>
      <li><strong>Aprendizaje colaborativo:</strong> acompañamiento docente constante y construcción con compañeros.</li>
      <li><strong>Flexibilidad:</strong> clases en CEIPA o desde cualquier lugar, combinando autoaprendizaje, colaboración y experiencias sincrónicas y asincrónicas.</li>
      <li><strong>Teoría y práctica:</strong> proyectos empresariales aplicados con estudiantes de otros programas.</li>
      <li><strong>Emprendimiento y empresarismo:</strong> acompañamiento para desarrollar o fortalecer una idea de negocio; más de 3.000 estudiantes CEIPA lo han hecho.</li>
      <li><strong>Autoaprendizaje:</strong> el estudiante tiene rol protagónico.</li>
      <li><strong>Entornos y recursos de aprendizaje:</strong> materiales en texto, audio y video, para aprender según estilo y ritmo.</li>
    </ol>`)}
    ${acc('El Proyecto Aplicado: el eje del modelo', `
      <p>Atraviesa todo el proceso. A través de él, el estudiante interactúa con una empresa real identificando problemas y necesidades concretas, desarrolla soluciones innovadoras, se acerca al mundo laboral viviendo la dinámica de una organización e integra conocimientos aplicando conceptos y herramientas a un caso real.</p>
      ${note('key','La traducción que vende','<p>Esto convierte al estudiante en <strong>un consultor en formación antes de graduarse</strong>.</p>')}`)}
    ${acc('Aulas híbridas', `
      <p>Espacios dotados con tecnología que permiten que estudiantes presenciales y remotos participen simultáneamente en la misma clase, en tiempo real: transmisión en vivo de alta calidad, interacción real entre ambos grupos, herramientas digitales integradas y experiencia sincrónica fluida.</p>
      ${note('key','En una frase','<p>No es una clase grabada. Es una clase compartida.</p>')}`)}
    ${acc('Cómo se enseña en CEIPA', `<p>Actividades centradas en el estudiante y en el aprendizaje autónomo; evaluación basada en competencias y resultados de aprendizaje; estudios de casos y situaciones problémicas reales; discusión sobre situaciones reales; trabajo en equipo con entregas en diversos formatos; controles de lectura, quices, informes y sustentaciones orales y escritas; proyectos aplicados.</p>`)}
    <h3>Traducción a beneficio</h3>
    ${tbl(['Atributo del modelo','Lo que el prospecto escucha'],[
      ['Aprender haciendo','“Sales con experiencia, no solo con teoría”'],
      ['Ubicuidad y aulas híbridas','“El sistema se adapta a tu vida; tu vida no se adapta al sistema”'],
      ['Proyecto aplicado','“Trabajas con empresas reales desde la carrera”'],
      ['Interdisciplinariedad','“Aprendes con gente de otros programas, como en una empresa real”'],
      ['Evaluación por aplicación','“No aprendes para el examen, aprendes para el trabajo”']
    ])}
    ${note('alert','Mensaje clave','<p>UBFlex <strong>no es una modalidad</strong>, es un modelo pedagógico. No son “clases diferentes”: es otra forma de aprender, donde el estudiante es protagonista y la evaluación se centra en la aplicación.</p>')}
    <p>Video institucional del modelo: <a href="https://youtu.be/kjG4f-O_iMY" target="_blank" rel="noopener">youtu.be/kjG4f-O_iMY</a></p>
  `},
  {t:'Núcleo problémico', c:`
    <p class="lead">El núcleo problémico es la unidad central de aprendizaje en CEIPA, en lugar del modelo tradicional de materias separadas.</p>
    <p>Es una unidad curricular integrada que se centra en un problema real del entorno empresarial o social, integra múltiples saberes y herramientas, se estudia de forma intensiva durante varias semanas —generalmente <strong>8 semanas o 2 meses</strong>— y está orientada a resolver un reto concreto. Sustituye las asignaturas fragmentadas por una experiencia holística, con base en el aprendizaje constructivista.</p>
    <h3>Estructura de un núcleo</h3>
    ${acc('1. Inicio — Enfoque del problema','<p>Se presenta la problemática real que será el eje del aprendizaje y se aplica un <strong>pretest</strong> de diagnóstico.</p>')}
    ${acc('2. Desarrollo — Experiencias de aprendizaje','<p>Análisis de casos reales, consultorías y charlas con expertos, foros de consulta permanentes con docentes y compañeros.</p>')}
    ${acc('3. Entregables y evaluaciones', tbl(['Entregable','Función'],[
      ['Entregas 1, 2 y 3','Avances parciales del proyecto'],
      ['Quiz','Evaluación formativa de competencias clave'],
      ['Pitch','Presentación ejecutiva de soluciones'],
      ['Proyecto de consultoría','Producto final que integra la solución al problema real']
    ]))}
    ${acc('4. Cierre — Evaluación integral','<p>Postest que mide el avance frente al diagnóstico inicial, evaluación del aprendizaje en comprensión y aplicación, consolidación de resultados con reflexión del estudiante sobre su propio proceso, y retroalimentación académica del docente.</p>')}
    ${note('key','La cuenta que todo asesor debe tener en la cabeza','<p>1 núcleo = 2 meses (8 semanas) · 5 núcleos por año · 20 núcleos en total · <strong>4 años de carrera</strong>, frente a los 5 años del esquema tradicional por semestres.</p><p style="margin-top:.5rem">No lo digas como dato académico: un año menos de carrera es un año antes en el mercado laboral, un año menos de inversión y un año más de ingresos profesionales.</p>')}
    ${quiz('Un prospecto dice: “¿o sea que estudio una sola materia a la vez? ¿eso no es muy poquito?”. ¿Cómo lo reencuadras?',
      [{t:'“Es que así es el modelo, está diseñado por expertos.”'},
       {t:'“Un núcleo no es una materia: es un problema real de empresa que integra varias áreas al tiempo durante ocho semanas. Aprendes más, no menos, porque no fragmentas la atención.”',ok:1},
       {t:'“Tranquilo, igual vas a ver todos los temas que ves en otras universidades.”'}],
      {ok:'Así es. El reencuadre está en la palabra: no es una materia, es un problema integrador. Y el beneficio es la concentración.',
       no:'Apelar a la autoridad del diseño o comparar con otras universidades no resuelve la duda. Hay que corregir el supuesto: un núcleo no equivale a una materia.'})}
  `},
  {t:'Modalidades', c:`
    ${note('alert','Advertencia de uso','<p>La modalidad depende <strong>del programa y del nodo</strong>. No todos los programas tienen todas las modalidades. Valida siempre antes de orientar: una mala orientación de modalidad no pierde una venta, genera deserción.</p>')}
    <h3>Pregrado</h3>
    ${acc('Virtual','<p>Acceso a plataforma 24/7, contenidos diseñados por la academia, foros, acompañamiento docente, asesorías programadas y grupales, trabajo colaborativo. Dinámica: <strong>un encuentro semanal sincrónico</strong> (no obligatorio, queda grabado) más una asesoría grupal.</p>')}
    ${acc('Virtual con metodología Blended (Nodo Barranquilla)','<p><strong>80% actividades virtuales y 20% presenciales.</strong> Tres asesorías presenciales por núcleo, en las instalaciones de la Carrera 57 # 72-143. Jornada diurna de 8:15 a 11:30 a.m. y nocturna de 6:15 a 9:30 p.m. Aplica a carreras administrativas y a núcleos comunes de Contaduría Pública.</p>')}
    ${acc('Híbrida nocturna','<p>Dos clases semanales en vivo, de 6:15 a 9:30 p.m., <strong>obligatorias</strong>. Las clases se dictan desde el Campus Sabaneta y el estudiante que no asiste físicamente se conecta en tiempo real al aula híbrida e interactúa como si estuviera allí. Aplica a Ingenierías, Derecho y núcleos específicos de Contaduría Pública.</p>')}
    ${acc('Presencial (Campus Sabaneta)','<p>Ejemplo de estructura: lunes a viernes, jornada diurna de 8:00 a.m. a 12:00 m., cuatro días a la semana con un día de trabajo autónomo.</p>')}
    <h3>Mapa rápido por programa</h3>
    ${tbl(['Programa','Modalidades','Horarios'],[
      ['Carreras administrativas','Blended · Virtual','Blended diurno 8:15–11:30 o nocturno 6:15–9:30 · Virtual: 1 encuentro sincrónico + 1 asesoría grupal'],
      ['Contaduría Pública','Núcleos comunes: Blended o Virtual · Núcleos específicos: Híbrida','Híbrida: 1 encuentro sincrónico + 1 encuentro grupal'],
      ['Ingenierías y Derecho','Híbrida','2 encuentros sincrónicos, nocturno 6:15–9:30'],
      ['Marketing Digital','Virtual','1 encuentro semanal sincrónico + 1 asesoría grupal'],
      ['Estadística y Ciencia de Datos','Presencial o Virtual','Presencial: lunes a viernes, 8:00 a.m. a 12:00 m.']
    ])}
    <p style="font-size:.92rem;color:var(--muted)">El detalle anterior corresponde a la oferta descrita para el Nodo Barranquilla y a la documentación vigente. Para Sabaneta y programas nuevos, valida contra la ficha oficial del programa.</p>
    <h3>Posgrado</h3>
    ${tbl(['Nivel','Horario'],[
      ['Especializaciones','Presencial (solo Sabaneta): viernes 6:00–9:00 p.m. y sábados 8:00–11:00 a.m. Virtual: encuentros sincrónicos <strong>opcionales</strong> los mismos días y horas. El énfasis se desarrolla 100% virtual en ambas modalidades. Aplican condiciones de días y horarios en actividades experienciales como Outdoor Training y Social Business Experience.'],
      ['Maestría en Administración (MBA)','Miércoles virtual sincrónico 8:00–9:00 p.m. · viernes 5:00–10:00 p.m. · sábado 8:00 a.m.–1:00 p.m., presencial o sincrónico según modalidad.']
    ])}
    ${note('do','La pregunta que abre esto','<p>No preguntes “¿qué modalidad quieres?”. Pregunta <strong>“¿cómo son tus días entre semana?”</strong>. La modalidad se deduce de la vida real de la persona, no de su preferencia declarada.</p>')}
    ${quiz('Un prospecto interesado en Ingeniería Industrial trabaja hasta las 8 p.m. todos los días. ¿Qué haces?',
      [{t:'Le ofrezco la modalidad virtual para que no tenga problema.'},
       {t:'Le digo de frente que en Ingeniería los dos encuentros nocturnos son obligatorios y exploro si puede ajustar su horario dos días a la semana.',ok:1},
       {t:'Lo matriculo y que después vea cómo se organiza.'}],
      {ok:'Correcto. Ingenierías es modalidad híbrida con asistencia obligatoria. Decirlo de frente protege al prospecto de una deserción y te da credibilidad.',
       no:'Ingenierías y Derecho son modalidad híbrida nocturna con asistencia obligatoria; no hay opción virtual. Ofrecerla o callarlo es venderle una deserción.'})}
  `},
  {t:'Portafolio', c:`
    ${note('key','Regla base del manual comercial','<p>Antes de hablar de precio o modalidad, identifica qué busca el aspirante: tiempo, empleabilidad, innovación, liderazgo, práctica, internacionalización o especialización. Y nunca recites el pensum: traduce el plan de estudios a beneficios —qué aprende, para qué le sirve, en qué cargos puede verse—.</p><p style="margin-top:.5rem">Vende cada programa desde tres capas: el <strong>problema</strong> que resuelve, el <strong>diferencial CEIPA</strong> y el <strong>resultado profesional</strong> esperado. Cuando dos programas se parecen, orienta por el tipo de reto que resuelve cada uno.</p>')}
    ${tbl(['Nivel','Cantidad','Promesa principal','Cómo se vende'],[
      ['Pregrados','13','Formación profesional ágil, práctica y conectada con el mercado','Carreras de 4 años, enfoque por núcleos, empleabilidad, diferenciadores por área'],
      ['Especializaciones','12','Profundización aplicada para subir de nivel profesional','Liderazgo funcional, impacto inmediato en el trabajo, flexibilidad UBFlex'],
      ['Maestrías','4','Formación de alto nivel para liderar transformación','Dirección estratégica, innovación, visión global, experiencia aplicable']
    ])}
    ${acc('Pregrados: listado y cómo diferenciar los administrativos', `
      <p>Administración de Empresas · Administración de Mercadeo · Administración de Negocios Internacionales · Administración Financiera · Administración Humana · Contaduría Pública · Marketing Digital · Estadística y Ciencia de Datos · Derecho · Ingeniería Industrial · Ingeniería de Sistemas · Ingeniería Ambiental · Ingeniería Financiera y de Riesgo · Ingeniería Robótica · Dirección de Marketing Global / Administración de Mercadeo (doble titulación con ESIC).</p>
      ${note('alert','Información pendiente de complementar','<p>El manual de portafolio 2026 reporta 13 pregrados; la documentación permite identificar los listados arriba, incluido el convenio ESIC. Confirmar con Dirección Académica cuáles son los 13 vigentes y cuáles se ofrecen en cada nodo.</p>')}
      ${tbl(['Programa','Forma profesionales capaces de…','Diferencial'],[
        ['Administración de Empresas','Dirigir áreas, proyectos o empresas completas con base gerencial amplia','Estrategia, finanzas, operaciones, talento, datos, innovación y gobierno corporativo en una sola visión'],
        ['Administración de Mercadeo','Decidir sobre mercado, cliente y negocio','Creatividad más análisis y decisión, no solo campañas'],
        ['Administración Financiera','Gestionar recursos, analizar inversión y riesgo','Finanzas conectadas a toda la organización, no área aislada'],
        ['Administración Humana','Diseñar cultura, liderazgo y desarrollo organizacional','Talento como motor estratégico, no gestión de personal'],
        ['Negocios Internacionales','Comercio exterior, logística internacional, negociación global','Lectura estratégica del entorno global más sostenibilidad'],
        ['Contaduría Pública','Información financiera, control y cumplimiento','Estructura mixta: núcleos administrativos y contables con modalidades distintas'],
        ['Marketing Digital','Ejecutar y medir en canales digitales','100% virtual, orientado a resultados medibles'],
        ['Estadística y Ciencia de Datos','Analizar datos para decidir','Modalidad presencial o virtual con encuentros sincrónicos']
      ])}`)}
    ${acc('Derecho: el caso especial más vendible', `
      <p>Programa de <strong>4 años</strong>. Diferenciales: formación por núcleos con un solo núcleo a la vez y mayor concentración; enfoque integral de las ramas del derecho; desarrollo de habilidades de análisis, argumentación e interpretación en lugar de memorización de normas; casos reales de la rama judicial y jurisprudencia; <strong>consultorio jurídico</strong> con atención de casos reales, especialmente a personas de escasos recursos; proyectos aplicados; <strong>alianza con LEGIS</strong>, una de las editoriales jurídicas más reconocidas del país; y acceso a <strong>SilvIA</strong>, herramienta de inteligencia artificial jurídica alimentada con leyes vigentes en Colombia y jurisprudencia.</p>`)}
    ${acc('Especializaciones: estructura y oferta', `
      <p>Duración aproximada de <strong>11 meses académicos</strong>, que corresponde al desarrollo del plan de estudios y no contempla vacaciones ni recesos de graduación. Enfoque 100% aplicado al entorno profesional.</p>
      <p><strong>Bloque gerencial (contexto):</strong> modelos de gestión, herramientas gerenciales, análisis organizacional, toma de decisiones. Es transversal: el estudiante comparte espacio con profesionales de otros énfasis, lo que fortalece networking y visión empresarial.</p>
      <p><strong>Bloque específico (herramientas):</strong> contenidos técnicos propios del área, herramientas especializadas, análisis de procesos.</p>
      ${note('alert','Información pendiente de complementar','<p>La documentación menciona una estructura de tres bloques; confirmar la denominación y el alcance exacto del tercero.</p>')}
      ${tbl(['Grupo','Programas'],[
        ['Consolidadas','Gerencia · Gerencia Financiera · Gerencia del Talento Humano · Gerencia de Mercadeo · Gerencia Logística · Gerencia de Proyectos · Gestión de Servicios'],
        ['Nuevas','Gerencia de Turismo Sostenible · Marketing Digital · Ciberseguridad · Emprendimiento Tecnológico · Transformación Digital']
      ])}
      <p>La malla curricular de varias especializaciones está diseñada de acuerdo con el plan de estudios de <strong>Arizona State University</strong>, con material de clase y casos prácticos extraídos directamente de cursos de ASU.</p>`)}
    ${acc('Maestrías', `
      <p>Cuatro programas: <strong>Administración (MBA)</strong>, <strong>Transformación Digital para la Educación</strong>, <strong>Liderazgo e Innovación Educativa</strong> y <strong>Emprendimiento Tecnológico</strong>.</p>
      <p>Las caracteriza la formación estratégica y aplicada —liderar organizaciones, decidir con impacto, formular estrategia, gestionar proyectos y equipos—, el aprendizaje colaborativo e internacional, el modelo UBFlex con modalidades presencial, híbrida o virtual, el respaldo de la acreditación institucional y la red de egresados.</p>
      <p><strong>MBA:</strong> primera Maestría en Administración enfocada en formación gerencial ambidextra, para gerenciar organizaciones en entornos VUCA, con docentes expertos y consultores de alta trayectoria empresarial; aprendizaje basado en problemas, proyectos y experiencias; proyecto empresarial; contenidos enriquecidos por ASU. CEIPA es la escuela de negocios privada con más estudiantes virtuales.</p>
      ${note('alert','Información pendiente de complementar','<p>Confirmar la duración oficial de cada maestría con Dirección Académica.</p>')}`)}
    ${kase('Caso del módulo',
      'Llamada: “Buenas, vi lo de Gerencia de Proyectos. Yo soy ingeniero civil, llevo 6 años en obra y quiero pasar a coordinar proyectos, pero también vi que ustedes tienen Gerencia y Transformación Digital. ¿Cuál me sirve?”',
      '¿Cuál es tu siguiente movimiento?',
      [{t:'Le explico los tres programas para que él elija con toda la información.',q:'bad',
        fb:'<h5>Qué pasa aquí</h5><p>Describir tres programas y dejar que elija no es asesorar: es delegar. El prospecto queda con más opciones y menos claridad, y lo más probable es que pida “pensarlo”.</p>'},
       {t:'Le pregunto: “¿lo tuyo es dirigir proyectos de obra específicamente, o te interesa más dirigir el negocio completo?”',q:'best',
        fb:'<h5>Elección correcta</h5><p>Una sola pregunta separa los tres programas. Si dice proyectos, va Gerencia de Proyectos: lo que le falta no es conocimiento técnico, es el marco para responder por tiempo, costo y calidad, y por los equipos. Si dice negocio completo, va Gerencia: ahí la mirada es la organización como sistema. Transformación Digital se descarta salvo que el disparador sea la digitalización de su empresa.</p>'},
       {t:'Le recomiendo Gerencia de Proyectos porque coincide con lo que él mencionó primero.',q:'mid',
        fb:'<h5>Puede acertar, pero por suerte</h5><p>Probablemente sea el programa correcto, pero estás recomendando sin diagnosticar. Si resulta que lo que busca es dirigir la empresa familiar, tu recomendación lo aleja. Una pregunta previa te habría dado certeza.</p>'}],
      '<h5>Lo que se practica</h5><p>Las tres capas de venta de un programa: el problema que resuelve, el diferencial CEIPA y el resultado profesional. Y la regla de oro del portafolio: cuando dos programas se parecen, orienta por el tipo de reto que resuelve cada uno.</p>')}
  `},
  {t:'Ecosistema', c:`
    <p class="lead">Estos son los argumentos que casi nadie usa y que más diferencian. No se listan todos en una conversación: se elige el que le sirve a ese prospecto.</p>
    ${acc('Alianza con Arizona State University (ASU)','<p>Alianza estratégica con una de las universidades más innovadoras del mundo. Fortalece la visión global, el acceso a experiencias internacionales, el intercambio académico y la actualización constante del modelo educativo. Varios programas incorporan o enriquecen contenidos con ASU. CEIPA se presenta como <strong>“CEIPA powered by Arizona State University”</strong>.</p>')}
    ${acc('Internacionalización sin viajar', `
      <p>La internacionalización en CEIPA no depende de viajar, y ese es su mayor diferencial: hay opciones virtuales, curriculares y de corta duración, accesibles a estudiantes de todas las modalidades, incluidos quienes trabajan o tienen responsabilidades familiares.</p>
      <p><strong>Rutas:</strong> intercambios académicos (CINTANA, PALOMA, eMOVIES, INILATmov+); internacionalización curricular con núcleos y actividades con experiencias internacionales dentro del plan; bilingüismo en inmersión con ASU; Conexión Global dentro de Proyección Profesional; emprendimiento global con AIESEC y la Bolsa de Prácticas de la Alianza del Pacífico; y experiencias de corta y media duración como escuelas de verano e invierno, formación virtual, retos empresariales internacionales, cursos cortos y experiencias culturales.</p>
      <p><strong>Convocatorias mencionadas para 2026:</strong> ASU Bound Fall Experience, Cátedra DELFIN 2026-2, CETYS International Summer Program, Immersion Program en Indonesia y Convocatoria MIVI.</p>
      ${tbl(['Ruta','Alcance'],[
        ['eMOVIES','Hasta dos asignaturas virtuales en universidades de Colombia e Iberoamérica'],
        ['PALOMA','Hasta tres asignaturas en instituciones de Antioquia'],
        ['Intercambios del portafolio 2026-2','Hasta seis asignaturas en la universidad destino, homologables por hasta tres núcleos CEIPA']
      ])}
      <p><strong>Beneficios económicos:</strong> exención de costos de matrícula en la universidad de destino, 50% de descuento en homologación de créditos y Fondo de Apoyo para la Internacionalización.</p>
      ${note('key','El dato que le da peso','<p>Menos del 2% de los estudiantes en Colombia vive experiencias de intercambio.</p>')}
      ${note('alert','Verifica antes de prometer','<p>Las convocatorias cambian por período. Confirma vigencia con la Dirección de Internacionalización antes de mencionar una específica, y nunca garantices un cupo.</p>')}`)}
    ${acc('Alumni y empleabilidad: los datos más potentes del portafolio', `
      <p>Alumni fortalece el vínculo con los egresados con una línea de servicio 360°: bienestar, lifelong learning, alumni destacados, rutas de formación, creación de portafolio, acompañamiento en hoja de vida y pruebas psicotécnicas.</p>
      ${tbl(['Indicador','CEIPA','Referencia nacional'],[
        ['Tasa de empleabilidad 2023','89,8%','77,4%'],
        ['Egresados con empleo al graduarse','92,35%','—'],
        ['Egresados trabajando en su área','82%','—'],
        ['Ingresos del 50% de los egresados','2,5 a 6 SMMLV','1,5 a 2,5 SMMLV'],
        ['Recomiendan CEIPA (OLE)','97,4%','—'],
        ['Satisfacción con el programa (OLE)','97,4%','—'],
        ['Consideran el título un diferenciador (encuesta interna 2022)','95,81%','—']
      ])}
      ${note('key','La versión que se queda','<p>“9 de cada 10 egresados CEIPA consiguen empleo.”</p><p style="margin-top:.5rem">Usa <strong>uno solo</strong>, el que responda la preocupación que la persona acaba de expresar. Tres datos seguidos no convencen: abruman.</p>')}`)}
    ${acc('Investigación y SolversLab', `
      <p><strong>Investigación:</strong> CEIPA cuenta con grupos de investigación, semilleros, fondo editorial, proyectos e innovación, con productos registrados en Scienti, reportados en el marco de su acreditación. Traducción comercial: el estudiante no recibe una formación estática, sino nutrida por producción académica. Los semilleros son espacios donde estudiantes y alumni desarrollan investigaciones para resolver situaciones empresariales, y fortalecen la hoja de vida.</p>
      <p><strong>SolversLab:</strong> modelo de educación teórico-práctica centrado en problemas y proyectos, con equipos de consultores senior y junior que resuelven retos empresariales reales traídos por organizaciones. Las consultorías son <strong>certificables para la hoja de vida</strong> y hacen parte de la proyección social desde el currículo; las organizaciones acceden a soluciones innovadoras sin costos adicionales.</p>`)}
    ${acc('BienSer (Bienestar Universitario)', `
      <p>Proceso dinámico, flexible y de construcción permanente, en el marco del artículo 117 de la Ley 30 de 1992, que complementa la formación integral. Identificando necesidades particulares de cada miembro de la comunidad —estudiantes, colaboradores, docentes y graduados— busca la autorrealización de sus proyectos de vida mediante un plan de desarrollo personal. Focos: prevención, formación e intervención.</p>
      ${tbl(['Línea','Servicios'],[
        ['Psicosocial','Asesorías psicológicas, orientación vocacional, cursos de habilidades para la vida, acompañamiento a estudiantes de prácticas y de intercambio'],
        ['Acompañamiento académico','Núcleo de objetos electivos, núcleo de herramientas cuantitativas, plan de desarrollo personal, acompañamiento a estudiantes con bajo rendimiento'],
        ['Salud física','Zona de escucha, programa de sexualidad responsable, actividad física con Fitness Match'],
        ['Ocio y cultura','Eventos culturales, tertulias literarias, cine foros, reseñas literarias, recomendaciones culturales, talleres']
      ])}
      <p>Contacto: teescucho@ceipa.edu.co para asesorías psicológicas, bienser@ceipa.edu.co y enfermeria@ceipa.edu.co. Divulgación mediante “Bien Ser a la mano” y el Boletín de Bienestar semanal.</p>
      ${note('key','Cuándo usar BienSer','<p>Cuando el prospecto expresa <strong>miedo, no objeción</strong>: “me da susto volver a estudiar después de 10 años”, “mi hijo es muy tímido”, “yo soy malo para las matemáticas”. Ahí BienSer vale más que la acreditación.</p>')}`)}
    ${acc('Emprendimiento, ESIC y EIG', `
      <p><strong>Emprendimiento:</strong> más de 3.000 estudiantes CEIPA han desarrollado o fortalecido su idea de negocio con acompañamiento especializado, y 3.200 empresas han sido sensibilizadas por la Estrategia de Emprendimiento y Empresarismo.</p>
      <p><strong>EIG España (posgrado):</strong> Escuela Internacional de Gerencia, una de las más importantes de España, con más de 30 años de reconocimiento y campus en Granada. El estudiante recibe <strong>dos títulos con una sola matrícula</strong>: Especialista CEIPA y un Máster Ejecutivo de EIG según el programa o énfasis.</p>
      ${note('error','Dato de honestidad obligatoria','<p>El título español es <strong>título propio de EIG, no convalidable en Colombia</strong>. Esto se dice siempre, sin que lo pregunten. Ocultarlo destruye la venta después de la matrícula, que es cuando más caro sale.</p>')}
      <p><strong>ESIC (pregrado con doble titulación):</strong> ESIC Medellín inicia en Colombia en 2021, como sociedad entre ESIC España y el grupo Prisma Colombia, de la mano de ocho empresas fundadoras: Bancolombia, Sura, Grupo Crystal, Pactia, Grupo Bios, Telefónica, Postobón y Accenture. Para operar realiza convenio internacional con CEIPA, lo que permite ofrecer pregrados con doble titulación española y colombiana.</p>
      <ul>
        <li><strong>Programas:</strong> Digital Business / Administración de Empresas (CEIPA) y Dirección de Marketing Global / Administración de Mercadeo (ESIC).</li>
        <li><strong>Metodología:</strong> la misma de CEIPA, con núcleos problémicos; el micro currículo integra elementos de España y profundización en herramientas digitales como programación y arte digital.</li>
        <li><strong>Recorrido:</strong> años 1 y 2 en ESIC Medellín; años 3 y 4 con posibilidad de estudiar en España pagando la matrícula en pesos, asumiendo tiquetes y manutención.</li>
        <li><strong>Marketing Global:</strong> 160 créditos, 4 años, núcleos de 8 semanas y 8 créditos, dos semanas de Summer Camp en Madrid en el segundo año, internacionalización del currículum en tercer y cuarto año.</li>
        <li><strong>Modalidad y sede:</strong> presencial en las mañanas, Km 17 vía Las Palmas, Mall La Reserva.</li>
        <li><strong>Inversión:</strong> $26.500.000 por año, con opciones de pago mensual sin costo de financiación.</li>
      </ul>`)}
  `},
  {t:'Inversión', c:`
    <h3>Requisitos de inscripción a pregrado</h3>
    <ol>
      <li>Solicitud de ingreso diligenciada en <a href="https://inscribete.ceipa.edu.co/" target="_blank" rel="noopener">inscribete.ceipa.edu.co</a></li>
      <li>Foto tipo documento: de frente, fondo blanco, a color y en buena resolución</li>
      <li>Fotocopia del diploma y acta de grado de bachiller</li>
      <li>Copia del resultado de las pruebas Saber 11</li>
      <li>Carta laboral, si cuenta con alianza empresarial</li>
    </ol>
    <h3>Inversión por período, pregrado 2026</h3>
    ${tbl(['Grupo de programas','Presencial','Virtual'],[
      ['Administración de Empresas, Mercadeo, Negocios Internacionales, Financiera y Humana','$2.606.696','$1.972.632'],
      ['Derecho, Ingenierías y Estadística y Ciencia de Datos','$3.571.512','$2.838.216']
    ])}
    <p>Inscripción y homologación se pagan una sola vez; el seguro estudiantil se paga anualmente. Los valores referenciados en la documentación son $87.330, $176.129 y $396.289.</p>
    ${note('alert','Información pendiente de complementar','<p>Las fichas de programa presentan estos tres valores en una tabla cuya asignación no es inequívoca, y el texto de homologación menciona además un valor de $375.594. <strong>Antes de comunicar cifras a un prospecto, valida la lista de precios vigente con el área financiera o admisiones.</strong> Un precio no se improvisa.</p>')}
    <h3>Homologación</h3>
    <ul>
      <li>Estudio de asignaturas cursadas en otra institución vigilada por el MEN, para reconocimiento de créditos</li>
      <li>Se presentan notas originales con número de créditos y fecha</li>
      <li>Las asignaturas no pueden exceder <strong>10 años</strong> de haberse cursado</li>
      <li>Costo único, no reembolsable, independiente de la cantidad de créditos o del valor de la matrícula</li>
      <li>Se realiza <strong>una sola vez y antes de iniciar estudios</strong></li>
      <li>Se reconoce <strong>hasta el 50%</strong> del plan de estudios, sujeto a estudio del líder académico</li>
    </ul>
    ${note('do','Cómo presentar la inversión','<p>No digas “vale $1.972.632”. Di: “la inversión de cada núcleo, que son dos meses, es de $1.972.632 en virtual. Son cinco núcleos al año. Y ya con eso tienes plataforma 24/7, acompañamiento docente, proyecto aplicado con empresas reales y todo el componente de bienestar e internacionalización.” El precio nunca viaja solo: viaja con lo que incluye.</p>')}
    <p><strong>Canales institucionales:</strong> 321 711 54 02 · <a href="https://ceipa.edu.co/" target="_blank" rel="noopener">ceipa.edu.co</a></p>
  `}
  ]),
 check:[
  quiz('¿Hasta qué porcentaje del plan de estudios se puede homologar y con qué antigüedad máxima?',
   [{t:'Hasta el 100%, sin límite de años'},{t:'Hasta el 50%, con asignaturas de máximo 10 años',ok:1},{t:'Hasta el 30%, con asignaturas de máximo 5 años'}],
   {ok:'Correcto. Y recuerda: se hace una sola vez y antes de iniciar estudios.',no:'Son hasta el 50% del plan y asignaturas de máximo 10 años. Además, se realiza una sola vez y antes de iniciar.'}),
  quiz('Explica UBFlex sin usar tecnicismos. ¿Cuál de estas versiones sirve para un prospecto?',
   [{t:'“Es nuestro modelo pedagógico ubicuo, interdisciplinar y teórico-práctico basado en el constructivismo.”'},
    {t:'“Aprendes haciendo, llegas a clase con el contenido ya trabajado y estudias desde donde estés. En vez de materias sueltas, resuelves un problema real de empresa.”',ok:1},
    {t:'“Es una modalidad de estudio flexible que combina lo virtual y lo presencial.”'}],
   {ok:'Exacto. Lenguaje simple, tres ideas y una imagen concreta. Nada de jerga institucional.',no:'La primera versión usa jerga que nadie procesa por teléfono. La tercera confunde modelo con modalidad: UBFlex no es una modalidad.'}),
  quiz('¿Cuál es la tasa de empleabilidad CEIPA 2023 y contra qué se compara?',
   [{t:'89,8% frente a 77,4% nacional',ok:1},{t:'92,35% frente a 82% nacional'},{t:'97,4% frente a 89,8% nacional'}],
   {ok:'Así es. El 92,35% corresponde a egresados con empleo al graduarse y el 97,4% a satisfacción y recomendación en el OLE.',no:'89,8% frente a 77,4%. El 92,35% es el porcentaje con empleo al graduarse y el 97,4% es satisfacción y recomendación.'})
 ],
 cierre:cierre([
  'CEIPA es Fundación Universitaria CEIPA, institución universitaria privada y sin ánimo de lucro, vigilada por MINEDUCACIÓN, fundada en 1972.',
  'Registro Calificado es el piso y lo tienen todos los programas; la Acreditación en Alta Calidad es voluntaria, institucional y sí es diferencial. Vigente: Resolución 016362 del 23 de junio de 2026, por 6 años.',
  'UBFlex es un modelo pedagógico, no una modalidad: aprender haciendo, aula invertida y ubicuidad, con el proyecto aplicado como eje.',
  'Un núcleo dura 8 semanas, se cursan 5 al año, 20 en total: la carrera son 4 años, no 5.',
  'La modalidad depende del programa y del nodo. Ingenierías y Derecho son híbrida nocturna con asistencia obligatoria.',
  'El título de EIG es título propio español no convalidable en Colombia, y se aclara siempre sin que lo pregunten.',
  'Los datos de Alumni son el argumento más fuerte del portafolio, pero se usa uno solo por conversación.',
  'Ningún precio se comunica sin validarlo contra la lista vigente.'
 ])
},
{
 id:'m2', n:'Módulo 2', t:'Conocimiento del prospecto y venta consultiva',
 d:'Pasar de un asesor que informa a un asesor que diagnostica.',
 intro:`<p class="lead">Saber todo sobre CEIPA no sirve de nada si no sabes qué parte contarle a quién. Este módulo trata de lo que ocurre antes del argumento: preguntar, escuchar de verdad y elegir.</p>`,
 ficha:ficha([
  ['Objetivo','Que preguntes primero, escuches de verdad y adaptes el discurso al prospecto que tienes enfrente.'],
  ['Resultados','Distingues venta transaccional de consultiva · Identificas los cinco perfiles y sus motivadores · Formulas preguntas abiertas, de profundidad y de implicación · Diferencias necesidad declarada de necesidad real · Seleccionas argumentos según el motivador detectado.'],
  ['Duración','6 horas (2 de estudio + 4 de taller con role play)'],
  ['Se evalúa con','Role play de descubrimiento y checkpoint del módulo.'],
  ['Prerrequisito','Módulo 1 aprobado.']
 ]),
 cuerpo:
  `<h3>Qué se vende realmente cuando se vende educación</h3>
   <p>Una matrícula no es una compra: es una decisión de proyecto de vida que compromete años, dinero, tiempo familiar y autoestima.</p>
   ${note('key','La frase que ordena toda la venta','<p>“Las personas compran educación por confianza y por el valor que les genera el programa en su crecimiento personal.”</p><p style="margin-top:.5rem">“Cuando logras generar en la persona ese valor, la resistencia que pueda tener en referencia al costo disminuye.”</p>')}
   <p>De ahí se derivan dos consecuencias prácticas. La primera: <strong>el precio no es el obstáculo principal, la incertidumbre sí</strong> —“¿seré capaz?”, “¿me va a servir?”, “¿y si lo dejo a medias?”—. La segunda: <strong>nadie compra un pensum</strong>, compra una versión mejor de sí mismo dentro de cuatro años.</p>
   ${note('error','Los tres errores que matan una venta consultiva', tbl(['Error','Cómo suena','Por qué falla'],[
     ['Vomitar información','Recitar los 14 pregrados y las 4 modalidades','El prospecto no puede procesar y pide “pensarlo”'],
     ['Argumentar antes de preguntar','“Te cuento que CEIPA tiene acreditación…” en el minuto uno','Argumentas contra necesidades que inventaste'],
     ['Confundir amabilidad con avance','Conversación cálida, sin propuesta de siguiente paso','Una conversación de venta sin intento de cierre solo fue una charla muy amena']
   ]))}
   <h3>Venta consultiva frente a venta transaccional</h3>
   ${tbl(['','Transaccional','Consultiva'],[
     ['Quién habla más','El asesor','El prospecto'],
     ['Punto de partida','El programa','La situación de la persona'],
     ['Preguntas','Filtro: “¿qué programa quiere?”','Diagnóstico: “¿qué quiere lograr?”'],
     ['Argumentos','Todos los que existen','Solo los que aplican'],
     ['Rol del asesor','Informar','Orientar y recomendar'],
     ['Cierre','Presionar','Consecuencia natural'],
     ['Qué queda si no compra hoy','Nada','Un vínculo y un siguiente paso']
   ])}
   ${note('do','La prueba ácida','<p>Si tu conversación hubiera sido idéntica con otra persona, no fue consultiva.</p>')}
   <h3>Los cinco perfiles de prospecto CEIPA</h3>
   <p>No son cajones rígidos: son hipótesis que confirmas o descartas preguntando.</p>
   ${tabs([
    {t:'Bachiller', c:`<p><strong>16 a 19 años.</strong> Termina o terminó el colegio, decide con la familia y suele haber un tercero que paga.</p>
      <p><strong>Miedo real:</strong> equivocarse de carrera y “perder el año”. <strong>Le importa:</strong> que la carrera tenga salida, no aburrirse, el ambiente, “que no sea puro teórico”.</p>
      <p><strong>A quién le hablas realmente:</strong> al acudiente, que pregunta por validez, costos y empleabilidad.</p>
      <p><strong>Argumentos que pesan:</strong> 4 años en vez de 5, aprender haciendo, empleabilidad del 89,8%, acreditación, BienSer y orientación vocacional.</p>
      <p><strong>Argumento que no pesa:</strong> la doble titulación con EIG, que no aplica a pregrado, ni los tecnicismos del modelo.</p>`},
    {t:'Adulto que trabaja', c:`<p><strong>25 a 45 años.</strong> Empleado, a veces con familia, poco tiempo, quizá con estudios previos inconclusos.</p>
      <p><strong>Miedo real:</strong> no poder sostener el ritmo y perder el dinero. <strong>Le importa:</strong> flexibilidad real, horarios, si puede homologar y si el título le sirve para ascender.</p>
      <p><strong>Argumentos que pesan:</strong> virtual con plataforma 24/7 y clases grabadas, aulas híbridas, homologación de hasta el 50%, un núcleo a la vez, aplicar lo aprendido el lunes en el trabajo.</p>
      ${note('key','La pregunta que no se omite','<p>“¿Alcanzaste a cursar semestres en otra institución?” Activa la homologación, que ahorra tiempo y dinero.</p>')}`},
    {t:'Posgrado', c:`<p><strong>28 a 50 años.</strong> Ya tiene título; busca ascenso, cambio de área o mayor ingreso.</p>
      <p><strong>Miedo real:</strong> que sea “más de lo mismo”, teoría sin aplicación. <strong>Le importa:</strong> el retorno, el nombre en la hoja de vida, la red de contactos y la aplicabilidad inmediata.</p>
      <p><strong>Argumentos que pesan:</strong> 11 meses académicos, doble titulación con EIG, malla diseñada con el plan de estudios de ASU, bloque gerencial transversal como fuente de networking, aplicación inmediata al trabajo.</p>
      ${note('error','Obligatorio','<p>Aclarar que el título EIG es título propio español no convalidable en Colombia.</p>')}`},
    {t:'Emprendedor', c:`<p>Tiene o quiere tener negocio propio; le sobra práctica y le falta estructura.</p>
      <p><strong>Miedo real:</strong> perder tiempo en teoría que no le sirve para su negocio. <strong>Le importa:</strong> poder trabajar sobre SU empresa y horarios que no choquen con la operación.</p>
      <p><strong>Argumentos que pesan:</strong> proyecto aplicado sobre empresa real, que puede ser la suya; el principio de emprendimiento y empresarismo con más de 3.000 estudiantes acompañados; SolversLab; y la universidad emprendedora como principio rector.</p>`},
    {t:'Internacionalista', c:`<p>Busca experiencia global, bilingüismo y diferenciación.</p>
      <p><strong>Le importa:</strong> alianzas, movilidad y certificaciones internacionales.</p>
      <p><strong>Argumentos que pesan:</strong> ASU, convocatorias de experiencias globales, eMOVIES, PALOMA, CINTANA e INILATmov+, los beneficios económicos de intercambio, el dato de que menos del 2% de estudiantes en Colombia vive un intercambio, y ESIC con doble titulación.</p>`}
   ])}
   <h3>La arquitectura de la pregunta</h3>
   <p>En el modelo de los 7 pasos, la investigación va <strong>antes</strong> de la demostración, y la regla es explícita: demuestra o responde solo con base en las respuestas que la persona te dio. Preguntar no es una cortesía previa: es lo que hace posible argumentar. Y el orden importa: primero confianza, después indagación.</p>
   ${tabs([
    {t:'Contexto', c:`<p>Abre, es fácil de responder y no compromete.</p><ul>
      <li>“Cuéntame, ¿qué estás haciendo ahora: estudiando, trabajando, las dos?”</li>
      <li>“¿Cómo son tus días entre semana?”</li>
      <li>“¿Qué te hizo empezar a buscar universidad justo ahora?” — revela el disparador, que es oro</li></ul>`},
    {t:'Necesidad', c:`<p>Busca el objetivo detrás.</p><ul>
      <li>“¿Qué quieres que cambie en tu vida profesional cuando termines?”</li>
      <li>“Si te imaginas graduado, ¿en qué te ves trabajando?”</li>
      <li>“¿Qué es lo que hoy no puedes hacer y con el título sí podrías?”</li></ul>`},
    {t:'Profundidad', c:`<p>Llega a lo que hay debajo.</p><ul>
      <li>“¿Por qué es importante para ti lograr eso?”</li>
      <li>“¿Qué ha hecho que no hayas empezado antes?” — identifica el obstáculo real</li>
      <li>“Cuando dices que buscas algo flexible, ¿flexible en qué exactamente: en horario, en lugar, en ritmo?”</li></ul>`},
    {t:'Implicación', c:`<p>Hace visible el costo de no decidir. Se usa con cuidado, nunca para culpar.</p><ul>
      <li>“¿Qué pasa si dentro de un año sigues en el mismo punto?”</li>
      <li>“¿Cuánto tiempo llevas aplazando esto?”</li>
      <li>“¿Ese ascenso te lo van a volver a ofrecer?”</li></ul>`}
   ])}
   ${note('key','La regla de las tres capas', `${tbl(['Capa','Ejemplo','Cómo llegar a la siguiente'],[
     ['1. Lo que dice','“Busco algo virtual”','“¿Qué te llevó a buscar virtual?”'],
     ['2. Lo que necesita','“Trabajo turnos rotativos”','“¿Y qué ha pasado cuando has intentado estudiar antes?”'],
     ['3. Lo que teme','“Ya intenté dos veces y me tocó retirarme”','Ahí está la venta real']
   ])}<p>En la capa 3 el argumento correcto ya no es “tenemos virtual”. Es: “las clases quedan grabadas y tienes plataforma 24/7, o sea que un turno cambiado no te saca del semestre. Y tienes acompañamiento de BienSer si sientes que te estás quedando atrás.”</p>`)}
   ${acc('Preguntas que no debes hacer', tbl(['No preguntes','Porque','Pregunta en cambio'],[
     ['“¿Cuánto puedes pagar?”','Pone el precio antes del valor','“¿Ya habías mirado el tema de inversión?”'],
     ['“¿Quieres información?”','Invita al “no”','“¿Qué es lo que más te gustaría saber?”'],
     ['“¿Te interesa CEIPA?”','Pide compromiso sin base','“¿Qué te llamó la atención de lo que viste?”'],
     ['“¿Eres bueno para estudiar?”','Ataca la autoestima','“¿Cómo te fue la última vez que estudiaste?”'],
     ['Tres preguntas seguidas sin escuchar','Se siente interrogatorio','Pregunta, escucha, conecta, pregunta']
   ]))}
   <h3>Escucha real</h3>
   <p>El modelo institucional lo dice de entrada: escucha mucho, muestra interés, responde y entabla una conversación con base en sus respuestas, usa palabras sencillas. Escuchar no es callarse mientras piensas qué vas a decir: <strong>escuchar es que tu siguiente frase no habría existido si la persona hubiera dicho otra cosa</strong>.</p>
   ${acc('Cuatro señales observables de escucha', `<ol>
     <li><strong>Repetir con sus palabras.</strong> Si dijo “estabilidad”, no lo traduzcas a “proyección”. Usa “estabilidad”.</li>
     <li><strong>Nombrar la emoción.</strong> “Te noto entre entusiasmado y con algo de susto, ¿es así?”</li>
     <li><strong>Retomar un dato del inicio al final.</strong> “Volviendo a lo de tu hija que entra al colegio el otro año…” Esto hace más por la confianza que cualquier estadística.</li>
     <li><strong>Confirmar antes de argumentar.</strong> “Entonces lo más importante para ti es X, y lo que más te preocupa es Y. ¿Te leí bien?”</li>
   </ol>`)}
   ${acc('Señales que debes cazar en la conversación', tbl(['Lo que dice el prospecto','Lo que en realidad está diciendo','Qué activar'],[
     ['“Tengo que hablarlo con mi esposa o mi mamá”','Hay un decisor que no está en la llamada','Ofrecer una conversación con ambos'],
     ['“Estoy mirando varias opciones”','Quiere criterios para comparar','Dar criterios, no atacar competencia'],
     ['“¿Cuánto vale?” en el segundo minuto','Quiere descartar rápido','Dar rango y valor, y volver a preguntar'],
     ['“Es que yo soy muy malo para…”','Miedo a no ser capaz','BienSer, acompañamiento, modelo por núcleos'],
     ['“Yo ya estudié algo antes”','Posible homologación','Preguntar institución, créditos y años'],
     ['Silencio largo después del precio','Está calculando, no rechazando','No llenar el silencio. Esperar.']
   ]))}
   ${note('alert','El error más costoso','<p>Después de decir un precio, hablar. Di la cifra, cállate y deja que el prospecto reaccione primero.</p>')}
   <h3>Del hallazgo al argumento</h3>
   <p>El corazón operativo del módulo: el prospecto dice algo, tú eliges <strong>un</strong> argumento CEIPA. Uno, no cinco.</p>
   ${tbl(['Si el prospecto expresa…','Argumento CEIPA','Formulación breve'],[
     ['Falta de tiempo o trabaja','Virtual 24/7, clases grabadas, un núcleo a la vez','“Un solo núcleo a la vez, y la clase queda grabada”'],
     ['Quiere terminar rápido','4 años, 5 núcleos al año, 20 núcleos','“Te gradúas en 4 años, no en 5”'],
     ['Estudió antes y se retiró','Homologación hasta 50%','“Lo que ya cursaste puede valerte”'],
     ['Miedo a no ser capaz','BienSer, acompañamiento docente, foros','“No estudias solo, aunque estudies en virtual”'],
     ['Quiere ascender o ganar más','Datos Alumni y aplicación inmediata','“El 50% de nuestros egresados está entre 2,5 y 6 salarios mínimos”'],
     ['Duda de la validez del título','Registro Calificado y Acreditación','“Vigilada MINEDUCACIÓN y acreditada en alta calidad”'],
     ['Quiere experiencia práctica','Proyecto aplicado y SolversLab','“Trabajas con una empresa real desde la carrera”'],
     ['Quiere algo internacional','ASU, rutas de internacionalización, EIG','“Hay rutas internacionales que no exigen viajar”'],
     ['Tiene negocio propio','Emprendimiento y empresarismo','“Puedes trabajar sobre tu propio negocio”'],
     ['Le preocupa quedar sin empleo','9 de cada 10 egresados','“89,8% de empleabilidad frente a 77,4% nacional”'],
     ['Está comparando universidades','Núcleos, acreditación, empleabilidad','Da criterios de comparación, no descalifiques'],
     ['Estudia Derecho','LEGIS, SilvIA, consultorio jurídico, 4 años','“Abogado en 4 años, con IA jurídica y consultorio real”']
   ])}
   ${note('key','La regla del uno','<p>Un hallazgo, un argumento. Si detectas tres necesidades, elige la más dolorosa. Las otras dos las guardas para cuando aparezca una objeción.</p>')}`,
 check:[
  quiz('Un prospecto dice “quiero algo flexible”. ¿Qué haces inmediatamente?',
   [{t:'Le explico la modalidad virtual, que es la más flexible.'},
    {t:'Le pregunto: “¿flexible en qué exactamente: en horario, en lugar, en ritmo?”',ok:1},
    {t:'Le mando las cuatro modalidades para que compare.'}],
   {ok:'Correcto. “Flexible” es una necesidad declarada, no una necesidad real. La pregunta de profundidad es la que te dice qué argumentar.',
    no:'Responder con una modalidad es argumentar contra una necesidad que todavía no entiendes. “Flexible” puede significar horario, lugar o ritmo, y cada uno lleva a una recomendación distinta.'}),
  quiz('¿Qué va primero en el modelo: la investigación o la demostración?',
   [{t:'La demostración, para generar interés antes de preguntar.'},
    {t:'La investigación, porque solo se demuestra con base en lo que la persona respondió.',ok:1},
    {t:'Depende del canal: en llamada primero se demuestra.'}],
   {ok:'Así es. La regla es explícita: demuestra o responde solo con base en las respuestas que la persona dio en la investigación.',
    no:'La investigación siempre va primero. Sin ella argumentas contra necesidades que inventaste.'})
 ],
 cierre:cierre([
  'Las personas compran educación por confianza y por el valor percibido; cuando el valor sube, la resistencia al costo baja.',
  'La prueba ácida de la venta consultiva: si tu conversación hubiera sido idéntica con otra persona, no fue consultiva.',
  'Los cinco perfiles son hipótesis que se confirman preguntando, no cajones para clasificar personas.',
  'Cuatro tipos de pregunta: contexto, necesidad, profundidad e implicación. El disparador —“¿por qué ahora?”— es la más valiosa.',
  'Toda respuesta tiene tres capas: lo que dice, lo que necesita y lo que teme. La venta real está en la tercera.',
  'Escuchar es que tu siguiente frase no habría existido si la persona hubiera dicho otra cosa.',
  'Regla del uno: un hallazgo, un argumento. Las demás necesidades se guardan para las objeciones.'
 ])
},
{
 id:'m3', n:'Módulo 3', t:'La conversación comercial',
 d:'Los 7 pasos de la venta profesional CEIPA, de principio a fin.',
 intro:`<p class="lead">Aquí se junta todo: lo que sabes de CEIPA y lo que aprendiste a preguntar, dentro de una estructura que se puede repetir y medir. La idea que la sostiene: la venta profesional busca romper la barrera que puede generarse entre el cliente y el vendedor. No es una técnica de presión, es una técnica de relación.</p>`,
 ficha:ficha([
  ['Objetivo','Dominar el recorrido completo de una conversación comercial CEIPA y sostenerlo con naturalidad.'],
  ['Resultados','Ejecutas los 7 pasos · Construyes argumentos con CVBR · Realizas intento de cierre en el 100% de tus conversaciones · Conduces sin sonar a libreto.'],
  ['Duración','6 horas (2 de estudio + 4 de taller)'],
  ['Se evalúa con','Role play integral de 12 a 15 minutos y escucha de llamadas reales.'],
  ['Prerrequisito','Módulos 1 y 2.']
 ]),
 cuerpo:
  `${tbl(['#','Paso','Pregunta que responde'],[
    ['1','Pre-chequeo','¿Estoy listo para esta conversación?'],
    ['2','Apertura','¿Logré que esta persona baje la guardia?'],
    ['3','PRA · Investigación','¿Qué necesita realmente?'],
    ['4','CVBR · Demostración','¿Le mostré el valor que a él le importa?'],
    ['5','Pre-cierre','¿Intenté cerrar?'],
    ['6','Manejo de objeciones','¿Entendí y resolví su resistencia?'],
    ['7','Cierre','¿Concretamos?']
  ])}
  <p style="color:var(--muted);font-size:.93rem">El paso 6 se desarrolla completo en el Módulo 5.</p>
  ${acc('Paso 1 · Pre-chequeo', `
    <p>Se hace para que, al lograr una comunicación efectiva, pueda entablarse una conversación sin interrupciones con el prospecto.</p>
    ${tbl(['Conocer el producto','Revisar tus herramientas'],[
      ['Metodología CEIPA · Programas ofertados','Espacio de trabajo ordenado · Equipo y conexión a internet'],
      ['Horarios de estudio · Modalidades','Aplicativo de llamadas y sonido · CRM'],
      ['Costos · Proceso de admisión','Confirmar los seguimientos anteriores · Proceso de admisión']
    ])}
    ${note('alert','Por qué se salta y por qué no debería','<p>Parece administrativo, pero es donde se pierden ventas en silencio. Llamar sin revisar el CRM significa preguntar algo que el prospecto ya respondió la semana pasada, y eso comunica: “no me importas lo suficiente como para acordarme de ti”.</p>')}
    <p><strong>Ritual de 90 segundos antes de cada bloque de llamadas:</strong> CRM abierto y filtrado; ficha del programa a la vista; audio probado; agenda del día a la vista para proponer siguiente paso concreto; y una respiración, para entrar con energía y no con inercia.</p>`)}
  ${acc('Paso 2 · Apertura', `
    <p>Objetivo: romper la barrera entre cliente y vendedor. El modelo pide escuchar mucho las respuestas, mostrar interés, responder con base en lo que la persona dice, usar palabras sencillas y conocer un poco más al prospecto.</p>
    <h4>Los tres movimientos</h4>
    <p><strong>1. Preséntate como persona, no como función.</strong></p>
    ${dlg([{w:'A',s:'“Buenos días, le habla el asesor comercial de la Fundación Universitaria CEIPA.”',n:'Así no: empieza por el cargo y la institución.'},{w:'A',s:'“Hola Juan, soy Camila, de CEIPA. ¿Te agarro en buen momento o te llamo más tarde?”',n:'Así sí: nombre propio y permiso al tiempo.'}])}
    <p><strong>2. Pide permiso al tiempo.</strong> Preguntar “¿tienes dos minutos?” convierte una interrupción en una conversación aceptada. Y si dice que no, agendas, que es mejor que una llamada mal escuchada.</p>
    <p><strong>3. Conecta antes de indagar.</strong> “Vi que dejaste tus datos anoche a las once… ¿estabas buscando algo que se ajuste a tu horario de trabajo?”</p>
    ${tbl(['Apertura que fracasa','Por qué falla'],[
      ['“¿Sigues interesado en estudiar?”','Invita al “no”'],
      ['“Te llamo para darte información del programa”','Te vuelve un folleto hablante'],
      ['Presentar los 14 programas de entrada','Abruma en el minuto uno'],
      ['Hablar 60 segundos seguidos','Perdiste el turno de habla'],
      ['Tono de guion leído','Se nota, siempre']
    ])}`)}
  ${acc('Paso 3 · PRA · Investigación', `
    <p>Después de generar confianza tienes la oportunidad de hacer una investigación más sincera. Preguntas sencillas, buscando conocer las necesidades. Una buena investigación genera mayores probabilidades de cierre.</p>
    <h4>Check mínimo antes de demostrar</h4>
    <ul><li>Qué quiere lograr (objetivo)</li><li>Por qué ahora (disparador)</li><li>Qué se lo ha impedido (obstáculo)</li><li>Cómo son sus tiempos (viabilidad de modalidad)</li><li>Si estudió antes (homologación)</li><li>Quién más decide (decisor)</li></ul>
    <p>Si te falta más de dos, no estás listo para demostrar. Vuelve a preguntar.</p>
    ${note('key','El resumen-espejo: la transición más poderosa de la conversación','<p>“Déjame ver si entendí: llevas tres años en la empresa, quieres aplicar a coordinación pero te piden el título, trabajas hasta las 6 y lo que más te preocupa es no poder con el ritmo. ¿Es eso?”</p><p style="margin-top:.5rem">Cuando el prospecto dice <strong>“exacto”</strong>, dejó de defenderse. Ahí empieza la demostración.</p>')}`)}
  ${acc('Paso 4 · CVBR · Demostración', `
    <p>Cuando has generado confianza es momento de demostrar el valor de la institución: que la persona se percate de la importancia de los programas y beneficios, que sienta la necesidad de pertenecer y que lo perciba con entusiasmo.</p>
    ${note('key','Regla de oro','<p>Demuestra o responde <strong>solo</strong> con base en las respuestas que la persona te dio en la investigación.</p>')}
    ${tbl(['Componente','Qué es'],[
      ['C — Característica','Lo que distingue a CEIPA de las demás instituciones'],
      ['V — Ventaja','Va ligada a la característica. Se conecta con “lo que significa que…”'],
      ['B — Beneficio','Ligado a la ventaja: por qué eso genera valor para ese cliente'],
      ['R — Reflexión','El cierre del beneficio; busca la afirmación de la persona']
    ])}
    ${note('alert','La R es la parte que casi nadie usa','<p>Sin reflexión, el CVBR es un monólogo con estructura. La R devuelve el turno de habla y te dice si acertaste: si la persona responde con un “sí” seco, no acertaste; si amplía, elabora o cuenta algo, sí, y puedes avanzar al pre-cierre.</p>')}
    <h4>Errores en la demostración</h4>
    <ul><li>Dar todos los argumentos “por si acaso”: diluye</li><li>Hablar de precio antes de instalar valor: la resistencia al costo sube</li><li>Usar tecnicismos como “ubicuidad” o “núcleo problémico” sin explicar</li><li>Argumentar contra necesidades que el prospecto nunca mencionó</li><li>Perder el entusiasmo: el modelo lo pide explícitamente</li></ul>
    <p>Los cuatro CVBR completos, construidos y listos para adaptar, están en la sección <strong>Ejemplos y situaciones reales</strong>.</p>`)}
  ${acc('Paso 5 · Pre-cierre', `
    ${note('key','Las dos frases que definen este paso','<p>“Una conversación de venta con intento de cierre es una conversación de venta. Si no hay intento de cierre, solo fue una charla muy amena.”</p><p style="margin-top:.5rem">“Pre-cierre no significa presionar al prospecto para que se matricule. Significa que en el 100% de nuestras conversaciones de venta debemos intentar cerrar.”</p>')}
    <p><strong>Fórmula del modelo:</strong> “¿Entonces, te gustó lo que conversamos hasta ahora? Fantástico, entonces empezamos tu proceso de matrícula.”</p>
    <p>Funciona porque tiene tres partes: una pregunta de temperatura de bajo compromiso, una afirmación de avance que reconoce la respuesta, y una propuesta directa que no pide permiso para proponer.</p>
    ${tbl(['Situación','Formulación'],[
      ['Llamada con buen diagnóstico','“Por todo lo que me contaste, veo que el programa encaja. ¿Te parece si empezamos el proceso?”'],
      ['Prospecto entusiasta','“Perfecto. Entonces avancemos: ¿me confirmas tu número de documento?”'],
      ['Prospecto tibio','“¿Qué te falta saber para tomar la decisión?” — saca la objeción real'],
      ['WhatsApp','“¿Te dejo el enlace de inscripción y lo hacemos juntos ahora, o prefieres que te llame en 10 minutos?”'],
      ['Presencial o feria','“¿Te registro ahora y seguimos el proceso mañana con calma?”']
    ])}
    <p><strong>Los tres desenlaces posibles:</strong> el postulante se matricula y pasas a cierre; te detiene y expresa una objeción y pasas al paso 6; o no se matricula en ese momento y pasa a seguimiento. Los tres son válidos. <strong>El único resultado inválido es no haber intentado.</strong></p>`)}
  ${acc('Paso 7 · Cierre', `
    <p>Si hemos realizado un buen trabajo en los pasos previos, este paso será el más sencillo.</p>
    <p><strong>Formulación del modelo:</strong> “Como veo que te gustó todo lo que hablamos hasta este momento, comencemos con el proceso de inscripción en este momento. Para iniciar con tu proceso es necesario que me confirmes tu número de documento y me compartas la siguiente documentación.”</p>
    <p>Lo que hace fuerte a un cierre: es afirmativo y no interrogativo; pide una acción pequeña y concreta —el número de documento, un dato, no un compromiso emocional—; y nombra los pasos siguientes, porque la incertidumbre frena y la claridad avanza.</p>
    <h4>Checklist del cierre operativo</h4>
    <ul>
      <li>Número de documento confirmado</li>
      <li>Solicitud de ingreso en inscribete.ceipa.edu.co</li>
      <li>Documentos solicitados: foto tipo documento, diploma y acta de bachiller, resultado Saber 11, carta laboral si aplica</li>
      <li>Explicado qué se paga una sola vez y qué anualmente</li>
      <li>Verificada la opción de homologación si estudió antes</li>
      <li>Modalidad y horario confirmados contra la disponibilidad real que mencionó</li>
      <li>Siguiente contacto agendado con fecha y hora, no “cualquier día”</li>
      <li>Registro en CRM con lo conversado, no solo con el estado</li>
    </ul>
    ${note('key','El cierre no termina cuando dice que sí','<p>Termina cuando el prospecto sabe exactamente qué va a pasar mañana. Un “sí” sin siguiente paso claro se enfría en 48 horas.</p>')}`)}
  <h3>Dinámica y ritmo</h3>
  ${tbl(['Paso','Tiempo en una llamada de 15 min','Quién habla más'],[
    ['Apertura','1–2 min','Equilibrado'],
    ['Investigación','5–6 min','<strong>El prospecto (70%)</strong>'],
    ['Demostración','3–4 min','El asesor'],
    ['Pre-cierre','1 min','Equilibrado'],
    ['Objeciones y cierre','3–4 min','El prospecto primero']
  ])}
  ${note('alert','Termómetro','<p>Si hablaste más del 50% del tiempo total, no fue consultiva.</p>')}
  ${acc('Señales de que debes frenar y volver atrás', `<ul>
    <li>El prospecto responde con monosílabos: volver a investigación</li>
    <li>Pregunta el precio tres veces: no instalaste valor, vuelve a CVBR</li>
    <li>Dice “mándame la información por WhatsApp” antes del minuto tres: la apertura no conectó</li>
    <li>Dice “sí, sí” a todo: no está escuchando, haz una pregunta abierta para reactivar</li>
  </ul>`)}`,
 check:[
  quiz('¿Qué frase resume por qué el pre-cierre es obligatorio?',
   [{t:'“El cliente siempre necesita un empujón.”'},
    {t:'“Si no hay intento de cierre, solo fue una charla muy amena.”',ok:1},
    {t:'“Hay que cerrar en la primera llamada o se pierde.”'}],
   {ok:'Exacto. Y la aclaración importa: pre-cierre no es presionar, es intentar cerrar en el 100% de las conversaciones.',
    no:'La frase del modelo es: una conversación de venta con intento de cierre es una conversación de venta; si no hay intento de cierre, solo fue una charla muy amena.'}),
  quiz('En el CVBR, ¿para qué sirve la R?',
   [{t:'Para resumir los beneficios antes de cerrar.'},
    {t:'Para devolver el turno de habla y comprobar si el argumento acertó.',ok:1},
    {t:'Para repetir la característica con otras palabras.'}],
   {ok:'Correcto. Si responde con un “sí” seco, no acertaste. Si amplía o cuenta algo, sí, y puedes avanzar.',
    no:'La R es una pregunta que busca la afirmación de la persona. Sin ella el CVBR es un monólogo con estructura.'})
 ],
 cierre:cierre([
  'Los 7 pasos: pre-chequeo, apertura, investigación, demostración, pre-cierre, objeciones y cierre.',
  'El pre-chequeo incluye confirmar los seguimientos anteriores en el CRM: es donde se pierden ventas en silencio.',
  'La apertura pide permiso al tiempo y conecta con algo humano antes de indagar.',
  'El resumen-espejo es la transición clave: sin un “exacto”, no avances a demostración.',
  'CVBR completo, con la R, y un solo argumento elegido según lo que la persona dijo.',
  'Intento de cierre en el 100% de las conversaciones. Los tres desenlaces son válidos; no intentar, no.',
  'Durante la investigación el prospecto debe hablar el 70% del tiempo.'
 ])
},
{
 id:'m4', n:'Módulo 4', t:'Venta en 5 minutos',
 d:'Captar atención, detectar una necesidad y generar un siguiente paso, sin tiempo.',
 intro:`<p class="lead">El formato largo es superior cuando existe. El problema es que la mayoría de las oportunidades no dura quince minutos: duran lo que dura el interés de alguien que iba pasando. En cinco minutos es imposible explicar CEIPA, y no hace falta.</p>
  ${note('key','El objetivo real','<p>En cinco minutos no se vende un programa: <strong>se gana el derecho a la siguiente conversación</strong>. El éxito no es una matrícula, es un dato de contacto con contexto y una cita acordada.</p>')}
  ${note('error','El error que arruina el formato','<p>Intentar meter la conversación de quince minutos en cinco. El asesor habla rápido, no pregunta, dispara datos y la persona se va con la sensación de haber sido atropellada. <strong>Menos tiempo no significa hablar más rápido: significa decir menos cosas.</strong></p>')}`,
 ficha:ficha([
  ['Objetivo','Captar atención, identificar una necesidad, comunicar solo lo relevante y generar un siguiente paso, en cinco minutos o menos.'],
  ['Resultados','Abres con un gancho que no es informativo · Detectas una necesidad con máximo tres preguntas · Entregas un solo argumento en CVBR comprimido · Cierras con siguiente paso y captura de datos · Sostienes el formato bajo presión y ruido.'],
  ['Duración','4 horas (1 de estudio + 3 de práctica cronometrada)'],
  ['Se evalúa con','Simulación de 5 minutos con escenario asignado.'],
  ['Prerrequisito','Módulos 1, 2 y 3.'],
  ['Cuándo aplica','Ferias y jornadas de orientación · mostrador y recepción · llamadas en frío · encuentros casuales · colegios · eventos empresariales · cualquiera que te pregunte por CEIPA en un pasillo.']
 ]),
 cuerpo:
  `${note('key','La regla 1-3-1: lo único que hay que memorizar','<p><strong>1</strong> gancho que detenga a la persona · <strong>3</strong> preguntas, ni una más · <strong>1</strong> argumento, el único que le sirve · más <strong>1 siguiente paso</strong> con fecha y datos.</p><p style="margin-top:.5rem">Cualquier cosa que no entre en 1-3-1 se guarda para la siguiente conversación. Guardar información no es perder una oportunidad: es crearla.</p>')}
   <h3>Los cinco minutos, minuto a minuto</h3>
   ${tbl(['Minuto','Qué pasa','Quién habla','Objetivo'],[
     ['0:00 – 0:30','Gancho y permiso','Tú','Que no se vaya'],
     ['0:30 – 2:00','Las 3 preguntas','<strong>Él (80%)</strong>','Encontrar la necesidad'],
     ['2:00 – 3:00','Resumen y argumento único','Tú','Que sienta que le hablas a él'],
     ['3:00 – 4:00','Reflexión y pre-cierre','Ambos','Medir temperatura'],
     ['4:00 – 5:00','Siguiente paso y captura de datos','Ambos','Asegurar continuidad']
   ])}
   ${note('alert','Termómetro','<p>Si al minuto 2 todavía estás hablando tú, el formato ya falló. Reinicia con una pregunta.</p>')}
   <h3>Los ganchos de apertura</h3>
   <p>Un gancho no informa: interrumpe el piloto automático. La persona espera un folleto; dale una pregunta.</p>
   ${tabs([
    {t:'Feria', c:`<ul><li>“¿Te puedo hacer una sola pregunta y si no te sirve, sigues tu camino?”</li><li>“¿Estás mirando para ti o para alguien de la familia?”</li><li>“¿Ya sabes qué quieres estudiar o estás en la etapa de explorar?”</li></ul>
      <p><strong>Ajustes del escenario:</strong> el gancho debe funcionar de pie y en movimiento; reduce a dos preguntas si la persona muestra prisa; captura datos siempre, aunque la conversación haya sido tibia; y anota el contexto de inmediato, porque a la cuarta persona ya no recuerdas quién era quién.</p>
      <p><strong>Manejo del grupo:</strong> si llegan tres a la vez, no intentes atender a las tres. Haz una pregunta al grupo y trabaja con quien responda. A los otros: “ya los atiendo, denme un minuto”.</p>`},
    {t:'Mostrador', c:`<ul><li>“¿Vienes por información o ya tienes algo decidido?”</li><li>“¿Te cuento en un minuto qué nos hace distintos y desde ahí ves si te sirve?”</li></ul>
      <p><strong>Ajustes:</strong> tienes una ventaja enorme, puedes mostrar —plan de estudios, ficha del programa, campus—. Aprovecha para el siguiente paso de mayor valor: iniciar la inscripción ahí mismo. Si hay fila, sé explícito: “te doy cinco minutos ahora y agendamos una llamada más larga, ¿te parece?”</p>`},
    {t:'Llamada en frío', c:`<ul><li>“[Nombre], soy [tu nombre] de CEIPA. Te robo un minuto, literal un minuto: ¿estás buscando estudiar este año o ya lo descartaste?”</li></ul>
      <p><strong>Ajustes:</strong> pide el minuto explícitamente y cúmplelo. La primera pregunta debe ser de descarte. Si dice que no está interesado: “entiendo, ¿conoces a alguien a quien sí le sirva?”, que convierte un no en un referido. No insistas más de una vez en la misma llamada.</p>`},
    {t:'WhatsApp', c:`<ul><li>“Hola [nombre] 👋 Una sola pregunta para no mandarte información que no te sirva: ¿lo tuyo es más por horarios o por tiempo de carrera?”</li></ul>
      <p>Las reglas completas del canal y la secuencia de mensajes están en <strong>Ejemplos y situaciones reales</strong>.</p>`},
    {t:'Colegio', c:`<ul><li>“¿A cuántos de ustedes les da susto elegir mal la carrera?” y luego pasas a la conversación individual.</li></ul>
      <p><strong>Ajustes:</strong> el gancho es colectivo, la conversación es individual. La segunda pregunta se transforma en “¿ya sabes qué quieres estudiar?”. Si no sabe, tu argumento único es la orientación vocacional de BienSer, no un programa. <strong>Nunca le vendas un programa a quien todavía no eligió carrera.</strong></p>`}
   ])}
   ${tbl(['Gancho que no funciona','Por qué falla'],[
     ['“¿Le doy información de la universidad?”','Invita al “no, gracias”'],
     ['“Somos CEIPA, una universidad acreditada…”','Empieza por ti, no por él'],
     ['“¿Quiere un volante?”','Te convierte en papel'],
     ['“Tenemos 13 pregrados y 12 especializaciones”','Nadie procesa eso de pie']
   ])}
   <h3>Las tres preguntas</h3>
   ${tbl(['#','Tipo','Qué buscas','Opciones'],[
     ['1','Situación','Dónde está hoy','“¿Estás estudiando, trabajando, las dos?” · “¿Terminaste bachillerato este año?” · “¿Ya eres profesional?”'],
     ['2','Objetivo o disparador','Hacia dónde va y por qué ahora','“¿Qué quieres lograr con esto?” · “¿Por qué justo ahora?” · “¿Qué te haría decir ‘sí, esto es’?”'],
     ['3','Obstáculo','Qué lo frena','“¿Qué te ha detenido hasta ahora?” · “¿Qué es lo que más te preocupa?” · “¿Qué tendría que pasar para que empieces?”']
   ])}
   ${note('key','La tercera pregunta decide tu argumento','<p>No la sacrifiques por tiempo. Y para escuchar rápido sin escuchar mal hay un atajo: <strong>repite la palabra que la persona usó con más carga emocional y quédate callado.</strong></p>')}
   ${dlg([{w:'P',s:'“Es que ya intenté antes y no pude.”'},{w:'A',s:'“No pudiste…”',n:'Silencio de dos segundos.'},{w:'P',s:'“Sí, es que con el trabajo se me juntó todo y me tocó retirarme.”',n:'Dos segundos de silencio te dieron el diagnóstico completo.'}])}
   <h3>El argumento único</h3>
   <p>Primero el mini-resumen de diez segundos: “entonces lo tuyo es [objetivo] y lo que te frena es [obstáculo]. ¿Sí?”. Esperar el “sí” es lo que hace que el argumento aterrice. Después, CVBR comprimido: en formato largo son cuatro frases; aquí son <strong>dos frases y una pregunta</strong>.</p>
   ${acc('Biblioteca de argumentos únicos — elige uno, solo uno', tbl(['Si su obstáculo o motivador es…','Argumento único'],[
     ['Tiempo o trabaja','“Acá estudias un solo núcleo a la vez, dos meses cada uno, y en virtual el encuentro semanal queda grabado. Para ti eso significa que un turno cambiado no te saca del período. ¿Eso es lo que te ha fallado antes?”'],
     ['Quiere terminar rápido','“La carrera es de cuatro años, no de cinco, porque son cinco núcleos al año en vez de semestres. Es un año antes ejerciendo. ¿Ese año hace diferencia para ti?”'],
     ['Miedo a no ser capaz','“Acá no estudias solo: hay acompañamiento docente permanente y BienSer, que acompaña a quien se está quedando atrás antes de que piense en retirarse. ¿Eso te da más tranquilidad?”'],
     ['Duda de la validez','“Somos Fundación Universitaria CEIPA, vigilada por MINEDUCACIÓN, y además acreditados en Alta Calidad, que es un reconocimiento voluntario que no todas tienen. ¿Eso era lo que querías confirmar?”'],
     ['Empleabilidad','“9 de cada 10 egresados nuestros consiguen empleo: 89,8% frente a 77,4% nacional. ¿Eso es lo que más te preocupaba?”'],
     ['Quiere práctica, no teoría','“Desde los primeros núcleos trabajas sobre problemas reales de empresas reales, y terminas con un proyecto de consultoría. Sales con experiencia, no solo con notas. ¿Eso es lo que buscabas?”'],
     ['Estudió antes','“Si cursaste hace menos de diez años, te podemos reconocer hasta el 50% del plan. Eso te cambia tiempo y costo. ¿Cuántos semestres alcanzaste?”'],
     ['Posgrado o ascenso','“Son once meses académicos y sales con dos títulos con una sola matrícula: Especialista CEIPA y un Máster Ejecutivo de EIG España, título propio español no convalidable acá, para que lo sepas de entrada. ¿Buscas algo con peso internacional?”'],
     ['Internacional','“Hay rutas internacionales que no exigen viajar, y menos del 2% de los estudiantes del país vive una experiencia así. ¿Te interesa ese componente?”'],
     ['Emprendedor','“El proyecto central del modelo se hace sobre una empresa real, puede ser la tuya. ¿Tienes negocio propio?”'],
     ['Derecho','“Eres abogado en cuatro años, con consultorio jurídico real y acceso a SilvIA, una IA jurídica con la legislación colombiana. ¿Estabas mirando Derecho?”']
   ]))}
   ${note('alert','La regla que más cuesta cumplir','<p>Cuando el argumento acierta, la persona se entusiasma… y el asesor añade un segundo argumento. <strong>No lo hagas.</strong> Ahí se pasa al pre-cierre.</p>')}
   <h3>El siguiente paso</h3>
   <p>Pre-cierre comprimido: “¿te gustó lo que te conté?” y, si dice que sí, “listo, ¿empezamos el proceso o prefieres que te llame y lo miramos con calma?”. Dar <strong>dos opciones, ambas de avance</strong>, evita el “no” y evita la presión.</p>
   ${tbl(['#','Siguiente paso','Cuándo'],[
     ['1','Iniciar inscripción ahí mismo','Prospecto caliente, con documento a mano'],
     ['2','Agendar llamada con fecha y hora exactas','El más frecuente y el más realista'],
     ['3','Agendar visita o sesión de dudas','Bachiller con acudiente'],
     ['4','Capturar datos con contexto','Mínimo aceptable']
   ])}
   ${note('do','La captura de datos que sí sirve','<p>No es nombre y teléfono. Es nombre, teléfono, <strong>programa de interés, obstáculo en sus palabras y mejor horario para llamar</strong>.</p><p style="margin-top:.5rem">“Te anoto: Camila, interesada en Administración de Empresas virtual, trabaja turnos rotativos, prefiere que la llame después de las 6. ¿Está bien así?” Repetir los datos en voz alta confirma que están correctos y demuestra que escuchaste.</p>')}
   <p><strong>Frase de cierre del formato:</strong> “[Nombre], te llamo el [día] a las [hora]. No te voy a llamar a preguntarte si decidiste: te llamo con [lo que le falta saber]. ¿Te sirve esa hora?”</p>
   ${acc('Cuando solo tienes 30 segundos', `<p>Se comprime a una frase, una pregunta y un dato:</p>
     <p><em>“Somos CEIPA, escuela de negocios acreditada en alta calidad, donde la carrera dura cuatro años y trabajas con empresas reales desde el primer núcleo. ¿Qué estás buscando estudiar?”</em> — escuchas diez segundos — <em>“Perfecto, eso lo tenemos. ¿Te llamo mañana a las [hora] y te cuento bien?”</em></p>
     <p>Objetivo único: el dato y la cita.</p>`)}`,
 check:[
  quiz('En la regla 1-3-1, ¿qué pasa con la información que no cabe?',
   [{t:'Se dice más rápido para que quepa.'},{t:'Se guarda para la siguiente conversación.',ok:1},{t:'Se entrega en un folleto impreso.'}],
   {ok:'Correcto. Guardar información no es perder una oportunidad: es crearla, porque te da motivo para el siguiente contacto.',
    no:'Menos tiempo no significa hablar más rápido: significa decir menos cosas. Lo que no cabe se guarda y se convierte en el valor nuevo del próximo contacto.'}),
  quiz('Tu argumento único acierta y el prospecto se entusiasma. ¿Qué haces?',
   [{t:'Agrego un segundo argumento para reforzar.'},{t:'Paso al pre-cierre.',ok:1},{t:'Le doy el precio de una vez.'}],
   {ok:'Exacto. El entusiasmo es la señal de cierre, no la invitación a seguir hablando.',
    no:'Cuando el argumento acierta, se cierra. Añadir un segundo argumento diluye, y dar el precio sin pre-cierre abre una conversación de costo antes de tiempo.'})
 ],
 cierre:cierre([
  'En cinco minutos no se vende un programa: se gana el derecho a la siguiente conversación.',
  'Regla 1-3-1: un gancho, tres preguntas, un argumento, un siguiente paso.',
  'El gancho es una pregunta, no una presentación institucional.',
  'La tercera pregunta —el obstáculo— decide tu argumento y no se sacrifica por tiempo.',
  'Repite la palabra emocional del prospecto y calla: dos segundos de silencio valen más que tres preguntas.',
  'La captura de datos incluye contexto: programa, obstáculo en sus palabras y mejor horario.',
  'En colegios, a quien no ha elegido carrera se le ofrece orientación vocacional, no un programa.'
 ])
},
{
 id:'m5', n:'Módulo 5', t:'Manejo de objeciones',
 d:'Recibir la resistencia sin defenderse, entenderla y reconducir al cierre.',
 intro:`<p class="lead">Una objeción no es un rechazo: es una señal de interés con una duda encima. Quien no tiene ningún interés no objeta, cuelga y se va. Quien objeta sigue en la conversación.</p>
  ${note('key','El mejor escenario después del sí','<p>Después del intento de cierre hay tres desenlaces: el postulante se matricula, te detiene y expresa una objeción, o no se matricula en ese momento. El segundo es el único donde todavía tienes toda la información sobre la mesa.</p>')}`,
 ficha:ficha([
  ['Objetivo','Recibir una objeción sin defenderte, entender qué hay detrás, resolverla con información real y reconducir hacia el cierre.'],
  ['Resultados','Clasificas cualquier objeción en producto, tiempo o dinero · Aplicas los 6 pasos del modelo · Distingues objeción real de excusa · Respondes con datos verificables, sin inventar ni prometer · Reconduces a un intento de cierre o a un siguiente paso.'],
  ['Duración','5 horas (1,5 de estudio + 3,5 de ronda de objeciones)'],
  ['Se evalúa con','Ronda de objeciones en vivo: 8 objeciones consecutivas, máximo 20 segundos por respuesta.'],
  ['Prerrequisito','Módulos 1, 2, 3 y 4.']
 ]),
 cuerpo:
  `<h3>El cambio de postura</h3>
   ${tbl(['Postura defensiva','Postura consultiva'],[
     ['“Pero es que…”','“Cuéntame más de eso”'],
     ['Rebatir inmediatamente','Entender primero'],
     ['Ver la objeción como ataque','Verla como información'],
     ['Hablar más rápido','Bajar el ritmo'],
     ['Repetir el argumento más fuerte','Buscar el argumento correcto']
   ])}
   ${note('error','Regla que no se rompe','<p>La objeción se escucha completa. El modelo lo dice literalmente: <strong>escucha la objeción completa, nunca interrumpas</strong>. Interrumpir una objeción es garantizar que reaparezca después, más grande.</p>')}
   <h3>Las tres únicas objeciones</h3>
   <p>Existen solo tres posibles objeciones luego del intento de cierre: <strong>producto, tiempo y dinero</strong>. Todo lo demás es una de estas tres, disfrazada. Tu primera tarea al recibir una objeción es clasificarla, porque el tratamiento es distinto para cada una.</p>
   ${tbl(['Tipo','Qué está diciendo en el fondo','Frases típicas'],[
     ['Producto','“No estoy seguro de que esto sea lo correcto para mí”','“Voy a mirar otras opciones” · “No conozco esa universidad” · “¿El título sí sirve?” · “¿Virtual no será muy flojo?”'],
     ['Tiempo','“No estoy seguro de poder” o “no es el momento”','“No tengo tiempo” · “Mejor el otro año” · “Déjame pensarlo” · “Ahorita estoy muy ocupado”'],
     ['Dinero','“No veo que valga lo que cuesta” o “no me alcanza”','“Está muy caro” · “En otra universidad es más barato” · “Tengo que ver cómo lo pago”']
   ])}
   ${note('do','El diagnóstico exprés','<p>Cuando no sepas de cuál se trata: <strong>“Si el dinero no fuera un tema, ¿empezarías mañana?”</strong></p><p style="margin-top:.4rem">Si responde que sí, la objeción es dinero. Si responde que no o duda, es producto o tiempo, y el dinero era la excusa cómoda.</p>')}
   <h3>El método de 6 pasos</h3>
   ${acc('1 · Escucha la objeción completa — nunca interrumpas','<p>Déjala terminar, aunque sepas a los tres segundos qué va a decir. El silencio que sigue a una objeción es el que hace que la persona la complete, y es en la última frase donde suele estar la objeción real.</p>')}
   ${acc('2 · Reconoce la objeción y compréndela','<p>No la valides como verdad; valida que es legítimo sentirla: “tiene todo el sentido que lo pienses así”, “es normal que eso te preocupe, es una decisión grande”, “yo también lo preguntaría”.</p><p>Lo que nunca: “pero es que usted no ha entendido…”</p>')}
   ${acc('3 · Pide permiso para seguir','<p>“¿Te puedo hacer una pregunta sobre eso?” · “¿Me dejas contarte algo que de pronto cambia cómo lo estás viendo?”</p><p>Pedir permiso devuelve el control a la persona, y alguien que siente que tiene el control baja la defensa.</p>')}
   ${acc('4 · Pregunta: “¿te gustó lo que hablamos de la universidad?”','<p>Esta pregunta tiene una función precisa: avanzar hacia la verdadera objeción. Si dice que sí, el problema no es el producto, es tiempo o dinero: “entonces lo que nos falta resolver es X, ¿cierto?”. Si dice que no o titubea, el problema sí es el producto y estabas argumentando lo equivocado: vuelve a investigación.</p>')}
   ${acc('5 · Re-descubrimiento: vuelve a usar el CVBR','<p>Haz hincapié en características, ventajas y beneficios. Con una condición: no repitas el mismo argumento más fuerte, usa <strong>el que guardaste</strong> en el diagnóstico. “Volviendo a lo que me contaste de [necesidad que no habías usado]…”</p>')}
   ${acc('6 · Pregunta acerca del precio final','<p>Cierra la conversación con claridad sobre la inversión: qué se paga una sola vez, qué es anual, qué es por núcleo y qué incluye.</p><p><strong>Antes de mencionar cualquier cifra, valídala contra la lista de precios vigente.</strong> Un precio equivocado destruye la confianza construida en todos los pasos anteriores.</p>')}
   <h3>Objeción real o excusa</h3>
   <p>Una excusa es una forma educada de terminar la conversación. Una objeción real es una puerta.</p>
   ${tbl(['Señal de excusa','Señal de objeción real'],[
     ['Aparece muy temprano, antes de cualquier argumento','Aparece después del pre-cierre'],
     ['Es vaga: “no es el momento”','Es específica: “no puedo los miércoles”'],
     ['No cambia por más que respondas','Cambia de forma cuando das información'],
     ['La persona no hace preguntas','La persona pregunta detalles'],
     ['Tono de despedida','Tono de duda']
   ])}
   ${note('do','Cómo convertir una excusa en objeción real','<p>“Te entiendo perfectamente. ¿Te puedo hacer una sola pregunta antes de que cortemos? ¿Qué tendría que pasar para que esto sí fuera una opción para ti?”</p><p style="margin-top:.4rem">Si la respuesta es “nada, de verdad no quiero”, era un no genuino, y lo aceptas.</p>')}
   <h3>Reconducción: volver al cierre</h3>
   <p>Resolver la objeción no es el final. Hay que volver a intentar cerrar, porque si no, el proceso queda abierto y se enfría.</p>
   <ol><li><strong>Confirma que quedó resuelto:</strong> “¿eso responde lo que te preocupaba?”</li>
   <li><strong>Cierra el tema explícitamente:</strong> “entonces lo del horario ya está claro”.</li>
   <li><strong>Vuelve al pre-cierre:</strong> “¿había algo más que te frenara, o avanzamos con el proceso?”</li></ol>
   <p>Y cuando hay varias objeciones, la pregunta que ordena: <strong>“aparte de eso, ¿hay algo más que te detenga?”</strong>. Si dice que no, resuelves eso y cierras. Si dice que sí, aparece la objeción real, que probablemente era la de fondo todo el tiempo.</p>
   ${note('error','Los tres errores de reconducción','<ol><li>Resolver y quedarse callado: el prospecto se despide y se enfría.</li><li>Resolver y seguir argumentando: reabres la duda que acabas de cerrar.</li><li>Resolver tres objeciones seguidas sin intentar cerrar entre una y otra: conversación interminable.</li></ol>')}
   <h3>Cuándo aceptar el no</h3>
   <p>No toda objeción se vence, y no toda venta debe hacerse. Acepta el no cuando la modalidad no es compatible con su vida real —matricularlo es venderle una deserción—, cuando no tiene capacidad de pago y no hay alternativa viable hoy, cuando el programa no responde a lo que busca y no hay otro que lo haga, o cuando ya dijo explícitamente que no quiere, sin ambigüedad.</p>
   ${note('do','Cómo cerrar un no correctamente','<p>“Entiendo perfectamente, y me parece una decisión sensata. Te dejo mi contacto por si más adelante cambian las cosas o si conoces a alguien a quien le sirva. Si quieres, te escribo cuando abran inscripciones del próximo período, sin insistir. ¿Te parece bien?”</p><p style="margin-top:.4rem">Qué se gana: un prospecto futuro, un posible referido y una marca que no presiona. Qué se pierde al insistir: los tres.</p>')}
   <p>El <strong>banco completo de respuestas por tipo de objeción</strong>, incluidas las específicas del portafolio CEIPA, está en la sección <strong>Ejemplos y situaciones reales</strong>. Los casos para decidir están en <strong>Casos prácticos</strong>.</p>`,
 check:[
  quiz('¿Cuál es la regla absoluta del paso 1 del método?',
   [{t:'Responder rápido para no perder el control.'},{t:'Escuchar la objeción completa y nunca interrumpir.',ok:1},{t:'Reconocer la objeción antes de que termine de hablar.'}],
   {ok:'Correcto. Y hay una razón práctica: en la última frase suele estar la objeción real.',
    no:'El paso 1 es escuchar completo sin interrumpir. Interrumpir garantiza que la objeción reaparezca después, más grande.'}),
  quiz('El prospecto dice “déjame pensarlo” en el minuto 4, con tono de despedida. ¿Qué es?',
   [{t:'Una objeción de tiempo que debo resolver con argumentos de flexibilidad.'},
    {t:'Probablemente una excusa: llegó antes del pre-cierre y es vaga.',ok:1},
    {t:'Un no definitivo que debo aceptar.'}],
   {ok:'Exacto. La respuesta es una sola pregunta: “¿qué es lo que te falta resolver para decidir?”. Si responde algo concreto, era objeción real.',
    no:'Aparece temprano, es vaga y viene con tono de despedida: son las tres señales de excusa. Antes de argumentar, hay que convertirla en objeción real con una pregunta.'})
 ],
 cierre:cierre([
  'Una objeción es una señal de interés con una duda encima; quien no tiene interés no objeta.',
  'Solo existen tres objeciones tras el intento de cierre: producto, tiempo y dinero.',
  'Método de 6 pasos: escuchar completo, reconocer, pedir permiso, preguntar si le gustó la universidad, re-descubrir con CVBR y cerrar el tema de inversión.',
  'La pregunta hipotética —“si el dinero no fuera un tema, ¿empezarías mañana?”— diagnostica la objeción real.',
  'Nunca se habla mal de otra institución: se dan criterios de comparación.',
  'Si la objeción de dinero aparece con fuerza, el problema está antes: no se instaló suficiente valor.',
  'Toda objeción resuelta se reconduce a un nuevo intento de cierre.',
  'Hay casos donde aceptar el no es la decisión profesional correcta.'
 ])
},
{
 id:'m6', n:'Módulo 6', t:'Seguimiento comercial',
 d:'Convertir el seguimiento en continuidad de valor y no en insistencia.',
 intro:`<p class="lead">Los prospectos casi nunca se pierden por precio. Se pierden por silencio, por repetición y por ausencia de siguiente paso. Este módulo trata de que ninguno se pierda por falta de contacto ni se queme por exceso de él.</p>`,
 ficha:ficha([
  ['Objetivo','Convertir el seguimiento en una continuación de valor y no en una insistencia.'],
  ['Resultados','Clasificas prospectos por temperatura y defines cadencia · Ejecutas seguimientos que aportan algo nuevo · Cierras cada interacción con un siguiente paso acordado · Registras en CRM información útil · Reactivas prospectos fríos sin sonar desesperado.'],
  ['Duración','4 horas (1,5 de estudio + 2,5 de taller)'],
  ['Se evalúa con','Auditoría de 5 registros propios de CRM y ejecución de la semana real.'],
  ['Prerrequisito','Módulos 1, 2 y 3.']
 ]),
 cuerpo:
  `<h3>Por qué se pierden los prospectos</h3>
   <ol><li><strong>Silencio.</strong> Nadie volvió a llamar, o llamaron cuando la persona ya se había matriculado en otro lado.</li>
   <li><strong>Repetición.</strong> Llamaron cinco veces a decir exactamente lo mismo: “¿ya tomaste una decisión?”.</li>
   <li><strong>Ausencia de siguiente paso.</strong> La conversación terminó bien, pero sin fecha. Y sin fecha, el entusiasmo se evapora.</li></ol>
   <p>El modelo deja huella de esto en el paso 1: dentro del pre-chequeo está <strong>confirmar los seguimientos anteriores</strong>. El seguimiento no es una etapa final del proceso: es una condición para empezar bien la siguiente conversación.</p>
   ${note('key','El cambio de mentalidad','<p>El seguimiento no existe para preguntar por una decisión. Existe para <strong>hacer avanzar la decisión</strong>. Si tu llamada no le da al prospecto nada que no tenía, no es seguimiento: es presión.</p>')}
   <h3>La regla del siguiente paso</h3>
   <p>Ninguna conversación termina sin un siguiente paso acordado, con fecha, hora y propósito.</p>
   ${tbl(['Cierre débil','Cierre con siguiente paso'],[
     ['“Cualquier cosa me escribes”','“Te llamo el jueves a las 6, cuando ya hayas hablado con tu esposa. ¿Te sirve esa hora?”'],
     ['“Piénsalo y me cuentas”','“Te mando el plan de estudios hoy. El viernes te llamo para resolver lo que te surja al leerlo.”'],
     ['“Quedo atento”','“Voy a confirmar con el área académica lo de tu homologación y te respondo mañana antes del mediodía.”']
   ])}
   <p>Los tres ingredientes: <strong>qué</strong> va a pasar, <strong>cuándo</strong> exactamente y <strong>para qué</strong> sirve. Y un cuarto que lo vuelve compromiso mutuo: <strong>pide confirmación</strong>. Un prospecto que dice “sí, el jueves a las 6” ya se comprometió con algo pequeño, y eso hace mucho más probable que conteste.</p>
   <h3>Temperatura y cadencia</h3>
   ${tbl(['Temperatura','Señales','Cadencia','Objetivo del contacto'],[
     ['Caliente','Pidió requisitos, preguntó por fechas de inicio, mencionó documentos, dijo “casi seguro”','Contacto en 24 horas y luego cada 24 a 48 h hasta cerrar','Resolver lo operativo y matricular'],
     ['Tibio','Interés claro pero con un obstáculo definido: dinero, un tercero, una fecha','Cada 3 a 5 días','Remover el obstáculo específico'],
     ['Frío','Pidió información y no respondió, o dijo “más adelante” con fecha vaga','Cada 2 a 3 semanas, máximo 3 intentos','Reactivar con algo nuevo'],
     ['Fuera de momento','Dijo explícitamente un plazo, como “el otro año”','En la fecha que él indicó, más un recordatorio antes de inscripciones','Estar presente cuando llegue el momento']
   ])}
   ${note('alert','Regla del tres','<p>Si un prospecto frío no responde a tres contactos con valor distinto cada uno, no lo persigas más. Pásalo a base de reactivación por campaña y libera tu energía para los que sí están en momento. Insistir más allá de eso quema la marca.</p>')}
   <h3>El principio del valor nuevo</h3>
   <p>Cada contacto debe traer algo que el prospecto no tenía. Esta es la diferencia entre seguimiento y acoso.</p>
   ${tbl(['Contacto','Valor nuevo que puedes traer'],[
     ['1.º seguimiento','El plan de estudios del programa específico que le interesa'],
     ['2.º','La respuesta concreta a la duda que quedó abierta: homologación, horario, modalidad'],
     ['3.º','Un dato de resultado: empleabilidad, perfil ocupacional del egresado, salidas laborales'],
     ['4.º','Algo del ecosistema que conecte con su miedo: BienSer, internacionalización, SolversLab'],
     ['5.º','Fecha límite real: inicio de núcleo, cierre de inscripciones']
   ])}
   ${note('key','La urgencia va al final, no al principio','<p>Una fecha límite comunicada en el primer contacto es presión. Comunicada después de cuatro aportes de valor, es información útil.</p>')}
   ${acc('Secuencia real de cinco contactos, sin una sola repetición', `
     <p><strong>Día 0 (llamada).</strong> Diagnóstico. Le preocupa el tiempo: trabaja turnos rotativos.</p>
     <p><strong>Día 0 (WhatsApp, mismo día).</strong> “Camila, como te dije: acá va el plan de estudios de Administración de Empresas. Fíjate en la parte del proyecto aplicado, que es lo que te mencioné de trabajar con empresas reales. El jueves te llamo a las 6 como quedamos.”</p>
     <p><strong>Día 3 (llamada).</strong> “Camila, te tengo la respuesta de lo que quedó pendiente: en virtual el encuentro sincrónico es uno por semana y queda grabado, o sea que un turno cambiado no te descuadra. ¿Eso resuelve lo que te preocupaba?”</p>
     <p><strong>Día 7 (WhatsApp).</strong> Dato de proyección: perfil del egresado y cargos.</p>
     <p><strong>Día 12 (llamada).</strong> “El próximo núcleo arranca el [fecha]. Si quieres entrar en ese, la inscripción habría que hacerla esta semana. ¿Lo hacemos hoy o prefieres que lo miremos el viernes?”</p>`)}
   <h3>Canales</h3>
   ${tbl(['Canal','Sirve para','No sirve para','Regla de oro'],[
     ['Llamada','Diagnosticar, argumentar, cerrar, resolver objeciones','Dar información extensa que no se recuerda','Es el canal donde se vende'],
     ['WhatsApp','Confirmar, enviar material, recordar, agendar','Argumentar, manejar objeciones, cerrar en frío','Mensajes cortos, nunca un muro de texto'],
     ['Correo','Documentación formal, plan de estudios, requisitos','Generar urgencia','Asunto específico, no “Información CEIPA”'],
     ['Presencial','Generar confianza rápido, cerrar','—','Aprovéchalo para el cierre, no para informar']
   ])}
   <h3>CRM: registrar para vender, no para reportar</h3>
   ${tbl(['Registro inútil','Registro útil'],[
     ['“Interesado. Volver a llamar.”','“Camila, 34, auxiliar contable, turnos rotativos. Quiere Administración de Empresas virtual. Cursó 3 semestres en [institución] hace 6 años, revisar homologación. Decide con esposo. Miedo: ya se retiró una vez. Próximo: jueves 6 p.m.”']
   ])}
   <p><strong>Qué registrar siempre:</strong> objetivo declarado y motivador real; obstáculo y miedo; decisor; programa y modalidad de interés; estudios previos y potencial homologación; objeciones expresadas y cómo se abordaron; siguiente paso con fecha; y <strong>una frase textual del prospecto</strong>, que es lo que te permite retomar con precisión la próxima vez.</p>
   <h3>Reactivación</h3>
   ${dlg([{w:'A',s:'“Hola, ¿ya pensaste lo de la universidad?”',n:'Así no: pide.'},{w:'A',s:'“Hola Andrés. Me acordé de ti porque salió la convocatoria de experiencias internacionales y tú me habías dicho que lo internacional te interesaba. Te la comparto por si te sirve, sin compromiso.”',n:'Así sí: da, y demuestra que lo escuchaste.'}])}`,
 check:[
  quiz('¿Qué tres ingredientes debe tener un siguiente paso, y cuál es el cuarto que lo vuelve compromiso mutuo?',
   [{t:'Qué, cuándo y para qué; más pedir confirmación al prospecto.',ok:1},
    {t:'Canal, duración y tema; más registrarlo en el CRM.'},
    {t:'Fecha, hora y programa; más enviar un recordatorio.'}],
   {ok:'Correcto. La confirmación es lo que convierte tu propuesta en un compromiso de los dos.',
    no:'Son qué va a pasar, cuándo exactamente y para qué sirve. Y el cuarto es pedir confirmación: “¿te sirve esa hora?”.'}),
  quiz('¿Por qué la fecha límite se comunica al final de la secuencia de seguimiento?',
   [{t:'Porque las fechas de inicio solo se confirman al final del período.'},
    {t:'Porque al principio es presión y después de varios aportes de valor es información útil.',ok:1},
    {t:'Porque así el prospecto tiene más tiempo para ahorrar.'}],
   {ok:'Exacto. La urgencia solo funciona sobre una base de valor ya instalada.',
    no:'Es una cuestión de secuencia: la misma frase es presión en el primer contacto e información útil en el quinto.'})
 ],
 cierre:cierre([
  'Los prospectos se pierden por silencio, repetición y ausencia de siguiente paso, no por precio.',
  'Ninguna conversación termina sin siguiente paso con fecha, hora, propósito y confirmación.',
  'Cuatro temperaturas con cadencias distintas: caliente, tibio, frío y fuera de momento.',
  'Regla del tres: tres contactos con valor distinto sin respuesta y pasa a base de reactivación.',
  'Cada contacto trae valor nuevo; la urgencia se reserva para el final.',
  'La llamada es el canal donde se vende; WhatsApp confirma y agenda.',
  'El CRM se registra para vender: incluye el miedo, el decisor y una frase textual del prospecto.',
  'Para reactivar, se da antes de pedir; y un “no” bien cerrado deja una puerta abierta.'
 ])
}
];
/* ===== Composición de los cuatro módulos de formación ===== */
const B = {}; BLOQUES.forEach(b => B[b.id] = b);

/* --- Ampliaciones del módulo institucional --- */
const INST_FILOSOFIA = `
<h2>Filosofía institucional</h2>
<p class="lead">Como asesor, tu rol no consiste únicamente en entregar información: representas una institución de educación superior con identidad, trayectoria, propósito y un modelo pedagógico propio. Comprender la filosofía te permite hablar con autoridad, evitar imprecisiones y conectar el discurso comercial con el propósito institucional.</p>
${note('key','La pregunta que ordena todo este módulo','<p>¿Cómo representar a CEIPA de manera correcta, coherente y alineada con su identidad institucional, su marco legal y su propuesta formativa actual?</p><p style="margin-top:.4rem">En CEIPA Academy no se avanza por tiempo: se avanza por comprensión.</p>')}
${acc('Valores institucionales', `
 <p>Los valores en CEIPA no se enseñan: se viven, se aplican y se reflejan en cada interacción. Como asesor, tú eres el primer punto donde el aspirante los percibe.</p>
 <p><strong>Aprender a Emprender — Innovación.</strong> El valor fuente es la innovación, entendida como la capacidad de crear nuevas formas de entender y transformar la realidad. Conecta directamente con el ADN emprendedor de CEIPA.</p>
 <p><strong>Frente al cambio:</strong> el profesional CEIPA no se resiste al cambio, evoluciona con él.</p>
 ${note('alert','Pendiente de validación','<p>La documentación entregada desarrolla el valor fuente y remite al material institucional completo de valores. Solicitar a Comunicaciones el listado oficial y su definición para incorporarlo aquí.</p>')}`)}
${acc('El escudo institucional y sus significados', `
 <p>El escudo no es solo un símbolo gráfico: representa la identidad, el alcance y la visión institucional. Cada elemento tiene un significado que conecta con el modelo educativo.</p>
 ${tbl(['Elemento','Qué significa'],[
  ['Forma de escudo','Alude al carácter académico de la institución. Representa solidez, estructura y respaldo institucional.'],
  ['Círculo','Simboliza el mundo globalizado y la conexión de CEIPA con contextos internacionales.'],
  ['Flechas (puntos cardinales)','Representan los puntos cardinales y la proyección internacional: convenios y relaciones con instituciones de otros países.'],
  ['Estrella y luna','La estrella representa el sol y el día; la luna, la noche. Juntas simbolizan la continuidad del aprendizaje, la disponibilidad en todo momento y la posibilidad de formarse desde cualquier lugar.']
 ])}
 <p>El himno institucional está disponible en <a href="https://youtu.be/G9ll8VmVj_0" target="_blank" rel="noopener">youtu.be/G9ll8VmVj_0</a>.</p>
 ${note('tip','Uso comercial del escudo','<p>Explicar la estrella y la luna es la forma más elegante de introducir la ubicuidad del modelo: el símbolo ya dice que en CEIPA se aprende de día o de noche, desde donde se esté.</p>')}`)}
${acc('Certificaciones y reconocimientos', `
 ${tbl(['Reconocimiento','Detalle','Valor para la conversación'],[
  ['Acreditación Institucional en Alta Calidad','Resolución MEN N.° 016362 del 23 de junio de 2026, por 6 años. <strong>Solo el 36% de las IES del país la tienen.</strong>','El argumento de calidad más fuerte, y el dato del 36% lo vuelve comparativo'],
  ['Rating QS Stars','4 estrellas','Referencia internacional independiente'],
  ['ISO 9001:2015','Certificación Bureau Veritas, que avala la calidad y mejora continua de los procesos','Habla de la operación, no solo de lo académico'],
  ['Registro Calificado','Todos los programas','Es el piso legal, no un diferencial']
 ])}
 ${note('alert','Ojo con el material antiguo','<p>Brochures y fichas impresas antes de junio de 2026 citan la resolución anterior (000679 del 21 de enero de 2022, por 4 años). Si un aspirante te muestra uno, explícale que la acreditación fue renovada y que la vigente es la de 2026, por seis años.</p>')}`)}
${acc('Docentes', '<p>Los docentes en CEIPA no solo transmiten conocimiento: acompañan procesos de aprendizaje, orientan proyectos reales y facilitan la construcción de experiencia profesional. La planta docente puede consultarse en <a href="https://ceipa.edu.co/planta-docente/" target="_blank" rel="noopener">ceipa.edu.co/planta-docente</a>.</p>')}
`;

const INST_SERVICIOS = `
<h2>Servicios institucionales</h2>
<p>Complementan el modelo UBFlex y fortalecen la experiencia académica, conectando el aprendizaje con la realidad profesional, empresarial, investigativa e internacional. Cada uno cumple un rol estratégico y acompaña al estudiante a lo largo de su vida académica.</p>
${tbl(['Servicio','Qué hace','Cuándo lo usas en una conversación'],[
 ['Emprendimiento y Empresarismo','Impulsa la creación, fortalecimiento y consolidación de ideas de negocio. Más de 3.000 estudiantes acompañados en la creación de sus propias empresas y más de 3.200 empresas asesoradas.','Cuando el aspirante tiene o quiere tener negocio propio'],
 ['SolversLab','Equipos de consultores senior y junior que resuelven retos empresariales reales traídos por organizaciones. Las consultorías son certificables para la hoja de vida.','Cuando pide experiencia práctica o teme la teoría'],
 ['Laboratorio Financiero','Ecosistema financiero con información actualizada del mercado bursátil y corporativo, para observar, analizar y comprender los fenómenos del contexto económico, además de formación contable, económica y financiera.','Financiera, Contaduría, Ingeniería Financiera y de Riesgo'],
 ['Punto NAF-DIAN','Una de las cinco unidades estratégicas junto con articulación curricular, capacitación especializada, internacionalización y redes y aliados.','Contaduría Pública'],
 ['Internacionalización','Cooperación con aliados de más de 15 países: intercambios, pasantías de investigación, bilingüismo en inmersión y misiones académicas, culturales y empresariales.','Perfil internacionalista'],
 ['Investigación','Grupos, semilleros, fondo editorial y productos registrados en Scienti.','Perfil académico o quien quiere fortalecer hoja de vida'],
 ['BienSer','Bienestar universitario en el marco del artículo 117 de la Ley 30 de 1992.','Cuando el aspirante expresa miedo, no objeción'],
 ['Alumni','Servicio 360° al egresado: bienestar, lifelong learning, rutas de formación, portafolio, hoja de vida y pruebas psicotécnicas.','Cuando pregunta qué pasa después de graduarse']
])}
${note('tip','Cómo se usan estos servicios','<p>No se listan. Se elige uno, el que responde a lo que la persona acaba de decir. Un aspirante que menciona su negocio activa Emprendimiento; uno que dice “no quiero puro teórico” activa SolversLab; uno que dice “me da miedo no poder” activa BienSer.</p>')}
`;

const M_INSTITUCIONAL = {
 id:'m-inst', n:'Módulo 1', t:'Formación institucional CEIPA',
 color:'azul',
 d:'Historia, identidad, filosofía, modelo, oferta, servicios, beneficios y admisión. Todo lo que hay que dominar para asesorar con autoridad.',
 intro: B.m1.intro,
 ficha: ficha([
  ['Objetivo','Que puedas hablar de CEIPA con autoridad, precisión y naturalidad, sin leer y sin improvisar.'],
  ['Resultados','Explicas qué es CEIPA en el sistema de educación superior · Diferencias Registro Calificado de Acreditación · Explicas UBFlex sin tecnicismos · Ubicas cualquier programa en su nivel, modalidad y perfil · Traduces la filosofía y los servicios a beneficio concreto.'],
  ['Contenidos','Identidad y marco legal · Historia y liderazgo · Filosofía, valores y símbolos · Calidad y certificaciones · Modelo UBFlex · Núcleo problémico · Modalidades · Portafolio · Ecosistema de valor · Servicios institucionales · Inversión y admisión'],
  ['Duración','8 horas (4 de estudio autónomo + 4 de taller)'],
  ['Se evalúa en','El módulo de Evaluación, prueba 1.'],
  ['Prerrequisito','Ninguno. Es la puerta de entrada.']
 ]),
 cuerpo: B.m1.cuerpo + INST_FILOSOFIA + INST_SERVICIOS,
 actividad: note('do','Actividad de aprendizaje — “Mi CEIPA en 90 segundos”','<p>Graba una presentación de CEIPA de máximo 90 segundos que cumpla cinco condiciones: empieza con una pregunta, incluye exactamente tres elementos (uno institucional, uno del modelo y uno de resultado), no menciona precio, no usa las palabras “nosotros ofrecemos”, “somos los mejores” ni “excelente”, y termina proponiendo un siguiente paso concreto.</p><p style="margin-top:.45rem">Es una actividad de práctica, no una evaluación. La versión calificada de este ejercicio está en el módulo de Evaluación.</p>'),
 cierre: B.m1.cierre
};

const M_COMERCIAL = {
 id:'m-com', n:'Módulo 2', t:'Formación comercial y venta consultiva',
 color:'naranja',
 d:'Conocimiento del aspirante, los 7 pasos, venta en 5 minutos, manejo de objeciones y seguimiento.',
 intro:`<p class="lead">Saber todo sobre CEIPA no sirve de nada si no sabes qué parte contarle a quién. Este módulo reúne los cinco bloques del método comercial, en el orden en que ocurren en una conversación real: entender al aspirante, conducir la conversación, resolverla en poco tiempo cuando toca, manejar la resistencia y sostener el seguimiento.</p>
 ${note('key','La frase que ordena toda la venta','<p>“Las personas compran educación por confianza y por el valor que les genera el programa en su crecimiento personal.”</p><p style="margin-top:.4rem">“Cuando logras generar en la persona ese valor, la resistencia que pueda tener en referencia al costo disminuye.”</p>')}`,
 ficha: ficha([
  ['Objetivo','Pasar de un asesor que informa a uno que diagnostica, argumenta con criterio y cierra.'],
  ['Bloques','2.1 Conocimiento del aspirante y venta consultiva · 2.2 La conversación comercial y los 7 pasos · 2.3 Venta en 5 minutos · 2.4 Manejo de objeciones · 2.5 Seguimiento comercial'],
  ['Duración','21 horas distribuidas en cinco sesiones'],
  ['Se evalúa en','El módulo de Evaluación, pruebas 2 a 6.'],
  ['Prerrequisito','Módulo 1.'],
  ['No incluye','Guiones y banco de respuestas: están en Ejemplos y guiones. Fichas de programa y precios: están en el Machete comercial.']
 ]),
 cuerpo: tabs([
  {t:'2.1 El aspirante', c: B.m2.intro + B.m2.cuerpo + B.m2.cierre},
  {t:'2.2 Los 7 pasos', c: B.m3.intro + B.m3.cuerpo + B.m3.cierre},
  {t:'2.3 Venta en 5 min', c: B.m4.intro + B.m4.cuerpo + B.m4.cierre},
  {t:'2.4 Objeciones', c: B.m5.intro + B.m5.cuerpo + B.m5.cierre},
  {t:'2.5 Seguimiento', c: B.m6.intro + B.m6.cuerpo + B.m6.cierre}
 ]),
 actividad: note('do','Actividades de aprendizaje del módulo', `<ol>
  <li><strong>Diagnóstico en cinco preguntas.</strong> En parejas, uno hace de aspirante con un perfil asignado y el otro tiene cinco preguntas, ni una más, para llegar al objetivo real, el obstáculo, el miedo, el decisor y el disparador. Al terminar resume en una frase y el aspirante responde solo “sí” o “no”.</li>
  <li><strong>Los 7 pasos en vivo.</strong> En tríos —asesor, aspirante y observador— una conversación completa de 12 minutos, de pre-chequeo a cierre. El observador marca cada paso como ejecutado, parcial u omitido, y cuenta los minutos que habló cada uno.</li>
  <li><strong>El cronómetro.</strong> Tres rondas del formato corto: cinco minutos, tres minutos y sesenta segundos, con el mismo perfil. Al final cada uno responde en voz alta: “¿qué dije que no era necesario?”.</li>
  <li><strong>La ronda de objeciones.</strong> De pie, en círculo, el formador lanza objeciones sin pausa y cada respuesta debe durar menos de 20 segundos cumpliendo tres condiciones: reconocer, preguntar y reconducir. Quien argumente sin haber preguntado, sale de la ronda.</li>
  <li><strong>Auditoría de pipeline.</strong> Con datos reales, revisa tus cinco aspirantes más antiguos sin cerrar: temperatura, si quedó siguiente paso acordado y cuál sería el valor nuevo del próximo contacto.</li>
 </ol><p style="margin-top:.5rem">Ninguna de estas actividades se califica. Las versiones evaluadas están en el módulo de Evaluación.</p>`),
 cierre: note('key','Lo que no se negocia en este módulo', `<ul>
  <li>Nunca se argumenta antes de preguntar.</li>
  <li>Intento de cierre en el 100% de las conversaciones.</li>
  <li>Un hallazgo, un argumento.</li>
  <li>La objeción se escucha completa, sin interrumpir.</li>
  <li>Ninguna conversación termina sin siguiente paso con fecha, hora y propósito.</li>
  <li>Ningún dato se improvisa: si no lo sabes, lo confirmas y respondes el mismo día.</li>
 </ul>`)
};
/* ===== Módulo 3: Presentación personal e imagen profesional ===== */
const M_IMAGEN = {
 id:'m-img', n:'Módulo 3', t:'Presentación personal e imagen profesional',
 color:'turquesa',
 d:'Vestuario, cuidado personal, postura, protocolo y la experiencia que el aspirante percibe antes de que hables.',
 intro:`<p class="lead">Para muchos aspirantes y sus familias, tú eres la primera persona de CEIPA que ven. Antes de que digas la primera palabra ya formaron una impresión sobre la institución. Este módulo trata de que esa impresión juegue a favor.</p>
 ${note('key','El principio del módulo','<p>La presentación personal no se trata de gustar. Se trata de <strong>no distraer</strong>: de que nada en tu apariencia compita con lo que estás diciendo ni le reste credibilidad a la institución que representas.</p>')}
 ${note('alert','Sobre la fuente de este módulo','<p>La documentación institucional entregada no incluye un protocolo de imagen ni código de vestimenta de CEIPA. El contenido que sigue son <strong>buenas prácticas profesionales generales</strong> aplicadas al rol del asesor, no política institucional. Si existe un manual de imagen o protocolo de atención, debe reemplazar estas recomendaciones.</p>')}`,
 ficha: ficha([
  ['Objetivo','Que tu presentación personal refuerce la credibilidad de CEIPA en cualquier canal y ante cualquier perfil de aspirante.'],
  ['Resultados','Eliges vestuario apropiado según el contexto y el perfil que vas a atender · Sostienes una postura y una expresión que comunican apertura · Aplicas protocolo de cortesía y puntualidad · Adaptas tu presentación a lo presencial, virtual, telefónico y de evento · Identificas y corriges tus propios errores frecuentes.'],
  ['Contenidos','3.1 Vestuario, color y accesorios · 3.2 Higiene y cuidado personal · 3.3 Postura, gesto y expresión · 3.4 Cortesía, puntualidad y actitud · 3.5 Presentación por canal · 3.6 Errores frecuentes · 3.7 Autoevaluación y listas de verificación'],
  ['Duración','4 horas (1 de estudio + 3 de taller con grabación y revisión)'],
  ['Se evalúa en','El módulo de Evaluación, prueba 7, y como criterio de <em>Conexión</em> en los role plays.'],
  ['No incluye','Voz, dicción, gestos al hablar y manejo de nervios: eso está en el Módulo 4.']
 ]),
 cuerpo: tabs([
 {t:'Vestuario', c:`
  <h3>El criterio base</h3>
  <p>Vístete <strong>un escalón por encima</strong> de la persona que vas a atender, nunca tres. Si el aspirante llega en jean, un traje completo crea distancia; si llega una empresa a una jornada corporativa, la camiseta resta autoridad. El objetivo es que te perciba cercano y solvente al mismo tiempo.</p>
  ${tbl(['Contexto','Registro sugerido','Por qué'],[
   ['Atención en campus o mostrador','Formal de oficina: pantalón de vestir o falda, camisa o blusa, calzado cerrado. Chaqueta opcional.','Es el entorno institucional; el aspirante espera ver una universidad'],
   ['Feria estudiantil o colegio','Formal cómodo, con distintivo institucional visible. Calzado en el que puedas estar de pie seis horas.','Vas a estar de pie, en movimiento y compitiendo visualmente con otros stands'],
   ['Visita o jornada empresarial','Formal completo, chaqueta recomendada.','Estás frente a áreas de talento humano y directivos'],
   ['Videollamada','Formal de la cintura hacia arriba, con cuidado especial en el cuello de la prenda.','Es lo único que se ve, y ocupa la mitad del encuadre'],
   ['Jornada interna o capacitación','Casual de negocio.','No hay aspirantes presentes']
  ])}
  <h3>Color</h3>
  <p>Tres reglas simples que evitan casi todos los errores:</p>
  <ul>
   <li><strong>Base neutra, acento controlado.</strong> Azul marino, gris, blanco, beige y negro como base; un solo color de acento por atuendo.</li>
   <li><strong>Los colores institucionales suman cuando son acento, no cuando son disfraz.</strong> Un azul eléctrico en una prenda o accesorio conecta con la marca; un atuendo completo en naranja distrae.</li>
   <li><strong>Evita estampados de alto contraste y rayas finas frente a cámara</strong>, porque producen efecto moiré y cansan al interlocutor.</li>
  </ul>
  <h3>Calzado y accesorios</h3>
  ${tbl(['Elemento','Recomendación','Error frecuente'],[
   ['Calzado','Cerrado, limpio, lustrado, en buen estado. Tacón que puedas sostener toda la jornada.','Zapato sucio o desgastado: es lo que más rápido delata descuido'],
   ['Accesorios','Máximo tres piezas visibles además del reloj. Discretos y sin ruido.','Pulseras que suenan al escribir o gesticular'],
   ['Reloj','Funcional y discreto.','Mirarlo durante la conversación: comunica prisa'],
   ['Escarapela o distintivo','Siempre visible en ferias y eventos, del lado derecho, a la altura del pecho.','Colgarla tan abajo que el aspirante tenga que agacharse para leerla'],
   ['Bolso o maletín','Ordenado. Lo que saques de ahí también comunica.','Buscar un esfero durante dos minutos']
  ])}
  ${note('do','La prueba del espejo','<p>Antes de salir, hazte una sola pregunta: <em>¿hay algo en lo que llevo puesto que pueda convertirse en el tema de conversación?</em> Si la respuesta es sí, cámbialo. Tu ropa debe ser lo último que el aspirante recuerde de la reunión.</p>')}`},
 {t:'Cuidado personal', c:`
  <h3>Lo no negociable</h3>
  <p>Este bloque no se trata de estética sino de higiene básica, que es lo que el interlocutor percibe en el primer metro de distancia y rara vez comenta.</p>
  ${tbl(['Aspecto','Estándar','Nota práctica'],[
   ['Manos y uñas','Limpias y cortas. Si usas esmalte, entero, no descascarado.','Las manos están en el campo visual todo el tiempo: firmas, señalas la pantalla, entregas documentos'],
   ['Aliento','Cuidado especial después de café o almuerzo.','Ten a la mano algo neutro; evita masticar chicle durante la atención'],
   ['Fragancia','Suave y a corta distancia. Regla: que se perciba solo si la persona se acerca.','En espacios cerrados y ferias, menos es más; hay personas con sensibilidad respiratoria'],
   ['Cabello','Limpio, peinado y fuera de la cara. Si es largo, recogido cuando vayas a estar de pie muchas horas.','Tocarse el cabello repetidamente comunica inseguridad'],
   ['Barba','Afeitada o recortada y definida.','Un punto intermedio descuidado es peor que cualquiera de los dos extremos'],
   ['Maquillaje','Natural, resistente a una jornada larga.','En videollamada, un tono mate reduce el brillo de la luz de pantalla'],
   ['Ropa','Limpia, planchada, sin manchas ni hilos sueltos.','Revisa la parte de atrás: tú no la ves, el aspirante sí']
  ])}
  ${note('tip','El kit de jornada larga','<p>Para ferias y jornadas de campus: un cambio de camisa, pañuelos, algo para el aliento, quitamanchas de bolsillo, agua y calzado de repuesto si el evento supera las seis horas. Nadie asesora bien con los pies doliendo.</p>')}`},
 {t:'Postura y gesto', c:`
  <h3>Postura</h3>
  <p>La postura hace dos cosas al tiempo: comunica al otro y te regula a ti. Una espalda derecha mejora la respiración y, con ella, la voz.</p>
  ${tbl(['Situación','Postura correcta','Qué comunica lo contrario'],[
   ['De pie en feria','Peso repartido en ambos pies, hombros abiertos, manos visibles a la altura de la cintura.','Brazos cruzados: barrera. Manos en los bolsillos: desinterés. Apoyarse en la mesa: cansancio'],
   ['Sentado en escritorio','Espalda apoyada, ligera inclinación hacia adelante cuando el aspirante habla.','Recostarse hacia atrás mientras el otro habla se lee como distancia'],
   ['Con acudiente y joven','Cuerpo orientado al joven cuando él habla, aunque el acudiente lleve la conversación.','Ignorar corporalmente al que va a estudiar'],
   ['Caminando con un visitante','Medio paso adelante, indicando el camino con la mano abierta.','Señalar con un dedo o adelantarse demasiado']
  ])}
  <h3>Contacto visual</h3>
  <p>El estándar profesional es mantener el contacto visual entre <strong>el 60% y el 70% del tiempo</strong>, con desvíos naturales. Menos se lee como evasión; más, como incomodidad. Cuando hay dos interlocutores, reparte la mirada: aproximadamente dos tercios para quien habla y un tercio para el acompañante, para que ninguno se sienta excluido.</p>
  <h3>Expresión facial y gestualidad</h3>
  <ul>
   <li><strong>La cara acompaña o contradice.</strong> Decir “entiendo perfectamente tu preocupación” con expresión neutra suena falso. La expresión llega antes que la frase.</li>
   <li><strong>Manos visibles y abiertas.</strong> Las manos ocultas generan desconfianza inconsciente; las palmas visibles comunican apertura.</li>
   <li><strong>Un gesto por idea.</strong> Gesticular constantemente distrae; no gesticular nada apaga el mensaje.</li>
   <li><strong>Asentir con medida.</strong> Asentir mientras el aspirante habla confirma escucha; asentir sin parar se vuelve ruido y hace que la persona acorte lo que estaba contando.</li>
  </ul>
  ${note('alert','El gesto que más cuesta','<p>Cuando el aspirante dice algo que te incomoda —una objeción de precio, una comparación con otra universidad— la cara reacciona antes que la boca. Esa micro-reacción es la que el otro registra. Entrenar la neutralidad ante la objeción vale más que cualquier respuesta memorizada.</p>')}`},
 {t:'Cortesía y actitud', c:`
  <h3>Protocolo de atención</h3>
  ${tbl(['Momento','Qué se hace'],[
   ['Recepción','Ponte de pie, saluda con el nombre si lo conoces, ofrece asiento y agua. Preséntate con nombre y rol, no solo con el cargo.'],
   ['Durante','Celular fuera de la vista y en silencio. No atiendas otra consulta mientras alguien está sentado frente a ti. Si es inevitable, discúlpate explícitamente y da un tiempo.'],
   ['Con acompañantes','Salúdalos a todos, aunque solo uno hable. Pregunta el nombre del que va a estudiar.'],
   ['Despedida','Acompaña hasta la puerta o hasta donde corresponda, entrega tu contacto y confirma en voz alta el siguiente paso acordado.'],
   ['Después','Registra en el CRM el mismo día, mientras recuerdas el tono de la conversación y no solo los datos.']
  ])}
  <h3>Puntualidad</h3>
  <p>Una llamada agendada a las 6:00 se hace a las 6:00, no a las 6:12. En seguimiento comercial la puntualidad no es cortesía: es la primera prueba de que cumples lo que prometes. Si vas a incumplir, avisa <strong>antes</strong> de la hora, nunca después.</p>
  <h3>Escucha activa</h3>
  <p>El método de indagación está en el Módulo 2. Lo que corresponde a este módulo es cómo <em>se ve</em> la escucha:</p>
  <ul>
   <li>No interrumpir, ni siquiera para completar la frase del otro.</li>
   <li>Tomar notas visiblemente, avisando que lo harás: “voy a ir anotando para no hacerte repetir”.</li>
   <li>Dejar dos segundos de silencio después de que la persona termina, antes de responder.</li>
   <li>Retomar más adelante algo que dijo al principio.</li>
  </ul>
  <h3>Actitud, seguridad y empatía</h3>
  ${tbl(['Atributo','Cómo se nota','Cómo se entrena'],[
   ['Seguridad','Frases afirmativas, sin “creo que” ni “más o menos”. Silencios sostenidos sin llenarlos.','Dominando el contenido del Módulo 1: la inseguridad casi siempre es falta de dato'],
   ['Empatía','Nombrar la emoción antes de resolver el problema.','Practicar decir “tiene todo el sentido que te preocupe eso” antes de cualquier argumento'],
   ['Profesionalismo','Decir “no sé, lo confirmo hoy mismo” en vez de improvisar.','Es una decisión, no un rasgo de personalidad'],
   ['Calidez','Usar el nombre de la persona, sin excederse.','Dos o tres veces en una conversación de quince minutos basta']
  ])}
  ${note('error','Lo que rompe la confianza en un segundo','<ul><li>Hablar mal de otra institución.</li><li>Prometer un beneficio que no está confirmado.</li><li>Mirar el reloj o el celular.</li><li>Tutear a un adulto mayor sin permiso, o tratar de usted a un joven de 17 hasta volverlo rígido.</li><li>Corregir al aspirante delante de su acompañante.</li></ul>')}`},
 {t:'Por canal', c:`
  <h3>Presencial</h3>
  <p>Es donde más señales se emiten y donde más rápido se construye confianza. Revisa también el puesto: un escritorio desordenado, una silla con documentos encima o una pantalla con información de otro aspirante comunican más que tu atuendo.</p>
  <h3>Virtual</h3>
  ${tbl(['Elemento','Estándar','Nota'],[
   ['Encuadre','Cámara a la altura de los ojos, cabeza y hombros en cuadro, con espacio sobre la cabeza.','La cámara baja distorsiona y genera una posición de superioridad involuntaria'],
   ['Luz','Fuente de luz al frente, nunca a la espalda.','Una ventana detrás te convierte en silueta'],
   ['Fondo','Neutro y ordenado. Si usas fondo virtual, que sea estático y sin logos ajenos.','El fondo desenfocado es preferible al fondo animado'],
   ['Audio','Audífonos con micrófono. Prueba antes de cada bloque.','El audio importa más que el video: se tolera una imagen regular, no un sonido malo'],
   ['Mirada','Mira a la cámara cuando hablas, a la pantalla cuando escuchas.','Mirarse a sí mismo todo el tiempo es la distracción más común'],
   ['Entorno','Avisa a quien esté en casa u oficina. Silencia notificaciones.','Una interrupción se perdona; tres cancelan la reunión']
  ])}
  <h3>Telefónico</h3>
  <p>Sin imagen, todo el peso recae en la voz y en el ritmo. Tres ajustes concretos:</p>
  <ul>
   <li><strong>Sonríe antes de contestar.</strong> La sonrisa cambia la resonancia y se oye.</li>
   <li><strong>Habla de pie o con la espalda derecha.</strong> Encorvado, el aire se corta y la voz pierde firmeza.</li>
   <li><strong>Verbaliza lo que en persona harías con el cuerpo.</strong> Donde asentirías, di “te sigo”; donde mirarías un documento, di “déjame revisarlo un momento”, para que el silencio no se lea como que colgaste.</li>
  </ul>
  <h3>Eventos y ferias</h3>
  <ul>
   <li>De pie y al frente del stand, nunca detrás de la mesa ni sentado.</li>
   <li>Sin comer, sin celular y sin conversar con el compañero cuando hay público cerca.</li>
   <li>El material ordenado y repuesto; una mesa desordenada a media jornada resta más de lo que suma cualquier volante.</li>
   <li>Distintivo visible y nombre a la vista.</li>
   <li>Si estás atendiendo a alguien y llega otra persona, reconoce su presencia con un gesto y una frase: “ya te atiendo, dame un minuto”.</li>
  </ul>`},
 {t:'Errores y checklist', c:`
  <h3>Los quince errores más frecuentes</h3>
  ${tbl(['#','Error','Efecto en el aspirante'],[
   ['1','Zapato sucio o desgastado','Descuido general, aunque todo lo demás esté impecable'],
   ['2','Ropa arrugada o con manchas','Improvisación'],
   ['3','Exceso de fragancia','Incomodidad física'],
   ['4','Brazos cruzados','Barrera, desacuerdo'],
   ['5','Mirar el celular','“No soy importante”'],
   ['6','Hablar mientras el otro habla','No escucha'],
   ['7','Asentir sin parar','Ansiedad; el aspirante acorta lo que contaba'],
   ['8','Tono monótono en llamada','Desinterés'],
   ['9','Llegar tarde a la llamada agendada','Incumplimiento, el peor precedente en seguimiento'],
   ['10','Escritorio desordenado','Desorganización institucional'],
   ['11','Cámara a contraluz','Falta de preparación'],
   ['12','Muletillas repetidas','Inseguridad sobre el contenido'],
   ['13','Tutear o usted mal calibrado','Distancia o exceso de confianza'],
   ['14','Corregir al aspirante frente a su familia','Vergüenza; se pierde al decisor'],
   ['15','Improvisar un dato','Pérdida de credibilidad, y suele descubrirse después de matricular']
  ])}
  <h3>Lista de verificación — antes de la jornada</h3>
  <ul>
   <li>Ropa limpia, planchada, revisada por delante y por detrás</li>
   <li>Calzado limpio y en buen estado</li>
   <li>Cabello, barba y uñas listos</li>
   <li>Fragancia suave, aliento cuidado</li>
   <li>Distintivo institucional visible</li>
   <li>Celular en silencio y fuera de la vista</li>
   <li>Puesto o stand ordenado y con material repuesto</li>
   <li>CRM abierto, agenda del día a la vista</li>
  </ul>
  <h3>Lista de verificación — antes de una videollamada</h3>
  <ul>
   <li>Cámara a la altura de los ojos y encuadre de cabeza y hombros</li>
   <li>Luz al frente, fondo neutro y ordenado</li>
   <li>Audio probado con audífonos</li>
   <li>Notificaciones silenciadas y pestañas ajenas cerradas</li>
   <li>Ficha del programa y del aspirante abiertas antes de conectarte</li>
  </ul>
  ${note('do','Autoevaluación — grábate una vez al mes','<p>Graba tres minutos de una conversación simulada en video y respóndete cinco preguntas sin justificarte: ¿mantuve contacto visual al menos la mitad del tiempo? ¿mis manos estuvieron visibles? ¿cuántas muletillas conté? ¿mi expresión acompañó lo que decía? ¿hubo algo en mi apariencia o en mi entorno que me distrajo al verme?</p><p style="margin-top:.4rem">Corrige <strong>una</strong> sola cosa hasta la siguiente grabación. Tres correcciones simultáneas producen rigidez, que es peor que el error original.</p>')}`}
 ]),
 actividad: note('do','Actividad de aprendizaje — “La primera impresión”','<p>En parejas, cada uno observa al otro durante treinta segundos de silencio y escribe tres palabras sobre la impresión que le produce, sin justificarlas. Luego se intercambian los papeles escritos y cada quien responde: ¿esas tres palabras son las que quiero que un aspirante y su familia piensen de CEIPA al verme? Si alguna no lo es, ¿qué elemento concreto la produjo?</p>'),
 cierre: cierre([
  'La presentación personal no busca gustar: busca no distraer de lo que estás diciendo.',
  'Vístete un escalón por encima de quien vas a atender, nunca tres.',
  'El calzado descuidado es lo que más rápido delata falta de preparación.',
  'Contacto visual entre el 60% y el 70%, repartido cuando hay acompañante.',
  'La expresión facial llega antes que la frase: entrena la neutralidad ante la objeción.',
  'En virtual, el audio importa más que el video; en telefónico, verbaliza lo que en persona harías con el cuerpo.',
  'Puntualidad en el seguimiento: es la primera prueba de que cumples lo que prometes.',
  'Corrige un solo hábito a la vez.'
 ])
};

/* ===== Módulo 4: Oratoria y comunicación ===== */
const M_ORATORIA = {
 id:'m-ora', n:'Módulo 4', t:'Oratoria, comunicación verbal y no verbal',
 color:'indigo',
 d:'Voz, dicción, estructura del mensaje, manejo de nervios y presentación ante grupos.',
 intro:`<p class="lead">Un asesor puede saberlo todo sobre CEIPA y aun así perder al aspirante por cómo lo dice. Este módulo trabaja el instrumento: la voz, el ritmo, las palabras y el cuerpo mientras hablas.</p>
 ${note('alert','Sobre la fuente de este módulo','<p>Como el Módulo 3, este contenido son buenas prácticas profesionales de comunicación aplicadas al rol del asesor, no política institucional documentada.</p>')}
 ${note('key','Dónde termina el Módulo 3 y empieza este','<p>El Módulo 3 trata de lo que comunicas <strong>antes</strong> de hablar: apariencia, postura en reposo, protocolo. Este trata de lo que ocurre <strong>mientras</strong> hablas: voz, dicción, estructura, gesto en movimiento y manejo de nervios.</p>')}`,
 ficha: ficha([
  ['Objetivo','Que tu forma de hablar sostenga el contenido: que se te entienda, se te crea y se te recuerde.'],
  ['Resultados','Controlas volumen, ritmo y pausa · Eliminas muletillas identificadas · Estructuras un mensaje en menos de un minuto · Manejas los nervios antes de hablar en público · Adaptas la voz al canal · Presentas ante un grupo sin leer.'],
  ['Contenidos','4.1 La voz como herramienta · 4.2 Dicción, ritmo y pausa · 4.3 Vocabulario y muletillas · 4.4 Estructura del mensaje · 4.5 No verbal mientras hablas · 4.6 Nervios y presencia · 4.7 Hablar ante grupos'],
  ['Duración','5 horas (1 de estudio + 4 de práctica con grabación)'],
  ['Se evalúa en','El módulo de Evaluación, prueba 8, y como criterio de <em>Claridad</em> en todos los role plays.']
 ]),
 cuerpo: tabs([
 {t:'La voz', c:`
  <h3>Las cuatro variables que puedes controlar</h3>
  ${tbl(['Variable','Qué es','Cómo se usa en asesoría'],[
   ['Volumen','Qué tan fuerte hablas','Sube medio punto en feria; baja medio punto cuando el tema es sensible, como una dificultad económica'],
   ['Ritmo','Qué tan rápido','Desacelera al dar un dato que quieres que recuerde: precio, fecha, requisito'],
   ['Tono','Qué tan agudo o grave','Un tono que sube al final de cada frase convierte afirmaciones en preguntas y resta seguridad'],
   ['Pausa','El silencio entre ideas','Es la herramienta más poderosa y la menos usada']
  ])}
  <h3>Respiración</h3>
  <p>La voz se apoya en el aire. Si respiras con el pecho, la voz sale corta y aguda; si respiras con el diafragma, sale sostenida y grave. Ejercicio de treinta segundos antes de una llamada importante: inhala en cuatro tiempos, sostén en cuatro, exhala en seis. Tres repeticiones bajan el pulso y asientan la voz.</p>
  ${note('key','La pausa después del precio','<p>Este es el uso más rentable de la pausa en toda la asesoría. Di la cifra y calla. El silencio largo después del precio significa que la persona está calculando, no rechazando. Llenarlo es el error más costoso del módulo comercial.</p>')}
  <h3>La voz en cada canal</h3>
  ${tbl(['Canal','Ajuste'],[
   ['Teléfono','Sonríe antes de contestar: cambia la resonancia y se oye. Habla con la espalda derecha o de pie.'],
   ['Videollamada','Ritmo ligeramente más lento que en persona: la latencia corta las primeras sílabas.'],
   ['Feria','Volumen alto pero ritmo corto: frases breves, porque el ruido se come las frases largas.'],
   ['Audio de WhatsApp','Máximo cuarenta segundos y una sola idea. Si necesitas más, es una llamada.']
  ])}`},
 {t:'Dicción y muletillas', c:`
  <h3>Dicción</h3>
  <p>Tres fallas explican casi todos los problemas de comprensión por teléfono: comerse las sílabas finales, encadenar palabras sin separación y hablar mientras se mira otra cosa. Las tres se corrigen con la misma práctica: leer en voz alta cinco minutos al día exagerando la articulación.</p>
  <h3>Muletillas</h3>
  <p>No se eliminan prohibiéndolas: se eliminan sustituyéndolas por silencio. La muletilla ocupa el espacio donde el cerebro está buscando la siguiente palabra; entrenar la pausa quita la necesidad.</p>
  ${tbl(['Muletilla','Qué comunica','Reemplazo'],[
   ['“Este…”, “eh…”','Estoy pensando','Una pausa de un segundo'],
   ['“¿Me entiendes?”, “¿sí?”','Busco aprobación','“¿Qué te parece?” — pregunta real, no tic'],
   ['“Obviamente”, “como te decía”','Condescendencia','Nada'],
   ['“Más o menos”, “creo que”','Inseguridad sobre el dato','“Lo confirmo y te respondo hoy” o el dato exacto'],
   ['“Básicamente”, “literalmente”','Relleno','Nada'],
   ['“La verdad…”','Implica que lo anterior no lo era','Nada']
  ])}
  ${note('do','Cómo medirte','<p>Graba tres minutos de una conversación y cuenta tus muletillas. Escribe el número. Vuelve a grabar en una semana. No trabajes más de dos muletillas a la vez.</p>')}
  <h3>Vocabulario</h3>
  <ul>
   <li><strong>Traduce la jerga institucional.</strong> “Núcleo problémico”, “ubicuidad”, “interdisciplinariedad” y “derechos pecuniarios” no se usan con un aspirante sin explicarlos en la misma frase.</li>
   <li><strong>Usa las palabras del aspirante.</strong> Si dijo “estabilidad”, no la traduzcas a “proyección”.</li>
   <li><strong>Evita diminutivos y condicionales.</strong> “Sería como de unos dos añitos” resta credibilidad a un dato exacto.</li>
   <li><strong>Números redondeados al hablar, exactos al escribir.</strong> “Cerca de dos millones por núcleo” en la llamada; la cifra exacta y validada en el mensaje de seguimiento.</li>
  </ul>`},
 {t:'Estructura del mensaje', c:`
  <h3>La regla de la idea única</h3>
  <p>Una intervención hablada sostiene <strong>una</strong> idea. Si tienes tres, son tres intervenciones con preguntas en medio. Esto es lo mismo que la regla del uno del módulo comercial, aplicada a la forma de hablar.</p>
  <h3>Tres estructuras que sirven siempre</h3>
  ${tbl(['Estructura','Cuándo','Forma'],[
   ['Respuesta directa','Cuando te preguntan algo concreto','Respuesta en la primera frase, contexto después. Nunca al revés.'],
   ['Problema, solución, prueba','Cuando explicas un programa','“Lo que te frena es X. Acá funciona así. Y el resultado es este dato.”'],
   ['Dato, significado, pregunta','Cuando das una cifra','“Son cuatro años. Eso significa un año antes ejerciendo. ¿Ese año hace diferencia para ti?”']
  ])}
  <h3>El pitch de 90 segundos</h3>
  <p>Toda presentación institucional corta cabe en cuatro movimientos: una pregunta que enganche, un elemento institucional, un elemento del modelo y un resultado, y un siguiente paso. Sin precio, sin superlativos y sin listas de programas.</p>
  ${note('tip','Cómo practicarlo','<p>Dilo en 90 segundos. Luego en 60. Luego en 30. Cada reducción obliga a botar lo accesorio, y lo que queda en la versión de 30 segundos es tu mensaje real.</p>')}
  <h3>Historias</h3>
  <p>Un caso concreto se recuerda mejor que una estadística. “El 82% de nuestros egresados trabaja en su área” es cierto pero abstracto; una historia breve de un egresado con nombre, punto de partida y punto de llegada aterriza el mismo dato. Dos condiciones: que sea verdadera y que sea breve, no más de tres frases.</p>`},
 {t:'No verbal al hablar', c:`
  <p>El Módulo 3 cubre postura en reposo y expresión. Aquí, el cuerpo en movimiento mientras expones.</p>
  ${tbl(['Recurso','Uso correcto','Exceso'],[
   ['Manos','Un gesto por idea, dentro del rectángulo entre hombros y cintura','Movimiento continuo que compite con la voz'],
   ['Desplazamiento','Moverse al cambiar de tema: el movimiento marca la transición','Caminar sin parar, que produce ansiedad en el que mira'],
   ['Contacto visual en grupo','Tres a cinco segundos por persona, recorriendo la sala','Mirar solo al que asiente, o al techo'],
   ['Orientación','Hombros hacia quien habla','Hablar de perfil o hacia la pantalla']
  ])}
  ${note('error','La incongruencia se nota antes que el contenido','<p>Cuando el cuerpo dice algo distinto de las palabras, el interlocutor cree al cuerpo. Decir “claro que sí, con toda confianza” mientras retrocedes medio paso anula la frase.</p>')}
  <h3>Uso de apoyos</h3>
  <ul>
   <li>El plan de estudios o la ficha se muestran girados hacia el aspirante, no hacia ti.</li>
   <li>Señala con la mano abierta, nunca con el esfero ni con un dedo.</li>
   <li>Cuando compartes pantalla, di lo que vas a mostrar antes de mostrarlo.</li>
   <li>No leas lo que el aspirante ya está leyendo: explica lo que no está escrito.</li>
  </ul>`},
 {t:'Nervios y grupos', c:`
  <h3>Manejo de nervios</h3>
  <p>Los nervios no se eliminan: se redirigen. Tres cosas funcionan y se pueden hacer en los dos minutos previos:</p>
  <ol>
   <li><strong>Respiración 4-4-6</strong>, tres repeticiones. Baja el pulso.</li>
   <li><strong>Saber las primeras dos frases de memoria.</strong> El nerviosismo se concentra en el arranque; si el arranque está resuelto, el resto fluye.</li>
   <li><strong>Mover el foco al otro.</strong> El nervio viene de pensar en cómo te ven. Cambiar la pregunta interna a “¿qué necesita esta persona?” lo disuelve, y además es exactamente lo que pide la venta consultiva.</li>
  </ol>
  ${note('tip','Si te quedas en blanco','<p>No lo disimules hablando más rápido. Haz una pregunta al aspirante y recupera el hilo mientras responde. Una pregunta bien puesta nunca se lee como un olvido.</p>')}
  <h3>Hablar ante un grupo</h3>
  <p>Aplica en colegios, jornadas empresariales y charlas de orientación.</p>
  ${tbl(['Momento','Qué hacer'],[
   ['Antes','Llega con quince minutos. Prueba el sonido y la proyección. Averigua cuántos son y quiénes son.'],
   ['Arranque','Abre con una pregunta al grupo, con levantada de mano. Convierte a un público pasivo en participante en diez segundos.'],
   ['Desarrollo','Una idea por bloque, con una pausa entre bloques. Nombra lo que viene: “tres cosas: la primera…”.'],
   ['Preguntas','Repite la pregunta antes de responder, para que todos la oigan y para darte un segundo.'],
   ['Cierre','No termines en “bueno, eso es todo”. Termina en un siguiente paso concreto y en dónde encontrarte.']
  ])}
  ${note('do','Con grupos de bachilleres','<p>El gancho es colectivo pero la conversación es individual. Después de la charla, el objetivo no es que se lleven un volante: es capturar datos con contexto de los que se acercaron. Y a quien no ha elegido carrera se le ofrece orientación vocacional, no un programa.</p>')}`}
 ]),
 actividad: note('do','Actividades de aprendizaje del módulo','<ol><li><strong>Conteo de muletillas.</strong> Graba tres minutos, cuenta y anota el número. Repite en una semana.</li><li><strong>El pitch decreciente.</strong> El mismo mensaje en 90, 60 y 30 segundos. Escribe qué eliminaste en cada reducción.</li><li><strong>La pausa incómoda.</strong> En parejas, uno dice un precio y se queda callado hasta que el otro hable. Se repite hasta que el silencio deje de incomodar.</li><li><strong>Lectura articulada.</strong> Cinco minutos diarios de lectura en voz alta exagerando la articulación.</li></ol>'),
 cierre: cierre([
  'Volumen, ritmo, tono y pausa son las cuatro variables que puedes controlar; la pausa es la más poderosa y la menos usada.',
  'Di la cifra y calla: el silencio después del precio es cálculo, no rechazo.',
  'Las muletillas se eliminan sustituyéndolas por silencio, no prohibiéndolas.',
  'Traduce la jerga institucional y usa las palabras exactas del aspirante.',
  'Una intervención hablada sostiene una sola idea.',
  'Respuesta directa primero, contexto después.',
  'Cuando el cuerpo contradice las palabras, el interlocutor le cree al cuerpo.',
  'Los nervios se disuelven moviendo el foco de “cómo me ven” a “qué necesita esta persona”.'
 ])
};

const MODULOS = [M_INSTITUCIONAL, M_COMERCIAL, M_IMAGEN, M_ORATORIA];
/* ===== MACHETE COMERCIAL ===== */
const PECUNIARIOS = [
 ['Inscripción pregrado (también reingreso y transferencia)', 176129],
 ['Inscripción posgrado (también reingreso y transferencia)', 249516],
 ['Seguro estudiantil (anual)', 87330],
 ['Estudios de homologación — pregrado', 396289],
 ['Homologación — posgrado', 733868],
 ['Derechos de grado — pregrado', 719191],
 ['Derechos de grado — posgrado', 1100803],
 ['Carné estudiantil', 102740],
 ['Certificados y constancias', 32291],
 ['Copia de contenidos del programa por núcleo', 29356],
 ['Supletorio', 381612],
 ['Duplicado de diploma', 152644]
];

const DTO_PREGRADO = [
 ['Deportistas de alto rendimiento','50%','50%'],
 ['Egresados y familiares de egresados en primer grado','15%','15%'],
 ['Alianza víctimas del conflicto — Casur','13%','18%'],
 ['Alianza SENA','13%','13%'],
 ['Alianzas empresariales / alianza educativa empresas','10%','15%'],
 ['Alianza cajas de compensación','10%','15%'],
 ['Familiares en primer grado de estudiantes activos','10%','10%'],
 ['Estudiantes activos en otro programa de pregrado o posgrado','10%','10%'],
 ['Beca Fundadores (solo programas nuevos)','25%','20%']
];

const DTO_ESP = [
 ['Precio de lista (Ministerio)','—',25685398],
 ['Pronto pago','19,61%',20648491],
 ['Alianza empresarial','24,39%',19420729],
 ['Familiares de estudiantes activos','27,43%',18639893],
 ['Egresados y familiares de egresados','30,43%',17869331]
];

const DTO_MBA = [
 ['Precio de lista','—',57094970],
 ['Pronto pago','5,57%',53914780],
 ['Alianza empresarial','10,40%',51157093],
 ['Familiar de estudiante activo o egresado','13,05%',49644076],
 ['Egresados de pregrado CEIPA','14,26%',48953227],
 ['Egresados de posgrado CEIPA','19,09%',46195540]
];

/* Fichas de programa */
const PROGRAMAS = [
/* ---------- PREGRADOS ---------- */
{id:'p-ae',niv:'Pregrado',fam:'antiguo',n:'Administración de Empresas',
 perfil:'Interés por liderazgo, negocios, gestión, emprendimiento y toma de decisiones en empresas públicas o privadas.',
 porque:'Para quien quiere una base gerencial amplia, entender cómo funcionan las organizaciones y prepararse para dirigir áreas, proyectos o empresas completas.',
 mod:'Virtual · Blended (Nodo Barranquilla)', difs:'Carrera de 4 años; formación por núcleos bimestrales; alianza con ASU; enfoque en retos empresariales reales; visión ética, emprendedora y de sostenibilidad.',
 ejes:'Estrategia, finanzas, operaciones, talento, datos, innovación y gobierno corporativo en una sola visión.',
 egr:'Dirección de áreas, proyectos o empresas completas; consultoría; emprendimiento.'},
{id:'p-am',niv:'Pregrado',fam:'antiguo',n:'Administración de Mercadeo',
 perfil:'Aspirantes creativos y estratégicos, con interés por marcas, clientes, mercados, comercialización y análisis de tendencias.',
 porque:'Para quien quiere comprender al consumidor, desarrollar estrategias de mercado y convertir el mercadeo en crecimiento real para una organización.',
 mod:'Virtual · Blended (Nodo Barranquilla)', difs:'Enfoque en estrategia, BI, análisis de consumidor, visión global y conexión entre mercadeo, negocio y toma de decisiones; alianza con ASU.',
 ejes:'Estrategia de mercadeo, comportamiento del consumidor, investigación de mercados, canales y distribución, activación de marca, marketing digital y analítica comercial.',
 egr:'Coordinación comercial, activación de marca, gestión de canales, análisis de mercado, consultoría o emprendimiento.'},
{id:'p-ani',niv:'Pregrado',fam:'antiguo',n:'Administración de Negocios Internacionales',
 perfil:'Interés por comercio exterior, logística internacional, negociación global y expansión de mercados.',
 porque:'Para quien quiere mover negocios entre países y leer el entorno global como una ventaja competitiva.',
 mod:'Virtual · Blended (Nodo Barranquilla)', difs:'Lectura estratégica del entorno global más sostenibilidad; carrera de 4 años; alianza con ASU; portafolio de internacionalización.',
 ejes:'Comercio exterior, logística internacional, negociación, mercados globales, sostenibilidad y expansión.',
 egr:'Comercio exterior, logística internacional, negociación global, expansión de mercados.'},
{id:'p-af',niv:'Pregrado',fam:'antiguo',n:'Administración Financiera',
 perfil:'Aspirantes analíticos, orientados a números, rentabilidad, mercados, planeación y toma de decisiones basadas en datos.',
 porque:'Para quien quiere gestionar recursos, analizar inversión y riesgo, y decidir el rumbo económico de una organización.',
 mod:'Virtual · Blended (Nodo Barranquilla)', difs:'Formación aplicada a inversión, financiación y riesgo; finanzas conectadas a toda la organización, no área aislada; apoyo de ASU; Laboratorio Financiero.',
 ejes:'Análisis financiero, evaluación de proyectos, tesorería, financiación, mercados, productos financieros y gestión del riesgo.',
 egr:'Analista financiero, líder de tesorería, gestor de inversiones, director financiero en formación o consultor.'},
{id:'p-ah',niv:'Pregrado',fam:'antiguo',n:'Administración Humana',
 perfil:'Interés por personas, cultura, liderazgo y desarrollo organizacional con mirada estratégica.',
 porque:'Para quien quiere liderar personas, cultura y desarrollo organizacional con una mirada estratégica y no solo operativa.',
 mod:'Virtual · Blended (Nodo Barranquilla)', difs:'El talento como motor estratégico, no como gestión de personal; carrera de 4 años; alianza con ASU.',
 ejes:'Cultura, liderazgo, desarrollo organizacional, gestión del talento y alineación con los objetivos del negocio.',
 egr:'Liderazgo de áreas de talento humano, desarrollo organizacional, consultoría.'},
{id:'p-cp',niv:'Pregrado',fam:'antiguo',n:'Contaduría Pública',
 perfil:'Interés por información financiera, control, cumplimiento normativo y análisis contable.',
 porque:'Para quien quiere responder por la información financiera de una organización y por su control y cumplimiento.',
 mod:'Núcleos comunes: Virtual o Blended · Núcleos específicos: Híbrida nocturna',
 difs:'Estructura mixta de modalidades; Laboratorio Financiero; Punto NAF-DIAN; carrera de 4 años.',
 ejes:'Información financiera, control, cumplimiento, normatividad y análisis.',
 egr:'Contaduría, revisoría, control interno, análisis financiero.',
 ojo:'Es el único pregrado con modalidades distintas según el tipo de núcleo. Adviértelo antes de matricular.'},
{id:'p-md',niv:'Pregrado',fam:'nuevo',n:'Marketing Digital',
 perfil:'Aspirantes interesados en redes, pauta, contenidos, performance, datos, e-commerce y crecimiento digital.',
 porque:'Para quienes quieren especializarse desde el pregrado en el mundo digital: adquisición, contenidos, datos, conversión, e-commerce y crecimiento.',
 mod:'Virtual', difs:'Programa orientado a herramientas y estrategias digitales avanzadas; mezcla de creatividad, analítica y negocio; formación conectada con tendencias actuales del mercado.',
 ejes:'SEO y SEM, analítica digital, contenidos, automatización, e-commerce, pauta digital, conversión, UX y gestión de proyectos digitales.',
 egr:'Marketing digital, growth, social media, contenidos, performance, e-commerce, analítica o agencias.'},
{id:'p-ecd',niv:'Pregrado',fam:'nuevo',n:'Estadística y Ciencia de Datos',
 perfil:'Perfiles analíticos que quieren convertir datos en decisiones.',
 porque:'Para quien quiere trabajar con datos y ser quien responde las preguntas difíciles de un negocio.',
 mod:'Presencial o Virtual', difs:'Modalidad presencial disponible en campus; enfoque aplicado; carrera de 4 años.',
 ejes:'Estadística, análisis de datos, modelamiento, visualización y decisión basada en evidencia.',
 egr:'Analista de datos, científico de datos en formación, inteligencia de negocios.'},
{id:'p-der',niv:'Pregrado',fam:'nuevo',n:'Derecho',
 perfil:'Interés por la argumentación, el análisis normativo y el litigio o la asesoría jurídica.',
 porque:'Para quien quiere ser abogado en cuatro años, con práctica real desde la carrera.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios, 6:15 a 9:30 p.m.)',
 difs:'Formación por núcleos, un solo núcleo a la vez; enfoque integral de las ramas del derecho; análisis, argumentación e interpretación en vez de memorización; casos reales de la rama judicial y jurisprudencia; <strong>consultorio jurídico</strong> con casos reales; <strong>alianza con LEGIS</strong>; acceso a <strong>SilvIA</strong>, IA jurídica con legislación y jurisprudencia colombiana.',
 ejes:'Ramas del derecho, análisis de casos, jurisprudencia, argumentación y práctica en consultorio.',
 egr:'Litigio, asesoría jurídica, consultoría, sector público.',
 ojo:'Modalidad híbrida con asistencia obligatoria. Verifica la disponibilidad nocturna del aspirante antes de cerrar.'},
{id:'p-ii',niv:'Pregrado',fam:'nuevo',n:'Ingeniería Industrial',
 perfil:'Interés por procesos, productividad, operaciones y mejora continua.',
 porque:'Para quien quiere optimizar cómo funciona una organización por dentro.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios)', difs:'Carrera de 4 años; retos empresariales reales; enfoque aplicado.',
 ejes:'Procesos, operaciones, calidad, productividad y cadena de valor.', egr:'Jefaturas de producción, procesos, calidad, logística y mejora continua.',
 ojo:'Asistencia obligatoria en los dos encuentros nocturnos.'},
{id:'p-is',niv:'Pregrado',fam:'nuevo',n:'Ingeniería de Sistemas',
 perfil:'Interés por desarrollo, infraestructura, datos y solución de problemas con tecnología.',
 porque:'Para quien quiere construir soluciones tecnológicas, no solo usarlas.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios)', difs:'Carrera de 4 años; proyectos aplicados; enfoque en problemas reales.',
 ejes:'Desarrollo, datos, infraestructura, arquitectura de soluciones.', egr:'Desarrollo, arquitectura, datos, TI corporativa.',
 ojo:'Asistencia obligatoria en los dos encuentros nocturnos.'},
{id:'p-ia',niv:'Pregrado',fam:'nuevo',n:'Ingeniería Ambiental',
 perfil:'Interés por sostenibilidad, gestión ambiental y proyectos de impacto.',
 porque:'Para quien quiere trabajar en sostenibilidad desde la ingeniería y no desde el discurso.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios)', difs:'Carrera de 4 años; conexión con la salud planetaria del principio rector; proyectos aplicados.',
 ejes:'Gestión ambiental, sostenibilidad, normatividad, proyectos e impacto.', egr:'Gestión ambiental corporativa, consultoría, sector público.',
 ojo:'Asistencia obligatoria en los dos encuentros nocturnos.'},
{id:'p-ifr',niv:'Pregrado',fam:'nuevo',n:'Ingeniería Financiera y de Riesgo',
 perfil:'Perfiles cuantitativos con interés en mercados, inversión y modelamiento de riesgo.',
 porque:'Para quien quiere unir ingeniería y finanzas en la toma de decisiones de inversión y riesgo.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios)', difs:'Laboratorio Financiero; enfoque cuantitativo aplicado; carrera de 4 años.',
 ejes:'Modelamiento, mercados, inversión, riesgo y analítica cuantitativa.', egr:'Riesgo, inversión, banca, analítica financiera.',
 ojo:'Asistencia obligatoria en los dos encuentros nocturnos.'},
{id:'p-ir',niv:'Pregrado',fam:'nuevo',n:'Ingeniería Robótica',
 perfil:'Interés por automatización, control, electrónica e industria 4.0.',
 porque:'Para quien quiere trabajar en automatización y sistemas inteligentes.',
 mod:'Híbrida nocturna (2 encuentros semanales obligatorios)', difs:'Carrera de 4 años; proyectos aplicados; enfoque en industria 4.0.',
 ejes:'Automatización, control, electrónica, programación y sistemas.', egr:'Automatización industrial, control, integración de sistemas.',
 ojo:'Asistencia obligatoria en los dos encuentros nocturnos.'},
/* ---------- ESPECIALIZACIONES ---------- */
{id:'e-ger',niv:'Especialización',fam:'hibrido',n:'Gerencia',
 perfil:'Profesionales que dirigen o aspiran a dirigir organizaciones completas.',
 porque:'Forma profesionales con capacidad de dirigir organizaciones desde una visión estratégica, integrando áreas clave del negocio para la toma de decisiones, la innovación y el logro de objetivos organizacionales.',
 difs:'No se enfoca en funciones administrativas aisladas, sino en desarrollar pensamiento estratégico integral: comprender la organización como un sistema y liderar procesos de transformación empresarial. Malla diseñada de acuerdo con el plan de estudios de ASU; posibilidad de Máster Ejecutivo EIG según énfasis.',
 egr:'Dirección general, gerencias funcionales, consultoría estratégica.'},
{id:'e-gs',niv:'Especialización',fam:'hibrido',n:'Gestión de Servicios',
 perfil:'Profesionales del sector servicios, experiencia de cliente y operación.',
 porque:'Forma especialistas en la gestión y optimización de servicios, orientados a mejorar la experiencia del cliente, la eficiencia operativa y la competitividad.',
 difs:'Integra el enfoque administrativo con el pensamiento ingenieril, para diseñar soluciones innovadoras a problemas complejos de los servicios, más allá de la gestión tradicional.',
 egr:'Dirección de servicio, experiencia de cliente, operaciones.'},
{id:'e-gl',niv:'Especialización',fam:'hibrido',n:'Gerencia Logística',
 perfil:'Profesionales de cadena de suministro, abastecimiento, transporte y operaciones.',
 porque:'Forma especialistas en la gestión estratégica de la cadena de suministro, enfocados en optimizar procesos logísticos, reducir costos y mejorar la competitividad en entornos globales.',
 difs:'No aborda la logística solo desde la operación, sino desde la toma de decisiones gerenciales basadas en datos, integrando análisis cuantitativo y visión estratégica.',
 egr:'Gerencia logística, cadena de suministro, operaciones, consultoría.'},
{id:'e-gth',niv:'Especialización',fam:'hibrido',n:'Gerencia del Talento Humano',
 perfil:'Profesionales de talento humano, desarrollo organizacional y liderazgo de equipos.',
 porque:'Forma especialistas en la gestión estratégica del talento, capaces de diseñar culturas organizacionales, desarrollar liderazgo y alinear las personas con los objetivos del negocio.',
 difs:'No se enfoca solo en procesos operativos de recursos humanos, sino en convertir el talento en un factor estratégico que impacta directamente los resultados.',
 egr:'Gerencia de talento humano, desarrollo organizacional, consultoría.'},
{id:'e-et',niv:'Especialización',fam:'hibrido',n:'Emprendimiento Tecnológico',
 perfil:'Emprendedores y profesionales que quieren crear o escalar propuestas de valor basadas en tecnología.',
 porque:'Para quien quiere construir o escalar un negocio de base tecnológica con método.',
 difs:'Metodología KIAP; trabajo sobre desafíos de la propia empresa; aprendizaje basado en problemas, proyectos y experiencia; Máster en Administración de Empresas de EIG según el caso.',
 egr:'Fundador, líder de innovación, gestor de nuevos negocios.'},
{id:'e-cib',niv:'Especialización',fam:'hibrido',n:'Ciberseguridad',
 perfil:'Profesionales de TI, riesgo y operaciones que asumen la seguridad de la información.',
 porque:'Para quien debe responder por la seguridad digital de una organización.',
 difs:'Programa nuevo del portafolio; enfoque aplicado sobre retos reales; flexibilidad UBFlex.',
 egr:'Liderazgo de seguridad de la información, riesgo tecnológico, consultoría.'},
{id:'e-td',niv:'Especialización',fam:'hibrido',n:'Transformación Digital',
 perfil:'Profesionales que lideran procesos de cambio y digitalización en sus organizaciones.',
 porque:'Para quien tiene que liderar el cambio digital, no solo adoptarlo.',
 difs:'Metodología KIAP; trabajo sobre desafíos de la propia empresa; experiencias vivenciales; enfoque aplicado.',
 egr:'Liderazgo de transformación digital, innovación, consultoría.'},
{id:'e-gm',niv:'Especialización',fam:'virtual',n:'Gerencia de Mercadeo',
 perfil:'Profesionales de mercadeo, ventas, comunicación, trade o negocio que buscan liderazgo funcional.',
 porque:'Para profesionales que quieren dirigir el mercadeo con una visión más estratégica, comercial y orientada a crecimiento.',
 difs:'Máster Ejecutivo EIG por énfasis; contenidos con lectura digital y comercial; enfoque práctico en decisiones de marketing. No se enfoca solo en comunicación o creatividad, sino en decisiones basadas en análisis de mercado y resultados.',
 ejes:'Estrategia de mercadeo, posicionamiento, analítica comercial, consumidor, innovación y posibles énfasis en Marketing Digital o Planificación Comercial.',
 egr:'Gerencias de mercadeo, KAM, liderazgo comercial, dirección regional o consultoría.'},
{id:'e-gp',niv:'Especialización',fam:'virtual',n:'Gerencia de Proyectos',
 perfil:'Ingenieros, administradores, líderes de PMO o profesionales que coordinan proyectos y quieren profesionalizar su gestión.',
 porque:'Para profesionales que necesitan estructurar, liderar y ejecutar proyectos con método, visión estratégica y control de resultados.',
 difs:'Énfasis en gestión integral del proyecto; UBFlex; enfoque en problemas reales; pasantía y mentores en el ecosistema posgradual CEIPA. Desarrolla visión sistémica, no solo metodologías.',
 ejes:'Formulación, planeación, cronograma, costos, riesgos, stakeholders, metodologías ágiles y tradicionales, control y sostenibilidad del proyecto.',
 egr:'Gerente o director de proyectos, PMO, formulador y evaluador de proyectos o consultor.'},
{id:'e-gf',niv:'Especialización',fam:'virtual',n:'Gerencia Financiera',
 perfil:'Profesionales de finanzas, contabilidad, administración o áreas afines que buscan liderazgo financiero.',
 porque:'Para quienes ya trabajan con finanzas y quieren pasar de la operación al análisis estratégico y la decisión de alto impacto.',
 difs:'Orientación a diagnóstico empresarial, rentabilidad, riesgo y toma de decisiones; énfasis electivos y flexibilidad UBFlex. Las finanzas como herramienta para generar valor, no como análisis contable tradicional.',
 ejes:'Financiación, inversión, operación, rentabilidad, gestión de riesgos, planeación, indicadores y diagnóstico de estados financieros.',
 egr:'Gerencia financiera, control financiero, planeación, consultoría o liderazgo administrativo-financiero.'},
{id:'e-mdig',niv:'Especialización',fam:'virtual2',n:'Marketing Digital',
 perfil:'Profesionales de mercadeo y negocio que necesitan resultados medibles en canales digitales.',
 porque:'Para quien debe responder por la adquisición, la conversión y el crecimiento digital de una marca.',
 difs:'Programa nuevo; doble titulación; estructura de bloques 13 y 9 créditos; dos horas de clase a la semana según lo estipulado por el docente.',
 egr:'Liderazgo de marketing digital, performance, e-commerce, agencias.'},
{id:'e-gts',niv:'Especialización',fam:'virtual2',n:'Gerencia de Turismo Sostenible',
 perfil:'Profesionales del sector turismo, hotelería y desarrollo territorial.',
 porque:'Para quien quiere gestionar turismo con criterios de sostenibilidad y competitividad.',
 difs:'Programa nuevo; doble titulación; estructura de bloques 13 y 9 créditos; dos horas de clase a la semana según lo estipulado por el docente.',
 egr:'Gerencia de turismo, desarrollo de destinos, consultoría, sector público.'},
/* ---------- MAESTRÍAS ---------- */
{id:'m-mba',niv:'Maestría',fam:'mba',n:'Maestría en Administración — MBA',
 perfil:'Profesionales con experiencia que dirigen o van a dirigir organizaciones en entornos complejos.',
 porque:'Para liderar organizaciones y decidir con impacto en entornos VUCA.',
 mod:'Miércoles virtual sincrónico 8:00–9:00 p.m. · viernes 5:00–10:00 p.m. · sábado 8:00 a.m.–1:00 p.m.',
 difs:'Primera Maestría en Administración enfocada en formación gerencial ambidextra; docentes expertos y consultores de alta trayectoria empresarial; aprendizaje basado en problemas, proyectos y experiencias; proyecto empresarial; contenidos enriquecidos por ASU. CEIPA es la escuela de negocios privada con más estudiantes virtuales.',
 egr:'Dirección general, gerencias de alto nivel, consultoría.'},
{id:'m-et',niv:'Maestría',fam:'m-et',n:'Maestría en Emprendimiento Tecnológico',
 perfil:'Profesionales que quieren crear, gestionar y escalar propuestas de valor basadas en tecnología e innovación.',
 porque:'Para construir y escalar negocios de base tecnológica con método y respaldo académico.',
 difs:'40 créditos en cuatro bloques; enfoque experiencial; aplicación inmediata.',
 egr:'Fundador, líder de innovación, dirección de nuevos negocios.'},
{id:'m-lie',niv:'Maestría',fam:'m-edu',n:'Maestría en Liderazgo e Innovación Educativa',
 perfil:'Profesionales que lideran procesos de cambio en contextos educativos.',
 porque:'Diseñada para quienes lideran innovación, gestión y transformación institucional en educación.',
 difs:'40 créditos en cuatro bloques; enfoque en innovación y gestión educativa.',
 egr:'Dirección y coordinación educativa, liderazgo de innovación, consultoría.',
 req:'Además de los requisitos generales de maestría: hoja de vida con certificaciones laborales, ensayo de 3 a 5 páginas sobre trayectoria e interés en el programa, y entrevista con el coordinador.'},
{id:'m-tde',niv:'Maestría',fam:'m-edu',n:'Maestría en Transformación Digital para la Educación',
 perfil:'Profesionales del sector educativo que lideran la digitalización de procesos de enseñanza y gestión.',
 porque:'Para liderar la transformación digital de instituciones educativas.',
 difs:'40 créditos en cuatro bloques; enfoque aplicado al contexto educativo.',
 egr:'Dirección de innovación educativa, transformación digital institucional, consultoría.',
 req:'Además de los requisitos generales de maestría: hoja de vida con certificaciones laborales, ensayo de 3 a 5 páginas sobre trayectoria e interés en el programa, y entrevista con el coordinador.'}
];
/* ===== Precios por familia ===== */
const PRECIOS = {
 antiguo:{tipo:'nucleo', filas:[['Presencial',2606696,325837],['Virtual',1972632,246579]]},
 nuevo:{tipo:'nucleo', filas:[['Presencial',3571512,446439],['Virtual',2838216,354777]]},
 hibrido:{tipo:'esp', total:25685398, cred:22, b:[['Bloque 1 (12 créditos)',14010217],['Bloque 2 (10 créditos)',11675181]],
   incluye:'Valoración de Potencial · Outdoor Training · horario viernes 6:15–9:15 p.m. y sábados 8:00 a.m.–12:00 m.'},
 virtual:{tipo:'esp', total:25685398, cred:22, b:[['Bloque 1 (12 créditos)',14010217],['Bloque 2 (10 créditos)',11675181]],
   comercial:15500000, comercialB:[['Bloque 1',8454545],['Bloque 2',7045455]],
   incluye:'Doble titulación · dos horas de clase a la semana según lo estipulado por el docente.',
   noincluye:'No incluye Valoración de Potencial ni Outdoor Training.'},
 virtual2:{tipo:'esp', total:25685398, cred:22, b:[['Bloque 1 (13 créditos)',15177735],['Bloque 2 (9 créditos)',10507663]],
   comercial:16500000, comercialB:[['Bloque 1',9000000],['Bloque 2',7500000]],
   incluye:'Doble titulación · dos horas de clase a la semana según lo estipulado por el docente.',
   noincluye:'No incluye Valoración de Potencial ni Outdoor Training.'},
 mba:{tipo:'mae', total:57094970, cred:44, b:[['Bloque 1 (13 créditos)',16868968],['Bloque 2 (11 créditos)',14273743],['Bloque 3 (10 créditos)',12976130],['Bloque 4 (10 créditos)',12976130]], dto:DTO_MBA},
 'm-et':{tipo:'mae', total:36928500, cred:40, b:[['Bloque 1 (10 créditos)',9232125],['Bloque 2 (10 créditos)',9232125],['Bloque 3 (12 créditos)',11078550],['Bloque 4 (8 créditos)',7385700]],
   dtoSimple:[['Valor full','—',36928500],['Con 5% de descuento','5%',35082075],['Con 10% de descuento','10%',33235650],['Con 15% de descuento','15%',31389225],['Con 20% de descuento','20%',29542800]]},
 'm-edu':{tipo:'mae', total:29542800, cred:40, b:[['Bloque 1 (10 créditos)',7385700],['Bloque 2 (11 créditos)',8124270],['Bloque 3 (11 créditos)',8124270],['Bloque 4 (8 créditos)',5908560]],
   dtoSimple:[['Valor full','—',29542800],['Con 5% de descuento','5%',28065660],['Con 10% de descuento','10%',26588520],['Con 15% de descuento','15%',25111380],['Con 20% de descuento','20%',23634240],['Descuento máximo autorizado','23,21%',22685916]]}
};

const REQ_PRE = '<ol><li>Solicitud de ingreso en <a href="https://inscribete.ceipa.edu.co/" target="_blank" rel="noopener">inscribete.ceipa.edu.co</a></li><li>Foto tipo documento: de frente, fondo blanco, a color, buena resolución</li><li>Fotocopia del diploma y acta de grado de bachiller</li><li>Copia del resultado de las pruebas Saber 11</li><li>Carta laboral, si cuenta con alianza empresarial</li></ol>';
const REQ_POS = '<ol><li>Solicitud de ingreso en <a href="https://inscribete.ceipa.edu.co/" target="_blank" rel="noopener">inscribete.ceipa.edu.co</a></li><li>Fotocopia de la cédula ampliada al 150%</li><li>Fotocopia del diploma y acta de grado de pregrado</li><li>Foto tipo documento: de frente, fondo blanco, a color, buena resolución</li><li>Carta laboral, si cuenta con alianza empresarial</li></ol>';

function precioHTML(p){
 const P = PRECIOS[p.fam]; if(!P) return '';
 if(P.tipo==='nucleo'){
  return `<h5>Inversión por núcleo (8 créditos · 2 meses)</h5>
   ${tbl(['Modalidad','Valor del núcleo','Valor por crédito'], P.filas.map(f=>[f[0],$(f[1]),$(f[2])]))}
   <p style="font-size:.88rem;color:var(--muted)">Cinco núcleos al año durante cuatro años. ${p.fam==='nuevo'?'Programa nuevo: aplica Beca Fundadores.':'Programa antiguo del portafolio.'}</p>`;
 }
 if(P.tipo==='esp'){
  let h = `<h5>Inversión</h5>${tbl(['Concepto','Valor'],[['Precio de lista (Ministerio) — 22 créditos',$(P.total)],...P.b.map(b=>[b[0],$(b[1])])])}`;
  if(P.comercial) h += note('alert','Precio comercializado distinto al de lista',`<p>Para este programa la documentación de tarifas registra un valor comercializado de <strong>${$(P.comercial)}</strong> (${P.comercialB.map(b=>b[0]+' '+ '$'+b[1].toLocaleString('es-CO')).join(' · ')}). ${P.noincluye} <strong>Confirma con el área financiera cuál es el valor vigente antes de cotizar.</strong></p>`);
  h += `<h5>Incluye</h5><p>${P.incluye}</p>`;
  h += `<h5>Descuentos sobre el precio de lista</h5>${tbl(['Beneficio','Descuento','Valor total'],DTO_ESP.map(d=>[d[0],d[1],$(d[2])]))}`;
  h += note('tip','Segunda especialización','<p>Un egresado que cursa una segunda especialización homologa parte del plan: 14 créditos por '+$(16345253)+' o 12 créditos por '+$(14010217)+', con el 30,43% de descuento de egresado, que deja el valor en '+$(11371393)+' y '+$(9746908)+' respectivamente.</p>');
  return h;
 }
 let h = `<h5>Inversión</h5>${tbl(['Concepto','Valor'],[[`Valor total (${P.cred} créditos)`,$(P.total)],...P.b.map(b=>[b[0],$(b[1])])])}`;
 if(P.dto) h += `<h5>Descuentos autorizados</h5>${tbl(['Beneficio','Descuento','Valor total'],P.dto.map(d=>[d[0],d[1],$(d[2])]))}`;
 if(P.dtoSimple) h += `<h5>Descuentos autorizados</h5>${tbl(['Escenario','Descuento','Valor total'],P.dtoSimple.map(d=>[d[0],d[1],$(d[2])]))}`;
 h += note('alert','Seguro estudiantil','<p>Los valores anteriores son de matrícula. El seguro estudiantil se cobra aparte y lo calcula el sistema al generar la liquidación; no tiene descuento.</p>');
 return h;
}

function fichaPrograma(p){
 const esPre = p.niv==='Pregrado';
 const mod = p.mod || (p.niv==='Especialización'
   ? (p.fam==='hibrido' ? 'Híbrida: viernes 6:15–9:15 p.m. y sábados 8:00 a.m.–12:00 m.' : 'Virtual: dos horas de clase a la semana según lo estipulado por el docente.')
   : 'Presencial o virtual según cohorte. [Pendiente de validación: confirmar modalidad vigente]');
 const dur = esPre ? '4 años · 20 núcleos de 8 semanas · 5 núcleos al año'
   : p.niv==='Especialización' ? 'Aproximadamente 11 meses académicos · 22 créditos en 2 bloques'
   : (PRECIOS[p.fam] ? PRECIOS[p.fam].cred+' créditos en 4 bloques' : '[Pendiente de validación]');
 return `<button class="btn btn--o" data-go="machete" style="margin-bottom:1.2rem">← Volver al machete</button>
 <div class="kicker">${p.niv}</div><h1>${p.n}</h1>
 <p class="lead">${p.porque}</p>
 ${ficha([
   ['Perfil del aspirante', p.perfil],
   ['Modalidad', mod],
   ['Duración', dur],
   ['Perfil del egresado', p.egr]
 ])}
 ${p.ojo ? note('alert','Ojo antes de cerrar', '<p>'+p.ojo+'</p>') : ''}
 ${tabs([
  {t:'Costos y descuentos', c: precioHTML(p) + (esPre?`<h5>Descuentos vigentes en pregrado</h5>${tbl(['Beneficio','Presencial','Virtual'],DTO_PREGRADO.map(d=>[d[0],d[1],d[2]]))}<p style="font-size:.88rem;color:var(--muted)">La Beca Fundadores aplica solo a programas nuevos. Los beneficios no son acumulables salvo autorización expresa; confirma siempre con el área financiera antes de prometer una combinación.</p>`:'')
    + `<h5>Derechos pecuniarios 2026</h5>${tbl(['Concepto','Valor'],PECUNIARIOS.filter(x=>esPre? !/posgrado/i.test(x[0]) : !/pregrado/i.test(x[0])).map(x=>[x[0],$(x[1])]))}`},
  {t:'Diferenciales', c:`<p>${p.difs||''}</p>${p.ejes?`<h5>Ejes del plan</h5><p>${p.ejes}</p>`:''}
    <h5>Diferenciales que aplican a todo el portafolio</h5>
    <ul><li>Acreditación Institucional en Alta Calidad: solo el 36% de las IES del país la tiene</li>
    <li>Modelo UBFlex y proyecto aplicado sobre empresas reales</li>
    <li>Empleabilidad del 89,8% frente al 77,4% nacional</li>
    <li>Portafolio de internacionalización con rutas que no exigen viajar</li>
    <li>BienSer, acompañamiento al estudiante</li></ul>`},
  {t:'Requisitos', c: (esPre?REQ_PRE:REQ_POS) + (p.req?note('alert','Requisitos adicionales de este programa','<p>'+p.req+'</p>'):'')
    + `<h5>Homologación</h5><p>Hasta el 50% del plan de estudios, con asignaturas de máximo 10 años, notas originales con créditos y fechas, una sola vez y antes de iniciar. Costo único no reembolsable: ${esPre?$(396289)+' en pregrado':$(733868)+' en posgrado'}.</p>`},
  {t:'Respuestas rápidas', c:`
    ${tbl(['Si pregunta…','Respondes'],[
     ['“¿Cuánto cuesta?”', esPre?'“La inversión es por núcleo, que son dos meses. En '+p.n+' el núcleo virtual está en '+$(PRECIOS[p.fam].filas[1][1])+'. Son cinco núcleos al año durante cuatro años.”':'“El programa completo está en '+$(PRECIOS[p.fam]?PRECIOS[p.fam].total:0)+' de precio de lista, y se paga por bloques. Con los beneficios que puedas tener, baja. ¿Trabajas en una empresa con alianza o eres egresado nuestro?”'],
     ['“¿Cuánto dura?”', '“'+dur+'.”'],
     ['“¿Es virtual o presencial?”', '“'+mod+'”'],
     ['“¿El título sirve?”','“Registro Calificado del Ministerio, y además la institución está Acreditada en Alta Calidad, que solo tiene el 36% de las IES del país.”'],
     ['“¿Hay descuentos?”', esPre?'“Depende de tu caso: hay beneficios por alianza empresarial, caja de compensación, ser egresado o familiar de egresado, y otros. Cuéntame dónde trabajas y si tienes vínculo con CEIPA y te digo cuál aplica.”':'“Sí: pronto pago, alianza empresarial, familiares de estudiantes activos y egresados. El mayor es el de egresados. ¿Cuál es tu caso?”'],
     ['“¿Puedo homologar?”','“Hasta el 50% del plan, con asignaturas de máximo diez años. Mándame las notas originales con créditos y fechas y lo mandamos a estudio. No te doy un número sin el estudio formal.”'],
     ['“¿Cuándo empieza?”','“[Pendiente de validación: calendario de inicio de núcleos y cohortes por período.] Confírmalo con admisiones antes de dar una fecha.”']
    ])}
    ${note('do','El argumento de una sola frase','<p>'+(p.difs||'').split('.')[0]+'.</p>')}`}
 ])}
 <div class="foot"><button class="btn btn--o" data-go="machete">← Machete</button><button class="btn" data-go="bquilla">Condiciones de Barranquilla →</button></div>`;
}

const NIVELES = ['Todos','Pregrado','Especialización','Maestría'];
function renderMachete(){
 return `<h1>Machete comercial</h1>
 <p class="lead">Consulta rápida por programa. Toca una ficha y encuentras perfil, modalidad, duración, costos, descuentos, requisitos, diferenciales y respuestas rápidas para usar mientras hablas con el aspirante.</p>
 ${note('alert','Antes de cotizar','<p>Los valores provienen de la documentación de tarifas 2026. Precios, descuentos y calendarios cambian por período: valida con el área financiera y con admisiones antes de comprometer una cifra con un aspirante.</p>')}
 <div class="filters">${NIVELES.map((n,i)=>`<button class="chip" data-niv="${n}" aria-pressed="${i===0}">${n}</button>`).join('')}</div>
 <div class="mach">${PROGRAMAS.map(p=>`<button class="pcard" data-niv="${p.niv}" data-go="${p.id}">
   <div class="pcard__n">${p.niv.toUpperCase()}</div>
   <div class="pcard__t">${p.n}</div>
   <p class="pcard__d">${p.perfil}</p></button>`).join('')}</div>
 <h2>Tablas transversales</h2>
 ${acc('Derechos pecuniarios 2026 completos', tbl(['Concepto','Valor 2026'],PECUNIARIOS.map(x=>[x[0],$(x[1])])))}
 ${acc('Descuentos de pregrado', tbl(['Beneficio','Presencial','Virtual'],DTO_PREGRADO.map(d=>[d[0],d[1],d[2]]))+'<p style="font-size:.88rem;color:var(--muted)">Beca Fundadores aplica solo a programas nuevos. Los beneficios de Compensar reportados en la documentación son: pregrados antiguos 15% y pregrados nuevos 25% solo en modalidad virtual, especializaciones 18% en presencial y virtual, y maestrías 10% en presencial y virtual, para programas nuevos y antiguos; no pagan inscripción pero sí homologación, y aplica para empleados y afiliados.</p>')}
 ${acc('Descuentos de especialización', tbl(['Beneficio','Descuento','Valor total'],DTO_ESP.map(d=>[d[0],d[1],$(d[2])])))}
 ${acc('Descuentos de MBA', tbl(['Beneficio','Descuento','Valor total'],DTO_MBA.map(d=>[d[0],d[1],$(d[2])])))}
 ${acc('Qué incluye cada tipo de especialización', tbl(['Grupo','Programas','Incluye'],[
   ['Híbridas','Gerencia · Gerencia del Talento Humano · Gerencia Logística · Gestión de Servicios · Emprendimiento Tecnológico · Ciberseguridad · Transformación Digital','Valoración de Potencial, Outdoor Training y horario viernes 6:15–9:15 p.m. y sábados 8:00 a.m.–12:00 m.'],
   ['Virtuales','Gerencia de Mercadeo · Gerencia de Proyectos · Gerencia Financiera','Doble titulación y dos horas de clase a la semana según lo estipulado por el docente. No incluye Valoración de Potencial ni Outdoor Training.'],
   ['Virtuales nuevas','Marketing Digital · Gerencia de Turismo Sostenible','Doble titulación y dos horas de clase a la semana. Estructura de bloques de 13 y 9 créditos. No incluye Valoración de Potencial ni Outdoor Training.']
 ]))}
 ${note('alert','Pendiente de validación','<p>La documentación de tarifas reporta al Ministerio otras maestrías —Creatividad para el Desarrollo Social, Analítica para los Negocios y Gerencia Global y Sostenibilidad, a $36.928.500— que no aparecen en el listado de programas que se comercializan. Confirmar con Dirección Académica si están disponibles para venta antes de mencionarlas.</p>')}`;
}
/* ===== NODO BARRANQUILLA ===== */
const BQUILLA = `
<h1>Nodo Barranquilla</h1>
<p class="lead">Todo lo que aplica solo en el Atlántico: modalidad blended, beneficios por canal, cajas de compensación y valores de núcleo ya negociados. Lo que no esté aquí se rige por las condiciones generales del <button class="btn btn--o" data-go="machete" style="padding:.1rem .5rem;font-size:.82rem">Machete comercial</button>.</p>
${note('alert','Vigencia de esta información','<p>Los valores de esta sección provienen del archivo operativo de valores 2026 del nodo. Las tablas de beneficios tienen vigencias distintas y algunas están marcadas con fecha de corte. <strong>Confirma vigencia con la coordinación del nodo antes de cotizar.</strong> Donde la documentación no permite una lectura inequívoca, aparece marcado como pendiente de validación.</p>')}

${ficha([
 ['Dirección','Carrera 57 N.° 72 – 143, Barrio El Prado, Barranquilla'],
 ['Apertura','16 de febrero de 2007 · más de 19 años en la región Caribe'],
 ['Línea Atlántico','(605) 311 10 50'],
 ['Líneas nacionales','01 8000 520 440 · 321 711 5402'],
 ['Modalidad propia del nodo','Virtual con metodología Blended: 80% virtual y 20% presencial, con tres asesorías presenciales por núcleo en la sede']
])}

<h2>Modalidad blended: lo que solo existe acá</h2>
${tbl(['Elemento','Condición'],[
 ['Distribución','80% actividades virtuales · 20% presenciales'],
 ['Encuentros presenciales','Tres asesorías por núcleo, en la Carrera 57 # 72-143'],
 ['Jornada diurna','8:15 a.m. – 11:30 a.m.'],
 ['Jornada nocturna','6:15 p.m. – 9:30 p.m.'],
 ['Programas a los que aplica','Carreras administrativas y núcleos comunes de Contaduría Pública'],
 ['Programas que no la tienen','Ingenierías y Derecho, que son híbrida nocturna con dos encuentros semanales obligatorios; y Marketing Digital, que es virtual']
])}
${note('do','Cómo se vende el blended','<p>Es el punto medio que muchos aspirantes del Caribe están buscando sin saber nombrarlo: “no quiero estudiar encerrado en la casa, pero tampoco puedo ir todos los días”. Tres encuentros presenciales por núcleo dan comunidad y acompañamiento sin exigir presencialidad diaria.</p>')}

<h2>Beneficios por núcleo 2026</h2>
<p>Tabla operativa del nodo. El porcentaje depende del <strong>canal de origen del aspirante</strong> y de la <strong>jornada</strong>, no solo del programa.</p>
${tbl(['Canal','Estrategia','Inscripción','Diurna','Nocturna','Virtual','Vigencia'],[
 ['Alianza','Alianza especial (Sutherland, Atlantic, Olímpica, Súper Giros, Colombina)','No paga','40%','40%','25%','Toda la carrera'],
 ['Alianza','Activación y empresas aliadas','No paga','40%','30%','15%','Toda la carrera'],
 ['Alianza','Empresas no aliadas que en CRM figuren como alianza','No paga','40%','30%','15%','Toda la carrera'],
 ['Encadenamiento','Activación de egresados con más de 2 años','No paga','25%','25%','15%','Toda la carrera'],
 ['Encadenamiento','Egresados con menos de 2 años (2024 y 2025)','No paga','40%','40%','25%','Primer año de estudio'],
 ['Colegios','Egresados del 2024','No paga','40%','25%','25%','Toda la carrera'],
 ['Internet','Stock','—','25%','25%','—','Toda la carrera'],
 ['Retirados','Retirados con más de 2 años','No paga','30%','30%','25%','Primera factura'],
 ['No alianza','Blended','—','25%','25%','—','Toda la carrera'],
 ['No alianza','Víctimas del conflicto','No paga','50%','30%','18%','Toda la carrera'],
 ['No alianza','Bonda','—','40%','30%','15%','Vigente hasta febrero de 2026']
])}
${note('alert','Dos lecturas que debes confirmar','<p>La fila de Blended y la de Stock no registran valor en la columna virtual, y la vigencia de Bonda aparece hasta febrero de 2026. Confirma ambas con la coordinación del nodo antes de aplicarlas.</p>')}

<h2>Cajas de compensación del Atlántico</h2>
<p>El beneficio de caja se registra como un <strong>valor en pesos</strong> que se descuenta de la matrícula, no como porcentaje.</p>
${tbl(['Caja','Valor del beneficio 2026','Valor registrado en el esquema de doble titulación'],[
 ['Comfamiliar',$(761000),$(717000)],
 ['Combarranquilla',$(760000),$(700000)],
 ['Cajacopi',$(720000),$(649000)]
])}
${note('alert','Por qué hay dos columnas','<p>El archivo del nodo registra dos conjuntos de valores: uno en la liquidación de programas nuevos 2026 y otro en el esquema de doble titulación, que trabaja sobre valores de 2025. No son intercambiables. Pregunta primero qué esquema aplica al aspirante.</p>')}

<h2>Valores de núcleo con beneficio aplicado — programas nuevos</h2>
<p>Valores de referencia que ya incorporan el descuento del canal, en modalidad virtual e híbrida.</p>
${tbl(['Programa','Descuento aplicado','1 núcleo','2 núcleos','3 núcleos'],[
 ['Global Management','32,41%',$(1918351),$(3836702),$(5755053)],
 ['Marketing Digital','32,41%',$(1918351),$(3836702),$(5755053)],
 ['Ingeniería Financiera y de Riesgo','32,41%',$(1918351),$(3836702),$(5755053)],
 ['Ingeniería Robótica','32,41%',$(1918351),$(3836702),$(5755053)],
 ['Derecho','45,45%',$(1548247),$(3096494),$(4644741)],
 ['Ingeniería de Sistemas','45,45%',$(1548247),$(3096494),$(4644741)],
 ['Ingeniería Industrial','45,45%',$(1548247),$(3096494),$(4644741)],
 ['Estadística y Ciencia de Datos','45,45%',$(1548247),$(3096494),$(4644741)],
 ['Ingeniería Ambiental','47,21%',$(1498294),$(2996588),$(4494883)]
])}
<p style="font-size:.9rem;color:var(--muted)">Valor pleno de referencia del núcleo en estos programas: ${$(2838216)} en virtual.</p>

<h2>Derechos y descuentos operativos del nodo</h2>
${tbl(['Concepto','Valor'],[
 ['Inscripción',$(176129)],
 ['Homologación',$(396289)],
 ['Seguro aplicado en la liquidación del nodo',$(36368)],
 ['Descuento de pronto pago','Entre '+$(120000)+' y '+$(150000)+' según el esquema registrado']
])}
${note('alert','Diferencia en el seguro','<p>Los derechos pecuniarios nacionales registran el seguro estudiantil anual en ${$(87329)}, mientras la liquidación del nodo aplica ${$(36368)}. Es probable que correspondan a bases de cálculo distintas —anual frente a prorrateo por núcleo—, pero la documentación no lo precisa. <strong>Pendiente de validación con el área financiera.</strong></p>')}

<h2>Esquema de doble titulación con beneficio del 10%</h2>
${tbl(['Escenario','2 núcleos','1 núcleo'],[
 ['Valor base',$(3547328),$(1869616)],
 ['Con el 10% de descuento',$(3192595),$(1682654)],
 ['Con pronto pago más seguro',$(3261758),$(1751817)],
 ['Con beneficio Comfamiliar',$(2544758),$(1034817)],
 ['Con beneficio Combarranquilla',$(2561758),$(1051817)],
 ['Con beneficio Cajacopi',$(2612758),$(1102817)]
])}
${note('alert','Base de cálculo','<p>Este esquema trabaja sobre un valor de núcleo de ${$(1869616)}, que corresponde a la tarifa de pregrado virtual antiguo de 2025, y registra derechos de 2025: homologación ${$(356317)}, inscripción ${$(158363)}, carné ${$(92378)} y seguro ${$(69163)}. <strong>Antes de usarlo, confirma si el esquema sigue vigente con los valores 2026.</strong></p>')}

<h2>Respuestas rápidas del nodo</h2>
${tbl(['Si el aspirante pregunta…','Respondes'],[
 ['“¿Tengo que ir a la sede?”','“Depende del programa. En las carreras administrativas trabajamos con metodología blended: 80% virtual y tres asesorías presenciales por núcleo acá en El Prado. En Ingenierías y Derecho son dos encuentros semanales en vivo y son obligatorios.”'],
 ['“¿A qué hora son las clases presenciales?”','“Hay jornada diurna de 8:15 a 11:30 y nocturna de 6:15 a 9:30. ¿Cuál te sirve mejor con tu trabajo?”'],
 ['“Yo estoy afiliado a Comfamiliar, ¿eso sirve?”','“Sí, hay beneficio por caja de compensación. Déjame confirmarte el valor vigente para tu programa y te lo paso hoy mismo con la liquidación exacta.”'],
 ['“Trabajo en Olímpica / Súper Giros / Colombina”','“Entonces aplicas al beneficio de alianza especial, que es uno de los más altos del portafolio y además no pagas inscripción. Confirmo tu caso en CRM y te armo la liquidación.”'],
 ['“Yo me retiré hace unos años, ¿puedo volver?”','“Sí, y hay un beneficio para retirados con más de dos años. Miremos también homologación de lo que alcanzaste a cursar.”'],
 ['“Me gradué del colegio en 2024”','“Hay un beneficio específico para egresados de colegio de esa promoción. ¿De qué colegio eres?”']
])}
${note('do','La regla del nodo','<p>En Barranquilla el beneficio depende del <strong>canal</strong>, y el canal se confirma en CRM. Nunca prometas un porcentaje antes de verificar cómo entró el aspirante. La frase correcta es: “según cómo llegaste, puede aplicarte un beneficio importante; déjame verificarlo y te armo la liquidación exacta hoy mismo”.</p>')}

<h2>Pendientes de validación del nodo</h2>
${tbl(['Dato','Qué falta','Responsable'],[
 ['Seguro estudiantil','Aclarar si $36.368 es prorrateo por núcleo frente al valor anual nacional','Financiera'],
 ['Pronto pago','Definir en qué casos aplica $120.000 y en cuáles $150.000','Coordinación del nodo'],
 ['Beneficio Bonda','Confirmar si sigue vigente después de febrero de 2026','Coordinación del nodo'],
 ['Blended y Stock en modalidad virtual','Las filas no registran valor en esa columna','Coordinación del nodo'],
 ['Esquema de doble titulación','Confirmar si se actualiza a valores 2026','Financiera'],
 ['Acumulación de beneficios','Definir qué beneficios son acumulables entre sí','Financiera'],
 ['Calendario de inicio de núcleos','Fechas de arranque por período en el nodo','Admisiones'],
 ['Oferta de posgrado en el nodo','Confirmar qué especializaciones y maestrías se ofrecen en Barranquilla y en qué modalidad','Dirección Académica']
])}
`;
/* ============ CÁPSULAS ============ */
const CAPSULAS = [
{g:'Identidad',n:'01',t:'La ficha de identidad',b:`<ul><li><strong>Nombre oficial:</strong> Fundación Universitaria CEIPA</li><li><strong>Naturaleza:</strong> privada, de utilidad común, sin ánimo de lucro</li><li><strong>Carácter:</strong> institución universitaria</li><li><strong>Fundación:</strong> 1972, Medellín · +52 años</li><li><strong>Fundador:</strong> Antonio Mazo Mejía</li><li><strong>Rector:</strong> Dr. Diego Mauricio Mazo Cuervo, Ed. D.</li><li><strong>Identidad de mercado:</strong> escuela de negocios · CEIPA powered by Arizona State University</li></ul>`},
{g:'Identidad',n:'02',t:'Los sellos de calidad, literal',b:`<p><strong>Acreditación Institucional en Alta Calidad. Resolución MEN N.° 016362 del 23 de junio de 2026, por 6 años. Vigilada MINEDUCACIÓN.</strong></p><p>Registro Calificado: lo tienen todos los programas. Es el mínimo legal, no es diferencial. Acreditación: voluntaria e institucional, sí es diferencial.</p><p><em>En una frase:</em> el registro permite que el programa exista; la acreditación demuestra que está por encima del mínimo.</p>`},
{g:'Identidad',n:'03',t:'Sedes y contacto',b:`<ul><li><strong>Campus Sabaneta:</strong> Calle 77 Sur N.° 40 – 165, Vereda San José</li><li><strong>Nodo Barranquilla:</strong> Carrera 57 N.° 72 – 143, Barrio El Prado (desde el 16 de febrero de 2007)</li><li><strong>Inscripciones:</strong> inscribete.ceipa.edu.co</li><li><strong>Web:</strong> ceipa.edu.co · <strong>Teléfono:</strong> 321 711 54 02</li><li><strong>BienSer:</strong> bienser@ceipa.edu.co · teescucho@ceipa.edu.co · enfermeria@ceipa.edu.co</li></ul>`},
{g:'Identidad',n:'04',t:'El principio rector en cinco palabras',b:`<p>Universidad <strong>emprendedora</strong> · gestión del <strong>conocimiento</strong> · formación <strong>integral</strong> · entornos <strong>ubicuos</strong> · generando <strong>iFuturo</strong>.</p><p>Nunca se recita completo a un prospecto: se usa una idea, la que conecte.</p>`},
{g:'Modelo',n:'05',t:'UBFlex en 15 segundos',b:`<p>“Aprendes haciendo, llegas a clase con el contenido ya trabajado y estudias desde donde estés. En vez de materias sueltas, resuelves un problema real de empresa.”</p><p>Fundamentos: learning by doing, aula invertida y ubicuidad.</p><p>Video: youtu.be/kjG4f-O_iMY</p>`},
{g:'Modelo',n:'06',t:'La aritmética del pregrado',b:`<ul><li>Núcleo: <strong>8 semanas / 2 meses</strong></li><li>Núcleos por año: <strong>5</strong></li><li>Núcleos totales: <strong>20</strong></li><li>Carrera: <strong>4 años</strong> (referencia tradicional: 5)</li></ul><p><em>Frase de venta:</em> “Te gradúas un año antes. Un año antes ejerciendo y un año menos de inversión.”</p>`},
{g:'Modelo',n:'07',t:'Qué se entrega dentro de un núcleo',b:`<p>Pretest → Entregas 1, 2 y 3 → Quiz → <strong>Pitch</strong> → <strong>Proyecto de consultoría</strong> → Postest → retroalimentación docente.</p><p>El proyecto aplicado con una empresa real es el eje: el estudiante es un consultor en formación antes de graduarse.</p>`},
{g:'Modelo',n:'08',t:'Aulas híbridas',b:`<p>Estudiantes presenciales y remotos en la misma clase, al mismo tiempo, con interacción real.</p><p><strong>“No es una clase grabada: es una clase compartida.”</strong></p>`},
{g:'Modelo',n:'09',t:'Duraciones por nivel',b:`<ul><li>Pregrado: 4 años (20 núcleos)</li><li>Especialización: ≈11 meses académicos, sin contar vacaciones ni recesos de graduación</li><li>Maestría: <em>[información pendiente de complementar: confirmar duración oficial por programa]</em></li></ul>`},
{g:'Modalidades',n:'10',t:'Las cuatro modalidades',b:`<ul><li><strong>Virtual:</strong> plataforma 24/7, 1 encuentro sincrónico semanal (queda grabado) + 1 asesoría grupal. No obligatorio.</li><li><strong>Blended (Barranquilla):</strong> 80/20, 3 asesorías presenciales por núcleo, diurna 8:15–11:30, nocturna 6:15–9:30.</li><li><strong>Híbrida nocturna:</strong> 2 clases semanales en vivo 6:15–9:30 p.m., <strong>obligatorias</strong>.</li><li><strong>Presencial:</strong> ej. lunes a viernes 8:00 a.m.–12:00 m., 4 días + 1 de trabajo autónomo.</li></ul>`},
{g:'Modalidades',n:'11',t:'Qué modalidad tiene cada programa',b:`<ul><li>Carreras administrativas: Blended · Virtual</li><li>Contaduría Pública: núcleos comunes Blended o Virtual; núcleos específicos Híbrida</li><li><strong>Ingenierías y Derecho: Híbrida</strong> (2 encuentros semanales, nocturno)</li><li>Marketing Digital: Virtual</li><li>Estadística y Ciencia de Datos: Presencial o Virtual</li></ul><p>Depende del programa <em>y</em> del nodo. Valida antes de prometer.</p>`},
{g:'Modalidades',n:'12',t:'Horarios de posgrado',b:`<p><strong>Especializaciones:</strong> presencial solo Sabaneta, viernes 6:00–9:00 p.m. y sábados 8:00–11:00 a.m. Virtual: sincrónicos opcionales los mismos días y horas. El énfasis es 100% virtual en ambas modalidades.</p><p><strong>MBA:</strong> miércoles virtual 8:00–9:00 p.m. · viernes 5:00–10:00 p.m. · sábado 8:00 a.m.–1:00 p.m.</p>`},
{g:'Portafolio',n:'13',t:'El mapa en tres líneas',b:`<ul><li><strong>13 pregrados</strong> → formación ágil, práctica, conectada con el mercado</li><li><strong>12 especializaciones</strong> → profundización aplicada para subir de nivel</li><li><strong>4 maestrías</strong> → liderar transformación</li></ul>`},
{g:'Portafolio',n:'14',t:'Las 12 especializaciones',b:`<p><strong>Consolidadas:</strong> Gerencia · Gerencia Financiera · Gerencia del Talento Humano · Gerencia de Mercadeo · Gerencia Logística · Gerencia de Proyectos · Gestión de Servicios</p><p><strong>Nuevas:</strong> Gerencia de Turismo Sostenible · Marketing Digital · Ciberseguridad · Emprendimiento Tecnológico · Transformación Digital</p>`},
{g:'Portafolio',n:'15',t:'Las 4 maestrías',b:`<p>Administración (MBA) · Transformación Digital para la Educación · Liderazgo e Innovación Educativa · Emprendimiento Tecnológico</p>`},
{g:'Portafolio',n:'16',t:'Cómo diferenciar dos programas parecidos',b:`<p>Pregunta: <strong>¿qué tipo de reto quiere resolver?</strong></p><ul><li>Gerencia: dirigir el todo</li><li>Proyectos: entregar con tiempo, costo y calidad</li><li>Transformación Digital: liderar el cambio</li><li>Marketing Digital: resultados medibles en canales</li><li>Talento Humano: personas como palanca del negocio</li><li>Logística: cadena de suministro como ventaja</li><li>Gestión de Servicios: experiencia del cliente y operación</li></ul>`},
{g:'Portafolio',n:'17',t:'Derecho, en cinco balas',b:`<p>4 años · formación por núcleos, uno a la vez · alianza <strong>LEGIS</strong> · <strong>SilvIA</strong>, IA jurídica con leyes vigentes y jurisprudencia colombiana · <strong>consultorio jurídico</strong> con casos reales · modalidad híbrida nocturna.</p>`},
{g:'Portafolio',n:'18',t:'MBA, en cinco balas',b:`<p>Formación gerencial <strong>ambidextra</strong> · entornos <strong>VUCA</strong> · docentes expertos y consultores con trayectoria empresarial · proyecto empresarial · contenidos enriquecidos por <strong>ASU</strong>.</p><p>CEIPA es la escuela de negocios privada con más estudiantes virtuales.</p>`},
{g:'Ecosistema',n:'19',t:'ASU',b:`<p>Alianza estratégica con Arizona State University, una de las universidades más innovadoras del mundo. Aporta visión global, experiencias internacionales, intercambio académico y actualización del modelo. Varias mallas están diseñadas de acuerdo con planes de estudio de ASU, con material y casos tomados de sus cursos.</p>`},
{g:'Ecosistema',n:'20',t:'EIG — la doble titulación de posgrado',b:`<p><strong>2 títulos con 1 sola matrícula:</strong> Especialista CEIPA + Máster Ejecutivo EIG (España), escuela con más de 30 años de reconocimiento y campus en Granada.</p><p><strong>Se dice siempre, sin que lo pregunten:</strong> el título de EIG es título propio español, <strong>no convalidable en Colombia</strong>.</p>`},
{g:'Ecosistema',n:'21',t:'ESIC — doble titulación en pregrado',b:`<p>ESIC Medellín desde 2021. Empresas fundadoras: Bancolombia, Sura, Grupo Crystal, Pactia, Grupo Bios, Telefónica, Postobón y Accenture.</p><p>Dirección de Marketing Global / Administración de Mercadeo · 160 créditos, 4 años · Summer Camp de 2 semanas en Madrid en el año 2 · presencial en las mañanas · Km 17 vía Las Palmas, Mall La Reserva · <strong>$26.500.000/año</strong>, con pago mensual sin costo de financiación.</p>`},
{g:'Ecosistema',n:'22',t:'Internacionalización sin viajar',b:`<p><strong>Rutas:</strong> CINTANA · PALOMA (hasta 3 asignaturas en Antioquia) · eMOVIES (hasta 2 asignaturas virtuales en Colombia e Iberoamérica) · INILATmov+ · internacionalización curricular · Conexión Global · AIESEC · Bolsa de Prácticas Alianza del Pacífico · bilingüismo en inmersión con ASU.</p><p><strong>Beneficios económicos:</strong> exención de matrícula en destino · 50% de descuento en homologación de créditos · Fondo de Apoyo para la Internacionalización.</p><p><strong>Dato que pesa:</strong> menos del 2% de los estudiantes en Colombia vive un intercambio.</p>`},
{g:'Ecosistema',n:'23',t:'Los números de Alumni',b:`<table><tbody><tr><td>Empleabilidad 2023</td><td><strong>89,8%</strong> (nacional 77,4%)</td></tr><tr><td>Con empleo al graduarse</td><td>92,35%</td></tr><tr><td>Trabajan en su área</td><td>82%</td></tr><tr><td>Ingresos del 50%</td><td>2,5 a 6 SMMLV (nacional 1,5 a 2,5)</td></tr><tr><td>Recomiendan y satisfacción (OLE)</td><td>97,4%</td></tr><tr><td>Título diferenciador (2022)</td><td>95,81%</td></tr></tbody></table><p><strong>La versión que se queda:</strong> “9 de cada 10 egresados CEIPA consiguen empleo.” Usa uno solo.</p>`},
{g:'Ecosistema',n:'24',t:'BienSer',b:`<p>Cuatro líneas: <strong>psicosocial</strong> (asesoría psicológica, orientación vocacional, habilidades para la vida), <strong>acompañamiento académico</strong> (incluye apoyo a bajo rendimiento), <strong>salud física</strong> (zona de escucha, Fitness Match) y <strong>ocio y cultura</strong>.</p><p>Se activa cuando el prospecto expresa <strong>miedo</strong>, no objeción.</p>`},
{g:'Ecosistema',n:'25',t:'Emprendimiento, investigación y SolversLab',b:`<ul><li>+3.000 estudiantes con acompañamiento a su idea de negocio</li><li>3.200 empresas sensibilizadas por la Estrategia de Emprendimiento y Empresarismo</li><li>Investigación: grupos, semilleros, fondo editorial, productos en Scienti</li><li>SolversLab: consultorías a retos empresariales reales, <strong>certificables para la hoja de vida</strong></li></ul>`},
{g:'Inversión',n:'26',t:'Requisitos de inscripción (pregrado)',b:`<ol><li>Solicitud en inscribete.ceipa.edu.co</li><li>Foto tipo documento, fondo blanco, a color</li><li>Diploma y acta de grado de bachiller</li><li>Resultado Saber 11</li><li>Carta laboral si hay alianza empresarial</li></ol>`},
{g:'Inversión',n:'27',t:'Inversión por período — pregrado 2026',b:`<table><thead><tr><th>Grupo</th><th>Presencial</th><th>Virtual</th></tr></thead><tbody><tr><td>Administrativos</td><td>$2.606.696</td><td>$1.972.632</td></tr><tr><td>Derecho, Ingenierías, Estadística</td><td>$3.571.512</td><td>$2.838.216</td></tr></tbody></table><p>Una sola vez: inscripción y homologación. Anual: seguro estudiantil. Valores referenciados: $87.330 · $176.129 · $396.289 (y $375.594 mencionado para homologación).</p><p><strong>Pendiente de complementar:</strong> la asignación exacta de estos tres valores debe confirmarse con la lista vigente. No comuniques un precio que no hayas validado.</p>`},
{g:'Inversión',n:'28',t:'Homologación',b:`<p>Hasta <strong>50%</strong> del plan · asignaturas de máximo <strong>10 años</strong> · notas originales con créditos y fecha · <strong>una sola vez y antes de iniciar</strong> · costo único no reembolsable · sujeta a estudio del líder académico.</p><p><strong>Pregunta obligatoria a todo prospecto adulto:</strong> “¿Alcanzaste a cursar semestres en otra institución?”</p>`},
{g:'Método',n:'29',t:'Los 7 pasos',b:`<p><strong>1</strong> Pre-chequeo · <strong>2</strong> Apertura · <strong>3</strong> PRA (Investigación) · <strong>4</strong> CVBR (Demostración) · <strong>5</strong> Pre-cierre · <strong>6</strong> Manejo de objeciones · <strong>7</strong> Cierre</p>`},
{g:'Método',n:'30',t:'CVBR',b:`<p><strong>C</strong>aracterística → <strong>V</strong>entaja (“lo que significa que…”) → <strong>B</strong>eneficio (por qué le genera valor a él) → <strong>R</strong>eflexión (pregunta que busca su afirmación).</p><p>Sin la R, es un monólogo.</p>`},
{g:'Método',n:'31',t:'Pre-cierre',b:`<p>“Si no hay intento de cierre, solo fue una charla muy amena.”</p><p>“Pre-cierre no significa presionar: significa que en el 100% de nuestras conversaciones intentamos cerrar.”</p><p><em>Fórmula base:</em> “¿Entonces, te gustó lo que conversamos hasta ahora? Fantástico, entonces empezamos tu proceso de matrícula.”</p>`},
{g:'Método',n:'32',t:'Las tres únicas objeciones',b:`<p>Después del intento de cierre solo existen tres: <strong>producto, tiempo y dinero</strong>. Todo lo demás es una de estas tres disfrazada.</p>`},
{g:'Método',n:'33',t:'La frase que ordena toda la venta',b:`<p>“Las personas compran educación por confianza y por el valor que les genera el programa en su crecimiento personal.”</p><p>“Cuando logras generar ese valor, la resistencia frente al costo disminuye.”</p>`},
{g:'Método',n:'34',t:'El termómetro de la conversación',b:`<p>Si hablaste <strong>más del 50%</strong> del tiempo, no fue consultiva.</p><p>Durante la investigación, el prospecto debe hablar el <strong>70%</strong>.</p>`},
{g:'Método',n:'35',t:'La regla del uno',b:`<p>Un hallazgo, un argumento. Si detectas tres necesidades, argumenta la más dolorosa y <strong>guarda las otras dos</strong> para cuando aparezca una objeción.</p>`},
{g:'Método',n:'36',t:'Seguimiento',b:`<ul><li>Ninguna conversación termina sin siguiente paso con fecha, hora y propósito, y confirmación del prospecto</li><li>Cada contacto trae valor nuevo; nunca “¿ya decidiste?”</li><li><strong>Regla del tres:</strong> tres contactos con valor distinto sin respuesta y pasa a base de reactivación</li></ul>`},
{g:'Método',n:'37',t:'Lo que nunca se hace',b:`<ol><li>Inventar un dato de un programa</li><li>Prometer un precio sin validar</li><li>Omitir que el título EIG no es convalidable</li><li>Prometer una convocatoria internacional sin verificar vigencia</li><li>Prometer una modalidad sin confirmar que aplica a ese programa y nodo</li><li>Hablar de precio antes de instalar valor</li><li>Hablar después de decir el precio: di la cifra y espera</li></ol>`},
{g:'Método',n:'38',t:'La frase que salva cualquier duda',b:`<p>“Prefiero confirmarlo con el área académica antes de decirte algo impreciso. Te respondo hoy mismo.”</p><p>Un asesor que verifica genera más confianza que uno que improvisa. Siempre.</p>`}
];
/* ============ EJEMPLOS Y SITUACIONES REALES ============ */
const EJEMPLOS = `
<p class="lead">Aquí está la conversación aplicada: estructuras que se adaptan, no libretos que se memorizan. Un guion tiene tres capas: la <strong>intención</strong> no se negocia, la <strong>estructura</strong> se cambia con criterio, y las <strong>palabras</strong> deben sonar tuyas siempre. Si lees, se nota. Si adaptas, funciona.</p>
${note('key','Tres reglas para todos los guiones','<ol><li>Nunca argumentes antes de haber preguntado. Si el guion te lleva a argumentar y no sabes qué quiere la persona, devuélvete.</li><li>Cada guion termina en un siguiente paso, no en una despedida.</li><li>Si la persona se sale del guion, sigue a la persona. El guion vuelve solo.</li></ol>')}

<h2>Los cuatro CVBR construidos</h2>
<p>Estructura completa, lista para adaptar. Fíjate en que la <strong>R</strong> siempre devuelve el turno de habla.</p>
${tabs([
 {t:'Para quien trabaja', c:dlg([
   {w:'A',s:'<strong>C ·</strong> “En CEIPA estudias por núcleos problémicos: un solo núcleo a la vez, durante dos meses.”'},
   {w:'A',s:'<strong>V ·</strong> “Lo que significa que no tienes cinco o seis materias simultáneas con parciales encima.”'},
   {w:'A',s:'<strong>B ·</strong> “Para ti, que trabajas hasta las seis, eso es concentrarte en un solo tema a la vez y avanzar sin sentir que estás persiguiendo la carrera.”'},
   {w:'A',s:'<strong>R ·</strong> “¿Eso te ordenaría más la semana que como lo tenías pensado?”'}])},
 {t:'Para quien teme perder tiempo', c:dlg([
   {w:'A',s:'<strong>C ·</strong> “Nuestros pregrados son de 4 años: cinco núcleos al año, veinte en total.”'},
   {w:'A',s:'<strong>V ·</strong> “Lo que significa un año menos que el esquema tradicional de semestres.”'},
   {w:'A',s:'<strong>B ·</strong> “En tu caso es un año antes ejerciendo, y un año menos de inversión.”'},
   {w:'A',s:'<strong>R ·</strong> “¿Ese año hace diferencia en lo que te propusiste?”'}])},
 {t:'Para posgrado', c:dlg([
   {w:'A',s:'<strong>C ·</strong> “La especialización dura once meses académicos y te entrega dos títulos con una sola matrícula: el de Especialista CEIPA y un Máster Ejecutivo de EIG España, que es título propio español, no convalidable en Colombia, para que lo tengas claro desde ya.”'},
   {w:'A',s:'<strong>V ·</strong> “Lo que significa que en menos de un año fortaleces tu perfil con respaldo nacional e internacional.”'},
   {w:'A',s:'<strong>B ·</strong> “Y como el bloque gerencial es transversal, compartes clase con profesionales de otros énfasis: la red que construyes vale tanto como el contenido.”'},
   {w:'A',s:'<strong>R ·</strong> “¿La red de contactos es algo que estés buscando también?”'}])},
 {t:'Para quien teme no ser capaz', c:dlg([
   {w:'A',s:'<strong>C ·</strong> “Tenemos BienSer, que es todo el acompañamiento al estudiante: asesoría psicológica, orientación, acompañamiento académico a quien se está quedando atrás.”'},
   {w:'A',s:'<strong>V ·</strong> “Lo que significa que si en algún momento te cuesta, hay a quién acudir antes de pensar en retirarte.”'},
   {w:'A',s:'<strong>B ·</strong> “Tú me decías que te retiraste una vez porque te sentiste solo. Acá eso se detecta y se acompaña.”'},
   {w:'A',s:'<strong>R ·</strong> “¿Eso te da más tranquilidad para intentarlo otra vez?”'}])}
])}

<h2>Guiones por situación</h2>
${acc('Lead nuevo — llamada de primer contacto', `
 ${tbl(['Bloque','Intención','Tiempo'],[
  ['Apertura','Que baje la guardia y acepte conversar','1 min'],
  ['Contexto','Entender su situación actual','2 min'],
  ['Necesidad','Entender qué quiere lograr','2 min'],
  ['Profundidad','Encontrar el obstáculo y el miedo','2 min'],
  ['Resumen-espejo','Que confirme que lo entendiste','30 s'],
  ['Demostración','Uno o dos CVBR seleccionados','3 min'],
  ['Pre-cierre','Intentar cerrar','1 min'],
  ['Siguiente paso','Concretar fecha','1 min']
 ])}
 <h4>Apertura</h4>
 ${dlg([{w:'A',s:'“Hola [nombre], soy [tu nombre], de CEIPA. ¿Te agarro en buen momento?”'},{w:'A',s:'“Te llamo porque dejaste tus datos [cuándo]. No te voy a leer un folleto, tranquilo: prefiero entender qué estás buscando y te digo con franqueza si CEIPA te sirve o no. ¿Va?”',n:'Pide permiso al tiempo, anticipa que no será un monólogo y ofrece honestidad, que es lo que el prospecto no espera.'}])}
 <h4>Preguntas por bloque</h4>
 <p><strong>Contexto:</strong> “¿Qué estás haciendo ahora: estudiando, trabajando, las dos?” · “¿Cómo son tus días entre semana?” · “¿Qué te hizo empezar a buscar universidad justo ahora?” <em>(no te saltes esta)</em></p>
 <p><strong>Necesidad:</strong> “¿Qué quieres que cambie en tu vida profesional cuando termines?” · “Si te imaginas graduado, ¿en qué te ves trabajando?”</p>
 <p><strong>Profundidad:</strong> “¿Qué ha hecho que no hayas empezado antes?” · “¿Alcanzaste a cursar semestres en otra institución?” · “Cuando decides algo así, ¿lo decides solo o lo hablas con alguien?”</p>
 <h4>Desvíos típicos</h4>
 ${tbl(['El prospecto dice','Tú respondes'],[
  ['“Mándame la info por WhatsApp” (minuto 1)','“Te la mando de una, claro. Solo dime dos cosas para no mandarte cinco documentos que no te sirvan: ¿qué programa te interesa y cómo son tus tiempos?”'],
  ['“¿Cuánto vale?” (minuto 1)','“Te digo el valor exacto en un momento, y de hecho depende del programa y la modalidad. ¿Qué programa estás mirando?”'],
  ['“Estoy en el trabajo”','“Sin problema. ¿Te llamo a las 6 o mejor mañana temprano?”']
 ])}`)}
${acc('El que solo pidió precio', `
 <p>El error clásico es responder la pregunta literal. La intención es convertir una consulta de precio en una conversación de valor, <strong>sin evadir la pregunta</strong>, que es lo que genera desconfianza.</p>
 ${dlg([
  {w:'A',s:'“Con gusto. El valor depende del programa y la modalidad: en pregrado el núcleo, que son dos meses, va entre [rango validado] en virtual y [rango validado] en presencial. ¿Qué programa estás mirando para darte el dato exacto?”',n:'Responde parcialmente, con honestidad.'},
  {w:'A',s:'“Y te cuento algo que casi nadie pregunta y sí importa: en CEIPA se paga por núcleo, no por semestre. Un núcleo dura dos meses, se hacen cinco al año y la carrera es de cuatro años, no de cinco. Entonces el comparativo real no es el valor del período: es cuánto te cuesta llegar al título.”',n:'Reencuadra hacia el valor.'},
  {w:'A',s:'“¿Tú estás comparando con alguna otra universidad? ¿Y qué es lo que más te importa en esta decisión: el costo, el tiempo, o que puedas estudiar sin dejar el trabajo?”',n:'Vuelve a preguntar.'}])}
 ${note('error','Nunca','<p>“El precio es lo de menos” o “eso lo hablamos después”. Ambas suenan a que hay algo que esconder.</p>')}`)}
${acc('Bachiller reciente con acudiente', `
 <p>Dos interlocutores, dos preocupaciones distintas. El error es hablarle solo a uno.</p>
 <p><strong>Al joven:</strong> “¿Tú ya tienes idea de qué quieres estudiar o todavía estás explorando?” · “¿Qué materias te gustaban en el colegio?” · “¿Qué te imaginas haciendo en unos años: en una empresa, con tu propio negocio, en algo más técnico?”</p>
 <p><strong>Al acudiente:</strong> “Y para usted, ¿qué es lo más importante a la hora de elegir universidad?” Casi siempre responderá algo del par validez, empleabilidad y costo. Eso te dice qué argumentar.</p>
 ${tbl(['Para el joven','Para el acudiente'],[
  ['“Vas a trabajar con empresas reales desde los primeros núcleos, no solo en teoría”','“La institución está Acreditada en Alta Calidad y vigilada por el Ministerio de Educación”'],
  ['“Estudias un solo núcleo a la vez: es más fácil concentrarte”','“La carrera es de 4 años, no de 5: es un año menos de inversión”'],
  ['“Tienes orientación vocacional y acompañamiento si te sientes perdido”','“9 de cada 10 egresados consiguen empleo: 89,8% frente al 77,4% nacional”']
 ])}
 <p><strong>Duda vocacional, la más frecuente en este perfil:</strong> “Y si todavía no está seguro de la carrera, eso también lo acompañamos: hay orientación vocacional dentro de BienSer. Vale más elegir bien ahora que cambiar en el tercer semestre.”</p>`)}
${acc('Adulto que trabaja', `
 <p>Este prospecto no necesita que lo convenzan de estudiar: necesita creer que <strong>esta vez sí puede</strong>.</p>
 <p><strong>Apertura empática, sin condescendencia:</strong> “¿Hace cuánto vienes pensando en retomar?” · “¿Habías empezado algo antes?”</p>
 ${dlg([
  {w:'A',s:'“¿Y qué pasó? ¿Fue por tiempo, por plata, o porque se te hizo muy pesado?”',n:'Si dice que se retiró antes, esta es la conversación clave.'},
  {w:'A',s:'“Tiene todo el sentido. Y es justo por eso que te voy a explicar cómo funciona acá, porque es diferente a lo que viviste.”',n:'Reconoce el miedo, no lo minimices.'}])}
 <p><strong>Demostración en tres puntos, y solo tres:</strong> un núcleo a la vez; flexibilidad real con clase grabada y plataforma 24/7; y no estás solo, con acompañamiento docente, foros y BienSer.</p>
 <p><strong>Pregunta de homologación, nunca se omite:</strong> “¿Cuántos semestres alcanzaste a cursar y hace cuánto? Porque si fue hace menos de diez años, podemos mirar homologación: se reconoce hasta el 50% del plan.”</p>`)}
${acc('Profesional que busca posgrado', `
 <p>Conversación entre pares: bajar el registro comercial y subir el nivel de contenido.</p>
 <p><strong>Apertura:</strong> “Cuéntame qué haces hoy y hacia dónde quieres moverte.” · “¿Buscas profundizar donde ya estás, o cambiar de rol?” · “¿Hay algo puntual que te esté frenando: un ascenso, una vacante, un cambio de sector?”</p>
 <p><strong>Pregunta de decisión:</strong> “¿La empresa te apoya con estudios o lo asumes tú?” Si la empresa apoya, cambia todo el seguimiento: hay un tercero con tiempos propios.</p>
 <p><strong>Argumento de red, muy subutilizado:</strong> “El bloque gerencial es transversal: compartes clase con profesionales de otros énfasis. Para muchos, la red que construyen ahí termina valiendo tanto como el contenido.”</p>
 <p><strong>Argumento de aplicación inmediata:</strong> “El modelo trabaja sobre problemas reales. Si tienes un reto abierto en tu área, ese puede ser tu proyecto. Literalmente aplicas el lunes lo que viste el sábado.”</p>
 <p><strong>Pre-cierre profesional:</strong> “¿Qué te haría falta saber para tomar la decisión?” Saca la objeción real sin presionar.</p>`)}
${acc('Emprendedor o independiente', `
 <p><strong>Apertura por el negocio, no por la carrera:</strong> “Cuéntame del negocio: ¿hace cuánto, con cuánta gente, qué es lo que más te está costando hoy?”</p>
 <p><strong>Conecta el dolor del negocio con el modelo:</strong> “Lo que me describes es exactamente el tipo de problema con el que se trabaja acá. El eje del modelo es un proyecto aplicado sobre una empresa real, y en tu caso esa empresa puede ser la tuya.”</p>
 <p><strong>Manejo anticipado del tiempo, su objeción segura:</strong> “Sé que el tiempo es tu limitante. Por eso te propongo mirar virtual: un encuentro sincrónico a la semana, que además queda grabado, y el resto lo manejas tú. ¿Eso es compatible con tu operación?”</p>`)}
${acc('WhatsApp: reglas y secuencia', `
 <p><strong>Reglas del canal:</strong> máximo 4 líneas por mensaje · una idea por mensaje · nombra algo que <em>él</em> dijo, no algo que tú dijiste · termina en pregunta cerrada con dos opciones · nunca mandes tres documentos de golpe.</p>
 ${dlg([
  {w:'A',s:'“Hola [nombre], soy [tu nombre] de CEIPA 👋 Vi que estabas mirando [programa]. Antes de mandarte información que de pronto no te sirve: ¿lo tuyo es más por tema de horarios o por tiempo de la carrera? Con eso te mando solo lo que aplica.”',n:'Mensaje 1 — primer contacto tras dejar datos.'},
  {w:'A',s:'“[Nombre], como quedamos: acá va el plan de estudios de [programa]. Mira sobre todo la parte del proyecto aplicado, que es lo que te mencioné de trabajar con empresas reales. Te llamo el jueves a las 6 ✅”',n:'Mensaje 2 — después de la llamada.'},
  {w:'A',s:'“[Nombre], te tengo la respuesta de lo que quedó pendiente: en virtual el encuentro es uno a la semana y queda grabado, así que un turno cambiado no te descuadra. ¿Eso resuelve lo que te preocupaba?”',n:'Mensaje 3 — seguimiento con valor nuevo.'},
  {w:'A',s:'“[Nombre], el próximo núcleo arranca el [fecha]. Si quieres entrar en ese, la inscripción sería esta semana. ¿Lo hacemos hoy o lo miramos el viernes?”',n:'Mensaje 4 — urgencia real, solo al final de la secuencia.'}])}
 ${note('error','Mensajes que no se envían','<ul><li>“¿Ya tomaste una decisión?”</li><li>“Quedo atento a cualquier inquietud”</li><li>Bloques de más de 6 líneas</li><li>Audios largos sin preguntar si puede escucharlos</li></ul>')}`)}
${acc('El que “quiere pensarlo”', `
 <p>No es una objeción todavía: es una conversación que no terminó.</p>
 ${dlg([
  {w:'A',s:'“Claro, es una decisión importante y me parece bien que la pienses.”',n:'Acepta sin resistencia: bajar la guardia es lo que hace hablar.'},
  {w:'A',s:'“¿Te puedo preguntar una sola cosa antes de colgar? ¿Qué es lo que te falta resolver para decidir?” o “Si fuera gratis, ¿empezarías mañana?”',n:'Si responde sí, la objeción es dinero. Si responde no, es producto o momento.'},
  {w:'A',s:'“Perfecto. Entonces no te llamo a preguntarte si decidiste, eso es incómodo. Te llamo el [día] con el dato de [lo que necesita] y ahí decides con todo sobre la mesa. ¿Te sirve?”',n:'Si de verdad necesita tiempo, agenda el pensamiento.'}])}`)}
${acc('Reactivación de prospecto frío', `
 <p>Reabrir sin pedir nada. Quien da, reabre. Quien pide, se quema.</p>
 <p><strong>Abre dando:</strong> “Hola [nombre]. Me acordé de ti porque salió [convocatoria / fecha de nuevo núcleo / información del programa] y tú me habías dicho que [lo que él dijo] te interesaba. Te lo comparto por si te sirve, sin compromiso.”</p>
 <p><strong>Pregunta abierta y baja presión:</strong> “¿Cómo va eso que me contabas de [su situación]?”</p>
 <p><strong>Si responde:</strong> vuelve a diagnóstico, no a argumentación. “¿Sigue en pie lo de estudiar, o cambió el panorama?”</p>
 <p><strong>Si no responde tras 3 contactos con valor distinto:</strong> “[Nombre], no quiero volverme insistente. Te dejo mi contacto y quedo disponible cuando sea el momento. Si prefieres, te escribo cuando abran inscripciones del próximo período. ¿Te parece?”</p>`)}
${acc('Cierre operativo — cuando ya dijo que sí', `
 <p>Aquí se pierde gente por desorden, no por argumentos.</p>
 ${dlg([
  {w:'A',s:'“Excelente decisión, [nombre]. Comencemos con el proceso ahora mismo. ¿Me confirmas tu número de documento?”',n:'Confirma con seguridad y pide el dato pequeño primero.'},
  {w:'A',s:'“Son tres cosas: primero diligenciamos la solicitud en inscribete.ceipa.edu.co, te paso el enlace y lo hacemos juntos ahora si quieres. Segundo, me compartes foto tipo documento con fondo blanco, diploma y acta de bachiller, y el resultado de las Saber 11. Y tercero, te explico el tema de inversión: la inscripción se paga una sola vez, el seguro estudiantil es anual, y luego cada núcleo.”',n:'Enumera la ruta completa.'},
  {w:'A',s:'“Y antes de que pagues cualquier cosa, miremos homologación: si cursaste hace menos de diez años, te pueden reconocer hasta el 50% del plan. Eso puede cambiarte el tiempo y el costo total.”',n:'Si estudió antes.'},
  {w:'A',s:'“Te llamo mañana a las [hora] para revisar que todo haya subido bien. ¿Te sirve?”',n:'Cierra con fecha, no con despedida.'}])}`)}

<h2>Banco de respuestas a objeciones</h2>
<p>Cada respuesta sigue el método: <strong>reconocer → preguntar → responder con dato real → reconducir</strong>.</p>
${tabs([
 {t:'Producto', c:`
  <h4>“No conozco CEIPA, ¿esa universidad sí es reconocida?”</h4>
  <p>“Es una pregunta justa, la haría cualquiera. ¿Qué es lo que te gustaría confirmar: que el título sea válido, o cómo nos ven las empresas?”</p>
  <p><em>Si es validez:</em> “Somos Fundación Universitaria CEIPA, vigilada por MINEDUCACIÓN. Todos los programas tienen Registro Calificado, y además la institución está Acreditada en Alta Calidad por Resolución 016362 de 2026, un reconocimiento voluntario que no todas las instituciones tienen. Llevamos 52 años.”</p>
  <p><em>Si son las empresas:</em> “El 95,81% de nuestros estudiantes y egresados dicen que el título CEIPA es un factor diferenciador en el mercado laboral, y la empleabilidad es del 89,8% frente a 77,4% nacional.”</p>
  <p><em>Reconducción:</em> “¿Eso responde lo que te preocupaba, o hay algo más que quieras confirmar?”</p>
  <h4>“Voy a mirar otras universidades”</h4>
  <p>“Me parece sensato, es una decisión grande. ¿Te puedo ayudar con eso? Te doy los criterios con los que yo compararía, aunque no termines eligiéndonos: uno, si la institución tiene acreditación institucional o solo registro. Dos, cuánto dura realmente la carrera, acá son 4 años y no 5. Tres, si vas a hacer proyectos con empresas reales o solo teoría. Y cuatro, qué pasa con el acompañamiento si te atrasas.”</p>
  ${note('error','Nunca hables mal de otra institución','<p>Da criterios y deja que el prospecto compare solo. Descalificar te vuelve sospechoso.</p>')}
  <h4>“¿La modalidad virtual no es más floja?”</h4>
  <p>“Es la duda más común y tiene explicación. ¿Qué te preocupa específicamente: que aprendas menos, o que el título valga menos?”</p>
  <p><em>Título:</em> “El título es exactamente el mismo. No cambia el título, cambia la experiencia.”</p>
  <p><em>Aprendizaje:</em> “El modelo es el mismo en las dos modalidades: mismo núcleo problémico, mismos entregables —entregas parciales, quiz, pitch y proyecto de consultoría— y mismo docente. Y las aulas híbridas permiten que el estudiante remoto esté en la misma clase, en tiempo real, no viendo una grabación.”</p>
  <h4>“Todavía no sé qué quiero estudiar”</h4>
  <p>“Eso está perfectamente bien y es mejor decirlo ahora que en el tercer semestre. ¿Qué materias disfrutabas y qué tipo de trabajo te imaginas? Y algo importante: dentro de BienSer hay orientación vocacional. No tienes que llegar con la decisión tomada, se puede acompañar.”</p>
  <h4>“¿El título de EIG sirve en Colombia?”</h4>
  <p>“Buena que lo preguntes, y te lo aclaro con total franqueza: el Máster Ejecutivo de EIG es un título propio español, no convalidable en Colombia. Lo que sí hace es sumar peso internacional a tu hoja de vida y darte formación con una escuela española con más de 30 años de trayectoria. El título con validez oficial en Colombia es el de Especialista CEIPA.”</p>
  <h4>“Prefiero una universidad con campus grande y vida universitaria”</h4>
  <p>“Lo entiendo, eso pesa. ¿Qué es lo que más te importa de eso: la experiencia social, la infraestructura, o el networking?” Para lo social: BienSer con eventos culturales, actividad física, tertulias y talleres, y un modelo colaborativo con equipos de otros programas en cada núcleo. Para networking: en posgrado el bloque gerencial es transversal.</p>`},
 {t:'Tiempo', c:`
  <h4>“No tengo tiempo”</h4>
  <p>“Te creo, y es la razón número uno por la que la gente aplaza esto. ¿Cómo es tu semana? Dime cómo son tus días.” Escucha y luego ajusta: “Con eso que me cuentas, la virtual encaja: un encuentro sincrónico a la semana, que además queda grabado, más una asesoría grupal. El resto lo manejas cuando puedas, con plataforma 24/7. Y estudias un solo núcleo a la vez, no cinco materias simultáneas.”</p>
  <h4>“Mejor el próximo año”</h4>
  <p>“¿Qué va a ser distinto el otro año?” <em>(silencio)</em></p>
  <p><em>Si no hay razón concreta:</em> “Te lo pregunto sin presión: si esperas un año, te gradúas un año después. Acá la carrera son cuatro años; el otro año serían cinco desde hoy.”</p>
  <p><em>Si hay razón concreta —un viaje, un nacimiento, un cambio de trabajo—:</em> “Eso sí tiene sentido. Te escribo en [mes] cuando ya estés instalado, y miramos el núcleo que empieza en esa fecha.”</p>
  <h4>“Tengo que hablarlo con mi esposo o mis papás”</h4>
  <p>“Claro, y me parece bien que sea una decisión de los dos. ¿Qué crees que va a ser lo primero que te pregunte?” Casi siempre: costo o validez. Prepáralo.</p>
  <p><em>La jugada que más cierra:</em> “¿Te parece si hacemos una llamada corta los tres? Así no te toca a ti explicarlo todo y él o ella pregunta directo lo que quiera. ¿Qué día están juntos?”</p>
  <h4>“Estoy muy viejo para estudiar”</h4>
  <p>“¿Puedo decirte algo? Esa frase la escucho mucho, y casi siempre viene de alguien que lleva años pensándolo. ¿Hace cuánto le das vueltas a esto?” Luego: el modelo está pensado para adultos que trabajan, y si estudió antes se puede homologar hasta el 50%.</p>
  <h4>“Ya intenté antes y me retiré”</h4>
  <p>“¿Qué pasó?” <em>(escucha sin interrumpir: aquí está todo)</em></p>
  <p><em>Si fue por acompañamiento:</em> “Eso es justo lo que acá se trabaja distinto: hay acompañamiento docente permanente, foros de consulta, y BienSer acompaña a quien está con bajo rendimiento antes de que llegue a pensar en retirarse.”</p>
  <p><em>Si fue por tiempo:</em> “Entonces la modalidad importa más que el programa. Miremos primero cómo son tus tiempos.”</p>`},
 {t:'Dinero', c:`
  ${note('key','Principio que ordena todo este bloque','<p>Si la objeción de dinero aparece con fuerza, casi siempre el problema está <strong>antes</strong>: no se instaló suficiente valor.</p>')}
  <h4>“Está muy caro”</h4>
  <p>“¿Caro comparado con qué?” <em>(sin tono defensivo, es una pregunta genuina)</em></p>
  <p><em>Si compara con otra universidad:</em> “Miremos el comparativo completo, no solo el valor del período. Acá pagas por núcleo, que son dos meses, cinco veces al año, durante cuatro años. Allá pagas por semestre, dos veces al año, durante cinco años. La pregunta real es cuánto te cuesta llegar al título, y cuánto vale ese año que ganas.”</p>
  <p><em>Reconducción:</em> “¿Tu tema es el valor total o el flujo mensual? Porque son dos conversaciones distintas.”</p>
  <h4>“En otra universidad es más barato”</h4>
  <p>“Puede ser, y es válido compararlo. ¿Me dejas darte tres cosas para que la comparación sea justa? Uno, duración: acá son 4 años, el esquema tradicional suele ser 5. Dos, qué incluye: plataforma 24/7, acompañamiento docente, proyecto aplicado con empresas reales, BienSer y acceso al portafolio de internacionalización. Y tres, qué pasa después: 89,8% de empleabilidad y la mitad de nuestros egresados entre 2,5 y 6 salarios mínimos, frente a 1,5 a 2,5 del promedio nacional.”</p>
  <h4>“No tengo cómo pagarlo ahora”</h4>
  <p>“Gracias por decírmelo con franqueza, así podemos mirar opciones reales en vez de dar vueltas. ¿Tu situación es de ahora o es algo más de fondo? Porque si es de ahora, podemos mirar el núcleo que empieza en [fecha] y te preparas con tiempo.” Y si aplica: “si tienes carta laboral y tu empresa tiene alianza con nosotros, eso puede cambiar las condiciones. ¿Dónde trabajas?”</p>
  <h4>“¿Hay becas o descuentos?”</h4>
  ${note('alert','Información pendiente de complementar','<p>La documentación entregada no detalla el esquema general de becas y descuentos de matrícula. Sí están documentados los beneficios económicos de internacionalización y el pago mensual sin costo de financiación en el convenio ESIC. Solicitar al área financiera el listado vigente.</p><p style="margin-top:.4rem"><strong>Mientras tanto:</strong> “Déjame confirmarte con el área financiera qué beneficios aplican hoy para tu caso. Te respondo hoy mismo con información exacta, prefiero eso a decirte algo impreciso.”</p>')}
  <h4>“¿Y si me retiro, pierdo la plata?”</h4>
  ${note('alert','Información pendiente de complementar','<p>Documentar la política institucional de retiro, reintegro y aplazamiento con admisiones o financiera.</p><p style="margin-top:.4rem">Lo que sí puedes decir: “lo que buscamos es que no llegues a ese punto. Por eso existe el acompañamiento de BienSer para quien se está atrasando.”</p>')}`},
 {t:'Específicas de CEIPA', c:`
  <h4>“¿Por qué solo estudio una materia a la vez? ¿Eso no es muy poco?”</h4>
  <p>“Al revés: un núcleo problémico no es una materia. Es un problema real de empresa que integra varias áreas al tiempo —estrategia, finanzas, personas, datos— durante ocho semanas. Aprendes más, no menos, porque no estás fragmentando la atención entre cinco cosas.”</p>
  <h4>“Las clases híbridas nocturnas son obligatorias, no puedo siempre”</h4>
  <p>“Es correcto y quiero ser claro: en híbrida las dos sesiones semanales son obligatorias porque garantizan el aprendizaje. ¿Cuál es el día que no puedes?” Si el programa lo permite, mira otra modalidad. Si no: “prefiero decírtelo de frente: si no puedes sostener esas dos noches, no es el programa indicado para ti en este momento, y te lo digo para que no inviertas y te frustres.”</p>
  ${note('do','Decir esto es vender','<p>Un asesor que desaconseja cuando corresponde gana credibilidad para todo lo que diga después.</p>')}
  <h4>“¿Cuántos semestres me homologan?”</h4>
  <p>“No te puedo dar un número sin el estudio, y no quiero inventártelo. Lo que sí te digo son las reglas: hasta el 50% del plan, asignaturas de máximo 10 años, notas originales con créditos y fechas, una sola vez y antes de iniciar. ¿Me compartes tus notas y lo mandamos a estudio?”</p>
  <h4>“¿El programa es el mismo en Sabaneta y Barranquilla?”</h4>
  <p>“El modelo y el título son los mismos. Lo que cambia es la oferta de modalidades disponible en cada nodo: por ejemplo, la metodología blended con encuentros presenciales es del Nodo Barranquilla. Déjame confirmarte exactamente qué aplica para tu programa en tu ciudad.”</p>
  <h4>“Quiero irme de intercambio, ¿me lo garantizan?”</h4>
  <p>“Puedo contarte el portafolio y los beneficios económicos, pero no garantizarte un cupo: las convocatorias cambian cada período y tienen requisitos de postulación. Lo que sí es cierto es que hay rutas que no requieren viajar, como eMOVIES o PALOMA. ¿Quieres que te ponga en contacto con la Dirección de Internacionalización?”</p>`}
])}

<h2>Frases que hay que sacar del vocabulario</h2>
${tbl(['No digas','Di'],[
 ['“Nosotros ofrecemos…”','“Lo que te sirve a ti es…”'],
 ['“Somos los mejores”','“Esto es lo que nos hace distintos: [dato verificable]”'],
 ['“¿Le interesa?”','“¿Qué te llamó la atención?”'],
 ['“Es muy económico”','“La inversión por núcleo es X, y esto incluye…”'],
 ['“Quedo atento”','“Te llamo el jueves a las 6”'],
 ['“Obviamente” / “Como le decía”','Nada: suenan condescendientes'],
 ['“El sistema no me deja”','“Déjame confirmarlo y te respondo hoy”'],
 ['“Creo que sí aplica”','“Lo verifico y te confirmo”']
])}
${note('key','La prueba final de un guion','<p>Un guion bien usado no se nota. Se nota cuando no lo hay.</p>')}
`;
/* ===== BIBLIOTECA DE CASOS ===== */
const CAT = ['Comparación','Precio','Tiempo','Modalidad','Financiación','Reconocimiento','Perfil','Seguimiento','Cierre','Dato institucional'];
const CASOS = [
{c:'Perfil',d:1,ctx:'Llamada a un lead que dejó datos anoche.',s:'“Hola, buenas noches. Quiero información de administración de empresas. Es que yo trabajo todo el día y ya tengo 34 años, no sé si todavía valga la pena.”',r:'Decidir qué preguntas haces y qué único dato incluyes en tu primera respuesta.',e:'Dos preguntas: “¿qué te hizo empezar a buscar justo ahora?” y “¿alcanzaste a estudiar algo antes?”. Un solo dato: que el modelo está diseñado para adultos que trabajan.',j:'“No sé si valga la pena” no es una duda sobre el programa: es una duda sobre sí mismo. La necesidad declarada es información; la real es validación. El disparador explica por qué llamó hoy y no hace dos años, y la pregunta por estudios previos activa homologación, que es justo lo que cambia tiempo y costo.',a:'La necesidad declarada casi nunca es la necesidad real. Pregunta por el disparador antes de informar.'},
{c:'Perfil',d:1,ctx:'Mostrador, media mañana.',s:'Llega una señora con su hijo de 17 años. Ella habla todo el tiempo; él mira el celular y no levanta la vista.',r:'Definir a quién le haces la primera pregunta y cómo integras al joven.',e:'Primera pregunta al joven: “¿tú qué estabas pensando estudiar?”. Si dice que no sabe: “tranquilo, la mayoría no sabe a los 17, ¿qué materia se te hacía menos aburrida?”. A la madre después: “¿para usted qué es lo más importante al elegir universidad?”.',j:'Hay dos interlocutores con preocupaciones distintas: él teme equivocarse y aburrirse; ella teme por la validez, el costo y la empleabilidad. Si el joven no se conecta, se cae en el primer núcleo aunque la matrícula se cierre.',a:'Con acudiente, la primera pregunta siempre es para quien va a estudiar.'},
{c:'Precio',d:1,ctx:'WhatsApp, primer mensaje del aspirante.',s:'“Buenas, ¿cuánto vale la carrera de contaduría?”',r:'Responder sin evadir y sin convertir la conversación en una cotización.',e:'“Con gusto. Acá se paga por núcleo, que son dos meses, no por semestre. En Contaduría el núcleo virtual está en $1.972.632 y son cinco al año. Antes de darte el detalle exacto: ¿lo estás mirando en virtual o necesitas encuentros presenciales?”',j:'Evadir el precio genera desconfianza inmediata. Lo correcto es responder con una cifra real y reencuadrar la unidad de medida —núcleo en vez de semestre—, que es lo que hace comparable la oferta, y devolver una pregunta que retome el diagnóstico.',a:'Al precio se responde con precio, pero con la unidad de medida correcta y una pregunta detrás.'},
{c:'Comparación',d:2,ctx:'Segunda llamada, el aspirante ya tiene cotizaciones de dos universidades.',s:'“En la otra me sale casi un millón menos por semestre, y es una universidad que todo el mundo conoce.”',r:'Responder sin descalificar y sin bajar el precio.',e:'“Me parece sensato que compares. ¿Me dejas darte tres cosas para que la comparación sea justa? Duración real: acá son cuatro años, no cinco. Qué incluye: plataforma 24/7, proyecto aplicado con empresas reales, BienSer e internacionalización. Y qué pasa después: 89,8% de empleabilidad frente a 77,4% nacional. Haciendo esa cuenta completa, ¿sigue siendo más caro?”',j:'La objeción mezcla precio y reconocimiento de marca. Dar criterios posiciona al asesor como asesor; descalificar lo vuelve sospechoso. El año de diferencia convierte la comparación de precio por período en una comparación de costo total y de ingreso profesional anticipado.',a:'Nunca se habla mal de otra institución: se entregan criterios de comparación.'},
{c:'Reconocimiento',d:1,ctx:'Primera llamada.',s:'“¿Y esa universidad sí es reconocida o es como un instituto?”',r:'Responder con precisión sin sonar defensivo.',e:'“Es Fundación Universitaria CEIPA, institución de educación superior privada y sin ánimo de lucro, vigilada por MINEDUCACIÓN. Todos los programas tienen Registro Calificado y además la institución está Acreditada en Alta Calidad, que solo tiene el 36% de las instituciones del país. ¿Te explico la diferencia entre esas dos cosas?”',j:'La pregunta busca seguridad jurídica, no historia. Primero la categoría institucional y el ente que vigila; el dato del 36% convierte la acreditación en comparativo, y la pregunta final abre la siguiente puerta en vez de cerrar el tema.',a:'Registro Calificado es el piso legal; la acreditación institucional es el diferencial.'},
{c:'Modalidad',d:3,ctx:'Aspirante interesado en Ingeniería Industrial, con buen diagnóstico y capacidad de pago.',s:'“Yo trabajo hasta las 8 de la noche todos los días, no puedo conectarme a las 6:15.”',r:'Decidir si cierras la venta.',e:'“Te lo digo de frente: en Ingeniería esas dos sesiones semanales son obligatorias. Si no las puedes sostener, prefiero decírtelo ahora a que inviertas y te frustres. ¿Hay alguna posibilidad de ajustar tu horario dos días a la semana?” Si no la hay, explora otro programa de su interés con modalidad virtual o agenda para cuando cambie su situación laboral.',j:'Ingenierías y Derecho son híbrida nocturna con asistencia obligatoria; no existe versión virtual. Ofrecerla es información falsa y cerrar sin advertir es vender una deserción, que cuesta más que no cerrar.',a:'Desaconsejar cuando corresponde construye la credibilidad de todo lo que digas después.'},
{c:'Dato institucional',d:2,ctx:'Aspirante adulto en mostrador.',s:'“Yo ya estudié tres semestres de administración, pero eso fue hace doce años. ¿Me lo validan?”',r:'Responder sin crear una expectativa que no se va a cumplir.',e:'“Te respondo con precisión porque no quiero darte una expectativa equivocada: las asignaturas no pueden tener más de diez años. Con doce, lo más probable es que no apliquen. Lo que sí puedo hacer es mandarlo a estudio del líder académico para que te lo confirmen formalmente. ¿Tienes las notas originales con créditos y fechas?”',j:'El límite documentado es de diez años. Decir que sí genera una expectativa que se rompe cuando el aspirante ya pagó un estudio de homologación que no es reembolsable.',a:'Un dato incómodo dicho a tiempo cuesta menos que una expectativa rota después de matricular.'},
{c:'Financiación',d:2,ctx:'Aspirante de especialización, interesado y con objeción de flujo.',s:'“Me encanta el programa pero no tengo cómo pagar todo de una.”',r:'Resolver sin prometer beneficios no confirmados.',e:'“Gracias por decírmelo con franqueza. Primero, el programa no se paga de una: son dos bloques. Segundo, hay beneficios según tu caso: pronto pago, alianza empresarial, familiares de estudiantes activos y egresados. ¿Dónde trabajas y tienes algún vínculo previo con CEIPA? Con eso te armo la liquidación exacta hoy mismo.”',j:'La especialización se paga por bloques, lo que ya resuelve parte de la objeción. Los descuentos documentados van del 19,61% al 30,43% y dependen del perfil, así que la pregunta correcta es por el vínculo, no por la capacidad de pago.',a:'Antes de hablar de financiación, verifica qué beneficio le corresponde: suele resolver más que cualquier plan de cuotas.'},
{c:'Tiempo',d:1,ctx:'Llamada de seguimiento, segundo contacto.',s:'“Sí, me interesa, pero mejor el próximo año.”',r:'Distinguir si es objeción real o aplazamiento cómodo.',e:'“¿Qué va a ser distinto el otro año?” y esperar en silencio. Si no hay razón concreta: “si esperas un año, te gradúas un año después; acá la carrera son cuatro años, el otro año serían cinco desde hoy”. Si hay una razón concreta, agenda para esa fecha real.',j:'“El próximo año” es vago por definición y la pregunta lo obliga a concretarse. Si aparece una razón real —un viaje, un nacimiento, un cambio de trabajo— el aplazamiento es legítimo y lo correcto es agendar, no insistir.',a:'La vaguedad es la señal de la excusa. Una pregunta la convierte en objeción real o en un no honesto.'},
{c:'Seguimiento',d:2,ctx:'Tres semanas después de una conversación excelente sobre Gerencia de Proyectos.',s:'Diana dijo que lo hablaría con su jefe porque la empresa podría apoyarla. No respondió dos WhatsApp. Ayer vio tu estado y no escribió.',r:'Definir canal, valor nuevo y frase de apertura del próximo contacto.',e:'Llamada, no un tercer WhatsApp. Apertura: “Diana, no te llamo a preguntarte si decidiste. Te llamo porque estuve pensando en lo que me dijiste de que tu empresa podría apoyarte y armé algo que te sirve para plantearlo: cómo el proyecto del programa puede hacerse sobre un reto real de tu compañía.” Siguiente paso: “¿cuándo tienes reunión con tu jefe? Te llamo el día antes.”',j:'El obstáculo es un tercero, no el desinterés. Dos mensajes sin valor nuevo no cuentan para la regla del tres. El valor nuevo aquí es material que le sirva a ella para convencer internamente, más el argumento de alianza empresarial, que es un descuento del 24,39% en especialización.',a:'Cuando hay un decisor ausente, el valor nuevo es la munición que el aspirante necesita para convencerlo.'},
{c:'Cierre',d:1,ctx:'Llamada de quince minutos, diagnóstico completo, el aspirante asiente y pregunta por documentos.',s:'“¿Y qué papeles se necesitan?”',r:'Reconocer la señal y cerrar.',e:'“Son cinco: la solicitud en inscribete.ceipa.edu.co, foto tipo documento con fondo blanco, diploma y acta de bachiller, resultado de las Saber 11 y carta laboral si tu empresa tiene alianza. ¿Me confirmas tu número de documento y arrancamos el proceso ahora?”',j:'Preguntar por requisitos es una señal de compra, no una consulta informativa. Responder la lista y no proponer el siguiente paso deja la conversación abierta y la enfría. El cierre pide un dato pequeño y concreto, no un compromiso emocional.',a:'Cuando preguntan por documentos, ya decidieron. Cierra.'},
{c:'Precio',d:2,ctx:'Aspirante de MBA, perfil directivo.',s:'“Cincuenta y siete millones me parece una barbaridad.”',r:'Sostener el valor sin justificarte.',e:'“Es una inversión grande, sí. Dos cosas: no se paga de una, son cuatro bloques. Y el precio de lista rara vez es el que paga la gente: si eres egresado de posgrado CEIPA el programa queda en $46.195.540, y con alianza empresarial en $51.157.093. ¿Cuál es tu caso?”',j:'Los descuentos autorizados del MBA van del 5,57% al 19,09%. Mencionar el valor con beneficio convierte una cifra abstracta en una conversación sobre el caso concreto, y la división en bloques responde el problema de flujo sin prometer financiación.',a:'El precio de lista es el punto de partida de la conversación, no su conclusión.'},
{c:'Modalidad',d:2,ctx:'Aspirante de Contaduría Pública en Barranquilla.',s:'“Entonces, ¿es virtual o tengo que ir a la sede?”',r:'Explicar una estructura mixta sin confundir.',e:'“En Contaduría cambia según el tipo de núcleo. Los núcleos comunes los puedes hacer virtuales o en blended, que es 80% virtual con tres asesorías presenciales acá en El Prado. Los núcleos específicos de la carrera son híbridos, con encuentro sincrónico. Es importante que lo sepas desde ahora para que planees.”',j:'Contaduría es el único pregrado con modalidades distintas según el tipo de núcleo. Omitirlo genera una sorpresa a mitad de carrera que suele terminar en reclamo o deserción.',a:'Las condiciones que cambian a mitad del plan se advierten antes de matricular, no después.'},
{c:'Reconocimiento',d:2,ctx:'Aspirante de especialización, entusiasmado con el componente internacional.',s:'“Lo que más me emociona es el título de España, porque quiero irme a trabajar allá.”',r:'Aclarar sin desinflar la venta.',e:'“Te lo aclaro con total franqueza antes de seguir: el Máster Ejecutivo de EIG es un título propio español, no convalidable en Colombia, y tampoco es un título habilitante para ejercer allá. Lo que sí hace es sumar peso internacional a tu hoja de vida y darte formación con una escuela española con más de 30 años. El título con validez oficial acá es el de Especialista CEIPA. Sabiendo eso, ¿el componente internacional te sigue interesando?”',j:'Es el dato de honestidad obligatoria del portafolio. Se dice siempre, sin que lo pregunten, y en este caso además corrige una expectativa laboral explícita. Ocultarlo destruye la relación después de la matrícula.',a:'Ningún entusiasmo justifica dejar correr una expectativa falsa.'},
{c:'Perfil',d:2,ctx:'Feria universitaria, hombre de unos 40 años.',s:'Mira los folletos sin tomar ninguno y dice: “Yo ya estoy muy viejo para esto.”',r:'Abrir sin contradecirlo, en cinco minutos.',e:'“¿Le puedo hacer una sola pregunta? ¿Hace cuánto le da vueltas a esto?” Luego: en qué trabaja, qué quería estudiar, qué lo ha detenido. Argumento único: homologación más modelo para adultos que trabajan. Siguiente paso: “si me trae las notas, mandamos a estudio la homologación. ¿Le llamo mañana a las 6?”',j:'“Nunca es tarde para estudiar” es una frase de tarjeta que contradice sin entender. Devolver su propia frase en forma de pregunta descubre que lleva años pensándolo, que es el disparador real.',a:'Devuelve la frase del aspirante en forma de pregunta en vez de contradecirla.'},
{c:'Tiempo',d:2,ctx:'Aspirante adulta, segunda llamada.',s:'“Ya intenté dos veces en otra universidad y me tocó retirarme las dos.”',r:'Convertir el antecedente en argumento.',e:'“¿Qué pasó?” y escuchar sin interrumpir. Si fue por acompañamiento: “acá hay acompañamiento docente permanente, foros de consulta y BienSer, que acompaña a quien está con bajo rendimiento antes de que piense en retirarse”. Si fue por tiempo: “entonces la modalidad importa más que el programa, miremos primero cómo son tus días”. Y siempre: “¿qué tendría que ser distinto esta vez para que sí funcione?”.',j:'El antecedente de deserción es el miedo central de este perfil. Minimizarlo lo confirma; explorarlo permite ofrecer exactamente el servicio que responde a la causa. Además abre la homologación de lo que alcanzó a cursar.',a:'Un retiro anterior no es un obstáculo: es el diagnóstico más preciso que te pueden dar.'},
{c:'Comparación',d:3,ctx:'Aspirante que compara CEIPA con una universidad pública gratuita.',s:'“Es que si paso a la pública no me cuesta nada.”',r:'Responder sin pelear contra algo que es cierto.',e:'“Tienes razón, y si pasas, es una gran opción. Dos preguntas honestas: ¿cuántas convocatorias llevas presentándote y cuánto tiempo estás dispuesto a esperar? Porque lo que yo puedo ofrecerte es empezar ahora y graduarte en cuatro años. Si entras el otro año a la pública y son cinco años, estaríamos hablando de una diferencia de dos años de vida profesional.”',j:'Negar la ventaja de la gratuidad destruye la credibilidad. El terreno real de la comparación no es el costo sino el tiempo de espera y la duración, donde CEIPA tiene un argumento verificable. Y si el aspirante tiene posibilidad real de pasar, lo honesto es decirlo.',a:'Cuando la ventaja del competidor es real, cambia el eje de la comparación en vez de negarla.'},
{c:'Financiación',d:2,ctx:'Barranquilla, aspirante afiliado a una caja de compensación.',s:'“Yo estoy en Combarranquilla, ¿eso me sirve para algo?”',r:'Responder sin prometer un valor que no has verificado.',e:'“Sí, hay beneficio por caja de compensación y Combarranquilla está dentro. El valor depende del programa y del esquema que te aplique, y no te lo quiero decir de memoria. Déjame verificarlo con la liquidación exacta y te la paso hoy mismo. ¿Qué programa estás mirando?”',j:'La documentación del nodo registra dos conjuntos de valores para las cajas —uno en la liquidación 2026 y otro en el esquema de doble titulación— y no son intercambiables. Dar una cifra de memoria casi garantiza un error.',a:'En Barranquilla el beneficio depende del canal y del esquema: se verifica siempre antes de cotizar.'},
{c:'Dato institucional',d:1,ctx:'Aspirante que leyó un brochure impreso.',s:'“Acá dice que la acreditación es de 2022 por cuatro años, o sea que ya se venció.”',r:'Corregir sin contradecir el material institucional.',e:'“Buen ojo. Ese brochure es anterior: la acreditación fue renovada. La vigente es la Resolución 016362 del 23 de junio de 2026, por seis años. Si quieres te paso la referencia para que la verifiques.”',j:'El material impreso antiguo cita la resolución anterior. Contradecir al aspirante sin explicar lo pone a la defensiva; explicar la renovación y ofrecer la verificación convierte una objeción en una demostración de transparencia.',a:'Cuando el material propio está desactualizado, se explica la actualización, no se discute con el aspirante.'},
{c:'Cierre',d:2,ctx:'Final de una conversación de quince minutos, todo bien, el aspirante no dice nada.',s:'“Interesante… bueno, déjame lo pienso y te aviso.”',r:'Hacer el intento de cierre sin presionar.',e:'“Claro, es una decisión importante. ¿Te puedo hacer una sola pregunta antes? ¿Qué es lo que te falta resolver para decidir?” Si responde algo concreto, trátalo. Si insiste en pensar: “perfecto, entonces no te llamo a preguntarte si decidiste. Te llamo el jueves con el dato de la homologación y ahí decides con todo sobre la mesa.”',j:'“Déjame pensarlo” en tono de despedida es una excusa, no una objeción: es vaga y llega antes del pre-cierre. La pregunta la convierte en objeción real o confirma que necesita tiempo, y el siguiente paso se agenda con un propósito distinto a pedir una respuesta.',a:'Nunca agendes un seguimiento para preguntar si ya decidió. Agenda para traer algo.'},
{c:'Modalidad',d:1,ctx:'Aspirante que trabaja por turnos rotativos.',s:'“Es que yo un mes trabajo de día y otro de noche, no puedo comprometerme a un horario fijo.”',r:'Verificar viabilidad antes de recomendar.',e:'“Entonces lo primero es el programa, porque no todos permiten lo mismo. En las carreras administrativas y en Marketing Digital puedes ir en virtual: un encuentro sincrónico a la semana que además queda grabado, y plataforma 24/7. En Ingenierías y Derecho no, porque esos tienen dos encuentros obligatorios. ¿Qué querías estudiar?”',j:'La restricción del aspirante define el conjunto de programas viables antes que su preferencia. Recomendar primero y verificar después produce matrículas que se caen.',a:'La modalidad no se elige por gusto: se deduce de la vida real del aspirante.'},
{c:'Precio',d:3,ctx:'Aspirante de pregrado que ya recibió la liquidación.',s:'“Oiga, pero usted me había dicho un valor y en la liquidación me salió más.”',r:'Resolver un error propio sin perder la venta.',e:'“Tienes razón en reclamar y te pido disculpas. Déjame revisar la liquidación contigo línea por línea: el valor del núcleo es uno, y aparte van la inscripción, que es $176.129 y se paga una sola vez, y el seguro estudiantil. Si yo te di una cifra incompleta, el error es mío. Vamos a dejar claro el valor total exacto ahora mismo.”',j:'El error más común es cotizar el núcleo sin los derechos pecuniarios. Reconocerlo de inmediato y desglosar la liquidación recupera la confianza; justificarse o culpar al sistema la destruye.',a:'El precio nunca viaja solo: cotiza siempre núcleo más derechos pecuniarios.'},
{c:'Perfil',d:2,ctx:'Aspirante con negocio propio, conversación telefónica.',s:'“Yo tengo una comercializadora con cuatro empleados, trabajo doce horas y la verdad no sé si tenga tiempo para esto.”',r:'Conectar el negocio con el modelo, no vender un horario.',e:'“Cuéntame del negocio: ¿qué es lo que más te está costando hoy?” Y luego: “lo que me describes es exactamente el tipo de problema con el que se trabaja acá. El eje del modelo es un proyecto aplicado sobre una empresa real, y en tu caso esa empresa puede ser la tuya. ¿Eso cambia cómo lo estabas viendo?”',j:'Este perfil teme perder tiempo en teoría. Convertir su operación en el objeto de estudio elimina la objeción de tiempo antes de que aparezca, porque el estudio deja de competir con el negocio y empieza a servirle.',a:'Al emprendedor no le vendas horarios: muéstrale que su empresa es el material de clase.'},
{c:'Seguimiento',d:1,ctx:'Aspirante caliente que pidió requisitos hace cuatro días y no ha respondido.',s:'No responde llamadas ni mensajes desde entonces.',r:'Decidir la cadencia y el contenido del contacto.',e:'Contacto en 24 a 48 horas mientras siga caliente, con valor nuevo: la respuesta a algo que quedó abierto o la fecha de inicio del próximo núcleo. Mensaje corto: “[Nombre], te confirmo lo que quedó pendiente de la homologación. ¿Te llamo hoy a las 6 o mañana a las 10?”',j:'Un aspirante que pidió requisitos está en el momento de mayor temperatura y es cuando más rápido se enfría. La cadencia es de 24 a 48 horas, con aporte nuevo en cada contacto y pregunta cerrada con dos opciones.',a:'La temperatura define la cadencia; el valor nuevo define si el contacto suma o quema.'},
{c:'Reconocimiento',d:2,ctx:'Acudiente, en la sede.',s:'“¿Y la virtual no es más floja? Yo quiero que mi hija tenga una carrera seria.”',r:'Separar la preocupación real.',e:'“Es la duda más común. ¿Qué le preocupa específicamente: que aprenda menos o que el título valga menos?” Si es el título: “es exactamente el mismo título, no cambia el documento, cambia la experiencia”. Si es el aprendizaje: “el modelo es el mismo en las dos modalidades: mismo núcleo, mismos entregables —entregas parciales, quiz, pitch y proyecto de consultoría— y mismo docente.”',j:'La objeción mezcla dos preocupaciones distintas y argumentar la equivocada la refuerza. La pregunta de separación es más eficiente que cualquier respuesta elaborada.',a:'Antes de responder una objeción, pregunta de cuál de sus dos caras se trata.'},
{c:'Tiempo',d:2,ctx:'Aspirante de especialización, profesional con hijos pequeños.',s:'“¿Los sábados completos? Es que esos días son de mis hijos.”',r:'Dar información exacta y dejar que decida.',e:'“En las híbridas son viernes de 6:15 a 9:15 y sábados de 8 a 12, o sea media mañana, no el día completo. Pero hay otra opción: Gerencia de Mercadeo, Proyectos y Financiera son virtuales, con dos horas de clase a la semana. ¿Cuál de las dos se acomoda mejor a tu familia?”',j:'El aspirante está suponiendo un compromiso mayor del real, y corregir el supuesto resuelve la objeción sin negociar nada. Además existe una alternativa virtual documentada para tres especializaciones.',a:'Muchas objeciones de tiempo se deshacen con el horario exacto, no con argumentos.'},
{c:'Financiación',d:3,ctx:'Aspirante de pregrado con dos beneficios posibles.',s:'“Yo soy egresado de ustedes y además mi empresa tiene convenio. ¿Me dan los dos descuentos?”',r:'Responder sin prometer acumulación.',e:'“Son dos beneficios reales: egresado y alianza empresarial. Lo que no te puedo asegurar de entrada es que se sumen, porque la acumulación tiene reglas. Déjame confirmarlo con el área financiera y te traigo la liquidación con el escenario que más te convenga. Te respondo hoy mismo.”',j:'La documentación lista los beneficios pero no establece de forma inequívoca cuáles son acumulables. Prometer una suma que después no se aplica es uno de los errores más caros, porque ocurre en el momento del pago.',a:'La acumulación de beneficios es un pendiente de validación: nunca se promete, se consulta.'},
{c:'Cierre',d:3,ctx:'Aspirante que dijo que sí hace cinco días, pero no ha subido documentos.',s:'“Sí, sí, tranquila, esta semana lo hago.”',r:'Convertir una intención en una acción con fecha.',e:'“Perfecto. ¿Lo hacemos ahora juntos? Son diez minutos: te paso el enlace y te voy guiando. Si prefieres hacerlo tú, dime a qué hora y te llamo justo después para verificar que haya quedado bien cargado.”',j:'Un sí sin siguiente paso concreto se enfría en 48 horas. Ofrecer hacerlo juntos elimina la fricción real, que suele ser no saber dónde está el enlace o no tener los documentos escaneados.',a:'El cierre termina cuando el aspirante sabe exactamente qué pasa mañana, no cuando dice que sí.'},
{c:'Dato institucional',d:2,ctx:'Aspirante que quiere intercambio.',s:'“Si me matriculo, ¿me garantizan el intercambio a España?”',r:'No prometer lo que no se controla.',e:'“Puedo contarte el portafolio y los beneficios económicos, pero no garantizarte un cupo: las convocatorias cambian cada período y tienen requisitos de postulación. Lo que sí es cierto es que hay rutas que no exigen viajar, como eMOVIES o PALOMA, y que menos del 2% de los estudiantes del país vive una experiencia internacional. ¿Quieres que te ponga en contacto con la Dirección de Internacionalización?”',j:'Las convocatorias tienen vigencia variable y procesos de selección. Prometer un cupo es una promesa que la institución no puede sostener, y el aspirante la recordará.',a:'Se vende el portafolio de oportunidades, nunca el resultado de una convocatoria.'},
{c:'Comparación',d:2,ctx:'Aspirante de posgrado que compara dos especializaciones de CEIPA.',s:'“No sé si Gerencia de Proyectos o Gerencia, las dos me suenan.”',r:'Orientar sin describir las dos.',e:'“¿Lo tuyo es dirigir proyectos específicamente, o te interesa más dirigir el negocio completo?” Si dice proyectos: “entonces Gerencia de Proyectos, porque lo que te falta no es conocimiento técnico sino el marco para responder por tiempo, costo, calidad y equipos”. Si dice el negocio: “entonces Gerencia, porque ahí la mirada es la organización como sistema”.',j:'Describir ambos programas y dejar que elija no es asesorar, es delegar, y suele terminar en “déjame pensarlo”. Una sola pregunta sobre el tipo de reto que quiere resolver separa los dos programas.',a:'Cuando dos programas se parecen, orienta por el tipo de reto que resuelve cada uno.'},
{c:'Perfil',d:1,ctx:'Colegio, charla de orientación. Se acerca una estudiante al final.',s:'“Es que yo no sé qué estudiar, mis papás quieren que estudie derecho pero a mí no me llama.”',r:'No vender un programa.',e:'“Eso que me dices es más común de lo que crees, y es mejor resolverlo ahora que en tercer semestre. Nosotros tenemos orientación vocacional dentro de BienSer. ¿Te gustaría que agendemos una sesión de orientación antes de hablar de programas?”',j:'Venderle una carrera a quien no ha elegido produce una deserción temprana y un conflicto familiar. El argumento único para este perfil es la orientación vocacional, no un programa.',a:'A quien no ha elegido carrera se le ofrece orientación, no un pensum.'},
{c:'Precio',d:1,ctx:'Llamada, el aspirante pregunta el precio en el segundo minuto.',s:'“Antes de que me cuente más, dígame cuánto vale.”',r:'Dar un rango sin perder el diagnóstico.',e:'“Te doy el dato de una: en pregrado el núcleo, que son dos meses, va entre $1.972.632 y $3.571.512 según el programa y la modalidad. Para darte el exacto necesito saber qué programa estás mirando. ¿Cuál era?”',j:'Evadir en este punto genera desconfianza inmediata. Un rango real satisface la necesidad de descartar rápido y la pregunta devuelve la conversación al diagnóstico sin que parezca una maniobra.',a:'Al que pregunta el precio temprano se le da un rango verdadero y una pregunta, no una evasiva.'},
{c:'Modalidad',d:2,ctx:'Aspirante del interior del país interesado en un programa presencial.',s:'“Yo vivo en Montería, ¿entonces no puedo estudiar presencial?”',r:'Explicar el aula híbrida sin prometer presencialidad.',e:'“Presencial en campus no, porque la sede está en Sabaneta. Pero las clases híbridas no son grabaciones: tú te conectas en vivo al aula desde donde estés y participas como si estuvieras ahí, con el mismo docente y los mismos compañeros. No es una clase grabada: es la misma clase compartida.”',j:'Confundir híbrido con virtual asincrónico es el error más común en este caso. La distinción —clase compartida en tiempo real— es el argumento que resuelve la objeción de distancia sin falsear la oferta.',a:'“No es una clase grabada, es una clase compartida” es la frase que explica el aula híbrida.'},
{c:'Seguimiento',d:3,ctx:'Aspirante que lleva dos meses en seguimiento y ya recibió tres contactos con valor nuevo sin responder.',s:'Silencio total.',r:'Decidir si insistir.',e:'Cerrar el ciclo: “[Nombre], no quiero volverme insistente. Te dejo mi contacto y quedo disponible cuando sea el momento. Si prefieres, te escribo cuando abran inscripciones del próximo período, sin insistir. ¿Te parece?” Y pasarlo a base de reactivación por campaña.',j:'La regla del tres existe para proteger la marca y el tiempo del asesor. Tres contactos con valor distinto sin respuesta agotan el ciclo; insistir más allá convierte el seguimiento en acoso y quema un prospecto futuro.',a:'Un ciclo bien cerrado deja una puerta abierta; uno forzado la cierra para siempre.'},
{c:'Reconocimiento',d:3,ctx:'Aspirante que trabaja en el sector público.',s:'“¿El título lo aceptan para concursos de carrera administrativa?”',r:'Responder sin exceder lo que puedes afirmar.',e:'“Los programas tienen Registro Calificado del Ministerio, que es lo que da validez oficial al título en Colombia, y el código SNIES de cada programa está disponible para que lo verifiques. Lo que no te puedo afirmar es cómo puntúa en una convocatoria específica, porque eso lo define cada entidad en sus términos. ¿Tienes la convocatoria a mano? La miramos juntos.”',j:'La validez del título y su puntaje en una convocatoria concreta son cosas distintas. Afirmar lo segundo excede lo que la institución puede garantizar y expone al aspirante a una decisión mal informada.',a:'Distingue siempre entre validez oficial del título y condiciones de una convocatoria externa.'},
{c:'Financiación',d:1,ctx:'Aspirante de pregrado en Barranquilla que trabaja en Olímpica.',s:'“Yo trabajo en Olímpica, ¿eso cuenta como algo?”',r:'Reconocer el canal y verificar.',e:'“Sí, y es de los beneficios más altos del portafolio del nodo: alianza especial. Además, en ese esquema no pagas inscripción. Déjame confirmar tu caso en CRM y te armo la liquidación exacta hoy mismo.”',j:'La tabla de beneficios del nodo registra a Olímpica dentro de la alianza especial, con exoneración de inscripción. Pero el beneficio se confirma por el canal registrado en CRM, no por la declaración del aspirante.',a:'En Barranquilla el beneficio depende del canal, y el canal se verifica en CRM antes de prometerlo.'},
{c:'Dato institucional',d:1,ctx:'Aspirante que pregunta por el modelo.',s:'“¿Qué es eso del núcleo problémico? Suena complicado.”',r:'Explicar sin jerga.',e:'“Es más simple de lo que suena. En vez de ver cinco materias sueltas al tiempo, trabajas un problema real de empresa durante dos meses, y ese problema integra varias áreas: estrategia, finanzas, personas, datos. Son cinco al año, veinte en total, y por eso la carrera son cuatro años y no cinco.”',j:'La jerga institucional desactiva al aspirante por teléfono. La explicación debe durar menos de veinte segundos, usar una imagen concreta y cerrar con el beneficio que le importa, que es la duración.',a:'Todo tecnicismo se explica en la misma frase en que se menciona, o no se menciona.'},
{c:'Comparación',d:3,ctx:'Aspirante que ya estudió una especialización en otra institución.',s:'“Yo ya tengo una especialización, no sé si valga la pena otra.”',r:'Encontrar el objetivo detrás y ofrecer la condición real.',e:'“¿Qué buscabas con la primera y qué te quedó faltando?” Y si el perfil encaja: “si eres egresado nuestro, una segunda especialización homologa parte del plan: catorce créditos en $11.371.393 o doce créditos en $9.746.908 con el descuento de egresado. Si la primera fue en otra institución, miramos homologación igual.”',j:'La objeción es de pertinencia, no de precio, y se resuelve encontrando el vacío que dejó la primera. El esquema de segunda especialización está documentado y cambia sustancialmente la ecuación económica.',a:'Antes de defender el valor de un segundo posgrado, averigua qué le faltó al primero.'},
{c:'Cierre',d:2,ctx:'Videollamada con aspirante y su esposa.',s:'“A mí me convence, pero ella tiene dudas.”',r:'Cerrar con el decisor correcto en la sala.',e:'Dirigirse a ella: “cuénteme usted, ¿qué es lo que más le preocupa?” Escuchar completo, responder solo eso, y cerrar con los dos: “¿les parece si arrancamos el proceso y cualquier cosa que les surja la resolvemos sobre la marcha?”',j:'Tener al decisor presente es la mejor oportunidad de la conversación y desperdiciarla hablándole solo a quien ya está convencido es el error típico. La objeción de quien duda es la única que hay que resolver.',a:'Cuando el decisor está presente, la conversación es con él.'},
{c:'Tiempo',d:3,ctx:'Aspirante de maestría con un cargo directivo exigente.',s:'“Honestamente no sé si pueda sostener el ritmo con mi trabajo.”',r:'Dar información exacta y validar la duda en vez de disolverla.',e:'“Es una duda razonable y prefiero que la resuelvas antes de pagar. El MBA son miércoles virtual de 8 a 9, viernes de 5 a 10 y sábado de 8 a 1, en cuatro bloques. Mirando tu semana real, ¿eso es sostenible? Si no lo es hoy, dímelo y miramos el inicio del siguiente período.”',j:'En maestría, forzar el cierre produce aplazamientos y retiros costosos. Dar el horario exacto y preguntar por la viabilidad real es a la vez más honesto y más efectivo: quien se convence a sí mismo sostiene el programa.',a:'En posgrado de alta exigencia, la pregunta por la viabilidad real vale más que cualquier argumento.'}
];
/* ============ PREGUNTAS DE COMPROBACIÓN ============ */
const COMPROBACION_CUERPO = `
<p class="lead">Comprobación rápida, distinta a los checkpoints de cada módulo. Aquí no se explica nada nuevo: se verifica que los datos críticos y los criterios de decisión estén firmes. Responde sin volver atrás.</p>

<h2>Verdadero, falso o pendiente de validar</h2>
<p>La tercera categoría importa tanto como las otras dos: un asesor profesional sabe qué dato debe verificar antes de comunicarlo.</p>
${quiz('“Todos los programas de CEIPA tienen Acreditación en Alta Calidad.”',
 [{t:'Verdadero'},{t:'Falso',ok:1},{t:'Pendiente de validar'}],
 {ok:'Falso. Todos tienen Registro Calificado; la acreditación que tiene CEIPA es institucional.',no:'Es falso. Todos los programas tienen Registro Calificado. La Acreditación en Alta Calidad de CEIPA es institucional, no programa por programa.'})}
${quiz('“El valor del núcleo de Derecho en virtual es $2.838.216.”',
 [{t:'Verdadero'},{t:'Falso'},{t:'Pendiente de validar',ok:1}],
 {ok:'Correcto. La cifra aparece en la documentación 2026, pero todo precio se valida contra la lista vigente antes de comunicarlo.',no:'Es un dato pendiente de validar. La cifra aparece en la documentación, pero los precios cambian y hay valores cuya asignación no es inequívoca. Nunca se comunica un precio sin verificarlo.'})}
${quiz('“El Máster Ejecutivo de EIG es convalidable en Colombia.”',
 [{t:'Verdadero'},{t:'Falso',ok:1},{t:'Pendiente de validar'}],
 {ok:'Falso, y es un error eliminatorio. Es título propio español, no convalidable, y se aclara siempre sin que lo pregunten.',no:'Es falso, y de los más graves. Es un título propio de EIG, no convalidable en Colombia. Afirmar lo contrario invalida una certificación completa.'})}
${quiz('“La modalidad híbrida tiene asistencia opcional.”',
 [{t:'Verdadero'},{t:'Falso',ok:1},{t:'Pendiente de validar'}],
 {ok:'Falso. Los dos encuentros semanales de 6:15 a 9:30 p.m. son obligatorios. La que tiene encuentro no obligatorio y grabado es la virtual.',no:'Falso. En híbrida los dos encuentros semanales son obligatorios. La virtual es la que tiene un encuentro sincrónico no obligatorio que queda grabado.'})}
${quiz('“UBFlex es una modalidad de estudio.”',
 [{t:'Verdadero'},{t:'Falso',ok:1},{t:'Pendiente de validar'}],
 {ok:'Falso. UBFlex es un modelo pedagógico. Las modalidades son virtual, blended, híbrida y presencial.',no:'Falso. UBFlex es el modelo pedagógico; las modalidades son otra cosa. Confundirlos es el error conceptual más común.'})}

<h2>Leer entre líneas</h2>
<p>Lo que el prospecto dice y lo que en realidad está diciendo.</p>
${quiz('“¿Ustedes tienen convenios con empresas?” ¿Qué hay detrás?',
 [{t:'Quiere saber si puede obtener un descuento empresarial.'},
  {t:'Está preguntando por empleabilidad: quiere saber si el título le va a servir para trabajar.',ok:1},
  {t:'Trabaja en recursos humanos y busca una alianza.'}],
 {ok:'Normalmente sí. La pregunta literal es sobre convenios; la preocupación real es la salida laboral. Es el momento de un dato de Alumni, uno solo.',no:'Puede ser cualquiera de las tres, y por eso hay que preguntar. Pero en la mayoría de los casos es una pregunta por empleabilidad disfrazada de pregunta administrativa. La forma de saberlo: “¿lo preguntas por el tema laboral o porque tu empresa podría apoyarte?”.'})}
${quiz('“Estoy mirando varias opciones, todavía no tengo nada decidido.” ¿Qué activas?',
 [{t:'Los diferenciales más fuertes de CEIPA, para destacar frente a la competencia.'},
  {t:'Criterios de comparación, aunque no termine eligiendo CEIPA.',ok:1},
  {t:'Una oferta de urgencia: fechas de cierre de inscripciones.'}],
 {ok:'Correcto. Quien compara quiere criterios, no argumentos de venta. Dárselos te posiciona como asesor y te deja la puerta abierta para revisarlos juntos después.',no:'Disparar diferenciales o urgencia a alguien que está comparando lo empuja a defenderse. Lo que necesita son criterios: acreditación frente a solo registro, duración real de la carrera, proyectos con empresas reales y qué pasa si se atrasa.'})}
${quiz('“Es que yo soy malísimo para las matemáticas.” ¿Qué es esto?',
 [{t:'Una objeción de producto: cree que el programa es muy técnico.'},
  {t:'Un miedo a no ser capaz, y se responde con acompañamiento, no con argumentos académicos.',ok:1},
  {t:'Una señal de que debo recomendarle un programa sin componente cuantitativo.'}],
 {ok:'Exacto. Es miedo, no objeción. Aquí BienSer —acompañamiento académico y núcleo de herramientas cuantitativas— vale más que la acreditación.',no:'No es una objeción, es un miedo sobre sí mismo. Redirigirlo a otro programa o discutir el nivel técnico no toca la preocupación real: teme no ser capaz.'})}

<h2>Criterios de decisión</h2>
${quiz('¿Cuántas preguntas debes tener respondidas antes de pasar a demostración?',
 [{t:'Al menos cuatro de las seis del check mínimo.',ok:1},{t:'Las seis, sin excepción.'},{t:'Dos: objetivo y presupuesto.'}],
 {ok:'Correcto. El check mínimo tiene seis puntos —objetivo, disparador, obstáculo, tiempos, estudios previos y decisor— y si te faltan más de dos, no estás listo para demostrar.',no:'El check mínimo son seis puntos: objetivo, disparador, obstáculo, tiempos, estudios previos y decisor. La regla es que si te faltan más de dos, vuelves a preguntar.'})}
${quiz('Detectas tres necesidades en un prospecto. ¿Qué haces con ellas?',
 [{t:'Argumento las tres para cubrir todos los frentes.'},
  {t:'Argumento la más dolorosa y guardo las otras dos para las objeciones.',ok:1},
  {t:'Le pregunto cuál quiere que le explique primero.'}],
 {ok:'La regla del uno. Y las guardadas tienen una función concreta: son el re-descubrimiento del paso 5 del método de objeciones.',no:'Es la regla del uno: un hallazgo, un argumento. Las otras dos no se desechan, se guardan para el re-descubrimiento cuando aparezca una objeción.'})}
${quiz('Después de decir un precio, ¿qué haces?',
 [{t:'Explico inmediatamente todo lo que incluye, para justificarlo.'},
  {t:'Me callo y espero a que el prospecto reaccione primero.',ok:1},
  {t:'Pregunto si le parece razonable.'}],
 {ok:'Correcto. El silencio largo después del precio significa que está calculando, no rechazando. Llenarlo es el error más costoso.',no:'Di la cifra y calla. Hablar después del precio revela ansiedad y suele convertir un cálculo mental en una objeción.'})}
`;

/* ============ EVALUACIÓN FINAL ============ */
const EVAL = [
 {q:'¿Cuál es el nombre oficial y la naturaleza jurídica de la institución?',o:['Universidad CEIPA, institución pública','Fundación Universitaria CEIPA, privada, de utilidad común y sin ánimo de lucro','Instituto CEIPA de Estudios Empresariales, entidad mixta'],c:1,e:'Fundación Universitaria CEIPA: institución de educación superior privada, de utilidad común y sin ánimo de lucro, en la categoría de institución universitaria.'},
 {q:'¿Cuál es la resolución vigente de Acreditación Institucional en Alta Calidad y su vigencia?',o:['Resolución 000679 del 21 de enero de 2022, por 4 años','Resolución 016362 del 23 de junio de 2026, por 6 años','Resolución 016362 del 21 de enero de 2022, por 6 años'],c:1,e:'La vigente es la Resolución 016362 del 23 de junio de 2026, por 6 años. La de 2022 fue la anterior y todavía aparece en material impreso antiguo.'},
 {q:'¿Cuánto dura un núcleo problémico y cuántos se cursan al año en pregrado?',o:['16 semanas, 2 por año','8 semanas, 5 por año','4 semanas, 10 por año'],c:1,e:'Un núcleo dura 8 semanas o 2 meses; se cursan 5 al año, 20 en total, para una carrera de 4 años.'},
 {q:'¿Cuáles son los tres fundamentos de UBFlex?',o:['Learning by doing, aula invertida y ubicuidad','Teoría, práctica y evaluación','Presencialidad, virtualidad y autonomía'],c:0,e:'Learning by doing, aula invertida y ubicuidad. El proyecto aplicado es el eje que atraviesa todo el proceso.'},
 {q:'¿Qué modalidad aplica a Ingenierías y Derecho?',o:['Virtual, con encuentro semanal grabado','Blended, con tres asesorías presenciales por núcleo','Híbrida nocturna, con dos encuentros semanales obligatorios de 6:15 a 9:30 p.m.'],c:2,e:'Híbrida nocturna. Los dos encuentros semanales son obligatorios, y eso debe advertirse siempre antes de matricular.'},
 {q:'¿Qué porcentaje de actividades presenciales tiene la metodología Blended y en qué nodo aplica?',o:['20% presencial, Nodo Barranquilla','50% presencial, Campus Sabaneta','80% presencial, ambos nodos'],c:0,e:'80% virtual y 20% presencial, con tres asesorías presenciales por núcleo, en el Nodo Barranquilla.'},
 {q:'Un prospecto pregunta si el título de EIG sirve en Colombia. ¿Qué respondes?',o:['Que sí, porque EIG es una escuela reconocida internacionalmente','Que es un título propio español, no convalidable en Colombia, y que el título con validez oficial acá es el de Especialista CEIPA','Que depende del trámite de convalidación que haga cada estudiante'],c:1,e:'Es título propio de EIG, no convalidable en Colombia. Se aclara siempre, sin que lo pregunten. Omitirlo destruye la venta después de la matrícula.'},
 {q:'¿Cuál es la tasa de empleabilidad CEIPA 2023 y su referencia nacional?',o:['92,35% frente a 82%','89,8% frente a 77,4%','97,4% frente a 89,8%'],c:1,e:'89,8% frente a 77,4% nacional. El 92,35% corresponde a egresados con empleo al graduarse y el 97,4% a satisfacción y recomendación en el OLE.'},
 {q:'¿Hasta qué porcentaje del plan de estudios se puede homologar y con qué antigüedad máxima de las asignaturas?',o:['Hasta 50%, asignaturas de máximo 10 años','Hasta 30%, asignaturas de máximo 5 años','Hasta 70%, sin límite de antigüedad'],c:0,e:'Hasta el 50% del plan, con asignaturas de máximo 10 años, una sola vez y antes de iniciar estudios. El costo es único y no reembolsable.'},
 {q:'¿Cuáles son los 7 pasos de la venta profesional CEIPA, en orden?',o:['Apertura, investigación, precio, demostración, objeciones, cierre, seguimiento','Pre-chequeo, apertura, investigación, demostración, pre-cierre, manejo de objeciones, cierre','Saludo, presentación, portafolio, cotización, negociación, cierre, posventa'],c:1,e:'Pre-chequeo, apertura, PRA (investigación), CVBR (demostración), pre-cierre, manejo de objeciones y cierre.'},
 {q:'¿Qué significa la R del CVBR y para qué sirve?',o:['Resumen: recapitula los beneficios antes de cerrar','Reflexión: una pregunta que busca la afirmación de la persona y devuelve el turno de habla','Respuesta: contesta la duda que el prospecto planteó'],c:1,e:'Reflexión. Sin ella el CVBR es un monólogo con estructura: la R te dice si el argumento acertó.'},
 {q:'¿Qué se hace en el paso de pre-cierre?',o:['Se presiona al prospecto para que se matricule en esa misma llamada','Se intenta cerrar en el 100% de las conversaciones, sin presionar','Se cierra solo cuando el prospecto muestra señales claras de compra'],c:1,e:'Pre-cierre no significa presionar: significa que en el 100% de las conversaciones se intenta cerrar. Los tres desenlaces son válidos; no intentar, no.'},
 {q:'¿Cuáles son las tres únicas objeciones posibles después del intento de cierre?',o:['Producto, tiempo y dinero','Precio, competencia y familia','Horario, distancia y validez del título'],c:0,e:'Producto, tiempo y dinero. Todo lo demás es una de estas tres disfrazada.'},
 {q:'¿Cuál es la regla absoluta del paso 1 del método de objeciones?',o:['Reconocer la objeción inmediatamente','Escuchar la objeción completa y nunca interrumpir','Responder en menos de 20 segundos'],c:1,e:'Escuchar completo sin interrumpir. En la última frase suele estar la objeción real.'},
 {q:'Para qué sirve preguntar “¿te gustó lo que hablamos de la universidad?” dentro del método de objeciones?',o:['Para medir la satisfacción del prospecto con la atención recibida','Para avanzar hacia la verdadera objeción: si dice que sí, el problema es tiempo o dinero; si titubea, es producto',"Para cerrar la conversación con un tono positivo"],c:1,e:'Es el paso 4 y tiene una función diagnóstica precisa: separa las objeciones de producto de las de tiempo y dinero.'},
 {q:'Un prospecto de Ingeniería no puede asistir a los encuentros nocturnos obligatorios y aun así quiere matricularse hoy. ¿Qué haces?',o:['Cierro la matrícula: él es adulto y sabe lo que hace','Le advierto de frente la obligatoriedad y exploro alternativas antes de cerrar','Le ofrezco la modalidad virtual del mismo programa'],c:1,e:'Advertir es la decisión profesional: forzar esa venta es vender una deserción. Y la tercera opción es información incorrecta: Ingenierías no tiene modalidad virtual.'},
 {q:'¿Qué es la regla 1-3-1 de la venta en 5 minutos?',o:['Un minuto de apertura, tres de argumentación, uno de cierre','Un gancho, tres preguntas, un argumento, más un siguiente paso','Una llamada, tres seguimientos, un cierre'],c:1,e:'Un gancho que detenga a la persona, tres preguntas, un solo argumento y un siguiente paso con fecha y datos.'},
 {q:'En la venta en 5 minutos, ¿cuál de las tres preguntas define tu argumento?',o:['La de situación, porque ubica a la persona','La de objetivo, porque revela lo que quiere lograr','La de obstáculo, porque revela qué lo frena'],c:2,e:'La tercera, la del obstáculo. Es la que decide qué argumento usar y no se sacrifica por falta de tiempo.'},
 {q:'¿En qué consiste la regla del tres del seguimiento comercial?',o:['Tres llamadas por semana a cada prospecto caliente','Tres contactos con valor distinto sin respuesta y el prospecto pasa a base de reactivación','Tres argumentos por conversación como máximo'],c:1,e:'Tres contactos, cada uno con valor nuevo distinto. Si no hay respuesta, pasa a reactivación por campaña: insistir más allá quema la marca.'},
 {q:'¿Por qué la fecha límite se comunica al final de la secuencia de seguimiento y no al principio?',o:['Porque las fechas de inicio de núcleo solo se confirman al final del período','Porque al principio es presión y después de varios aportes de valor es información útil','Porque el prospecto necesita tiempo para reunir el dinero'],c:1,e:'Es una cuestión de secuencia: la misma frase es presión en el primer contacto e información útil en el quinto.'},
 {q:'Un prospecto adulto menciona que estudió tres semestres hace doce años. ¿Qué le dices sobre homologación?',o:['Que se le puede reconocer hasta el 50% del plan','Que con doce años lo más probable es que no apliquen, porque el límite es de diez, y que igual se puede mandar a estudio formal','Que primero pague el estudio de homologación y después se sabe'],c:1,e:'El límite documentado es de 10 años. Crear una expectativa falsa cuesta más caro cuando el prospecto ya pagó un estudio no reembolsable.'},
 {q:'¿Qué debe contener una captura de datos útil en una feria?',o:['Nombre y teléfono','Nombre, teléfono, programa de interés, obstáculo en sus palabras y mejor horario para llamar','Nombre, teléfono, correo y documento de identidad'],c:1,e:'Sin contexto, el dato no sirve: a la cuarta persona del día ya no recuerdas quién era quién ni qué le preocupaba.'},
 {q:'¿Qué porcentaje del tiempo debería hablar el prospecto durante la investigación?',o:['Alrededor del 30%','Alrededor del 50%','Alrededor del 70%'],c:2,e:'El 70%. Y en el total de la conversación, si hablaste más del 50%, no fue consultiva.'},
 {q:'Un prospecto dice “voy a mirar otras universidades”. ¿Cuál es la respuesta correcta?',o:['Explicarle por qué las otras opciones son inferiores','Ofrecerle criterios de comparación, aunque no termine eligiendo CEIPA','Ofrecerle un beneficio si decide hoy'],c:1,e:'Nunca se habla mal de otra institución: descalificar te vuelve sospechoso. Dar criterios te posiciona como asesor.'},
 {q:'Un prospecto pregunta por un beneficio que no está documentado. ¿Qué haces?',o:['Doy una respuesta aproximada para no perder el impulso de la conversación','Le digo que prefiero confirmarlo y me comprometo con un tiempo de respuesta concreto','Le digo que no existe ese beneficio'],c:1,e:'Un asesor que verifica genera más confianza que uno que improvisa. Y el compromiso de respuesta se convierte en siguiente paso agendado.'}
];

/* ============ RECURSOS ============ */
const RECURSOS = `
<p class="lead">Lo que necesitas tener a mano: datos duros, la matriz con la que te van a evaluar, los pendientes que no puedes comunicar todavía y los canales institucionales.</p>

<h2>Matriz de desempeño comercial</h2>
<p>Nueve criterios, escala de 4 a 1. Es la misma matriz para todos los instrumentos: examen, casos, pitch, role play, simulación de 5 minutos y ronda de objeciones.</p>
${tbl(['Criterio','4 — Dominio','3 — Competente','2 — En desarrollo','1 — Insuficiente'],[
 ['Conocimiento de CEIPA','Datos precisos, incluidos los menos usados. Distingue lo verificado de lo que debe validar','Maneja bien los datos centrales, sin errores','Sabe lo básico; duda en modalidades, portafolio o cifras','Da información imprecisa o inventa'],
 ['Claridad','Explica lo complejo en lenguaje simple y el prospecto lo repite bien','Se entiende sin esfuerzo, pocos tecnicismos','Se enreda, necesita repetir, usa jerga','El prospecto queda confundido'],
 ['Identificación de necesidades','Llega al miedo real y al disparador; detecta al decisor sin preguntarlo de frente','Identifica objetivo y obstáculo con preguntas pertinentes','Pregunta poco o se queda en la necesidad declarada','No pregunta, asume'],
 ['Escucha','Retoma palabras exactas, nombra emociones, usa el silencio','Escucha y responde sobre lo dicho, no interrumpe','Escucha parcial; a veces responde lo que traía preparado','Interrumpe, conversación de una sola vía'],
 ['Argumentación','CVBR completo con la R; un argumento conectado a lo que la persona dijo','Argumenta con estructura y pertinencia; a veces omite la R','Varios argumentos sin selección, estructura débil','Recita características sin beneficio'],
 ['Manejo de objeciones','Escucha completo, reconoce, pregunta, responde con dato real y reconduce. Sabe cuándo aceptar el no','Aplica el método y resuelve con datos correctos','Responde a la defensiva o solo con información; no reconduce','Se bloquea, discute, promete lo que no puede o desprestigia a otra institución'],
 ['Síntesis','Dice lo justo, sabe qué dejar afuera, cumple tiempos con holgura','Mensaje ordenado y proporcionado','Se extiende, repite, entrega información no solicitada','Abruma, no distingue lo esencial'],
 ['Conexión','Genera confianza genuina; el prospecto cuenta lo que no tenía previsto contar','Trato cálido y profesional, buen rapport','Correcto pero impersonal o mecánico','Frío, condescendiente o con tono de guion leído'],
 ['Cierre','Intento natural y oportuno; siguiente paso con fecha, hora, propósito y confirmación','Intenta cerrar y define siguiente paso','Intenta cerrar tarde o deja el siguiente paso vago','No intenta cerrar']
])}
${tbl(['Promedio','Nivel','Habilitación'],[
 ['3,6 – 4,0','Dominio','Habilitado. Candidato a formador interno'],
 ['3,0 – 3,5','Competente','<strong>Habilitado para interactuar con prospectos</strong>'],
 ['2,0 – 2,9','En desarrollo','No habilitado solo. Acompañamiento y reevaluación en 15 días'],
 ['Menos de 2,0','Insuficiente','Repite la ruta. Reevaluación en 30 días']
])}
${note('alert','Regla de no compensación','<p>Un criterio en nivel 1 impide la habilitación aunque el promedio dé 3,0 o más. No se compensa una falla grave con fortalezas en otros frentes, especialmente en <em>Conocimiento de CEIPA</em> y <em>Manejo de objeciones</em>.</p>')}

<h2>Conceptos clave</h2>
${tbl(['Concepto','Definición operativa'],[
 ['UBFlex','Modelo pedagógico propio de CEIPA: learning by doing, aula invertida y ubicuidad. No es una modalidad'],
 ['Núcleo problémico','Unidad curricular integrada de 8 semanas centrada en un problema real, que sustituye las asignaturas fragmentadas'],
 ['Proyecto aplicado','Trabajo sobre una empresa real que atraviesa todo el proceso formativo y cierra con un proyecto de consultoría'],
 ['Aula híbrida','Espacio donde presenciales y remotos participan en la misma clase, en tiempo real'],
 ['Registro Calificado','Reconocimiento del MEN que certifica condiciones mínimas de calidad y validez oficial. Lo tienen todos los programas'],
 ['Acreditación en Alta Calidad','Reconocimiento voluntario del MEN que certifica estándares superiores. En CEIPA es institucional'],
 ['Homologación','Reconocimiento de créditos cursados en otra institución vigilada por el MEN, hasta el 50% del plan'],
 ['PRA','Paso de investigación dentro de los 7 pasos: preguntar antes de argumentar'],
 ['CVBR','Característica, Ventaja, Beneficio y Reflexión: la estructura de todo argumento'],
 ['Pre-cierre','Intento de cierre que se hace en el 100% de las conversaciones'],
 ['Resumen-espejo','Devolver al prospecto lo que entendiste, con sus palabras, y esperar su confirmación'],
 ['Regla del uno','Un hallazgo, un argumento; las demás necesidades se guardan para las objeciones'],
 ['Regla del tres','Tres contactos con valor distinto sin respuesta y el prospecto pasa a base de reactivación'],
 ['Valor nuevo','Lo que cada contacto de seguimiento debe aportar y el prospecto no tenía antes'],
 ['SolversLab','Consultoría formativa sobre retos empresariales reales, certificable para la hoja de vida'],
 ['BienSer','Bienestar universitario, en el marco del artículo 117 de la Ley 30 de 1992'],
 ['SilvIA','Herramienta de inteligencia artificial jurídica del programa de Derecho'],
 ['VUCA','Entornos volátiles, inciertos, complejos y ambiguos, marco de referencia del MBA']
])}

<h2>Información pendiente de validación</h2>
<p>Estos datos no están resueltos en la documentación fuente. Hasta que se confirmen con el área responsable, <strong>no se comunican a un aspirante</strong>.</p>
${tbl(['Dato pendiente','Área responsable','Impacto si se improvisa'],[
 ['Acumulación de beneficios: qué descuentos se suman entre sí','Financiera','Alto: se promete una combinación que no se aplica en la liquidación'],
 ['Calendario de inicio de núcleos y cohortes por período','Admisiones','Alto: es la pregunta de cierre más frecuente'],
 ['Política de retiro, reintegro y aplazamiento','Admisiones / Financiera','Medio: objeción frecuente sin respuesta documentada'],
 ['Precio vigente de las especializaciones virtuales: lista frente a valor comercializado','Financiera','Alto: hay dos cifras distintas en la documentación'],
 ['Seguro estudiantil en Barranquilla: $36.368 frente al valor anual nacional de $87.330','Financiera','Medio: afecta la liquidación del nodo'],
 ['Vigencia del beneficio Bonda después de febrero de 2026','Coordinación del nodo','Medio'],
 ['Maestrías reportadas al Ministerio que no están en el listado comercializado','Dirección Académica','Medio: se ofrece un programa que puede no estar disponible'],
 ['Conteo y nombres de los pregrados vigentes por nodo','Dirección Académica','Medio'],
 ['Oferta de posgrado disponible en el Nodo Barranquilla','Dirección Académica','Medio'],
 ['Listado oficial de valores institucionales y sus definiciones','Comunicaciones','Bajo'],
 ['Denominación del tercer bloque de la estructura de especializaciones','Dirección Académica','Bajo'],
 ['Vigencia de las convocatorias de internacionalización','Dirección de Internacionalización','Alto: nunca se garantiza un cupo'],
 ['Protocolo institucional de imagen y atención, si existe','Talento Humano / Mercadeo','Medio: reemplazaría las buenas prácticas del Módulo 3']
])}

<h2>Canales institucionales</h2>
${tbl(['Para','Canal'],[
 ['Inscripciones','inscribete.ceipa.edu.co'],
 ['Información general','ceipa.edu.co · 321 711 54 02'],
 ['Modelo UBFlex (video)','youtu.be/kjG4f-O_iMY'],
 ['Historia institucional','museodigital.ceipa.edu.co'],
 ['Bienestar','bienser@ceipa.edu.co'],
 ['Asesorías psicológicas','teescucho@ceipa.edu.co'],
 ['Enfermería','enfermeria@ceipa.edu.co'],
 ['Campus Sabaneta','Calle 77 Sur N.° 40 – 165, Vereda San José'],
 ['Nodo Barranquilla','Carrera 57 N.° 72 – 143, Barrio El Prado']
])}

${note('key','La regla de fuentes','<p>Toda la información de esta guía proviene de la documentación institucional y de ceipa.edu.co. Precios, horarios, convocatorias y modalidades cambian: valida antes de usarlos con un prospecto. Y cuando no sepas algo, la frase es siempre la misma: <em>“prefiero confirmarlo con el área académica antes de decirte algo impreciso, te respondo hoy mismo”</em>.</p>')}
`;
/* ===== MÓDULO DE EVALUACIÓN (independiente) ===== */
const EVAL_IMAGEN = [
 quiz('Vas a atender una jornada en una empresa aliada, con jefes de talento humano. ¿Qué registro de vestuario corresponde?',
  [{t:'Casual de negocio, para generar cercanía'},{t:'Formal completo, chaqueta recomendada',ok:1},{t:'El mismo que usas en el mostrador, sin cambios'}],
  {ok:'Correcto. El criterio es vestir un escalón por encima del interlocutor, y en jornadas empresariales el interlocutor es directivo.',no:'El criterio es un escalón por encima de quien vas a atender. Frente a áreas de talento humano y directivos, el registro es formal completo.'}),
 quiz('En videollamada, ¿cuál de estos errores pesa más?',
  [{t:'Fondo virtual estático'},{t:'Luz detrás de ti, que te convierte en silueta'},{t:'Audio con eco y sin audífonos',ok:1}],
  {ok:'Así es. Se tolera una imagen regular, no un sonido malo: el audio importa más que el video.',no:'El audio es el que más pesa. Una imagen mediocre se tolera; un sonido deficiente hace que la conversación se interrumpa constantemente.'}),
 quiz('¿Cuál es el estándar de contacto visual en una asesoría presencial?',
  [{t:'El 100% del tiempo, para transmitir seguridad'},{t:'Entre el 60% y el 70%, con desvíos naturales',ok:1},{t:'Alrededor del 30%, para no incomodar'}],
  {ok:'Correcto. Menos se lee como evasión y más como incomodidad. Con dos interlocutores, dos tercios para quien habla.',no:'El estándar es entre 60% y 70%. El 100% incomoda y el 30% se lee como evasión.'}),
 quiz('Un aspirante te plantea una objeción de precio que te incomoda. ¿Qué es lo primero que registra él?',
  [{t:'Tu respuesta verbal'},{t:'Tu micro-reacción facial antes de responder',ok:1},{t:'El dato que le das después'}],
  {ok:'Exacto. La cara reacciona antes que la boca, y esa micro-reacción es la que el otro registra. Entrenar la neutralidad ante la objeción vale más que una respuesta memorizada.',no:'La expresión llega antes que la frase. Por bien construida que esté la respuesta, el gesto previo ya comunicó incomodidad.'}),
 quiz('Después de una autoevaluación en video detectas cuatro cosas para mejorar. ¿Qué haces?',
  [{t:'Corrijo las cuatro de inmediato para avanzar más rápido'},{t:'Corrijo una sola hasta la siguiente grabación',ok:1},{t:'Espero a que el formador me diga cuál priorizar'}],
  {ok:'Correcto. Tres correcciones simultáneas producen rigidez, que es peor que el error original.',no:'Una sola corrección a la vez. Trabajar cuatro hábitos al mismo tiempo produce rigidez y ninguna mejora sostenida.'})
];
const EVAL_ORATORIA = [
 quiz('Acabas de decir el valor del núcleo. ¿Qué haces inmediatamente después?',
  [{t:'Explico todo lo que incluye, para justificarlo'},{t:'Callo y espero a que el aspirante hable primero',ok:1},{t:'Pregunto si le parece razonable'}],
  {ok:'Correcto. El silencio largo después del precio significa que está calculando, no rechazando. Llenarlo es el error más costoso.',no:'Di la cifra y calla. Hablar después del precio revela ansiedad y convierte un cálculo mental en una objeción.'}),
 quiz('¿Cómo se eliminan las muletillas?',
  [{t:'Prohibiéndoselas y corrigiéndose en voz alta'},{t:'Sustituyéndolas por una pausa',ok:1},{t:'Hablando más rápido para que no haya espacio'}],
  {ok:'Así es. La muletilla ocupa el espacio donde el cerebro busca la siguiente palabra: entrenar la pausa quita la necesidad.',no:'Se sustituyen por silencio. Prohibirlas sin reemplazo produce más muletillas, y hablar rápido las multiplica.'}),
 quiz('Un aspirante te pregunta algo concreto. ¿Cómo estructuras la respuesta?',
  [{t:'Contexto primero, respuesta al final'},{t:'Respuesta en la primera frase, contexto después',ok:1},{t:'Tres opciones para que elija'}],
  {ok:'Correcto. Quien pregunta algo concreto espera la respuesta primero; el contexto que llega antes se percibe como evasión.',no:'Respuesta directa primero, contexto después. El orden inverso se lee como rodeo.'}),
 quiz('Te quedas en blanco en mitad de una presentación ante un grupo de bachilleres. ¿Qué haces?',
  [{t:'Hablo más rápido para disimular mientras recuerdo'},{t:'Hago una pregunta al grupo y recupero el hilo mientras responden',ok:1},{t:'Me disculpo y reviso mis notas'}],
  {ok:'Exacto. Una pregunta bien puesta nunca se lee como un olvido, y además convierte a un público pasivo en participante.',no:'Acelerar delata el bloqueo y revisar notas lo confirma. Una pregunta al grupo te da el tiempo que necesitas sin que se note.'}),
 quiz('¿Cuántas ideas sostiene una intervención hablada?',
  [{t:'Una',ok:1},{t:'Tres, para dar sensación de solidez'},{t:'Las que hagan falta, si están bien ordenadas'}],
  {ok:'Correcto. Si tienes tres ideas, son tres intervenciones con preguntas en medio. Es la regla del uno aplicada a la forma de hablar.',no:'Una sola. Varias ideas encadenadas sin pausa ni pregunta hacen que el interlocutor retenga la última o ninguna.'})
];

function renderEvaluacion(){
 return `<h1>Evaluación</h1>
 <p class="lead">Este módulo es independiente de la formación. Los módulos contienen <strong>actividades de aprendizaje</strong>, que se practican y no se califican. Aquí están las <strong>evaluaciones formales</strong>, que determinan si estás habilitado para atender aspirantes.</p>
 ${tbl(['','Actividades de aprendizaje','Evaluaciones formales'],[
  ['Dónde están','Dentro de cada módulo de formación','En esta sección'],
  ['Para qué','Practicar sin riesgo','Comprobar dominio'],
  ['Se califican','No','Sí, con la matriz de desempeño'],
  ['Quién las conduce','El propio colaborador o una pareja','El formador o el líder comercial'],
  ['Consecuencia','Retroalimentación inmediata','Habilitación, acompañamiento o repetición de la ruta']
 ])}
 ${note('key','Qué se certifica','<p>Nueve criterios: conocimiento de CEIPA, claridad, identificación de necesidades, escucha, argumentación, manejo de objeciones, síntesis, conexión y cierre. El mínimo para operar con aspirantes es <strong>3,0 sobre 4,0, sin ningún criterio en nivel 1</strong>. La matriz completa está en Recursos.</p>')}

 <h2>Pruebas por módulo</h2>
 <p>Cada prueba corresponde a un módulo de formación. Responde sin consultar: la retroalimentación te dice qué revisar.</p>
 ${acc('Prueba 1 · Formación institucional CEIPA', B.m1.check.join('') + note('do','Componente práctico de esta prueba','<p>Pitch “CEIPA en 90 segundos”, grabado y en una sola toma. Se califica con los criterios de <em>Conocimiento de CEIPA</em>, <em>Claridad</em> y <em>Síntesis</em>. Condiciones: abre con una pregunta, tres elementos (institucional, modelo y resultado), sin precio, sin superlativos, cierre con siguiente paso y máximo 90 segundos.</p>'))}
 ${acc('Prueba 2 · Conocimiento del aspirante y venta consultiva', B.m2.check.join('') + note('do','Componente práctico','<p>Role play de descubrimiento de diez minutos con perfil asignado. Criterios: <em>Identificación de necesidades</em> y <em>Escucha</em>. Condición de no aprobación: argumentar antes de haber preguntado.</p>'))}
 ${acc('Prueba 3 · La conversación comercial y los 7 pasos', B.m3.check.join('') + note('do','Componente práctico','<p>Role play integral de 12 a 15 minutos, de pre-chequeo a cierre, con perfil que el asesor no conoce de antemano. Se califican los nueve criterios. No aprueba quien no haga intento de cierre, argumente antes de preguntar, dé un dato falso o termine sin siguiente paso con fecha.</p>'))}
 ${acc('Prueba 4 · Venta en 5 minutos', B.m4.check.join('') + note('do','Componente práctico','<p>Simulación cronometrada con escenario asignado: feria, mostrador, llamada en frío o colegio. Se verifica: gancho en los primeros 30 segundos, exactamente tres preguntas, un solo argumento, mini-resumen antes de argumentar, pre-cierre con dos opciones de avance, captura de datos con contexto y siguiente paso con día y hora, sin exceder cinco minutos.</p>'))}
 ${acc('Prueba 5 · Manejo de objeciones', B.m5.check.join('') + note('do','Componente práctico','<p>Ronda en vivo de ocho objeciones consecutivas, máximo 20 segundos por respuesta, con al menos dos de dinero, dos de tiempo, dos de producto y dos específicas de CEIPA. Cada respuesta debe contener reconocimiento, pregunta, dato real o compromiso de verificar, y reconducción.</p>'))}
 ${acc('Prueba 6 · Seguimiento comercial', B.m6.check.join('') + note('do','Componente práctico','<p>Auditoría de cinco registros propios de CRM. Se evalúa si cada uno contiene objetivo, obstáculo, miedo, decisor, estudios previos, objeciones expresadas, siguiente paso con fecha y una frase textual del aspirante.</p>'))}
 ${acc('Prueba 7 · Presentación personal e imagen profesional', EVAL_IMAGEN.join('') + note('do','Componente práctico','<p>Grabación de tres minutos de conversación simulada en video, revisada contra la lista de verificación del Módulo 3. Criterio asociado: <em>Conexión</em>.</p>'))}
 ${acc('Prueba 8 · Oratoria y comunicación', EVAL_ORATORIA.join('') + note('do','Componente práctico','<p>Pitch decreciente: el mismo mensaje en 90, 60 y 30 segundos, con conteo de muletillas en la primera versión. Criterios: <em>Claridad</em> y <em>Síntesis</em>.</p>'))}

 <h2>Comprobación rápida</h2>
 <p>Verificación de datos críticos y criterios de decisión. Distinta de las pruebas por módulo: aquí lo que se mide es si sabes qué dato puedes afirmar y cuál debes validar.</p>
 ${COMPROBACION_CUERPO}

 <h2>Evaluación final</h2>
 <p class="lead">Veinticinco preguntas que cubren conocimiento, comprensión, aplicación y criterio comercial. Sin límite de tiempo y sin consultar.</p>
 ${note('alert','Antes de empezar','<p>Hay preguntas donde la respuesta correcta es reconocer que un dato debe validarse. Esas pesan igual que las de memoria: un asesor que verifica genera más confianza que uno que improvisa.</p>')}
 <div id="evalbox">${EVAL.map((q,i)=>`<div class="quiz" data-ev="${i}">
   <div class="quiz__q">${i+1}. ${q.q}</div>
   <div class="quiz__o">${q.o.map((o,j)=>`<button class="opt" type="button" data-ev="${i}" data-j="${j}">${o}</button>`).join('')}</div>
   <div class="fb" data-evfb="${i}"></div></div>`).join('')}</div>
 <div class="btnrow"><button class="btn" id="evalsend">Ver mi resultado</button><button class="btn btn--o" id="evalreset">Empezar de nuevo</button></div>
 <div class="score" id="evalscore"></div>
 <div class="foot"><button class="btn btn--o" data-go="inicio">Inicio</button><button class="btn" data-go="recursos">Ver la matriz de desempeño →</button></div>`;
}

let evalResp = {};
function calificar(){
 const total = EVAL.length; let ok = 0;
 EVAL.forEach((q,i)=>{
  const fb = document.querySelector(`[data-evfb="${i}"]`), sel = evalResp[i];
  document.querySelectorAll(`.opt[data-ev="${i}"]`).forEach((b,j)=>{
   b.disabled = true;
   if(j===q.c) b.classList.add('right'); else if(j===sel) b.classList.add('wrong');
  });
  if(sel===q.c){ ok++; fb.className='fb ok show'; fb.innerHTML=`<b>Correcto.</b> ${q.e}`; }
  else { fb.className='fb no show'; fb.innerHTML=`<b>${sel===undefined?'Sin responder.':'Revisa esta.'}</b> ${q.e}`; }
 });
 const pct = Math.round(ok/total*100);
 let lvl, txt;
 if(pct>=95){lvl='Dominio';txt='Manejas los datos críticos y el criterio comercial. Estás en condiciones de acompañar a otros colaboradores y de hacer de aspirante difícil en los role plays del equipo.';}
 else if(pct>=80){lvl='Competente';txt='Nivel suficiente para interactuar con aspirantes. Revisa las preguntas que fallaste y vuelve al módulo correspondiente: son brechas puntuales.';}
 else if(pct>=65){lvl='En desarrollo';txt='Hay vacíos que se notarían en una conversación real. Repasa los módulos donde fallaste y repite esta evaluación en cinco días antes de atender aspirantes sin acompañamiento.';}
 else {lvl='Insuficiente';txt='Conviene rehacer la ruta desde el Módulo 1. No es un mal resultado: es la señal de que falta base, y atender aspirantes sin ella perjudica al aspirante y a ti.';}
 const box = document.getElementById('evalscore');
 box.innerHTML = `<div class="score__n">${pct}%</div><div class="score__l">${ok} de ${total} correctas · Nivel ${lvl}</div><p>${txt}</p>
  <p style="margin-top:.7rem;font-size:.9rem">Este resultado mide conocimiento y criterio. Escucha, conexión y cierre solo se evalúan en vivo, con role play y simulación, usando la matriz de Recursos.</p>`;
 box.classList.add('show');
 box.scrollIntoView({behavior:'smooth',block:'center'});
}
/* ===== Casos: render y filtros ===== */
const DIFT = {1:'Básico',2:'Intermedio',3:'Avanzado'};
function renderCasos(){
 return `<h1>Casos prácticos</h1>
 <p class="lead">Biblioteca de situaciones reales de asesoría. Cada caso trae contexto, lo que dice el aspirante, el reto, la respuesta esperada, su justificación y el aprendizaje clave. Lee el reto, formula tu respuesta en voz alta y solo entonces revela la respuesta esperada.</p>
 ${note('key','Cómo practicar con esta biblioteca','<p>Individual: elige cinco casos de una categoría, responde en voz alta cronometrándote y compara. En equipo: uno lee el contexto y lo que dice el aspirante, otro responde en vivo y un tercero contrasta con la respuesta esperada usando la matriz.</p>')}
 <div class="filters" id="fcat">${['Todas',...CAT].map((c,i)=>`<button class="chip" data-fc="${c}" aria-pressed="${i===0}">${c}</button>`).join('')}</div>
 <div class="filters" id="fdif">${['Toda dificultad','Básico','Intermedio','Avanzado'].map((c,i)=>`<button class="chip" data-fd="${i===0?'todas':i}" aria-pressed="${i===0}">${c}</button>`).join('')}</div>
 <p id="ccount" style="font-size:.88rem;color:var(--muted)"></p>
 <div id="caselist">${CASOS.map((c,i)=>`<div class="case" data-cat="${c.c}" data-dif="${c.d}">
  <div class="case__t"><div class="case__id">CASO ${String(i+1).padStart(2,'0')}</div>
   <div class="badges"><span class="bdg cat">${c.c}</span><span class="bdg d${c.d}">${DIFT[c.d]}</span></div></div>
  <div class="case__b">
   <div class="case__ctx">${c.ctx}</div>
   <div class="case__say">${c.s}</div>
   <div class="case__reto">Reto: ${c.r}</div>
   <button class="btn btn--o" data-reveal="${i}">Ver respuesta esperada</button>
   <div class="reveal" data-rev="${i}">
    <h5>Respuesta esperada</h5><p>${c.e}</p>
    <h5>Por qué</h5><p>${c.j}</p>
    <h5>Aprendizaje clave</h5><p><strong>${c.a}</strong></p>
   </div></div></div>`).join('')}</div>
 ${note('alert','Esta biblioteca está en construcción','<p>Son 40 casos completos de una biblioteca proyectada a 200. Las tandas siguientes ampliarán cada categoría manteniendo la misma estructura, sin repetir escenarios con nombres cambiados. Si tienes situaciones reales que valga la pena incorporar, recógelas y se suman a la próxima tanda.</p>')}`;
}

/* ===== Cápsulas ===== */
const GRUPOS = ['Todas','Identidad','Modelo','Modalidades','Portafolio','Ecosistema','Inversión','Método'];
function renderCapsulas(){
 return `<h1>Cápsulas de conocimiento</h1>
 <p class="lead">Una cápsula, un dato. Hechas para consultarse en treinta segundos, antes de una llamada o en mitad de una conversación. No explican el porqué: eso está en los módulos. No traen precios por programa: eso está en el machete.</p>
 <div class="filters">${GRUPOS.map((g,i)=>`<button class="chip" data-cap="${g}" aria-pressed="${i===0}">${g}</button>`).join('')}</div>
 <div class="caps">${CAPSULAS.map(c=>`<div class="cap" data-g="${c.g}"><div class="cap__n">CÁPSULA ${c.n} · ${c.g.toUpperCase()}</div><div class="cap__t">${c.t}</div><div class="cap__b">${c.b}</div></div>`).join('')}</div>`;
}

/* ===== Inicio y objetivos ===== */
const INICIO = `
<div class="hero">
  <div class="kicker" style="color:#9FE8E3">CEIPA ACADEMY COMERCIAL</div>
  <h1>Conocer CEIPA para poder asesorar bien</h1>
  <p>El propósito de esta ruta no es que aprendas a vender. Es que conozcas, comprendas y domines CEIPA, y que después uses ese dominio de forma consultiva: preguntando antes de argumentar y argumentando solo lo que le sirve a la persona que tienes enfrente.</p>
  <p class="hero__q">“Las personas compran educación por confianza y por el valor que les genera el programa en su crecimiento personal.”</p>
  <div class="hero__m">Fundación Universitaria CEIPA · Acreditación Institucional en Alta Calidad<br>Resolución MEN N.° 016362 del 23 de junio de 2026, por 6 años · Vigilada MINEDUCACIÓN</div>
</div>
<h2>Las tres cosas que esta herramienta hace</h2>
${tbl(['','Para qué sirve','Cuándo la abres'],[
 ['<strong>Formar</strong>','Cuatro módulos independientes: institucional, comercial, imagen y oratoria','En tu proceso de inducción o de refuerzo'],
 ['<strong>Consultar</strong>','Machete comercial por programa, cápsulas, ejemplos y guiones, y las condiciones del Nodo Barranquilla','Mientras hablas con un aspirante'],
 ['<strong>Evaluar</strong>','Pruebas por módulo, comprobación rápida y evaluación final con resultado','Cuando te vas a certificar o a recalificar']
])}
${note('key','La regla de no repetición','<p>Cada sección hace algo distinto. Los módulos enseñan, las cápsulas refuerzan, los ejemplos facilitan la aplicación, el machete resuelve datos de programa, los casos permiten practicar y la evaluación comprueba. Si buscas el mismo dato en dos lugares, el segundo te remite al primero.</p>')}
<h2>Acceso rápido</h2>
<div class="btnrow">
 <button class="btn btn--n" data-go="machete">Machete comercial</button>
 <button class="btn" data-go="bquilla">Nodo Barranquilla</button>
 <button class="btn btn--o" data-go="capsulas">Cápsulas</button>
 <button class="btn btn--o" data-go="ejemplos">Ejemplos y guiones</button>
 <button class="btn btn--o" data-go="casos">Casos prácticos</button>
</div>
<h2>Por dónde empezar</h2>
${tbl(['Si eres…','Recorrido','Tiempo'],[
 ['Colaborador nuevo','Módulos 1 a 4 completos y todas las pruebas','5 semanas'],
 ['Colaborador actual','Evaluación final primero, luego refuerzo en los módulos con brecha','2 semanas'],
 ['Rol con contacto ocasional con aspirantes','Módulo 1, cápsulas y machete','1 semana'],
 ['Líder o formador','Ruta completa, con foco en casos y matriz de desempeño','6 semanas']
])}
${note('alert','Antes de usar cualquier cifra con un aspirante','<p>Precios, descuentos, horarios, convocatorias y calendarios cambian por período. Valida contra la fuente oficial vigente. Donde falta un dato, esta herramienta lo marca como <strong>pendiente de validación</strong> y no lo rellena con suposiciones. Los pendientes están reunidos en Recursos.</p>')}
<h2>Fuentes</h2>
<p>Toda la información proviene de la documentación institucional entregada —presentación institucional 2026, manual de portafolio, fichas de programa, guías comerciales, modelo de los 7 pasos de la venta y archivos de tarifas y valores 2026— y de <a href="https://ceipa.edu.co/" target="_blank" rel="noopener">ceipa.edu.co</a>. Los módulos 3 y 4 se construyeron con buenas prácticas profesionales generales, porque no existe protocolo institucional documentado sobre imagen y oratoria; están marcados como tales.</p>
`;

const OBJETIVOS = `<h1>Objetivos de aprendizaje</h1>
<p class="lead">Al terminar esta ruta debes poder hacer estas cosas, no solo saberlas. Cada resultado está redactado como conducta observable, porque así es como se evalúa.</p>
${note('key','Resultado general','<p>Que puedas sostener una conversación comercial completa con cualquier perfil de aspirante: diagnosticando antes de argumentar, eligiendo el argumento correcto entre todo lo que sabes de CEIPA, resolviendo datos de programa en segundos, manejando la resistencia sin ponerte a la defensiva y dejando siempre un siguiente paso acordado.</p>')}
<h2>Resultados por módulo</h2>
${tbl(['Módulo','Al terminar, podrás…'],[
 ['1 · Formación institucional CEIPA','Explicar qué es CEIPA en el sistema de educación superior · diferenciar Registro Calificado de Acreditación · explicar UBFlex sin tecnicismos · ubicar cualquier programa en su nivel, modalidad y perfil · traducir filosofía, símbolos y servicios a beneficio concreto'],
 ['2 · Formación comercial y venta consultiva','Identificar perfiles y motivadores · formular preguntas de contexto, necesidad, profundidad e implicación · ejecutar los 7 pasos · construir argumentos con CVBR completo · resolver en cinco minutos · clasificar y manejar objeciones · sostener seguimiento con valor nuevo'],
 ['3 · Presentación personal e imagen profesional','Elegir vestuario según contexto y perfil · sostener postura y expresión que comuniquen apertura · aplicar protocolo de cortesía y puntualidad · adaptar tu presentación a lo presencial, virtual, telefónico y de evento · corregir tus errores frecuentes'],
 ['4 · Oratoria, comunicación verbal y no verbal','Controlar volumen, ritmo y pausa · eliminar muletillas identificadas · estructurar un mensaje en menos de un minuto · manejar los nervios · adaptar la voz al canal · presentar ante un grupo sin leer']
])}
<h2>Resultados de las secciones de consulta</h2>
${tbl(['Sección','Al terminar, podrás…'],[
 ['Machete comercial','Responder perfil, modalidad, duración, costo, descuentos, requisitos y diferenciales de cualquier programa en menos de treinta segundos, y saber cuándo un dato debe validarse antes de comunicarse'],
 ['Nodo Barranquilla','Distinguir lo que aplica solo en el Atlántico: blended, beneficios por canal, cajas de compensación y valores de núcleo ya negociados'],
 ['Casos prácticos','Decidir qué responder ante cuarenta situaciones reales y justificar por qué']
])}
<h2>Los nueve criterios con los que se te evalúa</h2>
${tbl(['Nivel evaluado','Qué mide','Criterios asociados'],[
 ['Conocimiento','Si sabes los datos de CEIPA y de la oferta','Conocimiento de CEIPA'],
 ['Comprensión','Si entiendes el porqué y puedes explicarlo','Claridad, Síntesis'],
 ['Aplicación','Si puedes hacerlo en una conversación','Identificación de necesidades, Escucha, Argumentación, Conexión'],
 ['Dominio comercial','Si lo sostienes bajo presión','Manejo de objeciones, Cierre']
])}
${note('alert','Umbral de habilitación','<p>El mínimo para operar con aspirantes es <strong>3,0 sobre 4,0</strong>, sin ningún criterio en nivel 1. La matriz completa está en Recursos.</p>')}
<h2>Lo que esta ruta no hace</h2>
<ul>
 <li>No entrega libretos para memorizar. Las estructuras se adaptan; las palabras son tuyas.</li>
 <li>No reemplaza la práctica en vivo. Los casos preparan, el role play entrena, la conversación real enseña.</li>
 <li>No sustituye la verificación de datos. Precios, descuentos y convocatorias se validan siempre contra la fuente oficial.</li>
</ul>`;

/* ===== Módulos ===== */
function renderModulosIndex(){
 return `<h1>Módulos de formación</h1>
 <p class="lead">Cuatro módulos independientes. Cada uno tiene objetivos, contenidos desarrollados, ejemplos aplicados, actividades de aprendizaje y un cierre con los aprendizajes clave. Las evaluaciones no están aquí: viven en su propio módulo.</p>
 <div class="modlist" style="display:grid;gap:.75rem;margin-top:1.2rem">${MODULOS.map(m=>`<button class="pcard" data-go="${m.id}">
  <div class="pcard__n">${m.n.toUpperCase()}</div><div class="pcard__t">${m.t}</div><p class="pcard__d">${m.d}</p></button>`).join('')}</div>
 ${note('key','Dónde está cada cosa','<p>Guiones y banco de respuestas a objeciones: en <em>Ejemplos y guiones</em>. Fichas de programa, precios y descuentos: en el <em>Machete comercial</em>. Práctica con situaciones reales: en <em>Casos prácticos</em>. Pruebas calificadas: en <em>Evaluación</em>.</p>')}`;
}
function renderModulo(m){
 const i = MODULOS.indexOf(m), prev = MODULOS[i-1], next = MODULOS[i+1];
 return `<button class="btn btn--o" data-go="modulos" style="margin-bottom:1.2rem">← Volver a módulos</button>
 <div class="kicker">${m.n}</div><h1>${m.t}</h1>
 ${m.intro}${m.ficha}${m.cuerpo}
 <h2>Actividades de aprendizaje</h2>
 <p>Se practican, no se califican. La versión evaluada de estas competencias está en el módulo de Evaluación.</p>
 ${m.actividad}${m.cierre}
 <div class="foot">
  ${prev?`<button class="btn btn--o" data-go="${prev.id}">← ${prev.n}</button>`:'<button class="btn btn--o" data-go="inicio">← Inicio</button>'}
  ${next?`<button class="btn" data-go="${next.id}">${next.n}: ${next.t} →</button>`:`<button class="btn" data-go="evaluacion">Ir a Evaluación →</button>`}
 </div>`;
}
/* ===== Secciones y navegación ===== */
const SEC = [
 {id:'inicio', t:'Inicio', g:'Empezar', r:()=>INICIO},
 {id:'objetivos', t:'Objetivos de aprendizaje', g:'Empezar', r:()=>OBJETIVOS},
 {id:'modulos', t:'Módulos de formación', g:'Formación', r:renderModulosIndex},
 {id:'machete', t:'Machete comercial', g:'Consulta rápida', r:renderMachete},
 {id:'bquilla', t:'Nodo Barranquilla', g:'Consulta rápida', r:()=>BQUILLA},
 {id:'capsulas', t:'Cápsulas de conocimiento', g:'Consulta rápida', r:renderCapsulas},
 {id:'ejemplos', t:'Ejemplos y guiones', g:'Consulta rápida', r:()=>`<h1>Ejemplos y guiones</h1>${EJEMPLOS}`},
 {id:'casos', t:'Casos prácticos', g:'Práctica', r:renderCasos},
 {id:'evaluacion', t:'Evaluación', g:'Práctica', r:renderEvaluacion},
 {id:'recursos', t:'Recursos y conceptos clave', g:'Práctica', r:()=>`<h1>Recursos y conceptos clave</h1>${RECURSOS}`}
];
const MODNAV = MODULOS.map(m=>({id:m.id, t:m.t, g:'Formación'}));

let vistas = new Set();
const KEY='ceipa_academy_v2';
function cargar(){ try{const r=localStorage.getItem(KEY); if(r){const d=JSON.parse(r); if(Array.isArray(d.v)) vistas=new Set(d.v);} }catch(e){} }
function guardar(){ try{localStorage.setItem(KEY,JSON.stringify({v:[...vistas]}));}catch(e){} }

function renderNav(){
 const nav=document.getElementById('nav'); let h='',g='';
 const items=[];
 SEC.forEach(s=>{ items.push(s); if(s.id==='modulos') MODNAV.forEach(m=>items.push({...m, sub:1})); });
 items.forEach(s=>{
  if(s.g!==g){ g=s.g; h+=`<div class="nav__g">${g}</div>`; }
  h+=`<button class="nav__i${vistas.has(s.id)?' done':''}" data-go="${s.id}" style="${s.sub?'padding-left:2.1rem;font-size:.85rem':''}"><span class="dot"></span><span>${s.t}</span></button>`;
 });
 nav.innerHTML=h;
 const tot=SEC.length+MODNAV.length, n=[...vistas].filter(v=>items.some(i=>i.id===v)).length;
 document.getElementById('pb').style.width=Math.round(n/tot*100)+'%';
 document.getElementById('pt').textContent=`${n} de ${tot} secciones`;
}

/* ===== Buscador ===== */
let INDEX=null;
const plano = html => html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
function construirIndice(){
 INDEX=[];
 SEC.forEach(s=>{ if(['machete','casos','capsulas','evaluacion'].includes(s.id)) return;
   INDEX.push({id:s.id, sec:s.t, t:s.t, txt:plano(s.r())}); });
 MODULOS.forEach(m=>INDEX.push({id:m.id, sec:'Módulo', t:m.t, txt:plano(m.intro+m.cuerpo+m.cierre)}));
 PROGRAMAS.forEach(p=>INDEX.push({id:p.id, sec:'Machete · '+p.niv, t:p.n, txt:plano([p.perfil,p.porque,p.difs,p.ejes,p.egr,p.mod,p.ojo].filter(Boolean).join(' '))}));
 CAPSULAS.forEach(c=>INDEX.push({id:'capsulas', sec:'Cápsula '+c.n, t:c.t, txt:plano(c.b)}));
 CASOS.forEach((c,i)=>INDEX.push({id:'casos', sec:'Caso '+String(i+1).padStart(2,'0')+' · '+c.c, t:c.r, txt:plano(c.ctx+' '+c.s+' '+c.e+' '+c.j+' '+c.a)}));
 INDEX.push({id:'bquilla', sec:'Nodo Barranquilla', t:'Beneficios, cajas de compensación y blended', txt:plano(BQUILLA)});
 INDEX.push({id:'evaluacion', sec:'Evaluación', t:'Pruebas por módulo y evaluación final', txt:'evaluacion prueba examen calificacion matriz habilitacion certificacion'});
}
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
function buscar(q){
 if(!INDEX) construirIndice();
 const n=norm(q); if(n.length<2) return [];
 return INDEX.map(it=>{
   const t=norm(it.t), x=norm(it.txt);
   let sc=0; if(t.includes(n)) sc+=10; if(norm(it.sec).includes(n)) sc+=4;
   const m=x.split(n).length-1; sc+=Math.min(m,6);
   return {it, sc, pos:x.indexOf(n)};
 }).filter(r=>r.sc>0).sort((a,b)=>b.sc-a.sc).slice(0,25);
}
function renderBusqueda(q){
 const res=buscar(q);
 return `<h1>Resultados para “${esc(q)}”</h1>
 <p class="lead">${res.length?`${res.length} coincidencia${res.length>1?'s':''}. Toca una para ir a la sección.`:'Sin coincidencias. Prueba con otra palabra: precio, blended, homologación, objeción, Cajacopi, UBFlex, pronto pago.'}</p>
 ${res.map(r=>{
   const x=r.it.txt; let frag='';
   if(r.pos>=0){ const a=Math.max(0,r.pos-90); frag=(a>0?'…':'')+x.slice(a,r.pos+160)+'…'; }
   else frag=x.slice(0,180)+'…';
   return `<button class="sr" data-go="${r.it.id}"><div class="sr__s">${r.it.sec}</div><div class="sr__t">${r.it.t}</div><p class="sr__x">${esc(frag)}</p></button>`;
 }).join('')}`;
}

/* ===== Router ===== */
function ir(id, push){
 const mod=MODULOS.find(m=>m.id===id), prog=PROGRAMAS.find(p=>p.id===id), sec=SEC.find(s=>s.id===id);
 let html, titulo, navId=id;
 if(mod){ html=renderModulo(mod); titulo=mod.n+': '+mod.t; }
 else if(prog){ html=fichaPrograma(prog); titulo=prog.n; navId='machete'; }
 else if(sec){ html=sec.r(); titulo=sec.t; }
 else if(id.startsWith('q:')){ const q=decodeURIComponent(id.slice(2)); html=renderBusqueda(q); titulo='Búsqueda'; navId=''; }
 else return ir('inicio', true);
 document.getElementById('app').innerHTML=`<div class="view">${html}</div>`;
 document.getElementById('topt').textContent=titulo;
 document.title=titulo+' — CEIPA Academy Comercial';
 if(!id.startsWith('q:')){ vistas.add(navId); if(mod) vistas.add(mod.id); guardar(); }
 renderNav();
 document.querySelectorAll('.nav__i').forEach(b=>b.setAttribute('aria-current', b.dataset.go===navId));
 window.scrollTo({top:0});
 if(id==='casos') filtrarCasos();
 if(push!==false && location.hash.slice(1)!==id) history.pushState({id},'','#'+id);
 cerrar();
}
function cerrar(){ document.getElementById('side').classList.remove('open'); document.getElementById('scrim').classList.remove('open'); }

/* ===== Eventos ===== */
document.addEventListener('click', e=>{
 const go=e.target.closest('[data-go]'); if(go){ ir(go.dataset.go); return; }
 const ah=e.target.closest('.acc__h'); if(ah){ ah.closest('.acc').classList.toggle('open'); return; }
 const tb=e.target.closest('.tabs__b'); if(tb){ const id=tb.dataset.tabs,i=tb.dataset.i;
  document.querySelectorAll(`.tabs__b[data-tabs="${id}"]`).forEach(b=>b.setAttribute('aria-selected',b.dataset.i===i));
  document.querySelectorAll(`.tabs__p[data-tabs="${id}"]`).forEach(p=>p.hidden=p.dataset.i!==i); return; }
 const op=e.target.closest('.opt[data-quiz]'); if(op){ const id=op.dataset.quiz, fb=document.querySelector(`[data-fb="${id}"]`), ok=op.dataset.ok==='1';
  document.querySelectorAll(`.opt[data-quiz="${id}"]`).forEach(b=>{b.disabled=true; if(b.dataset.ok==='1') b.classList.add('right');});
  if(!ok) op.classList.add('wrong');
  fb.className='fb show '+(ok?'ok':'no'); fb.innerHTML=`<b>${ok?'Correcto.':'Revisa esto.'}</b> ${ok?fb.dataset.ok:fb.dataset.no}`; return; }
 const ev=e.target.closest('.opt[data-ev]'); if(ev){ const i=+ev.dataset.ev,j=+ev.dataset.j; evalResp[i]=j;
  document.querySelectorAll(`.opt[data-ev="${i}"]`).forEach(b=>b.classList.remove('right')); ev.classList.add('right'); return; }
 const ks=e.target.closest('.opt[data-kase]'); if(ks){ const id=ks.dataset.kase,i=ks.dataset.i,box=document.querySelector(`[data-kasebox="${id}"]`);
  document.querySelectorAll(`.opt[data-kase="${id}"]`).forEach(b=>b.disabled=true);
  ks.classList.add(ks.dataset.q==='best'?'right':'wrong');
  const t=document.querySelector(`template[data-kasefb="${id}"][data-i="${i}"]`), c=document.querySelector(`template[data-kasec="${id}"]`);
  box.className='fb show '+(ks.dataset.q==='best'?'ok':'no');
  box.innerHTML=t.innerHTML+(ks.dataset.q==='best'&&c?c.innerHTML:''); return; }
 const rv=e.target.closest('[data-reveal]'); if(rv){ const d=document.querySelector(`[data-rev="${rv.dataset.reveal}"]`);
  d.classList.toggle('show'); rv.textContent=d.classList.contains('show')?'Ocultar respuesta':'Ver respuesta esperada'; return; }
 const ch=e.target.closest('.chip[data-cap]'); if(ch){ const g=ch.dataset.cap;
  document.querySelectorAll('.chip[data-cap]').forEach(c=>c.setAttribute('aria-pressed',c.dataset.cap===g));
  document.querySelectorAll('.cap').forEach(c=>c.hidden=!(g==='Todas'||c.dataset.g===g)); return; }
 const nv=e.target.closest('.chip[data-niv]'); if(nv){ const g=nv.dataset.niv;
  document.querySelectorAll('.chip[data-niv]').forEach(c=>c.setAttribute('aria-pressed',c.dataset.niv===g));
  document.querySelectorAll('.pcard[data-niv]').forEach(c=>c.hidden=!(g==='Todos'||c.dataset.niv===g)); return; }
 const fc=e.target.closest('.chip[data-fc]'); if(fc){ document.querySelectorAll('.chip[data-fc]').forEach(c=>c.setAttribute('aria-pressed',c===fc)); filtrarCasos(); return; }
 const fd=e.target.closest('.chip[data-fd]'); if(fd){ document.querySelectorAll('.chip[data-fd]').forEach(c=>c.setAttribute('aria-pressed',c===fd)); filtrarCasos(); return; }
 if(e.target.closest('#evalsend')){ calificar(); return; }
 if(e.target.closest('#evalreset')){ evalResp={}; ir('evaluacion', false); return; }
 if(e.target.closest('#burger')){ document.getElementById('side').classList.toggle('open'); document.getElementById('scrim').classList.toggle('open'); return; }
 if(e.target.closest('#scrim')){ cerrar(); return; }
 if(e.target.closest('#theme')){ const c=document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', c==='dark'?'light':'dark'); return; }
 if(e.target.closest('#reset')){ vistas=new Set(); evalResp={}; guardar(); renderNav(); ir('inicio'); return; }
});

function filtrarCasos(){
 const c=document.querySelector('.chip[data-fc][aria-pressed="true"]'), d=document.querySelector('.chip[data-fd][aria-pressed="true"]');
 const cat=c?c.dataset.fc:'Todas', dif=d?d.dataset.fd:'todas';
 let n=0;
 document.querySelectorAll('.case[data-cat]').forEach(el=>{
  const ok=(cat==='Todas'||el.dataset.cat===cat)&&(dif==='todas'||el.dataset.dif===dif);
  el.hidden=!ok; if(ok) n++;
 });
 const cc=document.getElementById('ccount'); if(cc) cc.textContent=`${n} caso${n===1?'':'s'} visible${n===1?'':'s'} de ${CASOS.length}.`;
}

const qi=document.getElementById('q');
let qt=null;
qi.addEventListener('input', ()=>{ clearTimeout(qt); const v=qi.value.trim();
 qt=setTimeout(()=>{ if(v.length>=2) ir('q:'+encodeURIComponent(v), false); else if(location.hash.startsWith('#q:')) ir('inicio', false); }, 260); });
qi.addEventListener('keydown', e=>{ if(e.key==='Enter'&&qi.value.trim().length>=2) ir('q:'+encodeURIComponent(qi.value.trim()), false); });

window.addEventListener('popstate', ()=> ir(location.hash.slice(1)||'inicio', false));
cargar(); renderNav(); ir(location.hash.slice(1)||'inicio', false);
