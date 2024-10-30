import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

test("incrémente le compteur lorsque le bouton est cliqué", () => {
  // Rendre le composant
  render(<Counter />);

  // Sélectionner le bouton à tester
  const button = screen.getByRole("button", { name: /incrémenter/i });

  // Vérifier le contenu initial
  expect(button).toHaveTextContent("Incrémenter : 0");

  // Simuler un clic sur le bouton
  fireEvent.click(button);

  // Vérifier que le compteur a été incrémenté
  expect(button).toHaveTextContent("Incrémenter : 1");
});
