import { Component } from '@angular/core';
import { AllService } from './services/all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMuralLinhaAtiva = false;

  constructor(private serviceAll: AllService) {
  }

  mudaLayout = () => {
    this.isMuralLinhaAtiva = !this.isMuralLinhaAtiva;
  }
}


