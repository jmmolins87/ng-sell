import { Component, HostListener, OnInit } from '@angular/core';

import { SharedService } from './../../shared/services/shared.service';
import { PagesService } from './../../services/pages-service.service';

import { titleTypes } from './../../components/title-pages/title.config';
import { Skill } from './../../interfaces/skills.interface';
import { skillContent } from './../../db/skills.db';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  // Dark Theme
  public isDarkMode: boolean = false;
  // Get type title Page
  public titlePageType: titleTypes = titleTypes.h1;
  // Get title Skills
  public titleSkillsType: titleTypes = titleTypes.h2;
  // Get skill
  public skillData: Skill[] = skillContent;
  // Skeleton loader
  public showSkeleton: boolean = true;

  numberSlides = [
    { title: 'Slide 1', description: 'Description 1' },
    { title: 'Slide 2', description: 'Description 2' },
    { title: 'Slide 3', description: 'Description 3' },
    // Puedes añadir más slides aquí
  ];
  activeIndex = 0;
  isDragging = false;
  startY = 0;
  currentTranslate = 0;

  constructor( private _sharedService: SharedService, private _pagesService: PagesService ) {}

  ngOnInit(): void {
    this.darkMode();
    
    setTimeout(() => {
      this.getSkills();
    }, 500);
  }

  // Function to get the dark mode status
  darkMode(): void {
    // Subscribe to the dark mode status to apply the class
    this._sharedService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  // get skills
  getSkills() {
    this._pagesService.skills.subscribe((skills: Skill[]) => {
      this.skillData = skills;
      this.showSkeleton = false;
    });
  }

  onMouseWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
  }

  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const distance = event.clientY - this.startY;
    this.currentTranslate = -this.activeIndex * window.innerHeight + distance;
    const swiperWrapper = document.querySelector('.swiper-wrapper') as HTMLElement;
    swiperWrapper.style.transform = `translateY(${this.currentTranslate}px)`;
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const threshold = 50; // Min drag distance to switch slides
    if (this.currentTranslate > -this.activeIndex * window.innerHeight + threshold) {
      this.prevSlide();
    } else if (this.currentTranslate < -this.activeIndex * window.innerHeight - threshold) {
      this.nextSlide();
    } else {
      this.goToSlide(this.activeIndex);
    }
  }

  goToSlide(index: number) {
    this.activeIndex = index;
    const swiperWrapper = document.querySelector('.swiper-wrapper') as HTMLElement;
    swiperWrapper.style.transform = `translateY(-${index * window.innerHeight}px)`;
  }

  nextSlide() {
    if (this.activeIndex < this.numberSlides.length - 1) {
      this.goToSlide(this.activeIndex + 1);
    }
  }

  prevSlide() {
    if (this.activeIndex > 0) {
      this.goToSlide(this.activeIndex - 1);
    }
  }

  updateSlidePosition() {
    const swiperWrapper = document.querySelector('.swiper-wrapper') as HTMLElement;
    const offset = this.currentTranslate * -100;
    swiperWrapper.style.transform = `translateY(${offset}vh)`;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSlidePosition();
  }

}
