import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  routerLinks: string[] = [];

  ngOnInit() {
    this.initializeRouterLinks();
  }

  private initializeRouterLinks(): void {
    const step1Url = '/task/overview';
    const step2Url = '/task/dashboard';

    this.routerLinks.push(step1Url, step2Url);
  }
}
