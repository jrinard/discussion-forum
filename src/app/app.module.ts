import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { NewestComponent } from './newest/newest.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [ // components go here
    AppComponent,
    WelcomeComponent,
    NewestComponent,
    ListPostComponent,
    PostDetailComponent
  ],
  imports: [ // modules go here
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
