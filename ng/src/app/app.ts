import {Component, signal, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from './core';
import {FolderService} from './signal/folder.service';
import {AccordionContent, AccordionGroup, AccordionPanel, AccordionTrigger} from '@angular/aria/accordion';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('SAAS');
  public readonly ready = signal(false);
  public readonly auth = inject(AuthService);
  public readonly folder = inject(FolderService);

  public get user() {
    return this.auth.getUser();
  }

  constructor() {
    this.auth.ready()
      .then(() => this.ready.set(true))
      .catch((err) => console.error('Auth readiness error:', err));
  }

  authLogOut() {
    this.auth.signOut().then(() => {
      document.location.reload();
    });
  }
}
