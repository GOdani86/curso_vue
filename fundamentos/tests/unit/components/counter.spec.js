import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'
describe("Counter component", ()=>{
    // test("Debe de hacer match con el snapshot", ()=> {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test("h2 debe tener el valor por defecto Counter",()=> {
        const wrapper = shallowMount(Counter)
        const h2 = wrapper.find('h2')
        expect(wrapper.find('h2').exists()).toBeTruthy();
        const h2Value = h2.text();
        expect(h2Value).toBe('Counter')
    })

    test("el valor por defecto debe ser 100 en el p", ()=>{
        const wrapper = shallowMount(Counter)
        const pTag = wrapper.find('[data-testid="counter"]').text()
        console.log(pTag)
        // const pTags = wrapper.findAll('p')
        // const p2Value = pTags[1].text()
        expect(pTag).toBe("100")
    })
    // test("debe de incrementar en 1 el valor del contador", async() => {
    //     const wrapper = shallowMount(Counter)
    //     const increaseBtn = wrapper.find('button')
    //     await increaseBtn.trigger('click')
    //     const value = wrapper.find('[data-testid="counter"]').text()
    //     console.log(value)
    //     expect(value).toBe('101') 
    // })
    test('debe de incrementar en 1 el valor del contador', async() => {
        const wrapper = shallowMount( Counter )
        const increaseBtn = wrapper.find('button')
        await increaseBtn.trigger('click')
        const value = wrapper.find('[data-testid="counter"]').text()
        expect( value ).toBe('101')
        console.log('VALUE',value);
    })
})