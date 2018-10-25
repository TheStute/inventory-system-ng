import {CardListComponent} from './components/card-list/card-list.component';
import {ScannerComponent} from './components/scanner/scanner.component';
import {GeneratorComponent} from './components/generator/generator.component';

export const routes = [
  {
    path: '',
    component: CardListComponent
  },
  {
    path: 'scan',
    component: ScannerComponent
  },
  {
    path: 'generate',
    component: GeneratorComponent
  },
  {
    path: ':id',
    redirectTo: '/'
  },
]
