export const data = [
  [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ],
];

export function getCard(current, previous, id, actividad) {
  return `<div
  class="card ${dataStyles[actividad].bg} ${dataStyles[actividad].icon}"
>
  <div
    class="w-full h-auto bg-neutral_dark_blue rounded-2xl p-8 flex flex-col gap-y-2 hover:bg-[#34397b] cursor-pointer md:p-5"
  >
    <div class="flex w-full h-auto justify-between items-center">
      <p class="text-white text-md font-medium first-letter:uppercase">${dataStyles[actividad].name}</p>
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
          fill="#BBC0FF"
          fill-rule="evenodd"
        />
      </svg>
    </div>

    <div class="flex w-full h-auto justify-between md:flex-col">
      <p class="text-white text-3xl font-light">${current}hrs</p>
      <p class="text-white font-extralight text-xs">
        ${array[id]} - ${previous}hrs
      </p>
    </div>
  </div>
</div>`;
}

const array = ["Yesterday", "Last Week", "Last Month"];

const dataStyles = [
  {
    bg: "bg-primary_light_red_work",
    icon: "bg-[url('../assets/images/icon-work.svg')]",
    name: "work",
  },
  {
    bg: "bg-primary_soft_blue",
    icon: "bg-[url('../assets/images/icon-play.svg')]",
    name: "play",
  },
  {
    bg: "bg-primary_light_red_study",
    icon: "bg-[url('../assets/images/icon-study.svg')]",
    name: "study",
  },
  {
    bg: "bg-primary_lime_green",
    icon: "bg-[url('../assets/images/icon-exercise.svg')]",
    name: "exercise",
  },
  {
    bg: "bg-primary_violet",
    icon: "bg-[url('../assets/images/icon-social.svg')]",
    name: "social",
  },
  {
    bg: "bg-primary_soft_orange",
    icon: "bg-[url('../assets/images/icon-self-care.svg')]",
    name: "self care",
  },
];
