import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';

import { titleTypes } from '../../components/title-pages/title.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  // Dark Theme
  public isDarkMode: boolean = false;
  // Title type
  public titleType: titleTypes = titleTypes.home;
  // Title text
  public title!: string;

  constructor( private _sharedService: SharedService ) { }

  ngOnInit(): void {
    this.darkMode();
  }
  
  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }


  text: string = 'Hola, mi nombre es Juanma. Desde que tengo memoria, he sentido una profunda conexión con el mundo del diseño y la tecnología. Esa curiosidad me ha llevado a desarrollar un enfoque creativo en el que el arte visual y la funcionalidad técnica se complementan para dar vida a proyectos digitales. Hoy, como diseñador gráfico y desarrollador web, mi misión es crear experiencias que no solo se vean bien, sino que también inspiren, conecten y aporten valor real. Mi camino comenzó con un lápiz y papel, explorando formas, colores y espacios. Con el tiempo, esa pasión evolucionó hacia herramientas digitales, donde descubrí el potencial infinito del diseño gráfico. A lo largo de los años, he tenido la suerte de trabajar en una variedad de proyectos que me han permitido perfeccionar habilidades en diseño visual, branding, diseño UX/UI y desarrollo web. Cada proyecto ha sido una oportunidad para aprender, adaptarme y crecer profesionalmente. Como desarrollador web, me especializo en tecnologías como HTML, CSS, JavaScript, Angular y frameworks modernos que permiten construir sitios y aplicaciones eficientes, intuitivas y atractivas. Sin embargo, para mí, el diseño y el desarrollo son dos caras de la misma moneda; creo firmemente que un proyecto solo alcanza su máximo potencial cuando la estética y la funcionalidad trabajan en armonía. Además de las habilidades técnicas, valoro profundamente la colaboración. Trabajar en equipo y comunicarme de manera efectiva con clientes y colegas ha sido fundamental para llevar a cabo ideas complejas y adaptarlas a las necesidades reales de cada proyecto. Creo que los mejores resultados surgen de la combinación de creatividad, precisión técnica y una buena comunicación. Mi propósito va más allá de simplemente construir interfaces atractivas. Aspiro a crear experiencias memorables que reflejen la identidad y la visión de cada cliente, ayudándoles a conectar con su audiencia de una manera significativa. Cada proyecto es una nueva historia, una nueva oportunidad para aprender y superarme, y espero poder seguir creciendo en este apasionante viaje. Gracias por visitar mi portafolio. Espero que disfrutes explorando mi trabajo tanto como yo he disfrutado creando cada pieza. Un cordial saludo, Juanma';

}
