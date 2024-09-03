import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BodyModule } from './body/body.module'
import { StoreService } from './store.service'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BodyModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [StoreService],
    bootstrap: [AppComponent],
})
export class AppModule {}
