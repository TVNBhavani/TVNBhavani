import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = "Full Stack Developer.";
  typingSpeed = 90; // Adjust typing speed
  typedText = "";
  currentIndex = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.currentIndex < this.text.length) {
      this.typedText += this.text.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

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
