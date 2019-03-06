import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SystemComponent } from './system.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { CountersPageComponent } from './counters-page/counters-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MailPageComponent } from './mail-page/mail-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { AreaPageComponent } from './area-page/area-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

const routes: Routes = [
    {
        path: 'system', component: SystemComponent, children: [
            { path: 'news', component: NewsPageComponent },
            { path: 'counters', component: CountersPageComponent },
            { path: 'payments', component: PaymentsPageComponent },
            { path: 'services', component: ServicesPageComponent },
            { path: 'orders', component: OrdersPageComponent },
            { path: 'mail', component: MailPageComponent },
            { path: 'statistics', component: StatisticsPageComponent },
            { path: 'area', component: AreaPageComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }