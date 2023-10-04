import { Component } from "@angular/core";

@Component({
    selector: "app-binding",
    template: `
    <br/>
       <img [src]="image" [style]="{width: width}" />

    <div (click)="enviarDados()" class="alert" [class]="{sucesso: sucesso}">
        Alerta
    </div>
    `,
    styles: [`
        .alert {
            width: 200px;
            height: 100px;
            border: 1px solid black
        }

        .sucesso {
            background-color: green
        }
    `]

})

export class BindingComponent {
    image = "https://criptonizando.com/wp-content/uploads/2021/09/sNOOP-DOGG-1024x781-1.jpg"
    width = "300px"

    sucesso = true

    enviarDados() {
        this.sucesso = !this.sucesso
    }
}