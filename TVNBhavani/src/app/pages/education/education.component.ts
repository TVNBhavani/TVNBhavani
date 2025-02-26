import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = this.el.nativeElement.querySelectorAll('.scroll-animation');
    elements.forEach((el: HTMLElement) => {
      if (this.isElementInViewport(el)) {
        el.classList.add('show');
      }
    });
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100;
  }

}
