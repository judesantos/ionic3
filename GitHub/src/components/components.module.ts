import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.components';

import { IonicModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    SearchResultsComponent,
    RepositoriesComponent
  ],
  declarations: [
    SearchResultsComponent,
    RepositoriesComponent
  ],
  providers: []
})
export class ComponentsModule {

}
