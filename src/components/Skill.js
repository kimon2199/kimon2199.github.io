const Skill = ({ img, name }) => {
  return (
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="object-contain w-10 h-10" src={img} alt="icon" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-300 truncate dark:text-white text-sm sm:text-xl text-font-anonym">
          {name}
        </p>
        {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          email@windster.com
        </p> */}
      </div>
    </div>
  );
};

export default Skill;
