const Usermenu = () => {
  return (
    <div className="bg-neutral-800 min-w-[12rem] absolute top-10 right-1 rounded-md">
      <ul className="flex flex-col items-start justify-center gap-2 text-sm">
        <button className="hover:bg-minor w-full p-2 text-left">Acount</button>
        <button className="hover:bg-minor w-full p-2 text-left">Profile</button>
        <button className="hover:bg-minor w-full p-2 text-left">
          Upgrade to Premium
        </button>
        <button className="hover:bg-minor w-full p-2 text-left">
          Settings
        </button>
        <button className="hover:bg-minor w-full p-2 text-left">Log out</button>
      </ul>
    </div>
  );
};

export default Usermenu;
