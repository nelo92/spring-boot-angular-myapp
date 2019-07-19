import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NodeDeFraisComponent} from "./node-de-frais/node-de-frais.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";

const routes: Routes = [
    {path: 'note-de-frais', component: NodeDeFraisComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
