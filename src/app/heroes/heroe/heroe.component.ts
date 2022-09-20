import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    // styleUrls:'./heroe.component.css'
})
export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spidermarn';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}