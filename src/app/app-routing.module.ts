import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
    {
        path: '',
        component: IntroComponent,
        data: { animation: '0', fadeIn: 'a' },
    },

    {
        path: 'about',
        component: AboutComponent,
        data: { animation: '1', fadeIn: 'b' },
    },

    {
        path: 'projects',
        component: ProjectsComponent,
        pathMatch: 'full',
        data: { animation: '2', fadeIn: 'c' },
    },
    {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full',
        data: { animation: '3', fadeIn: 'd' },
    },
    { path: '**', component: IntroComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
