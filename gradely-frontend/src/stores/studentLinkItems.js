import { defineStore } from "pinia";
import { ref } from "vue";

export const usestudentLinkItemsStore = defineStore("studentLinkItems", () => {
  const linkItems = ref([
    {
      id: 1,
      linkName: "Dashboard",
      href: "/student/dashboard",
      icon: "fa-solid fa-gauge",
    },
    {
      id: 2,
      linkName: "Transcript",
      href: "/student/transcript",
      icon: "fa-solid fa-file-lines",
    },
    {
      id: 3,
      linkName: "Settings",
      href: "/student/settings",
      icon: "fa-solid fa-gear",
    },
  ]);

  return { linkItems };
});
