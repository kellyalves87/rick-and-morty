import React, { useState, useCallback } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navigation } from "./Navigation";

export const NavigationContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    // Previne rolagem quando o menu está aberto
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Verifica se o clique foi fora do menu e se não foi no botão do menu
      if (
        isOpen &&
        !target.closest("#navigation-menu") &&
        !target.closest("#hamburger-menu")
      ) {
        toggleMenu();
      }
    },
    [isOpen, toggleMenu]
  );

  // Fechar o menu ao pressionar ESC ou clicar fora
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu, handleClickOutside]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
      <Navigation isOpen={isOpen} onNavigate={toggleMenu} />
    </>
  );
};
