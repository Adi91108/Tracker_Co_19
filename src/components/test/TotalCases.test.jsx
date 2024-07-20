import { render, screen } from "@testing-library/react";
import TotalCases from "../tracker1/TotalCases";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import React from "react";

test('Total component', () => {
    ('image rotates on hover', async () =>{
        render(
            <TotalCases 
            titleStyle='titleClass'
            titleValue='Title'
            casesStyle='casesClass'
            casesValue='1000'
            imageName='image.png'
            />
        );

        const image = screen.getByRole('img');
        const tarjetaContent = screen.getAllByRole('div');

        await userEvent.hover(tarjetaContent);
        
        expect(image).toHaveStyle({
            animation: 'rotate 2s linear infinite'
        })
    })
})