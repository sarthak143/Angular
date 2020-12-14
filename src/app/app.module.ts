import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZomatoComponent } from './zomato/zomato.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { GameComponent } from './game/game.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    ZomatoComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ExamComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
