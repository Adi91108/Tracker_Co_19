import { mockCountriesData, mockSortedData } from "./mockData";
import { test } from "vitest";
import { getTopActive } from "../tracker3/countryTable/CountriesTable";

test('Countries Filters',() => {
    ('getTopActive should sort by active and return first ten results', () => {
        const topActive = getTopActive(mockCountriesData);
        expect(topActive.lengh).ToBe(10);
        expect(topActive).ToBe(mockSortedData);
    }) 
}) 
