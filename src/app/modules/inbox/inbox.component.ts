import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { CharacterizationComponent } from '../optionsDropdown/characterization/characterization.component';


// Definición de rutas
const routes: Routes = [
    { path: 'characterization', component: CharacterizationComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' } // Ruta por defecto
];

@Component({
    selector     : 'inbox',
    standalone   : true,
    templateUrl  : './inbox.component.html',
    styleUrl     : './inbox.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatIconModule,
        MatTableModule,
        MatMenuModule,
        RouterModule
    ]
})
export class InboxComponent {
    /**
     * Constructor
     */
    constructor() {}
}
