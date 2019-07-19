import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EmployeeModule} from './employee/employee.module';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NodeDeFraisComponent} from './node-de-frais/node-de-frais.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        EmployeeModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NodeDeFraisComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
