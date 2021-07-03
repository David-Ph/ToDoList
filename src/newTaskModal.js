const modalFunction = (function () {
  // * cache DOM
  const newTaskBtn = document.getElementById("add-task-btn");
  const newTaskModal = document.getElementById("new-task-modal");
  const editTaskModal = document.getElementById("edit-task-modal");

  // * bind events
  newTaskBtn.addEventListener("click", toggleNewTaskModal);
  newTaskModal.addEventListener("click", closeModal);
  editTaskModal.addEventListener("click", closeEditTaskModal);

  function toggleNewTaskModal() {
    if (newTaskModal.classList.contains("is-active")) {
      newTaskModal.classList.remove("is-active");
    } else {
      newTaskModal.classList.add("is-active");
    }
  }

  function toggleEditTaskModal() {
    if (editTaskModal.classList.contains("is-active")) {
      editTaskModal.classList.remove("is-active");
    } else {
      editTaskModal.classList.add("is-active");
    }
  }
  function closeModal(event) {
    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("modal-close")
    ) {
      if ((event.target.parentNode.id = "new-task-modal")) {
        toggleNewTaskModal();
      }
    }
  }
  function closeEditTaskModal(event) {
    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("modal-close")
    ) {
      if ((event.target.parentNode.id = "edit-task-modal")) {
        toggleEditTaskModal();
      }
    }
  }

  return {
    toggleNewTaskModal,
    toggleEditTaskModal,
  };
})();

const modalMethods = (() => {
  function closeAllModal() {
    const modals = Array.from(document.querySelectorAll(".modal"));
    modals.forEach((modal) => {
      if (modal.classList.contains("is-active")) {
        modal.classList.remove("is-active");
      }
    });
  }
  function clearAllModalInputs() {
    const modalInputs = Array.from(document.querySelectorAll(".modal input"));
    const modalTextAreas = Array.from(
      document.querySelectorAll(".modal textarea")
    );
    const modalSelects = Array.from(document.querySelectorAll(".modal select"));
    const allInputs = [...modalInputs, ...modalTextAreas, ...modalSelects];

    allInputs.forEach((input) => {
      input.value = "";
    });
  }

  return {
    closeAllModal,
    clearAllModalInputs,
  };
})();

module.exports = {
  modalFunction,
  modalMethods,
};
