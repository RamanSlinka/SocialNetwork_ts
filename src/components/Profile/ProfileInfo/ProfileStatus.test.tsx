import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatusComponent", () => {
    test("status from should be in the state", () => {
        // @ts-ignore
        const component = create(<ProfileStatus status="IT-incubator"/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("IT-incubator");
    });

    test("after creation span  with should be displayed", () => {
        // @ts-ignore
        const component = create(<ProfileStatus status="IT-incubator"/>);

        const root = component.root;
        // @ts-ignore
        expect(()=> {
        let input = root.findByType("input")
        }).toThrow();
    });
});