import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CuerpoBusquedaComponent } from './cuerpo-busqueda.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FilterPipe } from '../../pipes/filter.pipe';
import { articles } from 'src/app/mucks/articles.muck.';


describe('CuerpoBusquedaComponent', () => {
    let component: CuerpoBusquedaComponent;
    let fixture: ComponentFixture<CuerpoBusquedaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [CuerpoBusquedaComponent],
            providers: [FilterPipe],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CuerpoBusquedaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', inject(
        [HttpTestingController],
        () => {
            expect(component).toBeTruthy();
        }
    ));

    it("items not empty", () => {
        component.items = articles
        expect(component.items.length).toBeGreaterThan(0)
    })
    
    it("testing items filter with coincidences", () => {
        component.filterItems = "HUGGIES"
        component.items = articles
        component.filteredItems = articles
        component.getFilteredItems()
        expect(component.filteredItems.length).toBe(4)
    })
    it("testing items filter without coincidences", () => {
        component.filterItems = "Lorem ipsum"
        component.items = articles
        component.filteredItems = articles
        component.getFilteredItems()
        expect(component.filteredItems.length).toBe(0)
    })
});
