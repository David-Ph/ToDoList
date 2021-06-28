const modalFunction = function () {
  // * cache DOM
  const newTaskBtn = document.getElementById("add-task-btn");
  const newTaskModal = document.getElementById("new-task-modal");
  const newTaskModalBackground = document.getElementById(
    "new-task-modal-background"
  );
  const newTaskModalClose = document.getElementById("close-new-task-modal");
  const taskBlock = document.querySelector(".task-list");

  // * bind events
  newTaskBtn.addEventListener("click", toggleNewTaskModal);
  newTaskModal.addEventListener("click", closeModal);

  function toggleNewTaskModal() {
    if (newTaskModal.classList.contains("is-active")) {
      newTaskModal.classList.remove("is-active");
    } else {
      newTaskModal.classList.add("is-active");
    }
  }
  function closeModal(event) {
    if (
      event.target.classList.contains("modal-background") ||
      event.target.classList.contains("modal-close")
    ) {
      toggleNewTaskModal();
    }
  }
};

module.exports = {
  modalFunction,
};
