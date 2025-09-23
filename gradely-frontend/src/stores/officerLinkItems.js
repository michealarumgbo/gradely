import { defineStore } from "pinia";
import { ref } from "vue";

export const useofficerLinkItemsStore = defineStore("officerLinkItems", () => {
  const linkItems = ref([
    {
      id: 1,
      linkName: "Dashboard",
      href: "/exam-officer/dashboard",
      icon: "fa-solid fa-gauge",
    },
    {
      id: 2,
      linkName: "Unapproved Results",
      href: "/exam-officer/unapproved-results",
      icon: "fa-solid fa-file-circle-xmark",
    },
    {
      id: 3,
      linkName: "History",
      href: "/exam-officer/history",
      icon: "fa-solid fa-clock-rotate-left",
    },
    {
      id: 4,
      linkName: "Settings",
      href: "/exam-officer/settings",
      icon: "fa-solid fa-gear",
    },
  ]);

  return { linkItems };
});
