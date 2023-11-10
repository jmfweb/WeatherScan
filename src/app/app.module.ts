import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WeatherService } from "./services/weather.service";
import { WeatherWidgetMainComponent } from "./components/weather-widget-main/weather-widget-main.component";

@NgModule({
	imports: [BrowserModule, CommonModule, HttpClientModule, WeatherWidgetMainComponent],
	declarations: [AppComponent],
	providers: [WeatherService],
})
export class AppModule {}
