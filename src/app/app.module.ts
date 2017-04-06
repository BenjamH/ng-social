import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { AppComponent } from './app.component';
import { InstagramService } from './services/instagram/instagram.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AlbumComponent } from './album/album.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AlbumComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2Webstorage,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    InstagramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
