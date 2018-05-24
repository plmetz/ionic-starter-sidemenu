// tslint:disable-next-line:ordered-imports
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { NavMock, NavParamsMock } from '../../../test-config/mocks/mocks-ionic';
import { ListPage } from './list';

describe('Page: List', () => {
    // Testbed Variables
    let fixture: ComponentFixture<ListPage>;
    let component: ListPage;

    // Services
    let navParams: NavParams;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListPage],
            imports: [
                IonicModule.forRoot(ListPage)
            ],
            providers: [
                { provide: NavController, useClass: NavMock },
                { provide: NavParams, useClass: NavParamsMock }
            ]
        });
    }));

    afterEach(() => {
        fixture.destroy();
        component = null;
    });

    function createComponent() {
        fixture = TestBed.createComponent(ListPage);
        component = fixture.componentInstance;
    }

    describe('Main', () => {

        beforeEach(() => {
            createComponent();
        });

        it('should be defined', () => {
            expect(component).toBeDefined();
        });

        it('is created', () => {
            expect(fixture).toBeTruthy();
            expect(component instanceof ListPage).toBe(true);
        });
    });

    describe('Nav Params', () => {

        it('should be empty if no params sent', () => {
            createComponent();
            expect(component.selectedItem).toBeUndefined();
        });

        it('should have a value if one is sent', () => {
            const testParams = 'Test Params';

            // Setup Spy
            navParams = TestBed.get(NavParams);
            spyOn(navParams, 'get').and.returnValue(testParams);

            // Create component and test value
            createComponent();
            expect(component.selectedItem).toBe(testParams);
        });


    });

});
