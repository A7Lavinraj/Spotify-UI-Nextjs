const Usermenu = () => {
  return (
    <div
      className="
        bg-secondary
        p-2
        min-w-[12rem]
        absolute 
        top-10 
        right-1
        rounded-lg
      "
    >
      <ul
        className="
          flex
          flex-col
          items-start
          justify-center
          gap-2
          text-sm
        "
      >
        <li className="hover:bg-minor w-full p-1 rounded-lg">Acount</li>
        <li className="hover:bg-minor w-full p-1 rounded-lg">Profile</li>
        <li className="hover:bg-minor w-full p-1 rounded-lg">
          Upgrade to Premium
        </li>
        <li className="hover:bg-minor w-full p-1 rounded-lg">Settings</li>
        <li className="hover:bg-minor w-full p-1 rounded-lg">Log out</li>
      </ul>
    </div>
  );
};

export default Usermenu;
