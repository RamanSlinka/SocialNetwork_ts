import appReducer, {initializedSuccess} from "./AppReducer";

let state: initialStateType = {
    initialized: false
};
 type initialStateType = {
    initialized: boolean

}
test('new post should be added', () => {
    let action = initializedSuccess();
    let newState =  appReducer(state, action);

    expect( newState.initialized).toBe(true);

})