import { defineStore } from "pinia";
import { ref } from "vue";

export const uselecturerLinkItemsStore = defineStore(
  "lecturerLinkItems",
  () => {
    const linkItems = ref([
      {
        id: 1,
        linkName: "Dashboard",
        href: "/lecturer/dashboard",
        icon: "fa-solid fa-gauge",
      },
      {
        id: 2,
        linkName: "Upload Results",
        href: "/lecturer/upload-result",
        icon: "fa-solid fa-upload",
      },
      {
        id: 3,
        linkName: "Pending Results",
        href: "/lecturer/pending-results",
        icon: "fa-solid fa-hourglass-half",
      },
      {
        id: 4,
        linkName: "Settings",
        href: "/lecturer/settings",
        icon: "fa-solid fa-gear",
      },
    ]);

    return { linkItems };
  }
);
