import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { AboutComponent } from './about/about.component'
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: '**', component: IntroComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
