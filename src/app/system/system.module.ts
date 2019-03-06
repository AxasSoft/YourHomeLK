import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { CountersPageComponent } from './counters-page/counters-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AreaPageComponent } from './area-page/area-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SystemRoutingModule,
        MDBBootstrapModule.forRoot(),
    ],
    declarations: [
        SystemComponent,
        HeaderComponent,
        SidebarComponent,
        NewsPageComponent,
        CountersPageComponent,
        PaymentsPageComponent,
        ServicesPageComponent,
        StatisticsPageComponent,
        MailPageComponent,
        AreaPageComponent,
        OrdersPageComponent,
    ],
    exports: [],
    providers: []
})

export class SystemModule {}