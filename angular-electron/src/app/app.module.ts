import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';
import { ChatService } from './services/chat.service'; 

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ChatComponent } from './components/chat/chat.component';
import { InputComponent } from './components/chat/input/input.component';
import { MainComponent } from './components/chat/main/main.component';
import { MembersComponent } from './components/chat/members/members.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CanvasComponent,
    ChatComponent,
    MainComponent,
    InputComponent,
    MembersComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
