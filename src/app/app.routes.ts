import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {DairyComponent} from "./shared/components/dairy/dairy.component";
import {NoteComponent} from "./shared/components/note/note.component";
import {AccountComponent} from "./shared/components/account/account.component";
import {PageHomeComponent} from "./shared/components/page-home/page-home.component";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: PageHomeComponent},
      {path: 'account', component: AccountComponent},
      {path: 'diary', component: DairyComponent},
      {path: 'note/:id', component: NoteComponent }
    ]
  }
];
