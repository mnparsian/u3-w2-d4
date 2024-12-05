import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe('Welcome component',()=>{
    it('render correctly',()=>{
        render(<Welcome/>)
        screen.debug();
        const heading = screen.getByText(/Benvenuto su EpiBooks!/i)
        expect(heading).toBeInTheDocument()
    })
})