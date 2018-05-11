import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { NavMock } from '../../../test-config/mocks/mocks-ionic';
import { HomePage } from './home';

describe('Page: Home', () => {
    // Testbed Variables
    let fixture: ComponentFixture<HomePage>;
    let component: HomePage;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [
                IonicModule.forRoot(HomePage)
            ],
            providers: [
                { provide: NavController, useClass: NavMock }
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    it('should be defined', () => {
        expect(component).toBeDefined();
    });

    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(component instanceof HomePage).toBe(true);
    });

});
