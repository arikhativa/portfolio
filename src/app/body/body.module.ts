import { NavbarComponent } from "./../navbar/navbar.component"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { IntroComponent } from "../intro/intro.component"
import { BackgroundComponent } from "../background/background.component"
import { FormsModule } from "@angular/forms"
import { DockModule } from "primeng/dock"
import { RadioButtonModule } from "primeng/radiobutton"
import { YoavComponent } from "../yoav/yoav.component"

@NgModule({
    declarations: [NavbarComponent, IntroComponent, YoavComponent],
    imports: [
        CommonModule,
        BackgroundComponent,
        DockModule,
        RadioButtonModule,
        FormsModule,
    ],
    exports: [IntroComponent, BackgroundComponent, NavbarComponent],
})
export class BodyModule {}
