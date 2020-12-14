import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NewsComponent } from "./news/news.component";
import { HomeComponent } from "./home/home.component";
import { ZomatoComponent } from "./zomato/zomato.component";
import { GameComponent } from "./game/game.component";
import { LoginComponent } from "./login/login.component";
import { ExamComponent } from "./exam/exam.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "news", canActivate: [AuthGuard], component: NewsComponent },
  { path: "Exam", canActivate: [AuthGuard], component: ExamComponent },
  { path: "home", canActivate: [AuthGuard], component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "game", component: GameComponent },
  { path: "zomato", canActivate: [AuthGuard], component: ZomatoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forRoot(routes, { anchorScrolling: "enabled" }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
