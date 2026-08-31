import React, { useCallback, useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navigation } from "./Navigation";

export const NavigationContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeMenu]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
      <Navigation isOpen={isOpen} onNavigate={closeMenu} />
    </>
  );
};
