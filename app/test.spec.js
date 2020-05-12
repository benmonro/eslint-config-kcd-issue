import React from 'react'
import { render, screen } from '@testing-library/react';

it("should render foo", () => {
    render(<div>foo</div>);
    expect(screen.getByText("foo").getAttribute("checked")).toBe(true); // should give a lint error
})
