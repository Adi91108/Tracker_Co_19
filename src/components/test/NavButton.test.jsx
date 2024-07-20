import { render, screen } from "@testing-library/react";
import NavButton from "../home/homeTop/nav/NavButton";
import { test } from "vitest";

test('NavButton component', () => {
    ('renders a button with correct link and text', () => {
      // Mock data for testing
      const linkButton = {
        url: '/path/to/link',
        link: 'Button Text',
      };
  
      // Render the NavButton component
      render(<NavButton linkButton={linkButton} />);
  
      // Find the rendered button element
      const buttonElement = screen.getByRole('link', { name: /Button Text/i });
  
      // Assert that the button element exists
      expect(buttonElement).toBeInTheDocument();
  
    });
  
  });

