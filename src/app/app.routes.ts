import { Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {PostComponent} from "./post/post.component";

export const routes: Routes = [
  {path: '', component: ListComponent},
  {path: ':slug', component: PostComponent}
];