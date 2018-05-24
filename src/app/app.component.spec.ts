// tslint:disable-next-line:ordered-imports
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicModule, Platform } from 'ionic-angular';
import { PlatformMock, SplashScreenMock, StatusBarMock } from '../../test-config/mocks/mocks-ionic';
import { ListPage } from '../pages/list/list';
import { MyApp } from './app.component';

describe('Component: Root Component', () => {
    // Testbed Variables
    let fixture: ComponentFixture<MyApp>;
    let component: MyApp;

    // Services
    let platformService: PlatformMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock }
            ]
        });
    }));

    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    function createComponent() {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    }

    describe('Main', () => {

        beforeEach(() => {
            // Spys and getters for services used in constructor
            platformService = TestBed.get(Platform);
            spyOn(platformService, 'ready').and.callThrough();

            // Testbed creation
            createComponent();

            // Other Spys

        });

        afterEach(() => {
            platformService = null;
        });

        it('should be defined', () => {
            expect(component).toBeDefined();
        });

        it('is created', () => {
            expect(fixture).toBeTruthy();
            expect(component instanceof MyApp).toBe(true);
        });

        it('side menu should have two pages', () => {
            expect(component.pages.length).toBe(2);
        });

        it('should be able to open a page', () => {
            spyOn(component.nav, 'setRoot');
            component.openPage(component.pages[1]);
            expect(component.nav.setRoot).toHaveBeenCalledWith(ListPage);
        });

        it('should call platform ready', () => {
            expect(component.platform.ready).toHaveBeenCalled();
        });

        describe('On Platform Ready', () => {

            it('should style app', fakeAsync(() => {
                spyOn(component.statusBar, 'styleDefault');
                expect(component.statusBar.styleDefault).not.toHaveBeenCalled();
                component.initializeApp();
                tick();
                expect(component.statusBar.styleDefault).toHaveBeenCalled();
            }));

            it('should hide splash screen', fakeAsync(() => {
                spyOn(component.splashScreen, 'hide');
                expect(component.splashScreen.hide).not.toHaveBeenCalled();
                component.initializeApp();
                tick();
                expect(component.splashScreen.hide).toHaveBeenCalled();
            }));
        });
    });
});
