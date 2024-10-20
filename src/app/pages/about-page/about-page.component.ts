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
  // Swiper
  currentSlide = 0;
  // Number of slides
  slides: any[] = []; // Dynamic slides
  // Scrolling flag
  isScrolling = false;
  // Footer visibility
  isFooterVisible = false;

  constructor( private _sharedService: SharedService, private _pagesService: PagesService ) {}

  ngOnInit(): void {
    this.darkMode();
    this.getSlides();
    
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

  getSlides() {
    this._pagesService.getSlides().subscribe((slides: any[]) => {
      this.slides = slides;
      this.showSkeleton = false;
    });
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;

    this.isScrolling = true;
    if (event.deltaY > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // Adjust timeout to match the CSS transition duration

    this.checkFooterVisibility();
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.updateSlidePosition();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlidePosition();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const swiperWrapper = document.querySelector('.swiper-wrapper') as HTMLElement;
    swiperWrapper.style.transform = `translateY(-${this.currentSlide * 100}vh)`;
  }

  checkFooterVisibility() {
    this.isFooterVisible = (this.currentSlide === this.slides.length - 1);
  }

}
