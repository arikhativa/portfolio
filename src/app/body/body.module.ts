import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IntroComponent } from '../intro/intro.component'
import { BackgroundComponent } from '../background/background.component'
import { FormsModule } from '@angular/forms'
import { DockModule } from 'primeng/dock'
import { RadioButtonModule } from 'primeng/radiobutton'
import { YoavComponent } from '../yoav/yoav.component'
import { RabbyComponent } from '../rabby/rabby.component'
import { AboutComponent } from '../about/about.component'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { ProjectsComponent } from '../projects/projects.component'
import { AccordionModule } from 'primeng/accordion'
import { ChipModule } from 'primeng/chip'
import { ContactComponent } from '../contact/contact.component'
import { DividerModule } from 'primeng/divider'
import { BadgeComponent } from '../badge/badge.component'
import { HexComponent } from '../hex/hex.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component'

@NgModule({
    declarations: [
        NavbarComponent,
        IntroComponent,
        YoavComponent,
        RabbyComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        BadgeComponent,
        HexComponent,
        TechStackComponent,
    ],
    imports: [
        DividerModule,
        ChipModule,
        AccordionModule,
        ButtonModule,
        CardModule,
        CommonModule,
        BackgroundComponent,
        DockModule,
        RadioButtonModule,
        FormsModule,
    ],
    exports: [IntroComponent, BackgroundComponent, NavbarComponent],
})
export class BodyModule {}
