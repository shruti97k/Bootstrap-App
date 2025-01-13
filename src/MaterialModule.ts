import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule

    ]
})

export class MaterialModule{

}