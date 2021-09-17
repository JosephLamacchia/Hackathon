import { render, fireEvent, screen } from "@testing-library/react"
import { Game } from "../components/Game"


const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

test('**Dummy Test** Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    if (temp !== 32) throw new Error("This Test Failed")
})

it("Testing images on td click", () => {
    render(<Game />);
    const td = screen.getAllByTestId("testTd");
    expect(td).toBeInTheDocument();
})

describe("audio on click", () => {
    it("onClick", () => {
        const { queryByTitle } = render(<Game />);
        const td = queryByTitle("testTd");
        fireEvent.click(td)
    })
})

