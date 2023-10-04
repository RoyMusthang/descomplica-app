import { NgModule } from "@angular/core";
import { ClientListPage } from "./client-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
   imports: [
        RouterModule
    ],
    declarations: [
        ClientListPage

    ],
    exports: [
        PagesModules
    ]
})

export class PagesModules {}