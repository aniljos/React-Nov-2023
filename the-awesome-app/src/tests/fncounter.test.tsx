
import {render, fireEvent, screen} from '@testing-library/react';
import FnCounter from '../components/FnCounter';

describe("FnCounterTest", () => {

    test("FnCounter", () => {

        render(<FnCounter />);
        expect(screen.getByText("Counter: 5")).toBeTruthy();

    })

    test("FnCounter1", () => {

        render(<FnCounter />);
        fireEvent.click(screen.getByText("++"), {});
        expect(screen.getByText("Counter: 6")).toBeTruthy();
    })

    test("FnCounter2", () => {

        render(<FnCounter />);
        fireEvent.change(screen.getByPlaceholderText("Update Counter"), {target: {value: "50"}})
        fireEvent.click(screen.getByText("Update"), {});
        expect(screen.getByText("Counter: 50")).toBeTruthy();
    })

})