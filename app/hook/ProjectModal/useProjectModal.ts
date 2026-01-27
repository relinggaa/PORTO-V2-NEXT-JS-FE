import { useState } from "react";

export const useProjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    };

    const toggleModal = () => {
        if (isOpen) {
            closeModal();
        } else {
            openModal();
        }
    };

    return {
        isOpen,
        openModal,
        closeModal,
        toggleModal,
    };
};
