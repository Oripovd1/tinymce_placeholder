import { Editor, TinyMCE } from "tinymce";

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  const placeholderIcon = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-crosshair"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><path d="M9 12l6 0" /><path d="M12 9l0 6" /></svg>`;
  editor.ui.registry.addIcon("placeholder", placeholderIcon);
  editor.ui.registry.addButton("tinymce-placeholder", {
    tooltip: "Insert response",
    icon: "placeholder",
    onAction: () => {
      editor.insertContent("{{response}}");
    },
  });
};

export default (): void => {
  tinymce.PluginManager.add("tinymce-placeholder", setup);
};
