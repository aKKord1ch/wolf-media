const handleClickOutside = (setOpen: Function, e:React.MouseEvent<HTMLDivElement> ) => {
  const dialog = document.getElementById("popup");
  if (dialog && !dialog.contains(e.target as Node)) {
    setOpen();
  }
};

export default handleClickOutside;
