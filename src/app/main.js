import {Component, Input} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {}

@Component({
  selector: 'work-experience',
  template: `
  <div>
    <h2>{{workplace}}</h2>
    <p>{{when}}</p>
    <ng-content></ng-content>
  </div>
  `
})
export class WorkExperience {
  @Input() workplace;
  @Input() when;
}

@Component({
  selector: 'education',
  template: `
  <div>
    <h2>{{qualification}} at {{school}}</h2>
    <p>{{when}}</p>
    <ng-content></ng-content>
  </div>
  `
})
export class Education {
  @Input() school;
  @Input() when;
  @Input() qualification;
}
