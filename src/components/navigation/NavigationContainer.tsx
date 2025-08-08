import React, { useState, useCallback } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navigation } from "./Navigation";

export const NavigationContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
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
